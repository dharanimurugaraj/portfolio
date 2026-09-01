import type { CaseStudyContent } from '../types'

export const medvisionCaseStudy: CaseStudyContent = {
  overview:
    'A research prototype exploring a graph-based, two-stage, uncertainty-aware explainable diagnostic system for chest radiographs.',
  sections: [
    {
      id: 'problem',
      eyebrow: '01 — RESEARCH PROBLEM',
      title: 'Making Medical Vision Models More Auditable',
      content: [
        'MedVision explores a chest-X-ray pipeline combining transformer classification, graph reasoning, anomaly screening, explainability, and uncertainty estimation.',
      ],
      metrics: [
        { label: 'IMAGES', value: '5,840' },
        { label: 'HELD-OUT TEST', value: '624' },
        { label: 'BEST AUC', value: '0.9779' },
        { label: 'BEST RECALL', value: '99.74%' },
      ],
    },
    {
      id: 'pipeline',
      eyebrow: '02 — FOUR-STAGE PIPELINE',
      title: 'System Architecture',
      content: [
        'Stage 1 acts as an anomaly triage gate using a convolutional autoencoder.',
        'Stage 2 applies an equal-weighted ensemble of ViT, Swin, and ViT-GCN classifiers.',
        'Stages 3 and 4 extract spatial heatmaps and estimate predictive uncertainty.',
      ],
      codeBlock: {
        language: 'text',
        caption: 'MEDVISION PIPELINE',
        code: `INPUT
Chest X-Ray (224×224)
        ↓
01 ANOMALY GATE
Convolutional Autoencoder
        ↓
02 CLASSIFICATION
ViT + Swin + ViT-GCN
(+ Equal-Weighted Ensemble)
        ↓
03 EXPLAINABILITY
Attention Rollout + Grad-CAM
        ↓
04 UNCERTAINTY
MC Dropout + Trust Score`,
      },
    },
    {
      id: 'anomaly-prescreening',
      eyebrow: '03 — ANOMALY PRE-SCREENING',
      title: 'Reject the Unknown Before Classifying It',
      content: [
        'A 2.27M parameter convolutional autoencoder is trained exclusively on 1,073 NORMAL training radiographs.',
        'It attempts to reconstruct input images. The MSE reconstruction error serves as a rough anomaly signal (default threshold 0.02).',
        'This functions as an anomaly triage gate, not a robust pathological detector.',
      ],
      codeBlock: {
        language: 'text',
        caption: 'AUTOENCODER FLOW',
        code: `NORMAL IMAGE → AUTOENCODER → RECONSTRUCTION → RECONSTRUCTION ERROR → ANOMALY FLAG`,
      },
    },
    {
      id: 'transformer-benchmark',
      eyebrow: '04 — TRANSFORMER BENCHMARK',
      title: 'Three Views of the Same Radiograph',
      content: [
        'The pipeline evaluates ViT, Swin, and ViT-GCN as three distinct modeling approaches.',
        'Swin achieves the highest individual AUC and recall, while higher-sensitivity models invariably produce more false positives on NORMAL images.',
      ],
      metrics: [
        { label: 'ViT Accuracy', value: '86.06%' },
        { label: 'ViT Recall', value: '93.59%' },
        { label: 'ViT AUC', value: '0.9227' },
        { label: 'Swin Accuracy', value: '82.69%' },
        { label: 'Swin Recall', value: '99.74%' },
        { label: 'Swin AUC', value: '0.9779' },
        { label: 'ViT-GCN Accuracy', value: '83.33%' },
        { label: 'ViT-GCN Recall', value: '99.49%' },
        { label: 'ViT-GCN AUC', value: '0.9672' },
      ],
    },
    {
      id: 'vit-gcn',
      eyebrow: '05 — ViT-GCN GRAPH REASONING',
      title: 'Turning Transformer Attention Into a Graph',
      content: [
        'Rather than relying on the ViT CLS token alone, the classifier performs explicit message passing across patch representations using attention-derived graph edges.',
      ],
      codeBlock: {
        language: 'text',
        caption: 'ViT-GCN ARCHITECTURE',
        code: `224×224 IMAGE
      ↓
14×14 PATCH GRID
      ↓
196 PATCH TOKENS
      ↓
ViT-Base Backbone
      ↓
┌─────────────────┐       [ ViT SELF-ATTENTION ]
│ PATCH FEATURES  │                ↓
│ 196 × 768       │        [ HEAD AVERAGING ]
└─────────────────┘                ↓
      ↓                 [ 196 × 196 ADJACENCY ]
      └─────────┐       ┌──────────┘
             [ MERGE ]
                 ↓
            GCN LAYER 1
             196 × 256
                 ↓
            GCN LAYER 2
             196 × 128
                 ↓
         GLOBAL MEAN POOL
                 ↓
                MLP
                 ↓
        NORMAL / PNEUMONIA`,
      },
      metrics: [
        { label: 'Trainable GCN Params', value: '246.5K' },
        { label: 'ViT AUC', value: '0.9227' },
        { label: 'ViT-GCN AUC', value: '0.9672' },
        { label: 'ViT FN', value: '25' },
        { label: 'ViT-GCN FN', value: '2' },
      ],
    },
    {
      id: 'explainability-uncertainty',
      eyebrow: '06 — EXPLAINABILITY + UNCERTAINTY',
      title: 'Visualizing Reliability',
      content: [
        'The system extracts spatial heatmaps using Attention Rollout for ViT and Grad-CAM for Swin.',
        'Uncertainty is estimated via MC Dropout (20 stochastic forward passes), computing predictive entropy and a composite Trust Score [Confidence × (1 − Uncertainty)].',
        'These visualizations expose model behavior; they do not establish diagnostic correctness or function as calibrated clinical probabilities.',
      ],
      codeBlock: {
        language: 'text',
        caption: 'ATTENTION ROLLOUT (ViT) & GRAD-CAM (Swin)',
        code: `[ ATTENTION ROLLOUT ]         [ GRAD-CAM ]
12 transformer blocks         feature activations
          ↓                           +
attention propagation         class gradients
          ↓                           ↓
CLS → patch attention         weighted activation map
          ↓                           ↓
spatial heatmap               spatial heatmap`,
      },
    },
    {
      id: 'results',
      eyebrow: '07 — RESULTS',
      title: 'Model Performance & Trade-Offs',
      content: [
        'The results show a clear sensitivity–specificity trade-off: the strongest recall models also generate more false positives on NORMAL radiographs.',
        'These results reflect the held-out Kaggle test split (624 images: 234 Normal, 390 Pneumonia).',
      ],
      codeBlock: {
        language: 'text',
        caption: 'TEST SET RESULTS',
        code: `Model         | Accuracy | Precision | Recall | F1     | AUC
--------------------------------------------------------------
ViT-Base/16   | 86.06%   | 85.48%    | 93.59% | 89.35% | 0.9227
Swin-Base     | 82.69%   | 78.43%    | 99.74% | 87.81% | 0.9779
ViT-GCN       | 83.33%   | 79.18%    | 99.49% | 88.18% | 0.9672
Ensemble      | 84.94%   | 80.71%    | 99.74% | 89.22% | 0.9431`,
      },
    },
    {
      id: 'limitations',
      eyebrow: '08 — LIMITATIONS & TAKEAWAYS',
      title: 'Research Takeaways',
      content: [
        'Limitations: Evaluation is restricted to one held-out Kaggle test split. There is no external validation or radiologist comparison. Input is standardized to 224×224. The Trust Score is an engineered heuristic, not a formally calibrated clinical probability.',
        '1. Use relational reasoning when the representation already contains spatial context.',
        '2. High sensitivity and high precision are not interchangeable objectives.',
        '3. Explainability and uncertainty are useful audit mechanisms, not substitutes for clinical validation.',
        'MedVision remains a research prototype exploring how representation, reasoning, explanation, and uncertainty can be combined in a medical imaging pipeline.',
      ],
    },
  ],
}
