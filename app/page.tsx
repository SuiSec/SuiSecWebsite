import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import AboutUs from "@/components/AboutUs";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <Navbar />
        <Hero />
        <Features />
        <Partners />
        <AboutUs />
      </div>
    </main>
  );
}
