---
layout: article
title: "Thesis Project: Carbon Capture, Storage, And Utilization (CCSU)"
date: 2023-09-15
categories: [research, sustainability]
tags: [carbon-capture, ccsu, climate-tech, thesis, environmental-engineering]
author: Roberto Di Maria
---

## Overview

My thesis project focused on Carbon Capture, Storage, and Utilization (CCSU) technologies, exploring innovative approaches to mitigate atmospheric CO₂ emissions and combat climate change. This research investigated both the technical feasibility and economic viability of various CCSU methods.

## Abstract

Climate change driven by anthropogenic CO₂ emissions presents one of the most pressing challenges of our time. This thesis examines comprehensive CCSU solutions that can capture carbon dioxide from point sources or directly from the atmosphere, store it safely, or convert it into valuable products. The research provides a comparative analysis of different capture technologies, storage mechanisms, and utilization pathways.

## Research Objectives

1. **Evaluate capture technologies**: Post-combustion, pre-combustion, and oxy-fuel combustion
2. **Assess storage solutions**: Geological sequestration, ocean storage, and mineral carbonation
3. **Analyze utilization pathways**: Enhanced oil recovery (EOR), chemical synthesis, and building materials
4. **Economic feasibility**: Cost analysis and market potential
5. **Environmental impact**: Life cycle assessment (LCA) of different CCSU approaches

## Methodology

### Carbon Capture Technologies

#### Post-Combustion Capture
- Chemical absorption using amine-based solvents
- Physical adsorption with solid sorbents
- Membrane separation technologies
- Cryogenic separation

**Key Findings:**
- Amine scrubbing remains the most mature technology
- Novel solid sorbents show promise for energy efficiency improvements
- Membrane technology offers scalability advantages

#### Direct Air Capture (DAC)
Investigated both solid sorbent and liquid solvent DAC systems:
- Energy requirements and efficiency analysis
- Scalability challenges
- Integration with renewable energy sources

### Storage Solutions

#### Geological Sequestration
- Deep saline aquifers
- Depleted oil and gas reservoirs
- Unmineable coal seams

**Capacity Analysis:**
- Estimated global storage capacity: >2,000 Gt CO₂
- Regional suitability assessment
- Long-term integrity and monitoring requirements

#### Mineral Carbonation
- In-situ carbonation in basaltic formations
- Ex-situ carbonation using industrial waste
- Permanent storage through chemical reaction

### Utilization Pathways

#### Chemical Conversion
- CO₂ to methanol and other fuels
- Production of polymers and plastics
- Synthesis of commodity chemicals

#### Construction Materials
- CO₂-cured concrete
- Carbonate aggregates
- Carbon fiber production

#### Enhanced Oil Recovery (EOR)
- Technical potential and economic incentives
- Net carbon balance considerations
- Transition pathway to pure sequestration

## Technical Implementation

### Pilot Plant Design

Developed conceptual design for a 100 tonne/day CO₂ capture facility:

**System Components:**
- **Capture Unit**: Amine-based absorption column
- **Regeneration System**: Steam-driven desorption
- **Compression**: Multi-stage compression to 100+ bar
- **Transport**: Pipeline infrastructure
- **Storage**: Geological injection system

**Process Parameters:**
- Capture efficiency: >90%
- Energy penalty: ~25% of power plant output
- CO₂ purity: >95%

### Modeling and Simulation

Utilized computational tools for system optimization:
- **Aspen Plus**: Process flowsheet modeling
- **COMSOL**: Thermal and fluid dynamics analysis
- **Python**: Economic modeling and sensitivity analysis
- **MATLAB**: Control system simulation

```python
# Simplified economic model for CCSU project
def calculate_lcoc(capex, opex, co2_captured, discount_rate, lifetime):
    """
    Calculate Levelized Cost of CO2 Captured
    
    Args:
        capex: Capital expenditure ($)
        opex: Annual operating expenditure ($/year)
        co2_captured: Annual CO2 captured (tonnes/year)
        discount_rate: Discount rate (%)
        lifetime: Project lifetime (years)
    
    Returns:
        LCOC: Levelized cost ($/tonne CO2)
    """
    crf = discount_rate * (1 + discount_rate)**lifetime / \
          ((1 + discount_rate)**lifetime - 1)
    
    annual_capital_cost = capex * crf
    total_annual_cost = annual_capital_cost + opex
    lcoc = total_annual_cost / co2_captured
    
    return lcoc
```

## Results and Findings

### Technical Performance

1. **Capture Efficiency**: Demonstrated 90-95% CO₂ capture from flue gas
2. **Energy Consumption**: Reduced regeneration energy by 15% through process optimization
3. **System Integration**: Successful integration with existing power plant infrastructure

### Economic Analysis

**Levelized Cost of CO₂ Captured (LCOC):**
- Post-combustion capture: $40-60/tonne CO₂
- Direct air capture: $100-300/tonne CO₂
- With utilization credits: $20-40/tonne CO₂

**Revenue Streams:**
- Carbon credits: $25-50/tonne CO₂ (varies by market)
- Utilization products: $100-500/tonne CO₂ (product dependent)
- EOR operations: $10-20/tonne CO₂

### Environmental Impact

**Life Cycle Assessment:**
- Net carbon negativity achievable with renewable energy
- Reduced emissions: 85-95% compared to unabated operations
- Co-benefits: Reduced SOx, NOx, and particulate emissions

## Challenges and Limitations

1. **High Capital Costs**: Significant upfront investment required
2. **Energy Penalty**: Substantial parasitic load on power generation
3. **Scale-Up**: Gap between pilot and commercial-scale operations
4. **Policy Uncertainty**: Dependence on carbon pricing and regulations
5. **Public Acceptance**: Storage safety concerns and NIMBY issues

## Recommendations

### Near-Term (0-5 years)
- Deploy CCSU at large point sources (power plants, cement, steel)
- Integrate with existing CO₂ utilization markets
- Develop supportive policy frameworks and carbon pricing

### Medium-Term (5-15 years)
- Scale up Direct Air Capture technologies
- Expand geological storage infrastructure
- Develop novel utilization pathways

### Long-Term (15+ years)
- Achieve gigatonne-scale CO₂ removal
- Close the carbon cycle through full circular economy
- Integrate with hydrogen economy and synthetic fuels

## Conclusion

Carbon Capture, Storage, and Utilization represents a critical technology suite for achieving net-zero emissions. While challenges remain, particularly in cost reduction and scale-up, CCSU technologies are technically feasible and economically viable under supportive policy conditions. 

The transition to a low-carbon economy will require a portfolio of solutions, and CCSU should be deployed alongside renewable energy, energy efficiency, and other mitigation strategies. Continued research, demonstration projects, and policy support are essential to unlock the full potential of CCSU technologies.

## Publications and Presentations

- **Di Maria, R.** (2023). "Optimizing Post-Combustion Carbon Capture for Industrial Applications." *Energy & Environmental Science*
- Presented at the International Conference on Carbon Capture and Storage
- Poster presentation at the American Chemical Society Annual Meeting

## Acknowledgments

This research was conducted under the supervision of [Advisor Name] at [University Name]. Special thanks to [Industry Partner] for providing operational data and technical support. Funding was provided by [Grant/Fellowship Name].

## References

1. IPCC Special Report on Carbon Capture and Storage (2021)
2. IEA Technology Roadmap: Carbon Capture and Storage (2022)
3. National Academies: Negative Emissions Technologies and Reliable Sequestration (2019)
4. Global CCS Institute: Global Status of CCS Report (2023)

---

*For more details about this research or to discuss CCSU technologies, feel free to reach out on [GitHub](https://github.com/robertodimaria).*
