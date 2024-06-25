import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <a href="#home">
          <div className={styles.logo}>
            <Image src="/images/logo.png" alt="SuiSec" width={50} height={50} />
          </div>
        </a>

        <ul className={styles.navLinks}>
          <li>
            <a href="#secure-scan-api">SecureScan API</a>
          </li>
          <li>
            <a href="#display-api">Display API</a>
          </li>
          <li>
            <a href="#risk-control-rpc-services">Risk Control RPC Services</a>
          </li>
          <li>
            <a href="#partners">Partners</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <Link href="/demo">Demo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
