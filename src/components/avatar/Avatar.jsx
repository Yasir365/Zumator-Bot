import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function Model() {
    const { scene } = useGLTF('/modal/avatar1.glb');
    return <primitive object={scene} scale={[1, 1, 1]} />;
}

export default function Avatar() {
    return (
        <div className="main-image-wrapper">
            <div className="model">
                <div style={{ width: '100%', height: '300px', }}>
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} />
                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                        <OrbitControls enableZoom={true} />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}
