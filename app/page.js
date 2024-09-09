"use client";
import { AccumulativeShadows, Center, Environment, RandomizedLight, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Leva, useControls } from "leva"; // Import Leva controls
import gsap from "gsap"; // Import GSAP for animations
import CameraRig from "./components/CameraRig/CameraRig";
import ColorButtonGroup from "./components/ColorButtonGroup/ColorButtonGroup";
import Backdrop from "./components/Backdrop/Backdrop";
import Tshirt from "./components/Tshirt/Tshirt";

export default function Home() {
  const [color, setColor] = useState("red");
  const [animate, setAnimate] = useState(false);
  const [logo, setLogo] = useState(null);

  return (
    <div className="">
      <Canvas
        camera={{ fov: "10" }}
        shadows // Enable shadows in the canvas
        style={{ height: "100vh" }}
        className="w-full bg-gray-200"
      >
        <Environment preset="city" />
        <Center position={[0, 0, 0]}>
          <CameraRig>
            <Tshirt color={color} animate={animate} />
            <Backdrop shadowColor={color} />
          </CameraRig>
        </Center>
        <ambientLight intensity={0.5} />
      </Canvas>
      <Leva />
      <ColorButtonGroup setColor={setColor} setAnimate={setAnimate} animate={animate} />
    </div>
  );
}
