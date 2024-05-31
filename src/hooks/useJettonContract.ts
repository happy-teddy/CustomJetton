/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { SampleJetton } from "../helper/SampleJetton_SampleJetton";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract } from "@ton/core";

export function useJettonContract() {
  const client = useTonClient();
  const { sender } = useTonConnect();

  const jettonContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = SampleJetton.fromAddress(
      Address.parse("EQC2g_7ytK-EYXyJ_BnE9g2JRmueDUhm8YZj0F-ovRBIiOcY")
    );
    if (client) return client?.open?.(contract) as OpenedContract<SampleJetton>;
  }, [client]);

  return {
    // value: val,
    // address: jettonContract?.address.toString(),
    mint: (amount: number) => {
      console.log("jettonContract", client);
      return jettonContract?.send(
        sender,
        { value: BigInt(2500000000) },
        {
          $$type: "Mint",
          amount: BigInt(amount),
          receiver:
            sender.address ||
            Address.parse("EQC2g_7ytK-EYXyJ_BnE9g2JRmueDUhm8YZj0F-ovRBIiOcY"),
        }
      );
    },
  };
}
