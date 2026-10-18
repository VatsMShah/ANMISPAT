import React, { Component, Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshReflectorMaterial, PerspectiveCamera } from '@react-three/drei';

// Error Boundary Guardrail
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL Context Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative flex h-[480px] w-full flex-col items-center justify-center rounded-2xl border border-brand-border bg-gradient-to-b from-[#FAFBFD] via-[#F4F5F7] to-[#EAECEF] p-6 text-center">
          <div className="rounded-full bg-brand-orange/10 p-3 text-brand-orange">
            <span className="font-badge text-xs font-bold uppercase tracking-wider">3D Preview Unavailable</span>
          </div>
          <h4 className="mt-3 font-heading text-lg font-bold text-brand-dark">
            Interactive Viewport Disabled
          </h4>
          <p className="mt-1 max-w-xs font-body text-xs text-brand-body">
            WebGL context lost on this browser session. Refresh the page to reload the viewer.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Dark Industrial Metallic Models
function SpecificProductModel({ productType }) {
  switch (productType) {
    case 'HR Sheet / Plate':
      return (
        <group position={[0, -0.3, 0]}>
          {[0, 0.18, 0.36, 0.54].map((y, idx) => (
            <mesh key={idx} castShadow receiveShadow position={[0, y, 0]}>
              <boxGeometry args={[3.6, 0.14, 2.4]} />
              <meshStandardMaterial
                color="#64748b"
                metalness={0.92}
                roughness={0.45}
                envMapIntensity={1.5}
              />
            </mesh>
          ))}
        </group>
      );

    case 'HRPO Coil':
      return (
        <group position={[0, 0.1, 0]}>
          <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[1.7, 1.7, 2.1, 64, 1, true]} />
            <meshStandardMaterial
              color="#94a3b8"
              metalness={0.95}
              roughness={0.22}
            />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.9, 0.9, 2.11, 64, 1, true]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.5} />
          </mesh>
          {[-1.05, 1.05].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]} rotation={[0, (i === 0 ? -1 : 1) * (Math.PI / 2), 0]}>
              <ringGeometry args={[0.9, 1.7, 64]} />
              <meshStandardMaterial color="#94a3b8" metalness={0.95} roughness={0.2} />
            </mesh>
          ))}
        </group>
      );

    case 'HRSPO Coil':
      return (
        <group position={[0, 0.1, 0]}>
          <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[1.65, 1.65, 2.2, 64, 1, true]} />
            <meshStandardMaterial
              color="#cbd5e1"
              metalness={0.96}
              roughness={0.18}
            />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.92, 0.92, 2.21, 64, 1, true]} />
            <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.4} />
          </mesh>
          {[-1.1, 1.1].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]} rotation={[0, (i === 0 ? -1 : 1) * (Math.PI / 2), 0]}>
              <ringGeometry args={[0.92, 1.65, 64]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.96} roughness={0.18} />
            </mesh>
          ))}
        </group>
      );

    case 'Cold Rolled (CR) Coil':
      return (
        <group position={[0, 0.1, 0]}>
          <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[1.75, 1.75, 2.3, 64, 1, true]} />
            <meshStandardMaterial
              color="#e2e8f0"
              metalness={0.98}
              roughness={0.08}
            />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.95, 0.95, 2.31, 64, 1, true]} />
            <meshStandardMaterial color="#020617" metalness={0.9} roughness={0.3} />
          </mesh>
          {[-1.15, 1.15].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]} rotation={[0, (i === 0 ? -1 : 1) * (Math.PI / 2), 0]}>
              <ringGeometry args={[0.95, 1.75, 64]} />
              <meshStandardMaterial color="#e2e8f0" metalness={0.98} roughness={0.08} />
            </mesh>
          ))}
        </group>
      );

    case 'Galvanized Plain (GP)':
      return (
        <group position={[0, 0.1, 0]}>
          <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[1.8, 1.8, 2.0, 64, 1, true]} />
            <meshStandardMaterial
              color="#f1f5f9"
              metalness={0.92}
              roughness={0.32}
            />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[1.0, 1.0, 2.01, 64, 1, true]} />
            <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.5} />
          </mesh>
          {[-1.0, 1.0].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]} rotation={[0, (i === 0 ? -1 : 1) * (Math.PI / 2), 0]}>
              <ringGeometry args={[1.0, 1.8, 64]} />
              <meshStandardMaterial color="#f1f5f9" metalness={0.92} roughness={0.3} />
            </mesh>
          ))}
        </group>
      );

    case 'Hot Rolled (HR) Coil':
    default:
      return (
        <group position={[0, 0.1, 0]}>
          <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[1.75, 1.75, 2.3, 64, 1, true]} />
            <meshStandardMaterial
              color="#71717a"
              metalness={0.94}
              roughness={0.42}
            />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.9, 0.9, 2.31, 64, 1, true]} />
            <meshStandardMaterial color="#18181b" metalness={0.8} roughness={0.6} />
          </mesh>
          {[-1.15, 1.15].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]} rotation={[0, (i === 0 ? -1 : 1) * (Math.PI / 2), 0]}>
              <ringGeometry args={[0.9, 1.75, 64]} />
              <meshStandardMaterial color="#71717a" metalness={0.94} roughness={0.35} />
            </mesh>
          ))}
        </group>
      );
  }
}

export default function Steel3DViewer({ activeProduct }) {
  const controlsRef = useRef();

  return (
    <WebGLErrorBoundary>
      <div className="relative h-[480px] w-full overflow-hidden rounded-2xl border border-brand-border bg-gradient-to-b from-[#FAFBFD] via-[#F4F5F7] to-[#EAECEF] p-2 shadow-sm">
        <div aria-hidden="true" className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#FF9A6B]/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />

        <Canvas shadows gl={{ powerPreference: 'high-performance', antialias: true }}>
          <PerspectiveCamera makeDefault position={[4.6, 2.2, 5.2]} fov={42} />
          
          <Suspense fallback={null}>
            <ambientLight intensity={0.85} />
            <directionalLight position={[12, 16, 10]} intensity={2.2} castShadow />
            <pointLight position={[-8, 6, -6]} intensity={1.5} color="#F36F35" />
            <pointLight position={[6, -2, 6]} intensity={0.8} color="#FF9A6B" />

            <Float speed={1.3} rotationIntensity={0.15} floatIntensity={0.25}>
              <SpecificProductModel productType={activeProduct} />
            </Float>

            {/* Reflective Studio Floor */}
            <mesh position={[0, -1.85, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[40, 40]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={512}
                mixBlur={0.7}
                mixStrength={18}
                roughness={0.4}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#dcdfe4"
                metalness={0.6}
              />
            </mesh>

            <OrbitControls 
              ref={controlsRef} 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.8} 
              maxPolarAngle={Math.PI / 2.1} 
              minPolarAngle={Math.PI / 4}
            />
          </Suspense>
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}