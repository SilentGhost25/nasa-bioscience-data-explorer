import { NextResponse } from 'next/server';
import { publications, categoryColors } from '@/data/publications';

// Generate comprehensive graph data from real NASA publications
const generateGraphData = () => {
  // Create nodes from publications
  const nodes = publications.map((pub, index) => {
    const categoryColor = categoryColors[pub.category as keyof typeof categoryColors] || '#6b5ce7';
    
    // Extract short label (first 3-5 words)
    const words = pub.title.split(' ');
    const label = words.slice(0, Math.min(4, words.length)).join(' ');
    
    return {
      id: index + 1,
      label: label,
      fullTitle: pub.title,
      link: pub.link,
      color: categoryColor,
      size: 6 + Math.random() * 6, // Random size between 6-12
      category: pub.category,
      keywords: pub.keywords,
    };
  });

  // Generate edges based on shared keywords and categories
  const edges: Array<{ from: number; to: number }> = [];
  const maxConnections = 15; // Limit connections per node
  const connectionCounts = new Map<number, number>();
  
  for (let i = 0; i < nodes.length; i++) {
    const node1 = nodes[i];
    const connectionsForNode = connectionCounts.get(node1.id) || 0;
    
    if (connectionsForNode >= maxConnections) continue;
    
    for (let j = i + 1; j < nodes.length; j++) {
      const node2 = nodes[j];
      const connectionsForNode2 = connectionCounts.get(node2.id) || 0;
      
      if (connectionsForNode2 >= maxConnections) continue;
      
      // Check for shared keywords
      const sharedKeywords = node1.keywords.filter(k1 => 
        node2.keywords.some(k2 => k1.toLowerCase() === k2.toLowerCase())
      );
      
      // Connect if:
      // 1. They share 2+ keywords (strong connection)
      // 2. They share 1 keyword and are in the same category
      // 3. Same category with random probability
      const shouldConnect = 
        sharedKeywords.length >= 2 ||
        (sharedKeywords.length === 1 && node1.category === node2.category) ||
        (node1.category === node2.category && Math.random() > 0.85);
      
      if (shouldConnect) {
        edges.push({ from: node1.id, to: node2.id });
        connectionCounts.set(node1.id, (connectionCounts.get(node1.id) || 0) + 1);
        connectionCounts.set(node2.id, (connectionCounts.get(node2.id) || 0) + 1);
        
        if ((connectionCounts.get(node1.id) || 0) >= maxConnections) break;
      }
    }
  }

  return {
    nodes,
    edges,
    totalPublications: publications.length,
  };
};

export async function GET() {
  try {
    const graphData = generateGraphData();
    
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