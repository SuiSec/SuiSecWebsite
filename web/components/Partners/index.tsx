import Image from "next/image";
import styles from "./index.module.css";

const Partners = () => {
  return (
    <section id="partners" className={styles.features}>
      <div className={styles.inner}>
        <h2 className="text-4xl font-semibold mb-10">Our Partners</h2>
        <div className={styles.featureList}>
          <a href="https://suiet.app/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/suiet.svg"
                alt="suiet"
                width={80}
                height={80}
              />
              <h3>Suiet Wallet</h3>
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
              <h3>Surf Wallet</h3>
            </div>
          </a>

          <a href="https://www.okx.com/web3/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/OKX-Wallet.jpeg"
                alt="okxwallet"
                width={80}
                height={80}
              />
              <h3>Okx Wallet</h3>
            </div>
          </a>

          <a href="https://nightly.app/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/Nightly.png"
                alt="nightly"
                width={80}
                height={80}
              />
              <h3>Nightly Wallet</h3>
            </div>
          </a>

          <a href="https://www.cetus.zone/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/cetus.jpeg"
                alt="cetus"
                width={80}
                height={80}
              />
              <h3>Cetus</h3>
            </div>
          </a>

          <a href="https://scallop.io/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/scallop.png"
                alt="scallop"
                width={80}
                height={80}
              />
              <h3>Scallop</h3>
            </div>
          </a>

          <a href="https://naviprotocol.io/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/navi.jpg"
                alt="navi"
                width={80}
                height={80}
              />
              <h3>Navi</h3>
            </div>
          </a>

          <a href="https://suilend.fi/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/suilend.png"
                alt="suilend"
                width={80}
                height={80}
              />
              <h3>SuiLend</h3>
            </div>
          </a>

          <a href="https://www.insidex.trade/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/insidex.png"
                alt="insidex"
                width={80}
                height={80}
              />
              <h3>InsiDex</h3>
            </div>
          </a>

          <a href="https://www.suicoins.com/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/sui-coin.png"
                alt="sui-coins"
                width={80}
                height={80}
              />
              <h3>Sui Coins</h3>
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
              <h3>Sui Vision</h3>
            </div>
          </a>

          <a href="https://suiscan.xyz/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/Suiscan-icon-color.svg"
                alt="suiscan"
                width={80}
                height={80}
              />
              <h3>Sui Scan</h3>
            </div>
          </a>

          <a href="https://getnimbus.io/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/nimbus.png"
                alt="nimbus"
                width={80}
                height={80}
              />
              <h3>Nimbus</h3>
            </div>
          </a>

          <a href="https://www.pinatabot.com/" target="_blank">
            <div className={styles.feature}>
              <Image
                src="/images/pinatabot.jpg"
                alt="pinatabot"
                width={80}
                height={80}
              />
              <h3>Pinata Bot</h3>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Partners;
