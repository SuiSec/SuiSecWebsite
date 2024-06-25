import { TransactionBlock } from "@mysten/sui.js/transactions";

export const demoApi = () => {
  const tx = new TransactionBlock();
  tx.moveCall({
    target:
      "0xd89d1288e1d0a69cc7e5a30625c238e2310e4c23221557b819174f8c14b31ef8::managed::mint",
    arguments: [
      tx.object(
        "0x4b65993b5d2cfdd2bef8f43b78fd65491317d8ee9a7f44c24a8265b7b305201f"
      ),
      tx.pure(22000000000000),
      tx.pure(
        "0x000647e27dfba064eacdb5bfa1f94c963977823de2d47ff86267ac775cc97c92"
      ),
    ],
  });
  return tx;
};
