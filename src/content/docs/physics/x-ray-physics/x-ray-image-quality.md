---
title: Factors Affecting X-ray Image Quality
description: Introduction to x-ray tube, x-ray production and factors affecting x-ray beam quality
---

Balance of:
- Spatial resolution
- Contrast resolution
- Dose to patient

## Spatial resolution

- Ability to determine two points as separate
- Measured by spatial frequency in line pairs per mm (lp/mm)

:::trivia
Factors affecting spatial resolution
| Increases | Decreases |
| --- | --- |
|   | Geometric unsharpness |

:::

### Modulation transfer function

- Higher spatial frequency &rarr; more difficult for detectors to retain resolution
- Modulation transfer function &rarr; measure of how much original contrast the detector can transmit
    - MTF of 50% = detector can transmit only half of the original contrast
- Curve for MTF vs spatial frequency determines the detector resolution
    - Limiting resolution &rarr; when MTF = 10%
        - The point at which the detector can transmit only 10% of the original image contrast

### Geometric unsharpness

- Blurring of image on detector due to formation of a penumbra
    $$
    \text{Geometric unsharpness} = \text{Focal spot size} \cdot \frac{\text{OID}}{\text{SOD}}
    $$
- Small distance between object and detector, and large distance between source and object, decreases unsharpness

## Contrast resolution

- Ability to discern tissues with two different attenuations as separate
- Contrast-to-noise ratio (CNR) is a simple measure
    - Needs homogenous background signal
    - Size-independent; used to optimise imaging parameters in test conditions
- Signal-to-noise ratio (SNR) is a good measure

:::trivia
Factors affecting contrast resolution
| Increases | Decreases |
| --- | --- |
| Low kVp | Noise |
| High mAs | |
| Iodinated contrast |  |
:::

### Factors affecting image noise

- Noise in a pixel $\propto \sqrt{N}$, where $N$ is the number of photons reaching the detector
- Signal to noise ratio is $\frac{signal}{noise}$
    $$
    \text{SNR} \propto \frac{N}{\sqrt{N}} = \sqrt{N}
    $$
- Lowering kVp decreases the number of photons reaching the detector &rarr; increases noise
    - Overall effect of lowering kVp, however, is to increase contrast resolution by increasing the photoelectric effect
- Lowering mAs decreases the number of photons reaching the detector &rarr; increases noise

:::trivia
Methods to decrease image scatter (and increase SNR)
- Use of anti-scatter grids
- Air-gap between object and detector
- Tight collimation
- Decrease part thickness (e.g., by compression)
:::

### Detective quantum efficiency

- Determines the contrast performance of a detector at different object sizes
- Calculated by the ratio of output SNR to input SNR
    $$
    \text{DQE} = \frac{\text{SNR(output)}^2}{\text{SNR(input)}^2}
    $$
- Can be related to MTF as
    $$
    \text{DQE} \propto \frac{\text{MTF}^2}{N}
    $$
- Hence can be used to describe the dose efficiency of the detector

## Dose

## Further reading

1. 