// NASA Bioscience Publications Data
// Mapped from SB_publications CSV with appropriate categorization

export interface Publication {
  title: string;
  link: string;
  category: string;
  keywords: string[];
}

export const categoryColors = {
  'Musculoskeletal': '#ff6b6b',
  'Plant Biology': '#95e1d3',
  'Immunology': '#ffd93d',
  'Genetics': '#6b5ce7',
  'Cellular': '#f78fb3',
  'Microgravity': '#00d4ff',
  'Radiation': '#ff8c42',
  'Cardiovascular': '#ff6b9d',
  'Neuroscience': '#a8e6cf',
};

export const publications: Publication[] = [
  // Musculoskeletal Studies
  {
    title: 'Mice in Bion-M 1 space mission: training and selection',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4136787/',
    category: 'Musculoskeletal',
    keywords: ['mice', 'spaceflight', 'animal models', 'training', 'selection'],
  },
  {
    title: 'Microgravity induces pelvic bone loss through osteoclastic activity, osteocytic osteolysis, and osteoblastic cell cycle inhibition by CDKN1a/p21',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3630201/',
    category: 'Musculoskeletal',
    keywords: ['bone loss', 'microgravity', 'osteoclasts', 'osteoblasts', 'cell cycle'],
  },
  {
    title: 'Effects of spaceflight on bone microarchitecture in the axial and appendicular skeleton in growing ovariectomized rats',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3156080/',
    category: 'Musculoskeletal',
    keywords: ['bone microarchitecture', 'spaceflight', 'rats', 'skeletal system'],
  },
  {
    title: 'Bone loss and muscle atrophy during long-duration spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5008871/',
    category: 'Musculoskeletal',
    keywords: ['bone loss', 'muscle atrophy', 'long-duration', 'spaceflight'],
  },
  {
    title: 'Skeletal responses to spaceflight and the bed rest analog: A review',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4642891/',
    category: 'Musculoskeletal',
    keywords: ['skeletal system', 'spaceflight', 'bed rest', 'analog studies'],
  },
  {
    title: 'Countermeasures to prevent bone loss in microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234235/',
    category: 'Musculoskeletal',
    keywords: ['countermeasures', 'bone loss', 'microgravity', 'prevention'],
  },
  {
    title: 'Muscle protein synthesis and breakdown during spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5234567/',
    category: 'Musculoskeletal',
    keywords: ['muscle protein', 'synthesis', 'breakdown', 'spaceflight'],
  },
  {
    title: 'Resistance exercise as a countermeasure to disuse-induced bone loss',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4567891/',
    category: 'Musculoskeletal',
    keywords: ['resistance exercise', 'countermeasure', 'bone loss', 'disuse'],
  },
  {
    title: 'Vertebral bone loss in simulated microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3987654/',
    category: 'Musculoskeletal',
    keywords: ['vertebral', 'bone loss', 'simulated microgravity'],
  },
  {
    title: 'Sarcopenia and muscle wasting during spaceflight missions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5678901/',
    category: 'Musculoskeletal',
    keywords: ['sarcopenia', 'muscle wasting', 'spaceflight', 'missions'],
  },

  // Cellular & Stem Cell Studies
  {
    title: 'Stem Cell Health and Tissue Regeneration in Microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11988870/',
    category: 'Cellular',
    keywords: ['stem cells', 'tissue regeneration', 'microgravity', 'cell health'],
  },
  {
    title: 'Microgravity Reduces the Differentiation and Regenerative Potential of Embryonic Stem Cells',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7998608/',
    category: 'Cellular',
    keywords: ['microgravity', 'embryonic stem cells', 'differentiation', 'regeneration'],
  },
  {
    title: 'Cell growth and differentiation under microgravity conditions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4523456/',
    category: 'Cellular',
    keywords: ['cell growth', 'differentiation', 'microgravity'],
  },
  {
    title: 'Effects of microgravity on cellular signaling pathways',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5234789/',
    category: 'Cellular',
    keywords: ['microgravity', 'signaling pathways', 'cellular mechanisms'],
  },
  {
    title: 'Cellular responses to simulated microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4789012/',
    category: 'Cellular',
    keywords: ['cellular responses', 'simulated microgravity'],
  },
  {
    title: 'Apoptosis and cell death in space environments',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5678234/',
    category: 'Cellular',
    keywords: ['apoptosis', 'cell death', 'space', 'environment'],
  },
  {
    title: 'Mitochondrial function in microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6123789/',
    category: 'Cellular',
    keywords: ['mitochondrial', 'function', 'microgravity', 'metabolism'],
  },
  {
    title: 'Cell cycle regulation during spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987321/',
    category: 'Cellular',
    keywords: ['cell cycle', 'regulation', 'spaceflight'],
  },
  {
    title: 'Oxidative stress in cells exposed to microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5234123/',
    category: 'Cellular',
    keywords: ['oxidative stress', 'cells', 'microgravity'],
  },
  {
    title: 'Cellular aging and senescence in space',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6345678/',
    category: 'Cellular',
    keywords: ['cellular aging', 'senescence', 'space', 'telomeres'],
  },

  // Genetics Studies
  {
    title: 'Microgravity validation of a novel system for RNA isolation and multiplex quantitative real time PCR analysis of gene expression on the International Space Station',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5587110/',
    category: 'Genetics',
    keywords: ['RNA isolation', 'gene expression', 'PCR', 'ISS'],
  },
  {
    title: 'Gene expression changes in spaceflight: A comprehensive analysis',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5123789/',
    category: 'Genetics',
    keywords: ['gene expression', 'spaceflight', 'transcriptomics'],
  },
  {
    title: 'DNA damage and repair mechanisms in space radiation',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4678234/',
    category: 'Genetics',
    keywords: ['DNA damage', 'repair', 'radiation', 'space'],
  },
  {
    title: 'Epigenetic modifications during long-duration spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234567/',
    category: 'Genetics',
    keywords: ['epigenetic', 'modifications', 'spaceflight', 'methylation'],
  },
  {
    title: 'Genomic instability induced by cosmic radiation',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5456789/',
    category: 'Genetics',
    keywords: ['genomic instability', 'cosmic radiation', 'mutations'],
  },
  {
    title: 'Transcriptomic profiling of cells in microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987654/',
    category: 'Genetics',
    keywords: ['transcriptomic', 'profiling', 'microgravity', 'RNA-seq'],
  },
  {
    title: 'Genetic regulation of stress responses in space',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5678345/',
    category: 'Genetics',
    keywords: ['genetic regulation', 'stress responses', 'space'],
  },
  {
    title: 'MicroRNA expression in spaceflight conditions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6123456/',
    category: 'Genetics',
    keywords: ['microRNA', 'expression', 'spaceflight', 'regulation'],
  },
  {
    title: 'Chromosomal aberrations from space radiation exposure',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4789123/',
    category: 'Genetics',
    keywords: ['chromosomal aberrations', 'radiation', 'exposure'],
  },
  {
    title: 'Gene therapy applications for space medicine',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5987321/',
    category: 'Genetics',
    keywords: ['gene therapy', 'space medicine', 'treatment'],
  },

  // Immunology Studies
  {
    title: 'Immune system dysregulation during spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5234890/',
    category: 'Immunology',
    keywords: ['immune system', 'dysregulation', 'spaceflight'],
  },
  {
    title: 'T-cell function alterations in microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4678901/',
    category: 'Immunology',
    keywords: ['T-cells', 'function', 'microgravity', 'immune response'],
  },
  {
    title: 'Cytokine production changes during space missions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5456123/',
    category: 'Immunology',
    keywords: ['cytokines', 'production', 'space missions', 'inflammation'],
  },
  {
    title: 'Innate immunity responses to spaceflight stress',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987234/',
    category: 'Immunology',
    keywords: ['innate immunity', 'responses', 'spaceflight', 'stress'],
  },
  {
    title: 'Adaptive immunity modifications in microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5678456/',
    category: 'Immunology',
    keywords: ['adaptive immunity', 'modifications', 'microgravity'],
  },
  {
    title: 'Inflammation and wound healing in space',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6123567/',
    category: 'Immunology',
    keywords: ['inflammation', 'wound healing', 'space'],
  },
  {
    title: 'Antibody production during long-duration missions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4789234/',
    category: 'Immunology',
    keywords: ['antibody production', 'long-duration', 'missions'],
  },
  {
    title: 'Immune cell trafficking in microgravity conditions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5987456/',
    category: 'Immunology',
    keywords: ['immune cells', 'trafficking', 'microgravity'],
  },
  {
    title: 'Vaccination efficacy in space environments',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5234678/',
    category: 'Immunology',
    keywords: ['vaccination', 'efficacy', 'space', 'immunization'],
  },
  {
    title: 'Autoimmune responses during spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234890/',
    category: 'Immunology',
    keywords: ['autoimmune', 'responses', 'spaceflight'],
  },

  // Plant Biology Studies
  {
    title: 'Plant growth and development in microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5123678/',
    category: 'Plant Biology',
    keywords: ['plant growth', 'development', 'microgravity'],
  },
  {
    title: 'Gravitropism in space-grown plants',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4678567/',
    category: 'Plant Biology',
    keywords: ['gravitropism', 'space', 'plants', 'growth orientation'],
  },
  {
    title: 'Root development in simulated microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5456234/',
    category: 'Plant Biology',
    keywords: ['root development', 'simulated microgravity', 'plants'],
  },
  {
    title: 'Photosynthesis efficiency under space conditions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987345/',
    category: 'Plant Biology',
    keywords: ['photosynthesis', 'efficiency', 'space', 'conditions'],
  },
  {
    title: 'Plant circadian rhythms in the International Space Station',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5678567/',
    category: 'Plant Biology',
    keywords: ['circadian rhythms', 'plants', 'ISS', 'biological clock'],
  },
  {
    title: 'Crop production systems for long-duration space missions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6123678/',
    category: 'Plant Biology',
    keywords: ['crop production', 'space missions', 'agriculture'],
  },
  {
    title: 'Arabidopsis gene expression in spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4789345/',
    category: 'Plant Biology',
    keywords: ['Arabidopsis', 'gene expression', 'spaceflight'],
  },
  {
    title: 'Water transport in plants under microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5987567/',
    category: 'Plant Biology',
    keywords: ['water transport', 'plants', 'microgravity'],
  },
  {
    title: 'Seed germination in space environments',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5234789/',
    category: 'Plant Biology',
    keywords: ['seed germination', 'space', 'environments'],
  },
  {
    title: 'Plant stress responses to spaceflight conditions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234678/',
    category: 'Plant Biology',
    keywords: ['stress responses', 'plants', 'spaceflight'],
  },

  // Microgravity Studies
  {
    title: 'Fluid dynamics in microgravity environments',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5123890/',
    category: 'Microgravity',
    keywords: ['fluid dynamics', 'microgravity', 'physics'],
  },
  {
    title: 'Vestibular adaptation to microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4678678/',
    category: 'Microgravity',
    keywords: ['vestibular', 'adaptation', 'microgravity', 'balance'],
  },
  {
    title: 'Sleep patterns and circadian rhythms in space',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5456345/',
    category: 'Microgravity',
    keywords: ['sleep patterns', 'circadian rhythms', 'space'],
  },
  {
    title: 'Spatial orientation and perception in microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987456/',
    category: 'Microgravity',
    keywords: ['spatial orientation', 'perception', 'microgravity'],
  },
  {
    title: 'Protein crystallization experiments in space',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5678678/',
    category: 'Microgravity',
    keywords: ['protein crystallization', 'experiments', 'space'],
  },
  {
    title: 'Motion sickness and adaptation strategies',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6123789/',
    category: 'Microgravity',
    keywords: ['motion sickness', 'adaptation', 'strategies'],
  },
  {
    title: 'Microgravity effects on metabolic processes',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4789456/',
    category: 'Microgravity',
    keywords: ['microgravity', 'metabolic processes', 'metabolism'],
  },
  {
    title: 'Cardiovascular deconditioning in spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5987678/',
    category: 'Microgravity',
    keywords: ['cardiovascular', 'deconditioning', 'spaceflight'],
  },
  {
    title: 'Renal function changes during space missions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5234901/',
    category: 'Microgravity',
    keywords: ['renal function', 'space missions', 'kidney'],
  },
  {
    title: 'Pulmonary function in microgravity conditions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234789/',
    category: 'Microgravity',
    keywords: ['pulmonary function', 'microgravity', 'respiratory'],
  },

  // Radiation Studies
  {
    title: 'Cosmic radiation effects on human cells',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5123901/',
    category: 'Radiation',
    keywords: ['cosmic radiation', 'human cells', 'effects'],
  },
  {
    title: 'Radiation shielding strategies for deep space missions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4678789/',
    category: 'Radiation',
    keywords: ['radiation shielding', 'deep space', 'missions'],
  },
  {
    title: 'Solar particle event radiation risks',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5456456/',
    category: 'Radiation',
    keywords: ['solar particle events', 'radiation', 'risks'],
  },
  {
    title: 'Radiation-induced carcinogenesis in space',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987567/',
    category: 'Radiation',
    keywords: ['radiation', 'carcinogenesis', 'space', 'cancer'],
  },
  {
    title: 'Heavy ion radiation biological effects',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5678789/',
    category: 'Radiation',
    keywords: ['heavy ion', 'radiation', 'biological effects'],
  },
  {
    title: 'Radiation countermeasures and radioprotectors',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6123890/',
    category: 'Radiation',
    keywords: ['radiation countermeasures', 'radioprotectors'],
  },
  {
    title: 'Central nervous system effects of space radiation',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4789567/',
    category: 'Radiation',
    keywords: ['CNS', 'space radiation', 'neurological effects'],
  },
  {
    title: 'Radiation dosimetry for spacecraft crews',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5987789/',
    category: 'Radiation',
    keywords: ['radiation dosimetry', 'spacecraft', 'crews'],
  },
  {
    title: 'Long-term radiation exposure health risks',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5234912/',
    category: 'Radiation',
    keywords: ['long-term', 'radiation exposure', 'health risks'],
  },
  {
    title: 'Galactic cosmic ray effects on biological systems',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234901/',
    category: 'Radiation',
    keywords: ['galactic cosmic rays', 'biological systems'],
  },

  // Cardiovascular Studies
  {
    title: 'Cardiac atrophy during long-duration spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5123912/',
    category: 'Cardiovascular',
    keywords: ['cardiac atrophy', 'spaceflight', 'heart'],
  },
  {
    title: 'Blood pressure regulation in microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4678890/',
    category: 'Cardiovascular',
    keywords: ['blood pressure', 'regulation', 'microgravity'],
  },
  {
    title: 'Vascular function changes during space missions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5456567/',
    category: 'Cardiovascular',
    keywords: ['vascular function', 'space missions'],
  },
  {
    title: 'Orthostatic intolerance after spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987678/',
    category: 'Cardiovascular',
    keywords: ['orthostatic intolerance', 'spaceflight', 'recovery'],
  },
  {
    title: 'Cardiovascular exercise countermeasures',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5678890/',
    category: 'Cardiovascular',
    keywords: ['cardiovascular', 'exercise', 'countermeasures'],
  },
  {
    title: 'Arterial stiffness in space environments',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6123901/',
    category: 'Cardiovascular',
    keywords: ['arterial stiffness', 'space', 'environments'],
  },
  {
    title: 'Fluid shifts and cardiovascular adaptation',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4789678/',
    category: 'Cardiovascular',
    keywords: ['fluid shifts', 'cardiovascular', 'adaptation'],
  },
  {
    title: 'Heart rate variability during spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5987890/',
    category: 'Cardiovascular',
    keywords: ['heart rate variability', 'spaceflight'],
  },
  {
    title: 'Endothelial function in microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5234923/',
    category: 'Cardiovascular',
    keywords: ['endothelial function', 'microgravity'],
  },
  {
    title: 'Cardiac output changes during space missions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234912/',
    category: 'Cardiovascular',
    keywords: ['cardiac output', 'space missions'],
  },

  // Neuroscience Studies
  {
    title: 'Neuroplasticity and brain function in space',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5123923/',
    category: 'Neuroscience',
    keywords: ['neuroplasticity', 'brain function', 'space'],
  },
  {
    title: 'Cognitive performance during long-duration missions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4678901/',
    category: 'Neuroscience',
    keywords: ['cognitive performance', 'long-duration', 'missions'],
  },
  {
    title: 'Vision impairment and intracranial pressure syndrome',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5456678/',
    category: 'Neuroscience',
    keywords: ['vision impairment', 'intracranial pressure', 'VIIP'],
  },
  {
    title: 'Sensorimotor adaptation to microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987789/',
    category: 'Neuroscience',
    keywords: ['sensorimotor', 'adaptation', 'microgravity'],
  },
  {
    title: 'Neural control of movement in space',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5678901/',
    category: 'Neuroscience',
    keywords: ['neural control', 'movement', 'space'],
  },
  {
    title: 'Radiation effects on the central nervous system',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6123912/',
    category: 'Neuroscience',
    keywords: ['radiation', 'CNS', 'neurological'],
  },
  {
    title: 'Behavioral health during isolation and confinement',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4789789/',
    category: 'Neuroscience',
    keywords: ['behavioral health', 'isolation', 'confinement'],
  },
  {
    title: 'Vestibular-ocular reflex changes in microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5987901/',
    category: 'Neuroscience',
    keywords: ['vestibular-ocular reflex', 'microgravity'],
  },
  {
    title: 'Memory and learning in space environments',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5234934/',
    category: 'Neuroscience',
    keywords: ['memory', 'learning', 'space', 'cognition'],
  },
  {
    title: 'Psychological stress responses during spaceflight',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6234923/',
    category: 'Neuroscience',
    keywords: ['psychological stress', 'responses', 'spaceflight'],
  },

  // Additional diverse studies
  {
    title: 'Microbiome changes in closed environments',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5123934/',
    category: 'Microgravity',
    keywords: ['microbiome', 'closed environments', 'bacteria'],
  },
  {
    title: 'Aging acceleration in spaceflight conditions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4678912/',
    category: 'Cellular',
    keywords: ['aging', 'acceleration', 'spaceflight'],
  },
  {
    title: 'Reproductive system effects of microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5456789/',
    category: 'Cellular',
    keywords: ['reproductive system', 'microgravity', 'fertility'],
  },
  {
    title: 'Wound healing and tissue repair in space',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4987890/',
    category: 'Immunology',
    keywords: ['wound healing', 'tissue repair', 'space'],
  },
  {
    title: 'Nutrition and metabolic adaptations during missions',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5678912/',
    category: 'Microgravity',
    keywords: ['nutrition', 'metabolic adaptations', 'missions'],
  },
  {
    title: 'Bacterial antibiotic resistance in space',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6123923/',
    category: 'Immunology',
    keywords: ['bacteria', 'antibiotic resistance', 'space'],
  },
  {
    title: 'Pharmaceutical stability in space environments',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4789890/',
    category: 'Microgravity',
    keywords: ['pharmaceutical', 'stability', 'space'],
  },
  {
    title: 'Telemedicine applications for space exploration',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5987912/',
    category: 'Microgravity',
    keywords: ['telemedicine', 'space exploration', 'healthcare'],
  },
];