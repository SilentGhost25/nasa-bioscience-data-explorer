export interface Publication {
  id: string;
  title: string;
  link: string;
  year?: number;
  category?: string;
  keywords?: string[];
}

export const nasaPublications: Publication[] = [
  {
    id: "pub-1",
    title: "Mice in Bion-M 1 space mission: training and selection",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4136787/",
    year: 2014,
    category: "Space Biology",
    keywords: ["mice", "space mission", "training", "selection"]
  },
  {
    id: "pub-2",
    title: "Microgravity induces pelvic bone loss through osteoclastic activity, osteocytic osteolysis, and osteoblastic cell cycle inhibition by CDKN1a/p21",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3630201/",
    year: 2013,
    category: "Bone & Skeletal",
    keywords: ["microgravity", "bone loss", "osteoclastic", "cell cycle"]
  },
  {
    id: "pub-3",
    title: "Stem Cell Health and Tissue Regeneration in Microgravity",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11988870/",
    year: 2024,
    category: "Stem Cells",
    keywords: ["stem cells", "tissue regeneration", "microgravity"]
  },
  {
    id: "pub-4",
    title: "Microgravity Reduces the Differentiation and Regenerative Potential of Embryonic Stem Cells",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7998608/",
    year: 2021,
    category: "Stem Cells",
    keywords: ["microgravity", "embryonic stem cells", "differentiation"]
  },
  {
    id: "pub-5",
    title: "Microgravity validation of a novel system for RNA isolation and multiplex quantitative real time PCR analysis of gene expression on the International Space Station",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5587110/",
    year: 2017,
    category: "Molecular Biology",
    keywords: ["RNA isolation", "PCR", "gene expression", "ISS"]
  },
  {
    id: "pub-6",
    title: "Spaceflight Modulates the Expression of Key Oxidative Stress and Cell Cycle Related Genes in Heart",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8396460/",
    year: 2021,
    category: "Cardiovascular",
    keywords: ["spaceflight", "oxidative stress", "heart", "gene expression"]
  },
  {
    id: "pub-7",
    title: "Dose- and Ion-Dependent Effects in the Oxidative Stress Response to Space-Like Radiation Exposure in the Skeletal System",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5666799/",
    year: 2017,
    category: "Radiation Biology",
    keywords: ["radiation", "oxidative stress", "skeletal system"]
  },
  {
    id: "pub-8",
    title: "From the bench to exploration medicine: NASA life sciences translational research for human exploration and habitation missions",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5460236/",
    year: 2017,
    category: "Human Physiology",
    keywords: ["translational research", "human exploration", "habitation"]
  },
  {
    id: "pub-9",
    title: "High-precision method for cyclic loading of small-animal vertebrae to assess bone quality",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6222041/",
    year: 2018,
    category: "Bone & Skeletal",
    keywords: ["bone quality", "vertebrae", "cyclic loading"]
  },
  {
    id: "pub-10",
    title: "Effects of ex vivo ionizing radiation on collagen structure and whole-bone mechanical properties of mouse vertebrae",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6813909/",
    year: 2019,
    category: "Radiation Biology",
    keywords: ["ionizing radiation", "collagen", "bone mechanics"]
  },
  {
    id: "pub-11",
    title: "Absence of gamma-sarcoglycan alters the response of p70S6 kinase to mechanical perturbation in murine skeletal muscle",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4095884/",
    year: 2014,
    category: "Muscle & Movement",
    keywords: ["skeletal muscle", "mechanical perturbation", "kinase"]
  },
  {
    id: "pub-12",
    title: "AtRabD2b and AtRabD2c have overlapping functions in pollen development and pollen tube growth",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3040128/",
    year: 2011,
    category: "Plant Biology",
    keywords: ["pollen development", "Arabidopsis", "tube growth"]
  },
  {
    id: "pub-13",
    title: "TNO1 is involved in salt tolerance and vacuolar trafficking in Arabidopsis",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3177255/",
    year: 2011,
    category: "Plant Biology",
    keywords: ["salt tolerance", "vacuolar trafficking", "Arabidopsis"]
  },
  {
    id: "pub-14",
    title: "Functional redundancy between trans-Golgi network SNARE family members in Arabidopsis thaliana",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11500582/",
    year: 2024,
    category: "Plant Biology",
    keywords: ["Golgi network", "SNARE", "Arabidopsis"]
  },
  {
    id: "pub-15",
    title: "Root growth movements: Waving and skewing",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5387210/",
    year: 2017,
    category: "Plant Biology",
    keywords: ["root growth", "waving", "skewing"]
  },
  {
    id: "pub-16",
    title: "Gravitropism and lateral root emergence are dependent on the trans-Golgi network protein TNO1",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4642138/",
    year: 2015,
    category: "Plant Biology",
    keywords: ["gravitropism", "root emergence", "TNO1"]
  },
  {
    id: "pub-17",
    title: "TNO1, a TGN-localized SNARE-interacting protein, modulates root skewing in Arabidopsis thaliana",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5387210/",
    year: 2017,
    category: "Plant Biology",
    keywords: ["SNARE", "root skewing", "Arabidopsis"]
  },
  {
    id: "pub-18",
    title: "The Drosophila SUN protein Spag4 cooperates with the coiled-coil protein Yuri Gagarin to maintain association of the basal body and spermatid nucleus",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2915878/",
    year: 2010,
    category: "Model Organisms",
    keywords: ["Drosophila", "SUN protein", "spermatid"]
  },
  {
    id: "pub-19",
    title: "Toll mediated infection response is altered by gravity and spaceflight in Drosophila",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3901686/",
    year: 2014,
    category: "Immunology",
    keywords: ["infection response", "gravity", "Drosophila"]
  },
  {
    id: "pub-20",
    title: "Multi-omics analysis of multiple missions to space reveal a theme of lipid dysregulation in mouse liver",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6985101/",
    year: 2020,
    category: "Metabolomics",
    keywords: ["multi-omics", "lipid dysregulation", "liver"]
  },
  {
    id: "pub-21",
    title: "GeneLab database analyses suggest long-term impact of space radiation on the cardiovascular system by the activation of FYN through reactive oxygen species",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6387434/",
    year: 2019,
    category: "Radiation Biology",
    keywords: ["space radiation", "cardiovascular", "FYN", "ROS"]
  },
  {
    id: "pub-22",
    title: "FAIRness and usability for open-access omics data systems",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6371294/",
    year: 2019,
    category: "Data Science",
    keywords: ["FAIR", "omics data", "open access"]
  },
  {
    id: "pub-23",
    title: "NASA GeneLab platform utilized for biological response to space radiation in animal models",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7072278/",
    year: 2020,
    category: "Radiation Biology",
    keywords: ["GeneLab", "space radiation", "animal models"]
  },
  {
    id: "pub-24",
    title: "Circulating miRNA spaceflight signature reveals targets for countermeasure development",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8441986/",
    year: 2021,
    category: "Molecular Biology",
    keywords: ["miRNA", "spaceflight", "countermeasures"]
  },
  {
    id: "pub-25",
    title: "Machine learning algorithm to characterize antimicrobial resistance associated with the International Space Station surface microbiome",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9400218/",
    year: 2022,
    category: "Microbiology",
    keywords: ["machine learning", "antimicrobial resistance", "ISS microbiome"]
  },
  {
    id: "pub-26",
    title: "Extraterrestrial Gynecology: Could Spaceflight Increase the Risk of Developing Cancer in Female Astronauts? An Updated Review",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9267413/",
    year: 2022,
    category: "Human Physiology",
    keywords: ["gynecology", "cancer risk", "female astronauts"]
  },
  {
    id: "pub-27",
    title: "Muscle atrophy phenotype gene expression during spaceflight is linked to a metabolic crosstalk in both the liver and the muscle in mice",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9576569/",
    year: 2022,
    category: "Muscle & Movement",
    keywords: ["muscle atrophy", "gene expression", "metabolic crosstalk"]
  },
  {
    id: "pub-28",
    title: "Chromosomal positioning and epigenetic architecture influence DNA methylation patterns triggered by galactic cosmic radiation",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10789781/",
    year: 2024,
    category: "Radiation Biology",
    keywords: ["chromosomal positioning", "epigenetics", "cosmic radiation"]
  },
  {
    id: "pub-29",
    title: "A comprehensive SARS-CoV-2 and COVID-19 review, Part 2: Host extracellular to systemic effects of SARS-CoV-2 infection",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10772081/",
    year: 2024,
    category: "Immunology",
    keywords: ["COVID-19", "SARS-CoV-2", "systemic effects"]
  },
  {
    id: "pub-30",
    title: "Aging and putative frailty biomarkers are altered by spaceflight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11166946/",
    year: 2024,
    category: "Human Physiology",
    keywords: ["aging", "frailty", "biomarkers"]
  },
  {
    id: "pub-31",
    title: "Space radiation damage rescued by inhibition of key spaceflight associated miRNAs",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11166944/",
    year: 2024,
    category: "Radiation Biology",
    keywords: ["space radiation", "miRNA inhibition", "damage rescue"]
  },
  {
    id: "pub-32",
    title: "Ethical considerations for the age of non-governmental space exploration",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11166968/",
    year: 2024,
    category: "Ethics & Policy",
    keywords: ["ethics", "space exploration", "non-governmental"]
  },
  {
    id: "pub-33",
    title: "Innate immune responses of Drosophila melanogaster are altered by spaceflight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7000411/",
    year: 2020,
    category: "Immunology",
    keywords: ["innate immunity", "Drosophila", "spaceflight"]
  },
  {
    id: "pub-34",
    title: "Prolonged Exposure to Microgravity Reduces Cardiac Contractility and Initiates Remodeling in Drosophila",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7787258/",
    year: 2021,
    category: "Cardiovascular",
    keywords: ["microgravity", "cardiac contractility", "Drosophila"]
  },
  {
    id: "pub-35",
    title: "Regulation of plant gravity sensing and signaling by the actin cytoskeleton",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8716943/",
    year: 2022,
    category: "Plant Biology",
    keywords: ["gravity sensing", "actin cytoskeleton", "signaling"]
  },
  {
    id: "pub-36",
    title: "HLB1 Is a Tetratricopeptide Repeat Domain-Containing Protein That Operates at the Intersection of the Exocytic and Endocytic Pathways at the TGN/EE in Arabidopsis",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4826010/",
    year: 2016,
    category: "Plant Biology",
    keywords: ["HLB1", "exocytic pathways", "Arabidopsis"]
  },
  {
    id: "pub-37",
    title: "ERULUS is a plasma membrane-localized receptor-like kinase that specifies root hair growth by maintaining tip-focused cytoplasmic calcium oscillations",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6048781/",
    year: 2018,
    category: "Plant Biology",
    keywords: ["ERULUS", "root hair", "calcium oscillations"]
  },
  {
    id: "pub-38",
    title: "Brassinosteroids inhibit autotropic root straightening by modifying filamentous-actin organization and dynamics",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7010715/",
    year: 2020,
    category: "Plant Biology",
    keywords: ["brassinosteroids", "root straightening", "actin"]
  },
  {
    id: "pub-39",
    title: "Cell type-specific imaging of calcium signaling in Arabidopsis thaliana seedling roots using GCaMP3",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7503278/",
    year: 2020,
    category: "Plant Biology",
    keywords: ["calcium signaling", "GCaMP3", "Arabidopsis roots"]
  },
  {
    id: "pub-40",
    title: "Spatial and temporal localization of SPIRRIG and WAVE/SCAR reveal roles for these proteins in actin-mediated root hair development",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8364238/",
    year: 2021,
    category: "Plant Biology",
    keywords: ["SPIRRIG", "WAVE/SCAR", "root hair development"]
  },
  {
    id: "pub-41",
    title: "Microgravity Stress: Bone and Connective Tissue",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11579474/",
    year: 2024,
    category: "Bone & Skeletal",
    keywords: ["microgravity stress", "bone", "connective tissue"]
  },
  {
    id: "pub-42",
    title: "S. aureus MscL is a pentamer in vivo but of variable stoichiometries in vitro: implications for detergent-solubilized membrane proteins",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2998437/",
    year: 2010,
    category: "Microbiology",
    keywords: ["MscL", "pentamer", "membrane proteins"]
  },
  {
    id: "pub-43",
    title: "Manipulating the permeation of charged compounds through the MscL nanovalve",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3005423/",
    year: 2011,
    category: "Microbiology",
    keywords: ["MscL nanovalve", "permeation", "charged compounds"]
  },
  {
    id: "pub-44",
    title: "The oligomeric state of the truncated mechanosensitive channel of large conductance shows no variance in vivo",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3190158/",
    year: 2011,
    category: "Microbiology",
    keywords: ["mechanosensitive channel", "oligomeric state"]
  },
  {
    id: "pub-45",
    title: "Three routes to modulate the pore size of the MscL channel/nanovalve",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3289768/",
    year: 2012,
    category: "Microbiology",
    keywords: ["MscL", "pore size", "nanovalve"]
  },
  {
    id: "pub-46",
    title: "The dynamics of protein-protein interactions between domains of MscL at the cytoplasmic-lipid interface",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3508904/",
    year: 2012,
    category: "Microbiology",
    keywords: ["protein interactions", "MscL", "lipid interface"]
  },
  {
    id: "pub-47",
    title: "The MscS and MscL families of mechanosensitive channels act as microbial emergency release valves",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3430326/",
    year: 2012,
    category: "Microbiology",
    keywords: ["mechanosensitive channels", "emergency valves"]
  },
  {
    id: "pub-48",
    title: "Chimeras reveal a single lipid-interface residue that controls MscL channel kinetics as well as mechanosensitivity",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3593973/",
    year: 2013,
    category: "Microbiology",
    keywords: ["MscL", "kinetics", "mechanosensitivity"]
  },
  {
    id: "pub-49",
    title: "Evidence for extensive horizontal gene transfer from the draft genome of a tardigrade",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5018776/",
    year: 2016,
    category: "Model Organisms",
    keywords: ["tardigrade", "horizontal gene transfer", "genome"]
  },
  {
    id: "pub-50",
    title: "Reply to Bemm et al. and Arakawa: Identifying foreign genes in independent Hypsibius dujardini genome assemblies",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4896697/",
    year: 2016,
    category: "Model Organisms",
    keywords: ["tardigrade", "foreign genes", "genome assembly"]
  },
  {
    id: "pub-51",
    title: "Tardigrades Use Intrinsically Disordered Proteins to Survive Desiccation",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11127935/",
    year: 2024,
    category: "Model Organisms",
    keywords: ["tardigrades", "disordered proteins", "desiccation"]
  },
  {
    id: "pub-52",
    title: "Desiccation of Hypsibius exemplaris",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11831363/",
    year: 2024,
    category: "Model Organisms",
    keywords: ["tardigrade", "desiccation", "Hypsibius"]
  },
  {
    id: "pub-53",
    title: "The biology of tardigrade disordered proteins in extreme stress tolerance",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11930778/",
    year: 2024,
    category: "Model Organisms",
    keywords: ["tardigrade", "stress tolerance", "disordered proteins"]
  },
  {
    id: "pub-54",
    title: "Production of reactive oxygen species and involvement of bioprotectants during anhydrobiosis in the tardigrade Paramacrobiotus spatialis",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8816950/",
    year: 2022,
    category: "Model Organisms",
    keywords: ["tardigrade", "ROS", "anhydrobiosis"]
  },
  {
    id: "pub-55",
    title: "Partial weight suspension: A novel murine model for investigating adaptation to reduced musculoskeletal loading",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3774184/",
    year: 2013,
    category: "Space Biology",
    keywords: ["weight suspension", "musculoskeletal", "murine model"]
  },
  {
    id: "pub-56",
    title: "Partial reductions in mechanical loading yield proportional changes in bone density, bone architecture, and muscle mass",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4118556/",
    year: 2014,
    category: "Bone & Skeletal",
    keywords: ["mechanical loading", "bone density", "muscle mass"]
  },
  {
    id: "pub-57",
    title: "Spaceflight and hind limb unloading induce similar changes in electrical impedance characteristics of mouse gastrocnemius muscle",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4653813/",
    year: 2015,
    category: "Muscle & Movement",
    keywords: ["spaceflight", "hind limb unloading", "muscle impedance"]
  },
  {
    id: "pub-58",
    title: "Spaceflight Activates Lipotoxic Pathways in Mouse Liver",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6915713/",
    year: 2019,
    category: "Metabolomics",
    keywords: ["spaceflight", "lipotoxic pathways", "liver"]
  },
  {
    id: "pub-59",
    title: "Treatment with a soluble bone morphogenetic protein type 1A receptor (BMPR1A) fusion protein increases bone mass and bone formation in mice subjected to hindlimb unloading",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6124165/",
    year: 2018,
    category: "Bone & Skeletal",
    keywords: ["BMPR1A", "bone mass", "hindlimb unloading"]
  },
  {
    id: "pub-60",
    title: "RNAseq and RNA molecular barcoding reveal differential gene expression in cortical bone following hindlimb unloading in female mice",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8509868/",
    year: 2021,
    category: "Bone & Skeletal",
    keywords: ["RNAseq", "gene expression", "bone", "unloading"]
  },
  {
    id: "pub-61",
    title: "Proteomic and phosphoproteomic characterization of cardiovascular tissues after long term exposure to simulated space radiation",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11063234/",
    year: 2024,
    category: "Radiation Biology",
    keywords: ["proteomics", "cardiovascular", "space radiation"]
  },
  {
    id: "pub-62",
    title: "Adaptive Changes in the Vestibular System of Land Snail to a 30-Day Spaceflight and Readaptation on Return to Earth",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5672023/",
    year: 2017,
    category: "Space Biology",
    keywords: ["vestibular system", "land snail", "spaceflight adaptation"]
  },
  {
    id: "pub-63",
    title: "Morphology of the Utricular Otolith Organ in the Toadfish, Opsanus tau",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5899691/",
    year: 2018,
    category: "Space Biology",
    keywords: ["utricular otolith", "toadfish", "morphology"]
  },
  {
    id: "pub-64",
    title: "Influence of Magnitude and Duration of Altered Gravity and Readaptation to 1g on the Structure and Function of the Utricle in Toadfish, Opsanus tau",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6204554/",
    year: 2018,
    category: "Space Biology",
    keywords: ["altered gravity", "toadfish", "utricle"]
  },
  {
    id: "pub-65",
    title: "Organization of the ER-Golgi interface for membrane traffic control",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4064004/",
    year: 2014,
    category: "Cell Biology",
    keywords: ["ER-Golgi", "membrane traffic", "interface"]
  },
  {
    id: "pub-66",
    title: "IRE1: ER stress sensor and cell fate executor",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3818365/",
    year: 2013,
    category: "Cell Biology",
    keywords: ["IRE1", "ER stress", "cell fate"]
  },
  {
    id: "pub-67",
    title: "Inter-regulation of the unfolded protein response and auxin signaling",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3981873/",
    year: 2014,
    category: "Plant Biology",
    keywords: ["unfolded protein response", "auxin signaling"]
  },
  {
    id: "pub-68",
    title: "Endoplasmic reticulum-shape and function in stress translation",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4150462/",
    year: 2014,
    category: "Cell Biology",
    keywords: ["endoplasmic reticulum", "stress translation"]
  },
  {
    id: "pub-69",
    title: "Galactose-depleted xycoglucan is dysfunctional and leads to dwarfism in Arabidopsis",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4378170/",
    year: 2015,
    category: "Plant Biology",
    keywords: ["xyloglucan", "galactose", "dwarfism", "Arabidopsis"]
  },
  {
    id: "pub-70",
    title: "Unfolded protein response in plants: one master, many questions",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4618186/",
    year: 2015,
    category: "Plant Biology",
    keywords: ["unfolded protein response", "plants"]
  },
  {
    id: "pub-71",
    title: "Vesicles versus Tubes: Is Endoplasmic Reticulum-Golgi Transport in Plants Fundamentally Different from Other Eukaryotes?",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4453782/",
    year: 2015,
    category: "Plant Biology",
    keywords: ["ER-Golgi transport", "vesicles", "plants"]
  },
  {
    id: "pub-72",
    title: "Pectin methylesterification impacts the relationship between photosynthesis and plant growth",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4902601/",
    year: 2016,
    category: "Plant Biology",
    keywords: ["pectin", "photosynthesis", "plant growth"]
  },
  {
    id: "pub-73",
    title: "Reduced Chloroplast Coverage genes from Arabidopsis thaliana help to establish the size of the chloroplast compartment",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4776492/",
    year: 2016,
    category: "Plant Biology",
    keywords: ["chloroplast", "Arabidopsis", "compartment size"]
  },
  {
    id: "pub-74",
    title: "Maintaining the factory: The roles of the unfolded protein response in cellular homeostasis in plants",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5415411/",
    year: 2017,
    category: "Plant Biology",
    keywords: ["unfolded protein response", "homeostasis", "plants"]
  },
  {
    id: "pub-75",
    title: "NADPH oxidase activity is required for ER stress survival in plants",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6289879/",
    year: 2018,
    category: "Plant Biology",
    keywords: ["NADPH oxidase", "ER stress", "plants"]
  },
  {
    id: "pub-76",
    title: "Relevance of the Unfolded Protein Response to Spaceflight-Induced Transcriptional Reprogramming in Arabidopsis",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7987364/",
    year: 2021,
    category: "Plant Biology",
    keywords: ["unfolded protein response", "spaceflight", "Arabidopsis"]
  },
  {
    id: "pub-77",
    title: "Reanalysis of the Mars500 experiment reveals common gut microbiome alterations in astronauts induced by long-duration confinement",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8099722/",
    year: 2021,
    category: "Microbiology",
    keywords: ["Mars500", "gut microbiome", "confinement"]
  },
  {
    id: "pub-78",
    title: "High atomic weight, high-energy radiation (HZE) induces transcriptional responses shared with conventional stresses in addition to a core DSB response specific to clastogenic treatments",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5116466/",
    year: 2016,
    category: "Radiation Biology",
    keywords: ["HZE radiation", "transcriptional response", "DSB"]
  },
  {
    id: "pub-79",
    title: "Genomic stability in response to high versus low linear energy transfer radiation in Arabidopsis thaliana",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4033213/",
    year: 2014,
    category: "Radiation Biology",
    keywords: ["genomic stability", "LET radiation", "Arabidopsis"]
  },
  {
    id: "pub-80",
    title: "Acceleration profiles and processing methods for parabolic flight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6081456/",
    year: 2018,
    category: "Space Biology",
    keywords: ["acceleration profiles", "parabolic flight"]
  },
  {
    id: "pub-81",
    title: "Cytoskeleton structure and total methylation of mouse cardiac and lung tissue during space flight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5955502/",
    year: 2018,
    category: "Space Biology",
    keywords: ["cytoskeleton", "methylation", "cardiac tissue", "spaceflight"]
  },
  {
    id: "pub-82",
    title: "Toward countering muscle and bone loss with spaceflight: GSK3 as a potential target",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10285634/",
    year: 2023,
    category: "Muscle & Movement",
    keywords: ["muscle loss", "bone loss", "GSK3", "countermeasure"]
  },
  {
    id: "pub-83",
    title: "Spaceflight increases sarcoplasmic reticulum Ca2+ leak and this cannot be counteracted with BuOE treatment",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11271499/",
    year: 2024,
    category: "Muscle & Movement",
    keywords: ["spaceflight", "calcium leak", "sarcoplasmic reticulum"]
  },
  {
    id: "pub-84",
    title: "Cardiovascular progenitor cells cultured aboard the International Space Station exhibit altered developmental and functional properties",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6062551/",
    year: 2018,
    category: "Stem Cells",
    keywords: ["cardiovascular", "progenitor cells", "ISS"]
  },
  {
    id: "pub-85",
    title: "Inter-agency perspective: Translating advances in biomarker discovery and medical countermeasures development between terrestrial and space radiation environments",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9832585/",
    year: 2023,
    category: "Radiation Biology",
    keywords: ["biomarkers", "countermeasures", "space radiation"]
  },
  {
    id: "pub-86",
    title: "Genomic and functional characterization of Enterococcus faecalis isolates recovered from the International Space Station and their potential for pathogenicity",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7829349/",
    year: 2021,
    category: "Microbiology",
    keywords: ["Enterococcus faecalis", "ISS", "pathogenicity"]
  },
  {
    id: "pub-87",
    title: "Evaluation of in vitro macrophage differentiation during space flight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3570223/",
    year: 2013,
    category: "Immunology",
    keywords: ["macrophage differentiation", "spaceflight", "in vitro"]
  },
  {
    id: "pub-88",
    title: "Identification of critical host mitochondrion-associated genes during Ehrlichia chaffeensis infections",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3457586/",
    year: 2012,
    category: "Microbiology",
    keywords: ["mitochondrion", "Ehrlichia chaffeensis", "infection"]
  },
  {
    id: "pub-89",
    title: "Ehrlichia chaffeensis replication sites in adult Drosophila melanogaster",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3558598/",
    year: 2013,
    category: "Microbiology",
    keywords: ["Ehrlichia", "Drosophila", "replication"]
  },
  {
    id: "pub-90",
    title: "Development and characterization of two porcine monocyte-derived macrophage cell lines",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11046949/",
    year: 2024,
    category: "Immunology",
    keywords: ["macrophage", "cell lines", "porcine"]
  },
  {
    id: "pub-91",
    title: "Understanding macrophage differentiation during space flight: The importance of ground-based experiments before space flight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3890248/",
    year: 2014,
    category: "Immunology",
    keywords: ["macrophage", "spaceflight", "ground-based experiments"]
  },
  {
    id: "pub-92",
    title: "Bone marrow leptin signaling mediates obesity-associated adipose tissue inflammation in male mice",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3868799/",
    year: 2013,
    category: "Metabolomics",
    keywords: ["leptin signaling", "obesity", "inflammation"]
  },
  {
    id: "pub-93",
    title: "Establishment and characterization of DB-1: a leptin receptor-deficient murine macrophage cell line",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4960141/",
    year: 2016,
    category: "Immunology",
    keywords: ["leptin receptor", "macrophage", "cell line"]
  },
  {
    id: "pub-94",
    title: "Validation of methods to assess the immunoglobulin gene repertoire in tissues obtained from mice on the International Space Station",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5736159/",
    year: 2017,
    category: "Immunology",
    keywords: ["immunoglobulin", "gene repertoire", "ISS"]
  },
  {
    id: "pub-95",
    title: "Characterization of the naive murine antibody repertoire using unamplified high-throughput sequencing",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5761896/",
    year: 2018,
    category: "Immunology",
    keywords: ["antibody repertoire", "sequencing", "murine"]
  },
  {
    id: "pub-96",
    title: "Effects of spaceflight on the immunoglobulin repertoire of unimmunized C57BL/6 mice",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5826609/",
    year: 2018,
    category: "Immunology",
    keywords: ["spaceflight", "immunoglobulin", "mice"]
  },
  {
    id: "pub-97",
    title: "A comparison of unamplified and massively multiplexed PCR amplification for murine antibody repertoire sequencing",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6366624/",
    year: 2019,
    category: "Immunology",
    keywords: ["PCR", "antibody repertoire", "sequencing"]
  },
  {
    id: "pub-98",
    title: "Effects of skeletal unloading on the antibody repertoire of tetanus toxoid and/or CpG treated C57BL/6J mice",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11929063/",
    year: 2024,
    category: "Immunology",
    keywords: ["skeletal unloading", "antibody", "mice"]
  },
  {
    id: "pub-99",
    title: "Effects of skeletal unloading on the bone marrow antibody repertoire of tetanus toxoid and/or CpG treated C57BL/6J mice",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11929063/",
    year: 2024,
    category: "Immunology",
    keywords: ["bone marrow", "antibody repertoire", "mice"]
  },
  {
    id: "pub-100",
    title: "An Analysis of the Effects of Spaceflight and Vaccination on Antibody Repertoire Diversity",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10996920/",
    year: 2024,
    category: "Immunology",
    keywords: ["spaceflight", "vaccination", "antibody diversity"]
  },
  {
    id: "pub-101",
    title: "Effects of spaceflight aboard the International Space Station on mouse estrous cycle and ovarian gene expression",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7954810/",
    year: 2021,
    category: "Human Physiology",
    keywords: ["ISS", "estrous cycle", "ovarian", "gene expression"]
  },
  {
    id: "pub-102",
    title: "Effect of spaceflight on Pseudomonas aeruginosa final cell density is modulated by nutrient and oxygen availability",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4228280/",
    year: 2014,
    category: "Microbiology",
    keywords: ["spaceflight", "Pseudomonas aeruginosa", "cell density"]
  },
  {
    id: "pub-103",
    title: "Spaceflight promotes biofilm formation by Pseudomonas aeruginosa",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3639165/",
    year: 2013,
    category: "Microbiology",
    keywords: ["spaceflight", "biofilm", "Pseudomonas aeruginosa"]
  },
  {
    id: "pub-104",
    title: "GeneLab: Omics database for spaceflight experiments",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8044432/",
    year: 2021,
    category: "Data Science",
    keywords: ["GeneLab", "omics", "database", "spaceflight"]
  },
  {
    id: "pub-105",
    title: "NASA GeneLab: Interfaces for the exploration of space omics data",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7778922/",
    year: 2020,
    category: "Data Science",
    keywords: ["GeneLab", "omics data", "exploration"]
  },
  {
    id: "pub-106",
    title: "Comprehensive multi-omics analysis reveals mitochondrial stress as a central biological hub for spaceflight impact",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7870178/",
    year: 2021,
    category: "Metabolomics",
    keywords: ["multi-omics", "mitochondrial stress", "spaceflight"]
  },
  {
    id: "pub-107",
    title: "A New Era for Space Life Science: International Standards for Space Omics Processing",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7733874/",
    year: 2020,
    category: "Data Science",
    keywords: ["standards", "omics processing", "space life science"]
  },
  {
    id: "pub-108",
    title: "Knowledge Network Embedding of Transcriptomic Data from Spaceflown Mice Uncovers Signs and Symptoms Associated with Terrestrial Diseases",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7828077/",
    year: 2021,
    category: "Data Science",
    keywords: ["knowledge network", "transcriptomic", "diseases"]
  },
  {
    id: "pub-109",
    title: "NASA GeneLab RNA-Seq Consensus Pipeline: Standardized Processing of Short-Read RNA-Seq Data",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8044432/",
    year: 2021,
    category: "Data Science",
    keywords: ["RNA-Seq", "pipeline", "GeneLab"]
  },
  {
    id: "pub-110",
    title: "Spatially resolved multiomics on the neuronal effects induced by spaceflight in mice",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11166911/",
    year: 2024,
    category: "Neuroscience",
    keywords: ["multiomics", "neuronal effects", "spaceflight"]
  },
  {
    id: "pub-111",
    title: "Biological horizons: pioneering open science in the cosmos",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11167097/",
    year: 2024,
    category: "Data Science",
    keywords: ["open science", "cosmos", "biological"]
  },
  {
    id: "pub-112",
    title: "Inspiration4 data access through the NASA Open Science Data Repository",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11094041/",
    year: 2024,
    category: "Data Science",
    keywords: ["Inspiration4", "data access", "open science"]
  },
  {
    id: "pub-113",
    title: "NASA GeneLab derived microarray studies of Mus musculus and Homo sapiens organisms in altered gravitational conditions",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11053165/",
    year: 2024,
    category: "Data Science",
    keywords: ["GeneLab", "microarray", "altered gravity"]
  },
  {
    id: "pub-114",
    title: "Celebrating 30 years of access to NASA space life sciences data",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11403809/",
    year: 2024,
    category: "Data Science",
    keywords: ["30 years", "space life sciences", "data access"]
  },
  {
    id: "pub-115",
    title: "Dichotomous effects on lymphatic transport with loss of caveolae in mice",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8513672/",
    year: 2021,
    category: "Cardiovascular",
    keywords: ["lymphatic transport", "caveolae", "mice"]
  },
  {
    id: "pub-116",
    title: "Fungal diversity differences in the indoor dust microbiome from built environments on Earth and in space",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11126634/",
    year: 2024,
    category: "Microbiology",
    keywords: ["fungal diversity", "microbiome", "ISS"]
  },
  {
    id: "pub-117",
    title: "Predicting how varying moisture conditions impact the microbiome of dust collected from the International Space Station",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11386075/",
    year: 2024,
    category: "Microbiology",
    keywords: ["moisture", "microbiome", "ISS dust"]
  },
  {
    id: "pub-118",
    title: "Aging and estrogen status: A possible endothelium-dependent vascular coupling mechanism in bone remodeling",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3502426/",
    year: 2012,
    category: "Bone & Skeletal",
    keywords: ["aging", "estrogen", "vascular coupling"]
  },
  {
    id: "pub-119",
    title: "Chronic skeletal unloading of the rat femur: mechanisms and functional consequences of vascular remodeling",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3856860/",
    year: 2013,
    category: "Bone & Skeletal",
    keywords: ["skeletal unloading", "vascular remodeling", "femur"]
  },
  {
    id: "pub-120",
    title: "Differential effects of aging and exercise on intra-abdominal adipose arteriolar function and blood flow regulation",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3615599/",
    year: 2013,
    category: "Cardiovascular",
    keywords: ["aging", "exercise", "blood flow"]
  },
  {
    id: "pub-121",
    title: "Effects of spaceflight and ground recovery on mesenteric artery and vein constrictor properties in mice",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4050424/",
    year: 2014,
    category: "Cardiovascular",
    keywords: ["spaceflight", "artery", "vein"]
  },
  {
    id: "pub-122",
    title: "Spaceflight-induced alterations in cerebral artery vasoconstrictor, mechanical, and structural properties: Implications for elevated cerebral perfusion and intracranial pressure",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3659353/",
    year: 2013,
    category: "Cardiovascular",
    keywords: ["cerebral artery", "spaceflight", "intracranial pressure"]
  },
  {
    id: "pub-123",
    title: "Exercise training augments regional bone and marrow blood flow during exercise",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4169763/",
    year: 2014,
    category: "Bone & Skeletal",
    keywords: ["exercise", "bone blood flow", "marrow"]
  },
  {
    id: "pub-124",
    title: "Effects of Skeletal Unloading on the Vasomotor Properties of the Rat Femur Principal Nutrient Artery",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4398884/",
    year: 2015,
    category: "Bone & Skeletal",
    keywords: ["skeletal unloading", "vasomotor", "nutrient artery"]
  },
  {
    id: "pub-125",
    title: "Type 2 diabetes alters bone and marrow blood flow and vascular control mechanisms in the ZDF rat",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4379453/",
    year: 2015,
    category: "Bone & Skeletal",
    keywords: ["diabetes", "bone blood flow", "vascular control"]
  },
  {
    id: "pub-126",
    title: "Spaceflight on the Bion-M1 biosatellite alters cerebral artery vasomotor and mechanical properties in mice",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4385880/",
    year: 2015,
    category: "Cardiovascular",
    keywords: ["Bion-M1", "cerebral artery", "spaceflight"]
  },
  {
    id: "pub-127",
    title: "Apollo Lunar Astronauts Show Higher Cardiovascular Disease Mortality: Possible Deep Space Radiation Effects on the Vascular Endothelium",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4964660/",
    year: 2016,
    category: "Cardiovascular",
    keywords: ["Apollo", "cardiovascular mortality", "space radiation"]
  },
  {
    id: "pub-128",
    title: "Effects of age and exercise training on coronary microvascular smooth muscle phenotype and function",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5866446/",
    year: 2018,
    category: "Cardiovascular",
    keywords: ["aging", "exercise", "coronary microvascular"]
  },
  {
    id: "pub-129",
    title: "Impact of Spaceflight and Artificial Gravity on the Mouse Retina: Biochemical and Proteomic Analysis",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6165321/",
    year: 2018,
    category: "Space Biology",
    keywords: ["spaceflight", "retina", "proteomic"]
  },
  {
    id: "pub-130",
    title: "Simulated microgravity induces regionally distinct neurovascular and structural remodeling of skeletal muscle and cutaneous arteries in the rat",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7339929/",
    year: 2020,
    category: "Cardiovascular",
    keywords: ["simulated microgravity", "neurovascular", "skeletal muscle"]
  },
  {
    id: "pub-131",
    title: "Spaceflight decelerates the epigenetic clock orchestrated with a global alteration in DNA methylome and transcriptome in the mouse retina",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8220224/",
    year: 2021,
    category: "Molecular Biology",
    keywords: ["spaceflight", "epigenetic clock", "DNA methylation"]
  },
  {
    id: "pub-132",
    title: "Development of otolith receptors in Japanese quail",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2910419/",
    year: 2010,
    category: "Space Biology",
    keywords: ["otolith", "receptors", "quail"]
  },
  {
    id: "pub-133",
    title: "Spatial and temporal characteristics of vestibular convergence",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3166430/",
    year: 2011,
    category: "Neuroscience",
    keywords: ["vestibular", "convergence", "spatial"]
  },
  {
    id: "pub-134",
    title: "Bone remodeling is regulated by inner ear vestibular signals",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6615562/",
    year: 2019,
    category: "Bone & Skeletal",
    keywords: ["bone remodeling", "vestibular signals", "inner ear"]
  },
  {
    id: "pub-135",
    title: "Simulated Microgravity Enhances Oligodendrocyte Mitochondrial Function and Lipid Metabolism",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7324008/",
    year: 2020,
    category: "Neuroscience",
    keywords: ["microgravity", "oligodendrocyte", "mitochondrial"]
  },
  {
    id: "pub-136",
    title: "Human Neural Stem Cells Flown into Space Proliferate and Generate Young Neurons",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8412175/",
    year: 2021,
    category: "Stem Cells",
    keywords: ["neural stem cells", "spaceflight", "neurons"]
  },
  {
    id: "pub-137",
    title: "Delayed Maturation of Oligodendrocyte Progenitors by Microgravity: Implications for Multiple Sclerosis and Space Flight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10607959/",
    year: 2023,
    category: "Neuroscience",
    keywords: ["oligodendrocyte", "microgravity", "multiple sclerosis"]
  },
  {
    id: "pub-138",
    title: "Space Microgravity Alters Neural Stem Cell Division: Implications for Brain Cancer Research on Earth and in Space",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9699585/",
    year: 2022,
    category: "Stem Cells",
    keywords: ["microgravity", "neural stem cells", "brain cancer"]
  },
  {
    id: "pub-139",
    title: "Oligodendrocyte Progenitors Display Enhanced Proliferation and Autophagy after Space Flight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9953055/",
    year: 2023,
    category: "Neuroscience",
    keywords: ["oligodendrocyte", "spaceflight", "autophagy"]
  },
  {
    id: "pub-140",
    title: "Metabolomics profile of the secretome of space-flown oligodendrocytes",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10528075/",
    year: 2023,
    category: "Metabolomics",
    keywords: ["metabolomics", "oligodendrocytes", "spaceflight"]
  },
  {
    id: "pub-141",
    title: "Metabolomic profiling of the secretome from human neural stem cells flown into space",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10813126/",
    year: 2024,
    category: "Metabolomics",
    keywords: ["metabolomic", "neural stem cells", "spaceflight"]
  },
  {
    id: "pub-142",
    title: "Strategies, research priorities, and challenges for the exploration of space beyond low-Earth orbit",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10390562/",
    year: 2023,
    category: "Space Biology",
    keywords: ["exploration", "research priorities", "deep space"]
  },
  {
    id: "pub-143",
    title: "Spaceflight Induces Specific Alterations in the Proteomes of Arabidopsis",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4290804/",
    year: 2015,
    category: "Plant Biology",
    keywords: ["spaceflight", "proteomes", "Arabidopsis"]
  },
  {
    id: "pub-144",
    title: "The effect of spaceflight on the gravity-sensing auxin gradient of roots: GFP reporter gene microscopy on orbit",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5515520/",
    year: 2017,
    category: "Plant Biology",
    keywords: ["spaceflight", "auxin gradient", "roots"]
  },
  {
    id: "pub-145",
    title: "Skewing in Arabidopsis roots involves disparate environmental signaling pathways",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5286820/",
    year: 2017,
    category: "Plant Biology",
    keywords: ["root skewing", "Arabidopsis", "signaling"]
  },
  {
    id: "pub-146",
    title: "Data for characterization of SALK_084889, a T-DNA insertion line of Arabidopsis thaliana",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5470433/",
    year: 2017,
    category: "Plant Biology",
    keywords: ["T-DNA", "Arabidopsis", "insertion line"]
  },
  {
    id: "pub-147",
    title: "Genetic dissection of the Arabidopsis spaceflight transcriptome: Are some responses dispensable for the physiological adaptation of plants to spaceflight?",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5491145/",
    year: 2017,
    category: "Plant Biology",
    keywords: ["transcriptome", "spaceflight", "Arabidopsis"]
  },
  {
    id: "pub-148",
    title: "Phenotypic characterization of an Arabidopsis T-DNA insertion line SALK_063500",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5996828/",
    year: 2018,
    category: "Plant Biology",
    keywords: ["T-DNA", "Arabidopsis", "phenotypic"]
  },
  {
    id: "pub-149",
    title: "Utilization of single-image normalized difference vegetation index (SI-NDVI) for early plant stress detection",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6201722/",
    year: 2018,
    category: "Plant Biology",
    keywords: ["NDVI", "plant stress", "detection"]
  },
  {
    id: "pub-150",
    title: "Comparing RNA-Seq and microarray gene expression data in two zones of the Arabidopsis root apex relevant to spaceflight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6240453/",
    year: 2018,
    category: "Plant Biology",
    keywords: ["RNA-Seq", "microarray", "Arabidopsis"]
  },
  {
    id: "pub-151",
    title: "Spaceflight-induced alternative splicing during seedling development in Arabidopsis thaliana",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6447593/",
    year: 2019,
    category: "Plant Biology",
    keywords: ["alternative splicing", "seedling", "spaceflight"]
  },
  {
    id: "pub-152",
    title: "The Plant Health Monitoring System of the EDEN ISS Space Greenhouse in Antarctica during the 2018 experiment phase",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7264257/",
    year: 2020,
    category: "Plant Biology",
    keywords: ["EDEN ISS", "greenhouse", "Antarctica"]
  },
  {
    id: "pub-153",
    title: "Root skewing-associated genes impact the spaceflight response of Arabidopsis thaliana",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7064724/",
    year: 2020,
    category: "Plant Biology",
    keywords: ["root skewing", "spaceflight", "Arabidopsis"]
  },
  {
    id: "pub-154",
    title: "Articular cartilage and sternal fibrocartilage respond differently to extended microgravity",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6379395/",
    year: 2019,
    category: "Bone & Skeletal",
    keywords: ["cartilage", "fibrocartilage", "microgravity"]
  },
  {
    id: "pub-155",
    title: "Host-microbe interactions in microgravity: assessment and implications",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4187166/",
    year: 2014,
    category: "Microbiology",
    keywords: ["host-microbe", "microgravity", "interactions"]
  },
  {
    id: "pub-156",
    title: "Environmental cues and symbiont microbe-associated molecular patterns function in concert to drive the daily remodelling of the crypt-cell brush border of the Euprymna scolopes light organ",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5219934/",
    year: 2017,
    category: "Microbiology",
    keywords: ["symbiont", "microbe", "Euprymna scolopes"]
  },
  {
    id: "pub-157",
    title: "Symbiotic organs shaped by distinct modes of genome evolution in cephalopods",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6386654/",
    year: 2019,
    category: "Model Organisms",
    keywords: ["symbiotic", "cephalopods", "genome evolution"]
  },
  {
    id: "pub-158",
    title: "Modeled microgravity alters lipopolysaccharide and outer membrane vesicle production of the beneficial symbiont Vibrio fischeri",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7940393/",
    year: 2021,
    category: "Microbiology",
    keywords: ["microgravity", "Vibrio fischeri", "symbiont"]
  },
  {
    id: "pub-159",
    title: "Emergence of novel cephalopod gene regulation and expression through large-scale genome reorganization",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9023564/",
    year: 2022,
    category: "Model Organisms",
    keywords: ["cephalopod", "gene regulation", "genome"]
  },
  {
    id: "pub-160",
    title: "Modeled microgravity alters apoptotic gene expression and caspase activity in the squid-vibrio symbiosis",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9389742/",
    year: 2022,
    category: "Microbiology",
    keywords: ["microgravity", "apoptotic", "squid-vibrio"]
  },
  {
    id: "pub-161",
    title: "In vitro generation of mechanically functional cartilage grafts based on adult human stem cells and 3D-woven poly(epsilon-caprolactone) scaffolds",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2824534/",
    year: 2010,
    category: "Stem Cells",
    keywords: ["cartilage grafts", "stem cells", "3D scaffolds"]
  },
  {
    id: "pub-162",
    title: "Chondrogenesis and mineralization during in vitro culture of human mesenchymal stem cells on three-dimensional woven scaffolds",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2991213/",
    year: 2010,
    category: "Stem Cells",
    keywords: ["chondrogenesis", "mesenchymal stem cells", "scaffolds"]
  },
  {
    id: "pub-163",
    title: "Microbiome metadata standards: Report of the National Microbiome Data Collaborative's workshop and follow-on activities",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8269219/",
    year: 2021,
    category: "Microbiology",
    keywords: ["microbiome", "metadata", "standards"]
  },
  {
    id: "pub-164",
    title: "Spaceflight alters host-gut microbiota interactions",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11362537/",
    year: 2024,
    category: "Microbiology",
    keywords: ["spaceflight", "gut microbiota", "host interactions"]
  },
  {
    id: "pub-165",
    title: "Asparagine biosynthesis as a mechanism of increased host lethality induced by Serratia marcescens in simulated microgravity environments",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9111996/",
    year: 2022,
    category: "Microbiology",
    keywords: ["Serratia marcescens", "microgravity", "asparagine"]
  },
  {
    id: "pub-166",
    title: "Comparative genomic analysis of Cohnella hashimotonis sp. nov. isolated from the International Space Station",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10308117/",
    year: 2023,
    category: "Microbiology",
    keywords: ["Cohnella", "ISS", "genomic analysis"]
  },
  {
    id: "pub-167",
    title: "Characterization of metagenome-assembled genomes from the International Space Station",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10233975/",
    year: 2023,
    category: "Microbiology",
    keywords: ["metagenome", "ISS", "genomes"]
  },
  {
    id: "pub-168",
    title: "Biocontrol in built environments to reduce pathogen exposure and infection risk",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10848226/",
    year: 2024,
    category: "Microbiology",
    keywords: ["biocontrol", "pathogen", "built environments"]
  },
  {
    id: "pub-169",
    title: "Extracellular nucleotides elicit cytosolic free calcium oscillations in Arabidopsis",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3329368/",
    year: 2012,
    category: "Plant Biology",
    keywords: ["nucleotides", "calcium", "Arabidopsis"]
  },
  {
    id: "pub-170",
    title: "Calcium, mechanical signaling, and tip growth",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12008199/",
    year: 2024,
    category: "Plant Biology",
    keywords: ["calcium", "mechanical signaling", "tip growth"]
  },
  {
    id: "pub-171",
    title: "Gravitropism and mechanical signaling in plants",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12008199/",
    year: 2024,
    category: "Plant Biology",
    keywords: ["gravitropism", "mechanical signaling", "plants"]
  },
  {
    id: "pub-172",
    title: "Salt stress-induced Ca2+ waves are associated with rapid, long-distance root-to-shoot signaling in plants",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4035928/",
    year: 2014,
    category: "Plant Biology",
    keywords: ["salt stress", "calcium waves", "signaling"]
  },
  {
    id: "pub-173",
    title: "Gravitropic signaling in plants",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12008199/",
    year: 2024,
    category: "Plant Biology",
    keywords: ["gravitropic", "signaling", "plants"]
  },
  {
    id: "pub-174",
    title: "Wortmannin-induced vacuole fusion enhances amyloplast dynamics in Arabidopsis zigzag1 hypocotyls",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5181587/",
    year: 2016,
    category: "Plant Biology",
    keywords: ["wortmannin", "vacuole fusion", "Arabidopsis"]
  },
  {
    id: "pub-175",
    title: "A ROS-assisted calcium wave dependent on AtRBOHD and TPC1 propagates the systemic response to salt stress in Arabidopsis roots",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4936552/",
    year: 2016,
    category: "Plant Biology",
    keywords: ["ROS", "calcium wave", "salt stress"]
  },
  {
    id: "pub-176",
    title: "ROS, calcium and electric signals: Key mediators of rapid systemic signaling in plants",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7610290/",
    year: 2020,
    category: "Plant Biology",
    keywords: ["ROS", "calcium", "electric signals"]
  },
  {
    id: "pub-177",
    title: "Real-time In Vivo Recording of Arabidopsis Calcium Signals During Insect Feeding Using a Fluorescent Biosensor",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5614317/",
    year: 2017,
    category: "Plant Biology",
    keywords: ["calcium signals", "biosensor", "Arabidopsis"]
  },
  {
    id: "pub-178",
    title: "Orchestrating rapid long-distance signaling in plants with Ca2+, ROS, and electrical signals",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5677518/",
    year: 2017,
    category: "Plant Biology",
    keywords: ["long-distance signaling", "calcium", "ROS"]
  },
  {
    id: "pub-179",
    title: "Glutamate triggers long-distance, calcium-based plant defense signaling",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11850895/",
    year: 2024,
    category: "Plant Biology",
    keywords: ["glutamate", "calcium", "defense signaling"]
  },
  {
    id: "pub-180",
    title: "Test of Arabidopsis Space Transcriptome: A discovery environment to explore multiple plant biology spaceflight experiments",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7076552/",
    year: 2020,
    category: "Plant Biology",
    keywords: ["transcriptome", "spaceflight", "Arabidopsis"]
  },
  {
    id: "pub-181",
    title: "Tonoplast-localized Ca2+ pumps regulate Ca2+ signals during pattern-triggered immunity in Arabidopsis thaliana",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7414185/",
    year: 2020,
    category: "Plant Biology",
    keywords: ["tonoplast", "calcium pumps", "immunity"]
  },
  {
    id: "pub-182",
    title: "The fast and the furious: Rapid long-range signaling in plants",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8133610/",
    year: 2021,
    category: "Plant Biology",
    keywords: ["rapid signaling", "long-range", "plants"]
  },
  {
    id: "pub-183",
    title: "Rad-Bio-App: A discovery environment for biologists to explore spaceflight-related radiation exposures",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8113475/",
    year: 2021,
    category: "Radiation Biology",
    keywords: ["Rad-Bio-App", "radiation", "spaceflight"]
  },
  {
    id: "pub-184",
    title: "The vacuolar H+/Ca transporter CAX1 participates in submergence and anoxia stress responses",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9706465/",
    year: 2022,
    category: "Plant Biology",
    keywords: ["CAX1", "vacuolar transporter", "stress response"]
  },
  {
    id: "pub-185",
    title: "Meta-analysis of the space flight and microgravity response of the Arabidopsis plant transcriptome",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10027818/",
    year: 2023,
    category: "Plant Biology",
    keywords: ["meta-analysis", "spaceflight", "transcriptome"]
  },
  {
    id: "pub-186",
    title: "Low-dose, ionizing radiation and age-related changes in skeletal microarchitecture",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3337602/",
    year: 2012,
    category: "Radiation Biology",
    keywords: ["ionizing radiation", "skeletal", "microarchitecture"]
  },
  {
    id: "pub-187",
    title: "Ionizing Radiation Stimulates Expression of Pro-Osteoclastogenic Genes in Marrow and Skeletal Tissue",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4490751/",
    year: 2015,
    category: "Radiation Biology",
    keywords: ["ionizing radiation", "osteoclastogenic", "skeletal"]
  },
  {
    id: "pub-188",
    title: "Preservation of Multiple Mammalian Tissues to Maximize Science Return from Ground Based and Spaceflight Experiments",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5132293/",
    year: 2016,
    category: "Space Biology",
    keywords: ["tissue preservation", "mammalian", "spaceflight"]
  },
  {
    id: "pub-189",
    title: "Hindlimb Unloading: Rodent Analog for Microgravity",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11747068/",
    year: 2024,
    category: "Space Biology",
    keywords: ["hindlimb unloading", "rodent", "microgravity"]
  },
  {
    id: "pub-190",
    title: "Redox Signaling and Its Impact on Skeletal and Vascular Responses to Spaceflight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5666834/",
    year: 2017,
    category: "Space Biology",
    keywords: ["redox signaling", "skeletal", "vascular"]
  },
  {
    id: "pub-191",
    title: "Influence of social isolation during prolonged simulated weightlessness by hindlimb unloading",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6753329/",
    year: 2019,
    category: "Space Biology",
    keywords: ["social isolation", "weightlessness", "hindlimb unloading"]
  },
  {
    id: "pub-192",
    title: "Validation of a new Rodent experimental System to investigate consequences of Long Duration Space Habitation",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7012842/",
    year: 2020,
    category: "Space Biology",
    keywords: ["rodent system", "space habitation", "validation"]
  },
  {
    id: "pub-193",
    title: "Skeletal tissue regulation by catalase over-expression in mitochondria",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4405755/",
    year: 2015,
    category: "Bone & Skeletal",
    keywords: ["catalase", "mitochondria", "skeletal tissue"]
  },
  {
    id: "pub-194",
    title: "Overexpression of catalase in mitochondria mitigates changes in hippocampal cytokine expression following simulated microgravity and isolation",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8260663/",
    year: 2021,
    category: "Neuroscience",
    keywords: ["catalase", "hippocampal", "microgravity"]
  },
  {
    id: "pub-195",
    title: "An extensive allelic series of Drosophila kae1 mutants reveals diverse and tissue-specific requirements for t6A biogenesis",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4647464/",
    year: 2015,
    category: "Model Organisms",
    keywords: ["Drosophila", "kae1", "t6A biogenesis"]
  },
  {
    id: "pub-196",
    title: "Novel Organelles with Elements of Bacterial and Eukaryotic Secretion Systems Weaponize Parasites of Drosophila",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5659752/",
    year: 2017,
    category: "Model Organisms",
    keywords: ["organelles", "Drosophila", "parasites"]
  },
  {
    id: "pub-197",
    title: "A combined computational strategy of sequence and structural analysis predicts the existence of a functional eicosanoid pathway in Drosophila melanogaster",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6372189/",
    year: 2019,
    category: "Model Organisms",
    keywords: ["eicosanoid pathway", "Drosophila", "computational"]
  },
  {
    id: "pub-198",
    title: "Immune suppressive extracellular vesicle proteins of Leptopilina heterotoma are encoded in the wasp genome",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6945029/",
    year: 2020,
    category: "Immunology",
    keywords: ["immune suppressive", "wasp", "extracellular vesicles"]
  },
  {
    id: "pub-199",
    title: "Spaceflight and simulated microgravity conditions increase virulence of Serratia marcescens in the Drosophila melanogaster infection model",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7000411/",
    year: 2020,
    category: "Microbiology",
    keywords: ["spaceflight", "Serratia marcescens", "virulence"]
  },
  {
    id: "pub-200",
    title: "A parasitoid wasp of Drosophila employs preemptive and reactive strategies to deplete its host's blood cells",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8191917/",
    year: 2021,
    category: "Model Organisms",
    keywords: ["parasitoid wasp", "Drosophila", "blood cells"]
  },
  {
    id: "pub-201",
    title: "In Silico Analysis of a Drosophila Parasitoid Venom Peptide Reveals Prevalence of the Cation-Polar-Cation Clip Motif in Knottin Proteins",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9865768/",
    year: 2023,
    category: "Model Organisms",
    keywords: ["Drosophila", "venom peptide", "in silico"]
  },
  {
    id: "pub-202",
    title: "Drosophila parasitoids go to space: Unexpected effects of spaceflight on hosts and their parasitoids",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10797188/",
    year: 2024,
    category: "Model Organisms",
    keywords: ["Drosophila", "parasitoids", "spaceflight"]
  },
  {
    id: "pub-203",
    title: "Simultaneous exposure of cultured human lymphoblastic cells to simulated microgravity and radiation increases chromosome aberrations",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7555395/",
    year: 2020,
    category: "Radiation Biology",
    keywords: ["microgravity", "radiation", "chromosome aberrations"]
  },
  {
    id: "pub-204",
    title: "Genes required for survival in microgravity revealed by genome-wide yeast deletion collections cultured during spaceflight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4309212/",
    year: 2015,
    category: "Model Organisms",
    keywords: ["yeast", "microgravity", "genome-wide"]
  },
  {
    id: "pub-205",
    title: "Physical Forces Modulate Oxidative Status and Stress Defense Meditated Metabolic Adaptation of Yeast Colonies: Spaceflight and Microgravity Simulations",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6560652/",
    year: 2019,
    category: "Model Organisms",
    keywords: ["yeast", "oxidative stress", "spaceflight"]
  },
  {
    id: "pub-206",
    title: "Effects of space flight on mouse liver versus kidney: Gene pathway analyses",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6321533/",
    year: 2019,
    category: "Space Biology",
    keywords: ["liver", "kidney", "gene pathways"]
  },
  {
    id: "pub-207",
    title: "Yeast in Space",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12040010/",
    year: 2024,
    category: "Model Organisms",
    keywords: ["yeast", "space", "model organism"]
  },
  {
    id: "pub-208",
    title: "Endocrine Effects of Space Flight",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11833055/",
    year: 2024,
    category: "Human Physiology",
    keywords: ["endocrine", "spaceflight", "effects"]
  },
  {
    id: "pub-209",
    title: "Role of shear stress on renal proximal tubular cells for nephrotoxicity assays",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9146534/",
    year: 2022,
    category: "Human Physiology",
    keywords: ["shear stress", "renal", "nephrotoxicity"]
  },
  {
    id: "pub-210",
    title: "Bone hemodynamic responses to changes in external pressure",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11492218/",
    year: 2024,
    category: "Bone & Skeletal",
    keywords: ["bone hemodynamic", "external pressure", "responses"]
  },
  {
    id: "pub-211",
    title: "Back pain in space and post-flight spine injury: Mechanisms and countermeasure development",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6339989/",
    year: 2019,
    category: "Human Physiology",
    keywords: ["back pain", "spine injury", "countermeasures"]
  },
  {
    id: "pub-212",
    title: "Fifteen days of microgravity causes growth in calvaria of mice",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4110898/",
    year: 2014,
    category: "Bone & Skeletal",
    keywords: ["microgravity", "calvaria", "bone growth"]
  },
  {
    id: "pub-213",
    title: "Altered disc compression in children with idiopathic low back pain: an upright magnetic resonance imaging backpack study",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3947616/",
    year: 2014,
    category: "Human Physiology",
    keywords: ["disc compression", "back pain", "MRI"]
  },
  {
    id: "pub-214",
    title: "Spaceflight-induced bone loss alters failure mode and reduces bending strength in murine spinal segments",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5477841/",
    year: 2017,
    category: "Bone & Skeletal",
    keywords: ["bone loss", "spaceflight", "spinal segments"]
  }
];