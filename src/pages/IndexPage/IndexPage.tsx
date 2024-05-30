import { TonConnectButton } from "@tonconnect/ui-react";
import { Button } from "@telegram-apps/telegram-ui";
import type { FC } from "react";
import { useState } from "react";

import "./IndexPage.css";
import { useJettonContract } from "@/hooks/useJettonContract";

export const IndexPage: FC = () => {
  const [mintAmount, setMintAmount] = useState(1);
  // const wallet = useTonWallet();
  const { mint } = useJettonContract();

  // if (!wallet) {
  return (
    <div className="ton-connect-page">
      <img src="/logo.png" width={"90%"}></img>
      <div className="ton-connect-page-container">
        <TonConnectButton className="ton-connect-page__button" />
        <div>
          <Button
            onClick={() => {
              mint();
            }}
          >
            Mint
          </Button>
        </div>
        <div className="mint-setting">
          <Button
            onClick={() => {
              setMintAmount((prev) => Math.max(0, prev - 1));
            }}
          >
            -
          </Button>
          <span>{mintAmount}</span>
          <Button
            onClick={() => {
              setMintAmount((prev) => Math.min(10, prev + 1));
            }}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
