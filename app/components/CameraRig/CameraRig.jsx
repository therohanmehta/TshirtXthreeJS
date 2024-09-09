"use client";
import { AccumulativeShadows, Center, Environment, RandomizedLight, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Leva, useControls } from "leva"; // Import Leva controls
import gsap from "gsap"; // Import GSAP for animations

function CameraRig({ children }) {
  const ref = useRef();

  //   const { foo } = useControls({
  //     foo: { value: 0, label: "rotation", min: -1, max: 1, step: 0.1 },
  //   });

  useFrame((state) => {
    const pointerX = state.pointer.x; // Get real-time pointer x-position
    const pointerY = state.pointer.y; // Get real-time pointer y-position

    // Apply pointer-based rotation
    ref.current.rotation.x = (Math.PI / 11) * pointerY;
    ref.current.rotation.y = (Math.PI / 12) * pointerX; // Scale the rotation with 'foo'
  });

  return <group ref={ref}>{children}</group>;
}

export default CameraRig;
