"use client";
import { AccumulativeShadows, Center, Environment, RandomizedLight, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Leva, useControls } from "leva"; // Import Leva controls
import gsap from "gsap"; // Import GSAP for animations

function Backdrop({ shadowColor }) {
  return (
    <AccumulativeShadows frames={60} alphaTest={0.3} scale={3.4} rotation={[1.57, 0, 0]} position={[0, 0, -0.25]}>
      <RandomizedLight amount={4} radius={2} intensity={0.69} ambient={0.25} position={[5, 5, -10]} />
      <RandomizedLight amount={4} radius={2} intensity={0.25} ambient={0.2} position={[5, 5, -9]} />
    </AccumulativeShadows>
  );
}
export default Backdrop;
