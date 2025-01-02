import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function Model() {
    const { scene } = useGLTF('/modal/avatar2.glb');
    useFrame(() => {
        scene.rotation.x += (Math.random() - 4) * 0.005;
        scene.rotation.y += (Math.random() - 4) * 0.005;
        scene.rotation.z += (Math.random() - 4) * 0.005;
    });
    return <primitive object={scene} scale={[2, 2, 2]} />;
}

export default function Avatar() {
    return (
        <div className="main-image-wrapper">
            <div className="model">
                <div style={{ width: '100%', height: '192px', }}>
                    <img src="/images/hero.png" alt="" />
                    {/* <Canvas>
                        <ambientLight intensity={0} />
                        <directionalLight position={[0, 0, 0]} />
                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                        <OrbitControls enableZoom={false} />
                    </Canvas> */}
                </div>
            </div>
        </div>
    )
}
