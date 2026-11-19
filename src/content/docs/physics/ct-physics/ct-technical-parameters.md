---
title: Technical Parameters in CT Imaging
description: Acquisition, reconstruction and viewing CT images
sidebar:
    order: 2
---

## Processing and image quality

### Spatial resolution

Improves with:
- ↓ Voxel size:
    - Voxel size = FOV / matrix size
    - Larger matrix and smaller field of view improves in-plane resolution
- Use of sharp image reconstruction kernels:
    - Lung and bone kernels have higher spatial resolution than soft tissue kernels
- Acquisition thickness in z-direction:
    - Depends on minimum detector thickness
- Reconstruction thickness;
    - Raw data can be used to reconstruct images of desired thickness in MDCT scanners
    - Thin recons: ↑ spatial resolution, ↑ noise
    - Thick recons: ↓ spatial resolution, ↓ noise
- Flying focal spot: 
    - varying the focal spot on z-axis during acquisition
    - ↑ number of projections → increases spatial resolution

### Contrast resolution
Primarily depends on image noise and kVp. Improves with:
- ↓ kVp: 
    - higher contrast resolution due to ↑ photoelectric effect
    - however, ↑ noise as ↓ SNR due to lower number of photons reaching detector
- ↑ voxel size
    - Voxel size = FOV / matrix size
    - Smaller matrix and larger field of view
- ↑ mAs:
    - Greater photons reaching detector → ↑ SNR
    - However leads to ↑ dose
- ↑ acquisition slice thickness:
    - ↓ noise
- ↑ reconstruction slice thickness:
    - ↓ noise
- Use of soft tissue reconstruction kernels:
    - Soft tissue kernels have lower noise than bone and lung kernels

### Temporal resolution
- Gantry rotation time:
    - Gantry must rotate by 360° in single source CT, while by 180° in dual source CT
    - Current gantry rotation times are of the order of 0.250 s with cardiac CTs acquired in 0.066 s.
- Pitch:
    - Pitch = table movement / acquisition slice thickness
    - ↑ pitch → faster scan at lower dose however ↓ SNR due to ↓ number of projections


## Post-processing

### Multiplanar reformatting

- Reformatting of a volumetric dataset into axial, sagittal and coronal planes
- Orthogonal MPR requires isovoxel dataset
- Oblique and curved reformatting can be created along anatomic structures (e.g. vessels, ribs)
    - may not correspond to exact location of values on dataset
    - require interpolation from nearest pixels

### Maximum and minimum intensity projections

- The maximum attenuation values along the dataset slab are selected in MIP, while the minimum attenuation values are selected in minIP
- Slab can be full thickness or partial thickness (thin MIP and thin minIP).
- MIP: useful in angiography for high contrast vessels
- minIP: useful for bronchial tree visualisation

### Volume reconstruction techniques (VRT)

- Provides a 3-dimensional view of the image dataset
- Voxels are assigned a colour and opacity based on attenuation:
    - For example voxels beyond 300 HU may be given a white colour and an opacity of 100%
- Maximum intensity projection images are then formed with these values, giving specific colour and opacity to different types of tissue attenuations
- Displays only a fraction of the information in the dataset

### Bone and table removal

### Shaded surface displays (SSDs)

- A step beyond VRT
- Simulation of reflections from various voxels are made, to give a photorealistic image of the imaged anatomy

### Virtual bronchoscopy and colonoscopy (surface rendering)

- Principle:
    - voxels located on the edge of a structure are identified, usually by intensity thresholding
        - e.g., bronchus or colon wall, with intraluminal air (-1000 HU) as control
        - Aggressive thresholding → actual protruding structures can be lost from view
        - Lax thresholding → nontissue materials (eg, fluids) can be rendered as if they were tissue, which can obscure protruding structures
    - enhancement of edge surface is done with morphologic filtering or connectivity
    - Only edge surface is displayed in a 3-dimensional format
        - Remaining voxels invisible
        - Newer contrast materials can identify and remove remaining stool and fluids
- Advantages:
    - Useful for examining tubular structures, such as the inside surfaces of airways
    - Luminal structures that cannot be visualised beyond point of obstruction on bronchoscopy / colonoscopy, can be seen on virtual bronchoscopy / colonoscopy
- Disadvantage:
    - Actual (true) tissue colour can never be replicated
    - Poor patient preparation (e.g., colon not completely air-filled during the image acquisition period) can create artefacts
    - collapsed regions or filled areas → automated software often fails


## Further reading

1. 

