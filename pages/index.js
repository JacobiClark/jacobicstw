import { useRef, useState } from "react";
import Head from "next/head";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import ThreePlayground from "../components/ThreePlayground";

export default function Home() {
  return (
    <Canvas>
      <ThreePlayground position={[-4.2, 0, 0]} />
      <ThreePlayground position={[-1.2, 0, 0]} />
      <ThreePlayground position={[2.2, 0, 0]} />
    </Canvas>
  );
}
