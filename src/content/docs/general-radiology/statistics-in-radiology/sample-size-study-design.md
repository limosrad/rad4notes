---
title: Study Designs and Sample Size
description: Types of studies and sample size calculation
---

![Study designs](/rad4notes/images/flowcharts/study-designs.svg)

| | Case control study | Cohort study |
| --- | --- | --- |
| Direction | Generally retrospective | Generally prospective |
| Fixed point | Outcome | Exposure |
| Follow to | Exposure | Outcome |
| Technical difficulty | Lower | Higher |
| Use in rare diseases | Easier | Difficult |
| Attrition | Minimal | Higher |
| Study cost | Lower | Higher |
| Recall and selection bias | Higher | Lower |
| Natural history | Difficult to establish | Can establish |
| Temporality of association | Difficult to establish | Can establish |
| Incidence calculation | -- | ++ |
| Measure of association | Odds ratio | Relative risk, attributable risk |

## Cohort study associations

### Absolute risk

- Incidence of disease among exposed ($I_E$)

### Relative risk = risk ratio

- How higher is risk in exposed ($I_E$) compared to non-exposed ($I_N$)
    $$
    \text{Relative risk, RR} = \frac{I_E}{I_N}
    $$

### Attributable risk = risk difference

- Extent to which the exposure is responsible for disease in exposed group
    $$
    \text{Attributable risk, AR} = \frac{I_E - I_N}{I_E}
    $$

- Hence
    $$
    \text{AR} = 1 - \frac{1}{\text{RR}}
    $$

### Population attributable risk

- Extent to which incidence of disease will decrease if exposure is removed from the population

    $$
    \text{PAR} = \frac{I_{\text{total}} - I_N}{I_{\text{total}}}
    $$

### Numbers needed to harm

- How many people must be exposed to exposure for one additional person to experience that outcome

    $$
    \text{NNH} = \frac{1}{I_E - I_N}
    $$

### Absolute risk reduction

- If an exposure (e.g., a drug) reduces the incidence of an outcome, the absolute risk reduction is

    $$
    \text{ARR} = I_N - I_E
    $$

### Numbers needed to treat

- The number of people who, if given an exposure (e.g., a drug), would benefit one additional person

    $$
    \text{NNT} = \frac{1}{\text{ARR}} = \frac{1}{I_N - I_E}
    $$

## Further reading

1. 
