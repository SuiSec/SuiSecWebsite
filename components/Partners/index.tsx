import Image from "next/image";
import styles from "./index.module.css";

const Partners = () => {
  return (
    <section id="partners" className={styles.features}>
      <div className={styles.inner}>
        <h2 className="text-4xl font-semibold mb-10">Our Partners</h2>
        <div className={styles.featureList}>
          <a href="https://surf.tech/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/surf.webp"
                alt="surfwallet"
                width={80}
                height={80}
              />
              <h3>Surf Wallet</h3>
            </div>
          </a>

          <a href="https://suivision.xyz/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/suivision.png"
                alt="suivision"
                width={80}
                height={80}
              />
              <h3>SUI Vision</h3>
            </div>
          </a>

          <a href="https://surf.tech/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/surf.webp"
                alt="surfwallet"
                width={80}
                height={80}
              />
              <h3>Mysten Labs</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
