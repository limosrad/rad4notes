---
title: Dual Energy CT
description: Types and applications of dual energy CT
sidebar:
    order: 6
---

- Dual energy CT (DECT)
    - employs simultaneous imaging at two kVs
    - characterises tissue elements (including iodine) based on the difference in their attenuation

## Principle

### Operating principle

- The degree of photoelectric effect occurring due to x-ray radiation, for an atom, is dependent on 
    $$
    \frac{Z^3}{E^3}
    $$
- Thus, if imaging is done at two different kVps, the difference in attenuation in a single voxel may be used to predict the Z in that voxel

### Techniques
Multiple vendor-specific techniques for implementing dual energy CT:

- Dual source dual energy CT (Siemens SOMATOM Drive)
    - Two x-ray tube-detector combinations 90° apart are used to simultaneously scan the same FOV
- Split filter dual energy CT (Siemens SOMATOM Definition Edge): 
    - Movable split filter is positioned in front a 120 kV x-ray beam. 
    - The filter, composed of gold (Au) and tin (Sn), splits the 120 kV x-ray beam into a high and low energy x-ray spectrum before it reaches the patient
- Rapid kV switching (GE Gemstone Imaging): 
    - a single x-ray tube generates low- and high-energy x-ray beams, which are detected by special detectors with minimal afterglow (cerium activated garnet)
- Dual (sandwich) detectors (Philips iQon Spectral CT) 
    - the same detector has two components
        - inner detector absorbs low energy part of the spectrum
        - outer layer absorbs high-energy part
    - This allows multi-energy imaging at all times
    - No increase in dose
    - Images at multiple different kVps can be generated after scan acquisition too, from raw data
    - Closest to photon counting CT in terms of versatility

## Applications of DECT

## Further reading

1. 

