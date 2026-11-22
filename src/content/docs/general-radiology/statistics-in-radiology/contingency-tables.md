---
title: Contigency Tables for Diagnostic Testing
description: Sensitivity, specificity and others
---


- The basic contingency table (= decision matrix) is

    |  | Disorder present | Disorder absent |
    | --- | --- | --- |
    | Test positive | True positive | False positive |
    | Test negative | False positive | True negative |

- It can be summarised as

    |  | D+ | D- |
    |--- | --- | --- |
    | T+ | TP | FP |
    | T- | FN | TN |

## Basic characteristics of a diagnostic test

### Sensitivity

- Demonstrates the ability of a test do detect a diagnosis if it exists

$$
\text{Sensitivity, } S_n = \frac{\text{TP}}{\text{D}+} = \frac{\text{TP}}{\text{TP} + \text{FN}}
$$

### Specificity

- Demonstrates the ability of a test do reject a diagnosis if it does not exist

$$
\text{Specificity, } S_p = \frac{\text{TN}}{\text{D}-} = \frac{\text{TN}}{\text{TN} + \text{FP}}
$$

### Positive predictive value

- Demonstrates the probability of a positive test being actually disease positive

$$
\text{PPV} = \frac{\text{TP}}{\text{T}+} = \frac{\text{TP}}{\text{TP} + \text{FP}}
$$

### Negative predictive value

- Demonstrates the probability of a negative test being actually disease negative

$$
\text{NPV} = \frac{\text{TN}}{\text{T}-} = \frac{\text{TN}}{\text{TN} + \text{FN}}
$$

### Negative error rates

- False negative error rate

    $$
    \text{FNER} = 1 - \text{Sensitivity}
    $$

- False positive error rate

    $$
    \text{FPER} = 1 - \text{Specificity}
    $$

## Likelihood ratios

- PPV and NPV are influenced by prevalence of the disease.
    - From the contingency table, prevalence is
        $$
        p = \frac{\text{D}+}{\text{Total population}} = \frac{\text{TP} + \text{FN}}{\text{TP} + \text{FN} + \text{FP} + \text{TN}}
        $$

- Hence, PPV and NPV dependent on prevalence as
    $$
    \text{PPV} = \frac{p \cdot S_n}{p \cdot S_n + (1 - p)(1 - S_p)}
    $$
    $$
    \text{NPV} = \frac{(1 - p) \cdot S_p}{(1 - p) \cdot S_p + p \cdot (1 - S_n)}
    $$

- With an increase in prevalence, PPV increases and NPV decreases

### Likelihood ratios

- Likelihood ratios are prevalence-independent measures of a test's probability of being right or wrong

- Positive likelihood ratio
    $$
    \text{LR}+ = \frac{S_n}{1 - S_p}
    $$

- Negative likelihood ratio
    $$
    \text{LR}- = \frac{1 - S_n}{S_p}
    $$

### Receiver operating characteristic

- A graph of the true positive rate ($S_n$) against a false positive rate ($1 - S_p$) of a test, at different cut-offs declaring the test positive

- The area under receiver operating characteristic (AUROC) curve determines the discriminating ability of the test
    - AUROC of 0.5 = straight line = no discriminating value
    - Higher AUROC = stronger discriminating value

- There are many ways to determine an optimal cut-off of the diagnostic test, that optimises sensitivity and specificity
    - Youden's index ($J$) at all cutoff points can be calculated, and the cut-off where it is highest may be considered optimal
        $$
        J = S_n + S_p - 1
        $$
    - Liu's index ($L$) may similarly be calculated, for more balanced cut-offs in lopsided data
        $$
        L = S_p \cdot S_n
        $$

## Further reading

- 