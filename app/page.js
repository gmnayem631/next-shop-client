import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";

export default function Home() {
  return (
    <div>
      {" "}
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
    </div>
  );
}
