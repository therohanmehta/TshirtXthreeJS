"use client";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useControls } from "leva";

function Tshirt({ color, animate, ...props }) {
  const { scene } = useGLTF("/tshirt.glb");
  const tshirtRef = useRef();
  const [prevColor, setPrevColor] = useState(new THREE.Color("red"));
  const [currentColor, setCurrentColor] = useState(new THREE.Color(color));

  // Load the texture image
  const texture = useTexture("/webbies.png");
  const { nodes, materials } = useGLTF("/tshirt.glb");

  // Update currentColor when color prop changes
  useEffect(() => {
    setCurrentColor(new THREE.Color(color));
  }, [color]);

  // Smoothly transition the color in the animation frame
  useFrame(({ delta }) => {
    if (currentColor && prevColor) {
      easing.dampC(prevColor, currentColor, 0.25, delta); // Adjust dampening factor as needed
      scene.traverse((child) => {
        if (child.isMesh) {
          // Apply color transition
          child.material.color.copy(prevColor);
        }
      });
    }
  });

  return (
    <group ref={tshirtRef}>
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1}>
          <Decal castShadow receiveShadow map={texture} position={[0, 0, 0]} scale={[0.17, 0.07, 1]} rotation={[-0.5, 0, 0]} />
        </mesh>
      </group>
    </group>
  );
}

export default Tshirt;

useGLTF.preload("/tshirt.glb");
