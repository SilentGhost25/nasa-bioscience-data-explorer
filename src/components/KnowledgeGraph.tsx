'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styles from '@/app/page.module.css';

interface Node {
  id: number;
  label: string;
  fullTitle: string;
  link: string;
  color: string;
  size: number;
  category: string;
  keywords: string[];
}

interface Edge {
  from: number;
  to: number;
}

interface GraphData {
  nodes: Node[];
  edges: Edge[];
  totalPublications: number;
}

export default function KnowledgeGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const nodeObjectsRef = useRef<THREE.Mesh[]>([]);
  const edgeLinesRef = useRef<THREE.Line[]>([]);
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadGraphData();
  }, []);

  useEffect(() => {
    if (!containerRef.current || !graphData) return;

    initializeGraph();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [graphData, filterCategory]);

  const loadGraphData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/knowledge-graph');
      const data = await response.json();
      setGraphData(data);
    } catch (error) {
      console.error('Error loading graph data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const initializeGraph = () => {
    if (!containerRef.current || !graphData) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = 600;

    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    sceneRef.current = scene;

    // Setup camera with better FOV for smoother experience
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.z = 200;
    cameraRef.current = camera;

    // Setup renderer with antialiasing for smoothness
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 800);
    pointLight.position.set(100, 100, 100);
    scene.add(pointLight);

    const backLight = new THREE.PointLight(0x6b5ce7, 0.5, 800);
    backLight.position.set(-100, -100, -100);
    scene.add(backLight);

    // Create particle system
    createParticles(scene);

    // Filter nodes by category
    const filteredNodes = filterCategory === 'all' 
      ? graphData.nodes 
      : graphData.nodes.filter(n => n.category.toLowerCase().includes(filterCategory.toLowerCase()));

    // Create nodes with better distribution
    const nodeObjects: THREE.Mesh[] = [];
    const radius = Math.min(100 + filteredNodes.length * 0.5, 250);
    
    filteredNodes.forEach((node, index) => {
      const color = new THREE.Color(node.color);
      const size = node.size / 4;

      // Create node with smooth geometry
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.4,
        shininess: 100,
        transparent: true,
        opacity: 0.9
      });
      const sphere = new THREE.Mesh(geometry, material);

      // Better 3D positioning - spherical distribution
      const phi = Math.acos(-1 + (2 * index) / filteredNodes.length);
      const theta = Math.sqrt(filteredNodes.length * Math.PI) * phi;
      
      sphere.position.set(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );

      // Add outer glow
      const glowGeometry = new THREE.SphereGeometry(size * 1.4, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.15,
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      sphere.add(glow);

      sphere.userData = node;
      scene.add(sphere);
      nodeObjects.push(sphere);
    });

    nodeObjectsRef.current = nodeObjects;

    // Create edges with smooth curves
    const edgeLines: THREE.Line[] = [];
    graphData.edges.forEach((edge) => {
      const fromNodeFiltered = filteredNodes.findIndex(n => n.id === edge.from);
      const toNodeFiltered = filteredNodes.findIndex(n => n.id === edge.to);
      
      if (fromNodeFiltered === -1 || toNodeFiltered === -1) return;
      
      const fromNode = nodeObjects[fromNodeFiltered];
      const toNode = nodeObjects[toNodeFiltered];

      if (fromNode && toNode) {
        // Create curved line for smoother look
        const start = fromNode.position.clone();
        const end = toNode.position.clone();
        const mid = new THREE.Vector3()
          .addVectors(start, end)
          .multiplyScalar(0.5)
          .add(new THREE.Vector3(0, 0, 0).randomDirection().multiplyScalar(10));
        
        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const points = curve.getPoints(20);
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: 0x2a3f5f,
          opacity: 0.3,
          transparent: true,
          linewidth: 1,
        });
        const line = new THREE.Line(geometry, material);
        line.userData = { from: edge.from, to: edge.to };
        scene.add(line);
        edgeLines.push(line);
      }
    });
    edgeLinesRef.current = edgeLines;

    // Mouse interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    renderer.domElement.addEventListener('mousedown', () => {
      isDragging = true;
      renderer.domElement.style.cursor = 'grabbing';
    });

    renderer.domElement.addEventListener('mousemove', (e) => {
      // Update mouse position for raycasting
      const rect = renderer.domElement.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / height) * 2 + 1;

      setTooltipPosition({ x: e.clientX, y: e.clientY });

      if (isDragging) {
        const deltaX = e.offsetX - previousMousePosition.x;
        const deltaY = e.offsetY - previousMousePosition.y;

        scene.rotation.y += deltaX * 0.005;
        scene.rotation.x += deltaY * 0.005;
      }

      previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY,
      };
    });

    renderer.domElement.addEventListener('mouseup', () => {
      isDragging = false;
      renderer.domElement.style.cursor = 'grab';
    });

    // Click to select node
    renderer.domElement.addEventListener('click', (e) => {
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(nodeObjects);
      
      if (intersects.length > 0) {
        const clickedNode = intersects[0].object.userData as Node;
        setSelectedNode(clickedNode);
        highlightConnections(clickedNode.id);
        focusOnNode(intersects[0].object);
      } else {
        setSelectedNode(null);
        resetHighlights();
      }
    });

    // Hover effect
    renderer.domElement.addEventListener('mousemove', () => {
      if (isDragging) return;
      
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(nodeObjects);
      
      if (intersects.length > 0) {
        const hoveredNodeData = intersects[0].object.userData as Node;
        setHoveredNode(hoveredNodeData);
        renderer.domElement.style.cursor = 'pointer';
      } else {
        setHoveredNode(null);
        renderer.domElement.style.cursor = isDragging ? 'grabbing' : 'grab';
      }
    });

    // Smooth zoom with mouse wheel
    renderer.domElement.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomSpeed = 0.05;
      const delta = e.deltaY > 0 ? 1 : -1;
      const targetZ = camera.position.z + delta * zoomSpeed * 20;
      camera.position.z = Math.max(80, Math.min(400, targetZ));
    }, { passive: false });

    // Animation loop with smooth transitions
    let time = 0;
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Smooth auto rotate
      if (autoRotate && !isDragging) {
        scene.rotation.y += 0.001;
      }

      // Smooth pulse for selected node
      if (selectedNode) {
        const selected = nodeObjects.find(n => n.userData.id === selectedNode.id);
        if (selected) {
          const scale = 1 + Math.sin(time * 2) * 0.15;
          selected.scale.set(scale, scale, scale);
        }
      }

      // Animate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0003;
        particlesRef.current.rotation.x += 0.0001;
      }

      // Subtle pulse for all nodes
      nodeObjects.forEach((node, i) => {
        if (node.userData.id !== selectedNode?.id) {
          const basePulse = Math.sin(time + i * 0.3) * 0.03;
          node.scale.set(1 + basePulse, 1 + basePulse, 1 + basePulse);
        }
      });

      renderer.render(scene, camera);
    };

    animate();
  };

  const createParticles = (scene: THREE.Scene) => {
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 600;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesRef.current = particles;
    scene.add(particles);
  };

  const highlightConnections = (nodeId: number) => {
    // Reset all edges
    edgeLinesRef.current.forEach(line => {
      (line.material as THREE.LineBasicMaterial).opacity = 0.05;
      (line.material as THREE.LineBasicMaterial).color.set(0x2a3f5f);
    });

    // Highlight connected edges
    edgeLinesRef.current.forEach(line => {
      if (line.userData.from === nodeId || line.userData.to === nodeId) {
        (line.material as THREE.LineBasicMaterial).opacity = 0.7;
        (line.material as THREE.LineBasicMaterial).color.set(0x00d4ff);
      }
    });

    // Dim non-connected nodes
    nodeObjectsRef.current.forEach(node => {
      const isConnected = edgeLinesRef.current.some(line => 
        (line.userData.from === nodeId && line.userData.to === node.userData.id) ||
        (line.userData.to === nodeId && line.userData.from === node.userData.id) ||
        node.userData.id === nodeId
      );
      
      (node.material as THREE.MeshPhongMaterial).opacity = isConnected ? 0.9 : 0.2;
    });
  };

  const resetHighlights = () => {
    edgeLinesRef.current.forEach(line => {
      (line.material as THREE.LineBasicMaterial).opacity = 0.3;
      (line.material as THREE.LineBasicMaterial).color.set(0x2a3f5f);
    });

    nodeObjectsRef.current.forEach(node => {
      (node.material as THREE.MeshPhongMaterial).opacity = 0.9;
      node.scale.set(1, 1, 1);
    });
  };

  const focusOnNode = (node: THREE.Object3D) => {
    if (!cameraRef.current) return;
    
    const targetPosition = node.position.clone();
    const camera = cameraRef.current;
    
    // Smooth camera transition
    const startPosition = camera.position.clone();
    const direction = targetPosition.clone().sub(startPosition).normalize();
    const endPosition = targetPosition.clone().sub(direction.multiplyScalar(100));
    
    let progress = 0;
    const duration = 800;
    const startTime = Date.now();
    
    const animateCamera = () => {
      const elapsed = Date.now() - startTime;
      progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing
      const eased = 1 - Math.pow(1 - progress, 3);
      
      camera.position.lerpVectors(startPosition, endPosition, eased);
      camera.lookAt(targetPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateCamera);
      }
    };
    
    animateCamera();
  };

  const resetView = () => {
    if (cameraRef.current && sceneRef.current) {
      cameraRef.current.position.set(0, 0, 200);
      sceneRef.current.rotation.set(0, 0, 0);
    }
    setSelectedNode(null);
    resetHighlights();
  };

  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };

  const zoomIn = () => {
    if (cameraRef.current) {
      cameraRef.current.position.z = Math.max(80, cameraRef.current.position.z - 30);
    }
  };

  const zoomOut = () => {
    if (cameraRef.current) {
      cameraRef.current.position.z = Math.min(400, cameraRef.current.position.z + 30);
    }
  };

  const categories = ['all', 'Musculoskeletal', 'Plant Biology', 'Immunology', 'Genetics', 'Cellular', 'Microgravity'];

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && (
        <div style={{ 
          textAlign: 'center', 
          padding: '100px 20px', 
          color: '#00d4ff',
          fontSize: '18px'
        }}>
          Loading {graphData?.totalPublications || 90}+ publications...
        </div>
      )}

      {!isLoading && graphData && (
        <>
          <div className={styles.graphControls}>
            <button className={styles.controlBtn} onClick={resetView}>
              🔄 Reset
            </button>
            <button className={styles.controlBtn} onClick={toggleAutoRotate}>
              {autoRotate ? '⏸️ Pause' : '▶️ Play'}
            </button>
            <button className={styles.controlBtn} onClick={zoomIn}>
              🔍+
            </button>
            <button className={styles.controlBtn} onClick={zoomOut}>
              🔍-
            </button>
            
            <select 
              className={styles.controlBtn}
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              style={{ marginLeft: '10px', minWidth: '150px' }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? `🌐 All (${graphData.totalPublications})` : `📚 ${cat}`}
                </option>
              ))}
            </select>
          </div>

          <div ref={containerRef} className={styles.graphContainer}></div>

          {/* Hover tooltip */}
          {hoveredNode && !selectedNode && (
            <div 
              className={styles.tooltip}
              style={{
                position: 'fixed',
                left: tooltipPosition.x + 15,
                top: tooltipPosition.y + 15,
                maxWidth: '300px',
                background: 'rgba(10, 14, 39, 0.98)',
                color: '#00d4ff',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #00d4ff',
                pointerEvents: 'none',
                zIndex: 1000,
                fontSize: '13px',
                fontWeight: 500,
                boxShadow: '0 4px 20px rgba(0, 212, 255, 0.4)',
                lineHeight: '1.4'
              }}
            >
              <div style={{ color: '#a0aec0', fontSize: '11px', marginBottom: '4px' }}>
                {hoveredNode.category}
              </div>
              <div>{hoveredNode.fullTitle}</div>
            </div>
          )}

          {/* Selected node info panel with link */}
          {selectedNode && (
            <div className={styles.infoPanel}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, color: '#00d4ff', fontSize: '16px', lineHeight: '1.4', flex: 1 }}>
                  {selectedNode.fullTitle}
                </h3>
                <button 
                  onClick={() => { setSelectedNode(null); resetHighlights(); }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#ff6b6b',
                    fontSize: '20px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                    padding: '0 5px'
                  }}
                >
                  ✕
                </button>
              </div>
              <div style={{ fontSize: '13px', color: '#a0aec0', lineHeight: '1.6' }}>
                <p style={{ margin: '8px 0' }}>
                  <strong style={{ color: '#00d4ff' }}>Category:</strong> {selectedNode.category}
                </p>
                <p style={{ margin: '8px 0' }}>
                  <strong style={{ color: '#00d4ff' }}>Topics:</strong> {selectedNode.keywords.slice(0, 5).join(', ')}
                </p>
                <div style={{ marginTop: '16px' }}>
                  <a 
                    href={selectedNode.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '8px 16px',
                      background: 'linear-gradient(135deg, #00d4ff 0%, #6b5ce7 100%)',
                      color: '#fff',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 600,
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    📄 View Publication →
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className={styles.graphLegend}>
            <div style={{ marginBottom: '10px', color: '#00d4ff', fontSize: '13px', fontWeight: 700 }}>
              📊 {graphData.totalPublications} PUBLICATIONS
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendColor} style={{ background: '#ff6b6b' }}></span>
              <span>Musculoskeletal</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendColor} style={{ background: '#95e1d3' }}></span>
              <span>Plant Biology</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendColor} style={{ background: '#ffd93d' }}></span>
              <span>Immunology</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendColor} style={{ background: '#6b5ce7' }}></span>
              <span>Genetics</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendColor} style={{ background: '#00d4ff' }}></span>
              <span>Microgravity</span>
            </div>
            <div style={{ marginTop: '15px', fontSize: '11px', color: '#718096', lineHeight: '1.6' }}>
              💡 <strong>Click any node</strong> to view the full publication and related research
            </div>
          </div>
        </>
      )}
    </div>
  );
}