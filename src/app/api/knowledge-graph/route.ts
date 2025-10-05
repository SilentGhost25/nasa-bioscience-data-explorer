import { NextResponse } from 'next/server';

// Mock data for knowledge graph
// In production, this would come from a database or external API
const generateMockGraphData = () => {
  const categories = [
    { name: 'Musculoskeletal', color: '#ff6b6b', count: 45 },
    { name: 'Plant Biology', color: '#95e1d3', count: 38 },
    { name: 'Immunology', color: '#ffd93d', count: 32 },
    { name: 'Genetics', color: '#6b5ce7', count: 42 },
    { name: 'Microgravity', color: '#00d4ff', count: 35 },
    { name: 'Cellular', color: '#f78fb3', count: 28 },
  ];

  const publications = [
    { title: 'Effects of Microgravity on Bone Density', category: 'Musculoskeletal', keywords: ['bone loss', 'osteoporosis', 'calcium', 'exercise countermeasures'] },
    { title: 'Muscle Atrophy During Spaceflight', category: 'Musculoskeletal', keywords: ['muscle wasting', 'protein synthesis', 'resistance training'] },
    { title: 'Cardiovascular Adaptations in Space', category: 'Musculoskeletal', keywords: ['heart function', 'blood pressure', 'fluid shifts'] },
    { title: 'Plant Growth in Reduced Gravity', category: 'Plant Biology', keywords: ['photosynthesis', 'root systems', 'crop production'] },
    { title: 'Gene Expression Changes in Space', category: 'Genetics', keywords: ['DNA damage', 'gene regulation', 'epigenetics'] },
    { title: 'Immune System Dysregulation', category: 'Immunology', keywords: ['T-cells', 'inflammation', 'infection risk'] },
    { title: 'Radiation Effects on Human Cells', category: 'Cellular', keywords: ['DNA repair', 'cell death', 'cosmic rays'] },
    { title: 'Sleep Patterns in Microgravity', category: 'Microgravity', keywords: ['circadian rhythm', 'sleep quality', 'melatonin'] },
    { title: 'Vestibular Function Changes', category: 'Microgravity', keywords: ['balance', 'spatial orientation', 'motion sickness'] },
    { title: 'Protein Crystallization in Space', category: 'Genetics', keywords: ['structural biology', 'drug development', 'crystal quality'] },
    { title: 'Wound Healing in Reduced Gravity', category: 'Cellular', keywords: ['tissue repair', 'inflammation', 'healing time'] },
    { title: 'Bacterial Growth Patterns', category: 'Plant Biology', keywords: ['microbes', 'biofilms', 'antibiotic resistance'] },
    { title: 'Vision Changes During Spaceflight', category: 'Musculoskeletal', keywords: ['intracranial pressure', 'optic nerve', 'VIIP syndrome'] },
    { title: 'Stem Cell Behavior in Microgravity', category: 'Cellular', keywords: ['differentiation', 'regeneration', 'tissue engineering'] },
    { title: 'Plant Circadian Rhythms', category: 'Plant Biology', keywords: ['biological clock', 'light cycles', 'growth patterns'] },
    { title: 'Radiation Countermeasures', category: 'Immunology', keywords: ['shielding', 'antioxidants', 'protective agents'] },
    { title: 'Bone Remodeling Mechanisms', category: 'Musculoskeletal', keywords: ['osteoblasts', 'osteoclasts', 'bone formation'] },
    { title: 'Gene Therapy Applications', category: 'Genetics', keywords: ['CRISPR', 'genetic engineering', 'disease treatment'] },
    { title: 'Immune Cell Activation', category: 'Immunology', keywords: ['cytokines', 'immune response', 'cell signaling'] },
    { title: 'Cellular Aging in Space', category: 'Cellular', keywords: ['telomeres', 'oxidative stress', 'longevity'] },
  ];

  const nodes = publications.map((pub, index) => {
    const category = categories.find(c => c.name === pub.category)!;
    return {
      id: index + 1,
      label: pub.title.split(' ').slice(0, 3).join(' '),
      fullTitle: pub.title,
      link: `https://ntrs.nasa.gov/citations/${20230000000 + index}`,
      color: category.color,
      size: 8 + Math.random() * 4,
      category: pub.category,
      keywords: pub.keywords,
    };
  });

  // Generate edges based on shared keywords
  const edges: Array<{ from: number; to: number }> = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const node1 = nodes[i];
      const node2 = nodes[j];
      
      // Check for shared keywords or same category
      const hasSharedKeyword = node1.keywords.some(k1 => 
        node2.keywords.some(k2 => k1 === k2)
      );
      
      if (hasSharedKeyword || (node1.category === node2.category && Math.random() > 0.7)) {
        edges.push({ from: node1.id, to: node2.id });
      }
    }
  }

  return {
    nodes,
    edges,
    totalPublications: 608,
  };
};

export async function GET() {
  try {
    const graphData = generateMockGraphData();
    
    return NextResponse.json(graphData, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error generating knowledge graph data:', error);
    return NextResponse.json(
      { error: 'Failed to load knowledge graph data' },
      { status: 500 }
    );
  }
}