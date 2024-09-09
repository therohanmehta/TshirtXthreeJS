"use client";
import { AccumulativeShadows, Center, Environment, RandomizedLight, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Leva, useControls } from "leva"; // Import Leva controls
import gsap from "gsap"; // Import GSAP for animations
function ColorButtonGroup({ setColor, setAnimate, animate }) {
  const colors = ["red", "green", "lightblue", "#4B4B4B", "purple", "black", "#4B4B4B", "#1F3A93", "#333333", "#4B0082"];
  return (
    <div className="absolute top-0 flex p-4 space-x-2">
      {colors.map((color, index) => (
        <button
          onClick={() => {
            setAnimate(!animate);
            setColor(color);
          }}
          key={index}
          style={{ background: `${color}` }}
          className={`w-12 h-12 rounded-full ${color} text-white font-bold hover:opacity-80`}
        >
          {index + 1}
        </button>
      ))}

      <input
        type="color"
        onChange={(e) => {
          console.log(e.target.value);
          setColor(e.target.value);
        }}

        // onChange={(e) => {
        //   console.log(e.target.value);
        //   setColor(e.target.value);
        // }}
      />
      {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}
    </div>
  );
}

export default ColorButtonGroup;
