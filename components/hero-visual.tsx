'use client'

import { useEffect, useRef } from 'react'

interface Node {
  /** home position, normalized 0..1 */
  hx: number
  hy: number
  x: number
  y: number
  vx: number
  vy: number
  r: number
  /** 0..3 = research, models, systems, products */
  stage: number
  accent: boolean
  phase: number
}

const STAGES = 4
const NODES_PER_STAGE = 7
const LINK_DIST = 0.16

function buildNodes(): Node[] {
  const nodes: Node[] = []
  for (let s = 0; s < STAGES; s++) {
    for (let i = 0; i < NODES_PER_STAGE; i++) {
      // stages flow top -> bottom, scattered horizontally
      const hy = (s + 0.5) / STAGES + (Math.random() - 0.5) * 0.14
      const hx = 0.15 + Math.random() * 0.7
      nodes.push({
        hx,
        hy,
        x: hx,
        y: hy,
        vx: 0,
        vy: 0,
        r: 1 + Math.random() * 1.6,
        stage: s,
        accent: Math.random() < 0.14,
        phase: Math.random() * Math.PI * 2,
      })
    }
  }
  return nodes
}

export function HeroVisual({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const nodes = buildNodes()
    const mouse = { x: -10, y: -10, active: false }
    let raf = 0
    let w = 0
    let h = 0
    let dpr = 1
    let t = 0

    const styles = getComputedStyle(canvas)
    const ink = styles.getPropertyValue('color') || 'rgb(30,29,26)'
    const accent = styles.getPropertyValue('--accent-ink') || 'rgb(35,80,220)'

    function resize() {
      if (!canvas) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
    }

    function frame() {
      if (!ctx) return
      t += 0.004
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, w, h)

      // integrate
      for (const n of nodes) {
        // gentle drift around home position
        const driftX = Math.sin(t * 1.7 + n.phase) * 0.012
        const driftY = Math.cos(t * 1.3 + n.phase * 1.4) * 0.01
        let tx = n.hx + driftX
        let ty = n.hy + driftY

        // subtle cursor influence: nodes lean toward the cursor
        if (mouse.active) {
          const dx = mouse.x - n.x
          const dy = mouse.y - n.y
          const d2 = dx * dx + dy * dy
          const influence = Math.max(0, 0.08 - d2) * 0.9
          tx += dx * influence
          ty += dy * influence
        }

        n.vx += (tx - n.x) * 0.02
        n.vy += (ty - n.y) * 0.02
        n.vx *= 0.9
        n.vy *= 0.9
        n.x += n.vx
        n.y += n.vy
      }

      // links: same stage + adjacent stage
      ctx.lineWidth = 0.6
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          if (Math.abs(a.stage - b.stage) > 1) continue
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > LINK_DIST) continue
          const alpha = (1 - dist / LINK_DIST) * (a.stage === b.stage ? 0.16 : 0.3)
          ctx.strokeStyle = ink
          ctx.globalAlpha = alpha
          ctx.beginPath()
          ctx.moveTo(a.x * w, a.y * h)
          ctx.lineTo(b.x * w, b.y * h)
          ctx.stroke()
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.globalAlpha = n.accent ? 0.9 : 0.5
        ctx.fillStyle = n.accent ? accent : ink
        ctx.beginPath()
        ctx.arc(n.x * w, n.y * h, n.accent ? n.r + 0.8 : n.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      if (!reduceMotion) raf = requestAnimationFrame(frame)
    }

    function onPointerMove(e: PointerEvent) {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) / rect.width
      mouse.y = (e.clientY - rect.top) / rect.height
      mouse.active = mouse.x >= -0.2 && mouse.x <= 1.2 && mouse.y >= -0.2 && mouse.y <= 1.2
    }

    function onPointerLeave() {
      mouse.active = false
    }

    resize()
    window.addEventListener('resize', resize)
    // listen on window so the visual responds even when text overlays it
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerleave', onPointerLeave)
    frame()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ ['--accent-ink' as string]: 'oklch(0.46 0.19 262)' }}
      aria-hidden="true"
    />
  )
}
