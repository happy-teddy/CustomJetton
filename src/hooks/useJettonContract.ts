/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { SampleJetton } from "../helper/SampleJetton_SampleJetton";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract } from "@ton/core";

export function useJettonContract() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const client = useTonClient() as any;
  const { sender } = useTonConnect();

  const jettonContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = SampleJetton.fromAddress(
      Address.parse("EQAvb2prB3qsA7ERWPvX5oPpRkjOLi9xrb00VezB5-Ap9i29")
    );
    if (client) return client?.open?.(contract) as OpenedContract<SampleJetton>;
  }, [client]);

  const mint = () => {
    if (jettonContract)
      return jettonContract.send(sender, { value: BigInt(0.05) }, "Mint: 100");
  };

  return {
    // value: val,
    // address: jettonContract?.address.toString(),
    mint: mint,
  };
}
