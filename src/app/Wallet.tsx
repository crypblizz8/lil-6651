"use client";

import { Web3Button } from "@web3modal/react";
import { createAccount } from "@tokenbound/sdk";
import { createWalletClient, custom } from "viem";
import { goerli, mainnet } from "viem/chains";
import { createPublicClient, http } from "viem";
import { useEffect } from "react";

// const [account] = await window.ethereum.request({
//   method: "eth_requestAccounts",
// });

const walletClient = createWalletClient({
  chain: goerli,
  transport: custom(window.ethereum),
  // account
});

export default function Wallet() {
  const create6651Acccount = async () => {
    const hash = await createAccount(
      "0xe7134a029cd2fd55f678d6809e64d0b6a0caddcb", // ERC-712 contract address
      "9", // ERC-721 token ID
      walletClient // viem wallet client
    );
    console.log(hash);
  };

  return (
    <div className="p-32">
      <div className="flex-col">
        <div>
          <Web3Button />
        </div>
        <button
          onClick={() => create6651Acccount()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
