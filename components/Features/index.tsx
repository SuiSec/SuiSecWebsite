import Image from "next/image";
import { NotionLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import styles from "./index.module.css";

const Features = () => {
  return (
    <>
      <section id="secure-scan-api" className={styles.container}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className="flex items-center">
              <div className="rounded-r-none overflow-hidden">
                <Image
                  src="/images/secureScan-api.gif"
                  alt="SecureScan API"
                  width={700}
                  height={600}
                />
              </div>
              <div className="flex-1 flex flex-col p-14">
                <h3 className="text-4xl font-semibold text-left">
                  SecureScan API
                </h3>
                <div className="text-left text-xl mt-5">
                  <p>Detect and Block Malicious Websites</p>
                  <p>Identify and Conceal Phishing Assets</p>
                  <p>Alert on Malicious Smart Contract Interactions</p>
                </div>
                <div className="flex mt-10">
                  <a
                    href="https://suisec.notion.site/SuiSecBlockList-b1ffc4ca2c0f4bb0857c5d169df234f0"
                    target="_blank"
                  >
                    <NotionLogoIcon
                      width={30}
                      height={30}
                      className="cursor-pointer mr-5"
                    />
                  </a>
                  <a
                    href="https://github.com/RandyPen/SuiSecBlockList"
                    target="_blank"
                  >
                    <GitHubLogoIcon
                      width={30}
                      height={30}
                      className="cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="display-api" className={styles.container}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className="flex items-center">
              <div className="rounded-r-none overflow-hidden">
                <Image
                  src="/images/display-api.gif"
                  alt="Display API"
                  width={700}
                  height={600}
                />
              </div>
              <div className="flex-1 flex flex-col p-14">
                <h3 className="text-4xl font-semibold text-left">
                  Display API
                </h3>
                <div className="text-left text-xl mt-5">
                  <p>
                    Extracts Account Changes from Complex Transaction Data,
                    Making It Clear at a Glance
                  </p>
                </div>
                <div className="flex mt-10">
                  <a
                    href="https://suisec.notion.site/DryRunTransactionBlockResponsePlus-82609f7e817a4018b722812aba3705bb"
                    target="_blank"
                  >
                    <NotionLogoIcon
                      width={30}
                      height={30}
                      className="cursor-pointer mr-5"
                    />
                  </a>
                  <a
                    href="https://github.com/RandyPen/DryRunTransactionBlockResponsePlus"
                    target="_blank"
                  >
                    <GitHubLogoIcon
                      width={30}
                      height={30}
                      className="cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="risk-control-rpc-services" className={styles.container}>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className="flex items-center">
              <div className="rounded-r-none overflow-hidden">
                <Image
                  src="/images/risk-control-rpc-services.gif"
                  alt="Risk Control RPC Services"
                  width={700}
                  height={600}
                />
              </div>
              <div className="flex-1 flex flex-col p-14">
                <h3 className="text-4xl font-semibold text-left">
                  Risk Control RPC Services
                </h3>
                <div className="text-left text-xl mt-5">
                  <p>
                    Offers a Variety of Risk Control Strategies, Intercepts
                    Risky Transactions, and Allows Users to Customize Strategy
                    Combinations.
                  </p>
                </div>
                <div className="flex mt-10">
                  {/* <a
                  // href="https://github.com/SecureScan/SecureScan"
                  target="_blank"
                >
                  <NotionLogoIcon
                    width={30}
                    height={30}
                    className="cursor-pointer mr-5"
                  />
                </a> */}
                  {/* <a
                  // href="https://github.com/SecureScan/SecureScan"
                  target="_blank"
                >
                  <GitHubLogoIcon
                    width={30}
                    height={30}
                    className="cursor-pointer"
                  />
                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
