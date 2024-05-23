import Image from "next/image";
import styles from "./index.module.css";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="flex items-center">
        <div className={styles.banner}>
          <Image
            src="/images/background.png"
            alt="banner"
            width={450}
            height={450}
          />
        </div>
        <div className="ml-20">
          <h1>Welcome to SuiSec</h1>
          <p>Secure Wallet, Secure User, Secure Sui</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
