import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Scene from "@/components/Scene/Scene";
import dynamic from "next/dynamic";

const SceneConfig = dynamic(() => import("../components/Scene/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
