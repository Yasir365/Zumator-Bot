import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function Model() {
    const { scene } = useGLTF('/modal/avatar2.glb');
    return <primitive object={scene} scale={[2, 2, 2]} />;
}

export default function Avatar() {
    return (
        <div className="main-image-wrapper">
            <div className="model">
                <div style={{ width: '100%', height: '300px', }}>
                    <Canvas>
                        <ambientLight intensity={0} />
                        <directionalLight position={[0, 0, 0]} />
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
