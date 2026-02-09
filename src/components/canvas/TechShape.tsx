import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const TechShape: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Auto rotation
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 2.5 : 2.2}
            >
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color={hovered ? "#4f46e5" : "#2563eb"} // Indigo to Blue 
                    wireframe={true}
                    emissive={hovered ? "#4f46e5" : "#2563eb"}
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* Inner solid core for depth */}
            <mesh scale={1.0}>
                <icosahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color="#60a5fa"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

export default TechShape;
