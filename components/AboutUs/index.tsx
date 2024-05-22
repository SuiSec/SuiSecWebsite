import styles from "./index.module.css";

const AboutUs = () => {
  return (
    <section id="about" className={styles.aboutUs}>
      <h2 className="text-4xl font-semibold mb-5">About Us</h2>
      <p className="text-gray-500">
        We are the SuiSec team, dedicated to the security of the Sui ecosystem.
        We collaborate closely with the Sui Security Team.
      </p>
    </section>
  );
};

export default AboutUs;
