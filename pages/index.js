import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  });

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
