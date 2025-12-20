// Data file containing structured content for all engineering projects.
// This data is used by main.js to dynamically generate the project cards on the homepage
// and to populate the content of the project-detail.html template.
const projectsData = [

  // --- PROJECT 1: 3D Printed RF Antenna & Material Selection ---
  {
    id: "rf-antenna", 
    title: "3D Printed RF Antenna & Material Selection",
    thumbnail: "assets/images/thumbnail_rfantenna.jpg", 
    shortDescription: "Investigation into the feasibility of 3D-printed Radio-Frequency (RF) antennas.",
    
    fullContent: `
      <h2>1. Summary</h2>
      <p>In this project, the feasibility of fabricating a radio-frequency (RF) antenna via 3D printing was investigated, with particular emphasis on a metasurface-based approach. Interest in employing additive manufacturing for RF applications has grown substantially in recent years, owing to its potential for producing complex, lightweight components and reducing production costs. Nevertheless, only a handful of 3D-printable materials have been developed for microwave-frequency use. Beam steering—i.e., controlling the direction of the radiated beam—often proves both complex and expensive when achieved through purely electronic means, while mechanical alternatives tend to be bulky and heavy. In this context, the use of 3D printing to realize Risley prisms offers an innovative, lightweight, and potentially low-cost solution for dynamically directing the beam. This technique exploits local control over the shape, size, and arrangement of sub-wavelength dielectric structures to create a gradient refractive index and thereby modulate the phase of the wavefront. Originally developed in the optical domain, it has since been successfully adapted to microwave frequencies, greatly expanding its range of applications.</p>

      <h2>2. Objectives</h2>
      <p>The main objective of this study was to identify a material exhibiting a high dielectric constant, low loss tangent, high thermal conductivity, and compatibility with the FDM process, using Ansys Granta EduPack. This selection was critical to enable the production of a lightweight and low-cost 3D-printed antenna structure while maintaining necessary RF performance.</p>

      <h2>3. Problem statement</h2>
      <p>Beam steering—i.e., controlling the direction of the radiated beam—often proves both complex and expensive when achieved through purely electronic means, while mechanical alternatives tend to be bulky and heavy. This complexity demands an innovative solution that maintains high performance while significantly reducing weight and cost. Additionally, the limited availability of 3D-printable materials suitable for high-frequency microwave use presents a significant engineering challenge.</p>

      <h2>4. Proposed solution</h2>
      <p>The proposed solution involved utilizing 3D printing to realize Risley prisms. This technique offers an innovative, lightweight, and potentially low-cost solution for dynamically directing the beam by exploiting local control over sub-wavelength dielectric structures to modulate the wavefront phase. The material selection methodology employed Ansys Granta EduPack 2025 in a multi-stage process:</p>
      <ul>
          <li>Stage 1 - Initial Filtering: Constraints included thermal stability (T<sub>g</sub> ≥ 100°C), adequate insulating properties (&epsilon;<sub>r</sub> ≥ 2), minimal dissipation factor (tan &delta; ≤ 0.005), and FDM compatibility.</li>
          <li>Stage 2 - Adding New Records: Key materials (e.g., Zetamix Epsilon, ABS-BaTiO<sub>3</sub>, and COC-TiO<sub>2</sub>) were manually added to the database.</li>
          <li>Stage 3 - Ashby Chart: An &epsilon;<sub>r</sub> vs. tan &delta; chart was used to evaluate the balance between electric field energy storage and dielectric loss.</li>
          <li>Stage 4 - Ka-band Selection: A refinement box was introduced, based on typical Ka-band values: 2.5 ≤ &epsilon;<sub>r</sub> ≤ 3.2 and tan &delta; ≤ 0.003.</li>
      </ul>

      <h2>5. Results and conclusions</h2>
      <p>The screening process successfully identified the COC-TiO<sub>2</sub> composite, marketed as Zetamix Epsilon®, as the most promising candidate due to its moderate relative permittivity and exceptionally low dissipation factor. A simulation study comparing two sub-wavelength diffractive prisms (made from standard ABS and COC-TiO<sub>2</sub>) highlighted the material's benefits at 30 GHz:</p>
      <ul>
          <li>Thickness Reduction: A 50% reduction in thickness was achieved (11 mm vs. 22 mm).</li>
          <li>Directivity Improvement: A 1 dB increase in directivity was observed (34.8 dBi vs. 33.8 dBi).</li>
      </ul>
      <p>These results confirm the growing potential of additive manufacturing to produce complex RF structures and modify base material dielectric properties through filler integration, achieving superior performance in a significantly lighter and smaller package.</p>

      <h2>6. References</h2>
      <p>[1] Thi Quynh Van Hoang, Matthieu Bertrand, Erika Vandelle, Brigitte Loiseaux. Low-Profile Highly Directive 2D-Beam-Steering Antenna in Ka-band with 3D-printed All-dielectric Sub-wavelength Deflectors. 2022 52nd European Microwave Conference (EuMC), Sep 2022, Milan, Italy.</p>
      <p>[2] High Permittivity, Low Loss, and Printable Thermoplastic Composite Material for RF and Microwave Applications</p>
      <p>[3] https://zetamix.fr/en/produit/zetamix-%C9%9B-filament/ (data sheet)</p>
      <p>[4] R. Czarny et al., "High Permittivity, Low Loss, and Printable Thermoplastic Composite Material for RF and Microwave Applications," 2018 IEEE Conference on Antenna Measurements & Applications (CAMA), Sweden, 2018, pp. 1-4, doi: 10.1109/CAMA.2018.8530660.</p>

      <h2>7. Appendix</h2>
      <p>The following figures detail the material selection process and simulation results:</p>
      
      <figure>
        <img src="assets/images/constraints_rfantenna.jpg" alt="Figure 2: Constraints used for initial material filtering." style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 2: Constraints used for initial material filtering (Constraints).</figcaption>
      </figure>

      <figure>
        <img src="assets/images/materials_rfantenna.jpg" alt="Figure 3: Materials added (New records and synthesizer)." style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 3: Materials added (New records and synthesizer).</figcaption>
      </figure>
      
      <figure>
        <img src="assets/images/ashby1_rfantenna.jpg" alt="Figure 4: Ashby chart: relative permittivity vs. dissipation factor." style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 4: Ashby chart: relative permittivity vs. dissipation factor.</figcaption>
      </figure>

      <figure>
        <img src="assets/images/selbox_rfantenna.jpg" alt="Figure 5: Selection Box applied to the Ashby chart." style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 5: Selection Box applied to the Ashby chart (Selection Box).</figcaption>
      </figure>
      
      <figure>
        <img src="assets/images/entire_rfantenna.jpg" alt="Figure 6: Entire component of the 3D printed RF antenna." style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 6: Entire component of the 3D printed RF antenna (Entire component).</figcaption>
      </figure>
      
      <figure>
        <img src="assets/images/pillars_rfantenna.jpg" alt="Figure 7: Zoom in the pillars of the component." style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 7: Zoom in the pillars of the component (Zoom in the pillars).</figcaption>
      </figure>

      <figure>
        <img src="assets/images/cst_rfantenna.jpg" alt="Figure 8: CST simulation results 3D radiation pattern: (a) Component in ABS (b) Component in COC-TiO2." style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 8: CST simulation results 3D radiation pattern: (a) Component in ABS (b) Component in COC-TiO2 (CST simulation results).</figcaption>
      </figure>
    `
  },

  // --- PROJECT 2: Carbon Capture, Storage, And Utilization (CCSU) Thesis ---
  {
    id: "ccsu-thesis",
    title: "Carbon Capture, Storage, And Utilization (CCSU) Thesis",
    thumbnail: "assets/images/thumbnail_CCUS.jpg", 
    shortDescription: "In-depth technical report, awarded Best Thesis by the Order of Engineers of Catania.",
    fullContent: `
      <h2>The Role of CCS in the Ecological Transition</h2>
      <p>The 20th century saw rapid industrial development and incredible technological innovation, but also caused significant environmental degradation. Climate change has emerged as one of the most serious global problems of our time. In this context, this thesis examines Carbon Capture, Storage, and Utilization (CCS), which is configured as a possible solution to reduce the impact of industrial activities on climate change, particularly those related to energy production.</p>
      
      <h3>CCS as a Bridge Technology</h3>
      <p>Although the long-term solution for reducing greenhouse gas emissions consists of decoupling energy production from CO2 release, it is unlikely that alternative energy sources can completely replace fossil fuels in the short term. Therefore, CCS technology represents an effective measure to mitigate carbon dioxide emissions, until renewable energy sources are able to fully meet global energy demand.</p>
      
      <h3>Decarbonization of "Hard-to-Abate" Sectors</h3>
      <p>It is important to note that, in some industrial sectors defined as "hard to abate," complete decarbonization is an unattainable goal. Processes such as natural gas sweetening and the production of cement, steel, and ammonia are intrinsically dependent on the use of fossil fuels and chemical processes that generate CO2 as a by-product. CCS not only represents a mitigation resource but allows these hard-to-abate sectors to continue operating using fossil fuels more sustainably.</p>

      <h2>CO2 Capture Technologies</h2>
      <p>CO2 capture technologies are classified based on their positioning within the industrial process, distinguishing between upstream and downstream capture. Three main types of capture are identified:</p>

      <h3>Post-Combustion Capture (Downstream)</h3>
      <p>Post-combustion capture occurs downstream of the process and is applied directly to industrial flue gases, making it possible to retain CO2 without requiring significant modifications to existing plants. This feature makes it the most widespread capture technology.</p>
      
      <h3>Pre-Combustion and Oxy-Fuel Combustion (Upstream)</h3>
      <p>These technologies operate upstream of the industrial process, limiting their application mainly to new-generation plants.</p>
      <ul>
        <li><strong>Pre-Combustion:</strong> Involves a chemical transformation of the fuel into syngas (hydrogen and carbon monoxide), which is then converted into hydrogen and CO2. The CO2 is separated before the final combustion of the hydrogen.</li>
        <li><strong>Oxy-Fuel Combustion:</strong> Uses pure oxygen as the oxidizer, avoiding the dilution with nitrogen typical of combustion with air. The fuel combustion produces mainly CO2 and water vapor, which are subsequently separated.</li>
      </ul>
      <p>These approaches are further distinguished by the separation methods adopted: absorption with solvents and the use of membranes are the most widespread for their efficiency and economic convenience.</p>

      <h2>CO2 Storage and Utilization (CCUS)</h2>
      <p>The captured CO2 is brought to a supercritical state to facilitate its transport (mainly through pipelines) and then follows two distinct paths: utilization or permanent storage.</p>

      <h3>Utilization Applications</h3>
      <p>CO2 can be directed towards utilization plants and finds application in various industrial sectors, such as Enhanced Hydrocarbon Recovery (EHR), where it is exploited to increase extraction efficiency, or as an energy vector. It can also be transformed into synthetic fuels, used in the production of polymers, or employed in the food industry.</p>

      <h3>Permanent Storage</h3>
      <p>More commonly, the CO2 is conveyed to permanent storage sites, including deep geological formations, depleted oil/gas reservoirs, or saline aquifers. The CO2 remains in a supercritical state, reducing the risk of dispersion.</p>
      
      <h4>Trapping Mechanisms</h4>
      <p>The analysis of storage sites focuses on physical and chemical trapping dynamics:</p>
      <ul>
        <li><strong>Physical Trapping (Short-Term):</strong> Guaranteed by the presence of impermeable rock layers overlying the injection site, preventing supercritical CO2 from rising to the surface.</li>
        <li><strong>Chemical Trapping (Long-Term):</strong> Occurs through mineral carbonation processes, which make the confinement stable and permanent over a wider time horizon.</li>
      </ul>

      <h2>CO2 Utilization as an Energy Vector</h2>
      <p>One of the most innovative aspects explored in the thesis work is the potential of CO2 as an energy vector, with specific application to the **“CO2 Battery”** created by Energy Dome. The operating principle is conceptually similar to pumped hydro storage but uses carbon dioxide instead of water.</p>
      
      <h3>Energy Transition Combined Cycle (ETCC)</h3>
      <p>An interesting application is the coupling with a gas turbine plant in the so-called Energy Transition Combined Cycle (ETCC). The ETCC exploits the CO2 battery to optimize the performance of a gas turbine in a combined cycle, which can operate in three different scenarios:</p>
      <ul>
        <li><strong>Charge Mode:</strong> CO2 is compressed and liquefied (stored).</li>
        <li><strong>Boost Mode:</strong> Exhaust gases from the gas turbine are recovered, heating the gaseous CO2 from the Dome, which is expanded in the turbine.</li>
        <li><strong>Super Boost Mode:</strong> The gas cycle is combined with the discharge phase of the CO2 battery, using the liquefied CO2 to maximize power generation.</li>
      </ul>
      <p>This innovative approach underlines how CCS not only represents a strategy to mitigate emissions but also constitutes a way to transform an environmental criticality into a useful resource.</p>
    `
  },

  // --- PROJECT 3: Gyroid Heat Exchanger Optimization Study ---
  {
    id: "gyroid-heatexchanger",
    title: "Additive Manufacturing Analysis for a Heat Exchanger with Gyroid Internal Geometry",
    thumbnail: "assets/images/thumbnail_hex.jpg", 
    shortDescription: "Feasibility and manufacturing optimization study of a highly innovative Fuel-Cooled Oil Cooler (FCOC).",
    fullContent: `
      <h2>Introduction and Analysis Objectives</h2>
      <p>This case study analyzes the feasibility and manufacturing optimization of a highly innovative heat exchanger, based on a complex Gyroid Triply Periodic Minimal Surface (TPMS) architecture. This design is essential to maximize thermal exchange efficiency, with performance increases that can exceed 150% compared to conventional designs.</p>
      <figure>
        <img src="assets/images/1_hex.jpg" alt="Figure 1. Fuel Cooled oil cooler. [1]" style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 1. Fuel Cooled oil cooler. [1]</figcaption>
      </figure>

      <p>The objective of the analysis is to evaluate the technical requirements and geometric constraints of the part to:</p>
      <ol>
          <li>Select the most suitable Additive Manufacturing (AM) technology (identified as Laser Powder Bed Fusion - LPBF).</li>
          <li>Define the optimal build parameters, specifically the orientation to achieve zero support structures.</li>
          <li>Identify the ideal material for mass production (Aluminum AlSi10Mg).</li>
          <li>Perform a cost modeling for the production of 5,000 units, highlighting the predominant economic factors.</li>
      </ol>
      <p>The complex Triply Periodic Minimal Surface (TPMS) architecture was realized and optimized using nTopology design software. Targeted modifications were made to the geometry to meet the crucial constraint of zero support for LPBF printing. Such modifications included optimizing the dimensions of the gyroid surface cells and revising the fuel inlet plenum.</p>
      <figure>
        <img src="assets/images/2_hex.jpg" alt="Figure 2. GUI of the nTopology software" style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 2. GUI of the nTopology software.</figcaption>
      </figure>


      <h2>1. Object Description and Performance Requirements</h2>
      <p>The analyzed object is a Fuel-Cooled Oil Cooler (FCOC) whose purpose is to ensure extremely efficient heat transfer between fluids (e.g., engine oil and fuel), essential for cooling systems and preheating fuel. This complex internal lattice architecture maximizes the exchange surface area/volume ratio and the structural strength/weight ratio, enabling performance increases that can surpass conventional designs. These exchangers represent an emerging technology with primary application in high-performance sectors, such as aerospace and power electronics. The realistic potential global market is on the order of hundreds or a few thousand units per year.</p>
      

      <h2>2. Analysis and Selection of Additive Manufacturing Technology</h2>
      <p>Laser Powder Bed Fusion (LPBF) was selected as the preferred technology for the realization of the final component, as it is the most appropriate process for producing complex geometries like the gyroid, ensuring maximum structural density and dimensional precision. The mechanism involves spreading a thin layer of metal powder onto the build platform, followed by a high-power laser beam selectively scanning the part's cross-section, completely melting the powder. This process is repeated layer by layer until the component is complete. LPBF is the only metal AM process capable of achieving densities above 99.5% without the need for post-densification processes, making it ideal for critical applications. The post-process includes component removal from the build plate, cleaning of all residual powders, and, critically, performing stress relief heat treatments.</p>
      <figure>
        <img src="assets/images/3_hex.jpg" alt="Figure 3. LPBF Process Schematic" style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 3. LPBF Process Schematic.</figcaption>
      </figure>
      

      <h3>2.1 Alternative Sintering-Based Technologies</h3>
      <h4>FFF Metal</h4>
      <p>An alternative solution is Metal Fused Filament Fabrication (FFF Metal), considered for its greater accessibility and cost-effectiveness, particularly for medium production volumes. However, FFF adoption is limited by technical criticalities: the sintering process introduces a higher risk of residual porosity and delamination, compromising high-pressure watertight integrity and the functional integrity of the exchanger. The inherent possibility of sintering process failure requires implementing rigorous Non-Destructive Testing (NDT) inspection protocols. The trade-off between the potential saving on direct operational costs and the high functional risk (compromised watertight integrity) and the volatility of indirect costs makes FFF Metal technology uncompetitive and unacceptable to produce components intended for critical applications.</p>
      
      <h4>Binder Jetting (BJ)</h4>
      <p>In Binder Jetting (BJ), a printhead passes over the powder bed, selectively depositing a liquid binder onto the metal powder layers. This technique is valued for its potential scalability and economic advantages resulting from high jetting speed. However, the main difficulty lies in ensuring homogeneous density and constant binder saturation. The "green part" can therefore exhibit differential shrinkage (anisotropic) during the thermal sintering phase. Furthermore, the green parts are intrinsically fragile and vulnerable to damage during the delicate, time-consuming, and labor-intensive part retrieval phase.</p>
      <figure>
        <img src="assets/images/4_hex.jpg" alt="Figure 4. Binder Jetting process" style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 4. Binder Jetting process.</figcaption>
      </figure>

      <h4>MoldJet by Tritone</h4>
      <p>In response to the challenges of consistency and fragility in Binder Jetting, the MoldJet® process introduces an AM methodology that replicates the high-reliability compaction mechanisms used in Metal Injection Molding (MIM). MoldJet operates in cycles that alternate two key steps: jet printing a temporary (negative) mold in a wax-like material and subsequently filling this cavity with a metallic paste (slurry) feedstock. The mechanical action of paste filling results in an extremely dense and uniform powder packing. This leads to the production of green parts with isotropic and significantly reduced shrinkage rates (less than 14%) during sintering. The use of the sacrificial mold eliminates the need for mechanical de-powdering, reducing labor time and facilitating the creation of complex internal geometries.</p>
      <figure>
        <img src="assets/images/5_hex.jpg" alt="Figure 5. Moldjet rotary architecture [4]" style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 5. Moldjet rotary architecture [4].</figcaption>
      </figure>


      <h2>3. Definition of Print Parameters and Orientation</h2>
      <p>The input parameters selected for the print simulation were a projected area of 68.0625 cm² and a support percentage of 0% of the part mass. The choice of zero support was motivated by the complex internal architecture: any support structure would remain trapped, impairing the fluid dynamic efficiency and functional integrity of the exchanger. To meet the support requirement, the orientation is necessarily vertical (predominant dimension along the Z-axis).</p>
      
      <h3>3.1 Velo 3D Sapphire Support-Free Alternative</h3>
      <p>While geometry optimization achieved self-support for the standard LPBF process, advanced technologies like the Velo3D Sapphire system are relevant to consider. Its sophisticated process control allows support-free printing, eliminating the conventional limitation on overhang angles.</p>


      <h2>4. Material Selection and Thermo-Mechanical Requirements</h2>
      <p>Material selection was based on specific property constraints applied to the Ansys Granta materials database. The constraints required a minimum density of 2700 kg/m³, a Young's modulus of 60 GPa, an elastic limit of 160 MPa, and, critically for the application, a minimum thermal conductivity of 100 W/mK. The materials identified were predominantly Commercial and Specialty Aluminum Alloys, as aluminum is the only material that simultaneously satisfies the need for low density and high thermal conductivity. The proposed alloy offering the best compromise between cost and performance for mass production is AlSi10Mg.</p>
      <figure>
        <img src="assets/images/6_hex.jpg" alt="Figure 6. Ashby diagram Price per unit volume over Tensile Strength" style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 6. Ashby diagram Price per unit volume over Tensile Strength.</figcaption>
      </figure>
      <figure>
        <img src="assets/images/7_hex.jpg" alt="Figure 7. Ashby diagram Price per unit volume over Thermal Conductivity" style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 7. Ashby diagram Price per unit volume over Thermal Conductivity.</figcaption>
      </figure>


      <h2>5. Economic Analysis and Cost Factors</h2>
      <p>For production of 5,000 parts using LPBF, the Final Unit Cost was calculated at $384.01, for a Total Production Cost of $1,920,029.</p>
      <p>The two largest cost elements were found to be Machine Usage and Material:</p>
      <ul>
          <li>**Machine Usage (66.0%):** This high cost incorporates both capital depreciation (CAPEX) for the purchase of industrial LPBF printers and extended operational costs (OPEX), as LPBF is inherently a slow and energy-intensive process.</li>
          <li>**Material (13.7%):** This reflects the high added value of the specialty aluminum alloy powder (AlSi10Mg). The economic burden is further emphasized by the complex gyroid geometry, which requires high material consumption per unit volume compared to simpler thin-walled designs.</li>
      </ul>
      <figure>
        <img src="assets/images/8_hex.jpg" alt="Figure 8. Cost per part over production volume" style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 8. Cost per part over production volume.</figcaption>
      </figure>
      <figure>
        <img src="assets/images/9_hex.jpg" alt="Figure 9. Summary table of cost factors" style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 9. Summary table of cost factors.</figcaption>
      </figure>


      <h2>7. Strategic Recommendation: AM vs. Conventional</h2>
      <p>Additive Manufacturing (LPBF) is strongly recommended over any conventional production solution. The primary reason is the impossibility of manufacturing the gyroid surface with traditional processes. Processes like machining or traditional casting/molding cannot create complex, interconnected, non-discontinuous lattice. LPBF is therefore the preferred technology that ensures the structural integrity and functional efficiency required by the design.</p>
      <p>While the MoldJet process (and Binder Jetting) boasts better prospects for high-volume mass production, until the achieved structural integrity and density are equivalent to those of laser fusion, LPBF remains the only option that simultaneously solves the geometric constraints and the critical performance requirements of the component.</p>
    `
  },

 // --- PROJECT 4: ANSYS Fluent Simulation of the ONERA M6 Wing ---
  {
    id: "onera-m6-wing",
    title: "ANSYS Fluent Simulation of the ONERA M6 Wing",
    thumbnail: "assets/images/image1.jpeg", 
    shortDescription: "Numerical analysis and CFD validation of the ONERA M6 wing, replicating NASA experimental data for transonic flows using RANS and SST k-omega models.",
    fullContent: `
      <figure>
        <img src="assets/images/image1.jpeg" alt="Onera M6 wing" style="max-width: 100%; display: block; margin: 0 auto;">
        <figcaption>Figure 1: Onera M6 wing.</figcaption>
      </figure>

      <h2>Introduction and Objectives</h2>
      <p>The Onera M6 wing is a classic CFD validation case for external flows due to its simple geometry combined with transonic flow complexities such as local supersonic flow, pressure shocks, and turbulent boundary layer separation.</p>
      <ul>
        <li><strong>Objectives:</strong> Replicate NASA wind tunnel experimental data, analyze transonic/compressible flow, and identify shock waves and boundary layer separation.</li>
      </ul>

      <h2>Flow Conditions and Wing Geometry</h2>
      <figure>
        <img src="assets/images/image2.png" alt="Flow parameters" style="max-width: 30%; display: inline-block; margin: 0 5px;">
        <img src="assets/images/image3.png" alt="Geometrical properties" style="max-width: 30%; display: inline-block; margin: 0 5px;">
        <img src="assets/images/image4.png" alt="Onera M6 Geometrical properties" style="max-width: 30%; display: inline-block; margin: 0 5px;">
        <figcaption>Figure 2, 3, 4: Flow parameters, geometrical properties, and ONERA M6 wing characteristics.</figcaption>
      </figure>
      <p>The simulation was conducted with a Mach number of 0.8395, a Reynolds number of 1.17E+07, and an Angle of Attack (AoA) of 3.06°. The wing is a semi-span, un-twisted swept wing with an aspect ratio of 3.8 and a mean aerodynamic chord of 646.07 mm.</p>

      <h2>Geometry and Domain Setup (SpaceClaim)</h2>
      <p>The fluid domain was created extending approximately 20 chord lengths to ensure undisturbed free-stream boundary conditions. A Body of Influence (BOI) was established around the wing profile for localized mesh refinement.</p>
      <figure>
        <img src="assets/images/image5.png" alt="Geometry on Ansys Spaceclaim" style="max-width: 60%; display: block; margin: 0 auto;">
        <figcaption>Figure 5: Geometry on Ansys Spaceclaim.</figcaption>
      </figure>
      <figure>
        <img src="assets/images/image6.png" alt="Fluid domain" style="max-width: 70%; display: block; margin: 10px auto;">
        <img src="assets/images/image7.png" alt="Body of Influence" style="max-width: 70%; display: block; margin: 10px auto;">
        <figcaption>Figure 6, 7: Fluid domain and body of influence for mesh refinement.</figcaption>
      </figure>

      <h2>Mesh Generation</h2>
      <p>Surface mesh refinements were applied to leading/trailing edges (0.001 m) and wing faces (0.003 m). A Smooth Transition boundary layer with 15 prism layers was utilized for accurate flow separation prediction.</p>
      <figure>
        <img src="assets/images/image8.png" alt="Surface Mesh" style="max-width: 70%; display: block; margin: 10px auto;">
        <img src="assets/images/image9.jpeg" alt="Details of the Surface Mesh" style="max-width: 70%; display: block; margin: 10px auto;">
        <figcaption>Figure 8, 9: Surface mesh and details of mesh refinement.</figcaption>
      </figure>
      <figure>
        <img src="assets/images/image10.png" alt="Boundary Layer" style="max-width: 60%; display: block; margin: 0 auto;">
        <figcaption>Figure 10: Boundary Layer discretization.</figcaption>
      </figure>
      <p>The volume mesh uses polyhedral cells with an average orthogonal quality of 0.9546, confirming high quality. Total cell count is approximately 757,348.</p>
      <figure>
        <img src="assets/images/image11.png" alt="Volume Mesh" style="max-width: 70%; display: block; margin: 10px auto;">
        <img src="assets/images/image12.png" alt="Mesh Properties" style="max-width: 70%; display: block; margin: 10px auto;">
        <figcaption>Figure 11, 12: Volume mesh and mesh quality properties.</figcaption>
      </figure>

      <h2>Mathematical and Turbulence Model</h2>
      <p>The simulation uses Reynolds-averaged Navier-Stokes (RANS) equations. While NASA utilized the Spalart-Allmaras model, this study employs the <strong>SST k-omega model</strong>.</p>
      <figure>
        <img src="assets/images/image13.png" alt="Governing Equations" style="max-width: 80%; display: block; margin: 0 auto;">
        <figcaption>Figure 13: Governing Equations.</figcaption>
      </figure>

      <h2>Numerical Solution Setup</h2>
      <p>Pressure far-field boundary conditions were applied to the Inlet, Outlet, and Far side. The Coupled method was used with a convergence criterion of 10e-3. Residuals reached convergence after 193 iterations.</p>
      <figure>
        <img src="assets/images/image14.png" alt="Boundary conditions overview" style="max-width: 70%; display: block; margin: 10px auto;">
        <img src="assets/images/image15.png" alt="Conditions Visualizations" style="max-width: 70%; display: block; margin: 10px auto;">
        <figcaption>Figure 14, 15: Boundary conditions overview and visualization.</figcaption>
      </figure>
      <figure>
        <img src="assets/images/image16.png" alt="Scaled Residuals" style="max-width: 70%; display: block; margin: 10px auto;">
        <img src="assets/images/image17.png" alt="Lift and Drag Plots" style="max-width: 70%; display: block; margin: 10px auto;">
        <img src="assets/images/image18.png" alt="Comparison of results from NASA" style="max-width: 70%; display: block; margin: 10px auto;">
        <figcaption>Figure 16, 17, 18: Scaled residuals, lift and drag convergence plots, and comparison with NASA experimental data.</figcaption>
      </figure>

      <h2>Post Processing and Results Analysis</h2>
      <p>Model validation showed high accuracy: Fluent lift coefficient (Cl) was 0.1312 compared to NASA's 0.141, with a minimal drag coefficient (Cd) difference of 0.177%.</p>
      <figure>
        <img src="assets/images/image19.png" alt="Mach Number Contours" style="max-width: 70%; display: block; margin: 10px auto;">
        <img src="assets/images/image20.png" alt="Pressure Coefficient Contours" style="max-width: 70%; display: block; margin: 10px auto;">
        <figcaption>Figure 19, 20: Mach number contours and pressure coefficient distribution.</figcaption>
      </figure>
      <h3>Shock Waves and Separation</h3>
      <p>Transonic shock waves were identified by sharp velocity reductions and pressure increases, resulting in boundary layer thickening and flow separation.</p>
      <figure>
        <img src="assets/images/image21.png" alt="Shock Wave" style="max-width: 70%; display: block; margin: 10px auto;">
        <img src="assets/images/image22.png" alt="Flow separation" style="max-width: 70%; display: block; margin: 10px auto;">
        <figcaption>Figure 21, 22: Shock wave visualization and flow separation patterns.</figcaption>
      </figure>
      <h3>Vortex Dynamics</h3>
      <p>Trailing edge and lift-induced vortices are graphically captured at the wing tips where high and low pressure regions interact.</p>
      <figure>
        <img src="assets/images/image23.png" alt="Trailing Edge Vortex" style="max-width: 70%; display: block; margin: 10px auto;">
        <img src="assets/images/image24.gif" alt="Vortex animation" style="max-width: 70%; display: block; margin: 10px auto;">
        <figcaption>Figure 23, 24: Trailing edge vortex formation and vortex dynamics animation.</figcaption>
      </figure>

      <h2>ANSYS Workbench Workflow: Design Points</h2>
      <p>Using Workbench, design points were solved for different angles of attack (3.06°, 15.0°, 25.0°). Pressures calculated by Fluent were imported into a Static Structural block for structural analysis using AL 7075-T6.</p>
      <figure>
        <img src="assets/images/image25.png" alt="Design Points" style="max-width: 80%; display: block; margin: 10px auto;">
        <img src="assets/images/image26.png" alt="Ansys Workbench Workflow" style="max-width: 80%; display: block; margin: 10px auto;">
        <img src="assets/images/image27.png" alt="Ansys Mechanical Mesh" style="max-width: 80%; display: block; margin: 10px auto;">
        <figcaption>Figure 25, 26, 27: Design points setup, ANSYS Workbench workflow, and structural mesh.</figcaption>
      </figure>
      <figure>
        <img src="assets/images/image28.gif" alt="Wing Deformation" style="max-width: 70%; display: block; margin: 0 auto;">
        <figcaption>Figure 28: Total structural deformation analysis.</figcaption>
      </figure>
    `
  },
  
  // --- PROJECT 5: Experimental Characterization and Damage Modeling of MTC-1300T ---
  {
    id: "mtc1300t-characterization",
    title: "Experimental Characterization and Damage Modeling of MTC-1300T Material",
    thumbnail: "assets/images/img (4).png", 
    shortDescription: "Mechanical characterization of MTC-1300T through image analysis, MLR correction, and FEM validation using the Bao-Wierzbicki damage model and Fortran subroutines.",
    fullContent: `
      <h1>CHARACTERIZATION AND NUMERICAL VALIDATION OF MTC-1300T MATERIAL</h1>
      
      <h2>1. Introduction</h2>
      <p>The objective of this activity is the mechanical characterization of the MTC-1300T material through the integration of experimental image analysis techniques and numerical finite element modeling (FEM). Starting from tensile test data, the real plastic curve was determined, the model was validated on MSC Marc/Mentat software, and the critical damage parameters were identified according to the Bao-Wierzbicki (B-W) model.</p>
      
      <figure style="text-align: center;">
        <img src="assets/images/img (1).png" alt="MTC-1300T Specimen" style="width: 80%; max-width: 600px; height: auto;">
        <figcaption>Figure 1: MTC-1300T Specimen.</figcaption>
      </figure>

      <h2>2. Experimental Analysis and Post-Processing</h2>
      <p>The specimen under examination has a rectangular cross-section with width $W_0=3.02$ mm, thickness $T_0=1.3$ mm, and a gauge length $L_0=10$ mm.</p>

      <h3>2.1 Image Processing and Engineering Curves</h3>
      <p>Through photographic sampling of the test (0.5 fps), engineering and true curves were obtained using the following relations:</p>
      <ul>
        <li><strong>Engineering Curve:</strong> $\\sigma_{\\text{eng}} = \\frac{P}{W_0 T_0}$ ; $\\varepsilon_{\\text{eng}} = \\frac{L - L_0}{L_0}$</li>
        <li><strong>True Stress-Strain (from Length):</strong> $\\sigma_{\\text{true,L}} = \\sigma_{\\text{eng}} \\frac{L}{L_0}$ ; $\\varepsilon_{\\text{true,L}} = \\ln \\frac{L}{L_0}$</li>
        <li><strong>True Stress-Strain (from Area):</strong> $\\varepsilon_{\\text{true,A}} = 2 \\ln \\frac{W_0}{W}$ ; $\\sigma_{\\text{true,A}} = \\frac{P}{W^2 T_0 / W_0}$</li>
      </ul>
      
      <figure style="text-align: center;">
        <img src="assets/images/img (2).png" alt="Experimental Curves" style="width: 80%; max-width: 600px; height: auto;">
        <figcaption>Figure 2: Experimental Curves.</figcaption>
      </figure>

      <h3>2.2 MLR Correction (Mirone-Lo Riso)</h3>
      <p>To compensate for triaxiality after necking, the flow stress ($\\sigma_{\\text{flow}}$) was obtained via the corrective factor $C_{\\text{MLR}}$:</p>
      <p>If $\\varepsilon_{\\text{true,A}} \\geq \\varepsilon_{\\text{necking}}$: $C_{\\text{MLR}} = 1 - 0.5058\\Delta^2 + 0.6317\\Delta^3 - 0.02107\\Delta^4$ (where $\\Delta = \\varepsilon_{\\text{true,A}} - \\varepsilon_{\\text{necking}}$).</p>
      
      <figure style="text-align: center;">
        <img src="assets/images/img (3).png" alt="Estimate of Flow Stress" style="width: 80%; max-width: 600px; height: auto;">
        <figcaption>Figure 3: Estimate of $\\sigma_{\\text{Flow}}$ and trend line for best-fit.</figcaption>
      </figure>

      <h2>3. Numerical Modeling (MSC Marc)</h2>
      <p>Exploiting double symmetry, 1/8 of the geometry was modeled using RBE2 elements for displacement control and refined mesh in the necking zone.</p>
      
      <figure style="text-align: center;">
        <img src="assets/images/img (4).png" alt="Model realized on MSC-Marc" style="width: 80%; max-width: 600px; height: auto;">
        <figcaption>Figure 4: Model realized on MSC-Marc.</figcaption>
      </figure>

      <h2>4. Validation and Results</h2>
      <p>The overlap of Force-Displacement curves confirms the accuracy of the plastic curve derived from the MLR correction.</p>
      
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (5).png" alt="FEM Area Comparison" style="width: 100%;">
          <figcaption>Figure 5: Experimental FEM-True Area Based Comparison.</figcaption>
        </figure>
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (6).png" alt="FEM Length Comparison" style="width: 100%;">
          <figcaption>Figure 6: Experimental FEM-True L Based Comparison.</figcaption>
        </figure>
      </div>

      <h3>4.2 Critical Damage Analysis</h3>
      <p>Bao-Wierzbicki (B-W) damage variable was extracted to identify the Critical Damage ($D_c$).</p>
      
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (7).png" alt="Triaxiality Node 1" style="width: 100%;">
          <figcaption>Figure 7: Triaxiality Factor Node 1.</figcaption>
        </figure>
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (8).png" alt="Triaxiality Comparison" style="width: 100%;">
          <figcaption>Figure 8: Triaxiality Factor Node to compare.</figcaption>
        </figure>
      </div>

      <figure style="text-align: center;">
        <img src="assets/images/img (9).png" alt="Damage over Increment" style="width: 80%; max-width: 600px; height: auto;">
        <figcaption>Figure 9: Damage over Increment.</figcaption>
      </figure>

      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (10).png" alt="Specimen Length Variation" style="width: 100%;">
          <figcaption>Figure 10: Variation of specimen length.</figcaption>
        </figure>
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (11).png" alt="Specimen Width Variation" style="width: 100%;">
          <figcaption>Figure 11: Variation of specimen width.</figcaption>
        </figure>
      </div>

      <figure style="text-align: center;">
        <img src="assets/images/img (12).png" alt="Critical Damage" style="width: 60%; max-width: 400px; height: auto;">
        <figcaption>Figure 12: Critical damage value identification ($D_c=0.331$).</figcaption>
      </figure>

      <hr>

      <h1>AXISYMMETRIC ANALYSIS AND DAMAGE MODELING USING FORTRAN SUBROUTINE</h1>
      
      <h2>1. Analysis Objective</h2>
      <p>Implementation of the B-W damage criterion via an external Fortran subroutine to simulate element deletion upon reaching $D_c$.</p>

      <h2>2. Numerical Modeling (MSC Marc)</h2>
      <p>Axisymmetric formulation using Quad 10 elements for smooth and notched specimens.</p>
      
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (13).png" alt="Smooth Specimen" style="width: 100%;">
          <figcaption>Figure 13: Smooth Specimen modeled on MSC-Marc.</figcaption>
        </figure>
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (14).png" alt="Notched Specimen" style="width: 100%;">
          <figcaption>Figure 14: Notched Specimen modeled on MSC-Marc.</figcaption>
        </figure>
      </div>

      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (15).png" alt="Smooth Mesh" style="width: 100%;">
          <figcaption>Figure 15: Smooth specimen mesh and boundary conditions.</figcaption>
        </figure>
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (16).png" alt="Notched Mesh" style="width: 100%;">
          <figcaption>Figure 16: Notched specimen mesh and boundary conditions.</figcaption>
        </figure>
      </div>

      <figure style="text-align: center;">
        <img src="assets/images/img (17).png" alt="Fortran Subroutine" style="width: 80%; max-width: 600px; height: auto;">
        <figcaption>Figure 17: User Subroutines Implementation.</figcaption>
      </figure>

      <h2>4. Results Analysis and Node Monitoring</h2>
      
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (18).png" alt="Damage smooth" style="width: 100%;">
          <figcaption>Figure 18: Damage smooth specimen.</figcaption>
        </figure>
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (19).png" alt="Damage notched" style="width: 100%;">
          <figcaption>Figure 19: Damage notched specimen.</figcaption>
        </figure>
      </div>

      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (20).png" alt="Damage per increment smooth" style="width: 100%;">
          <figcaption>Figure 20: Damage per increment smooth specimen.</figcaption>
        </figure>
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (21).png" alt="Damage per increment notched" style="width: 100%;">
          <figcaption>Figure 21: Damage per increment notched specimen.</figcaption>
        </figure>
      </div>

      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (22).png" alt="Strain increment smooth" style="width: 100%;">
          <figcaption>Figure 22: Total equivalent plastic strain smooth specimen.</figcaption>
        </figure>
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (23).png" alt="Strain increment notched" style="width: 100%;">
          <figcaption>Figure 23: Total equivalent plastic strain notched specimen.</figcaption>
        </figure>
      </div>

      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (24).png" alt="Triaxiality smooth" style="width: 100%;">
          <figcaption>Figure 24: Triaxiality factor smooth specimen.</figcaption>
        </figure>
        <figure style="text-align: center; width: 45%;">
          <img src="assets/images/img (25).png" alt="Triaxiality notched" style="width: 100%;">
          <figcaption>Figure 25: Triaxiality factor notched specimen.</figcaption>
        </figure>
      </div>

      <figure style="text-align: center;">
        <img src="assets/images/img (26).png" alt="True curves area" style="width: 80%; max-width: 600px; height: auto;">
        <figcaption>Figure 26: True curves area based comparison.</figcaption>
      </figure>

      <h2>5. Smooth vs Notched Comparison and Conclusions</h2>
      <p>The Notched specimen accelerations damage accumulation due to higher triaxiality. The Fortran subroutine allowed for physical visualization of crack initiation starting from the core.</p>
    `
  }
];
