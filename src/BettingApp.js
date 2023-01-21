import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export function BettingApp() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();


  return (
    <div className="App">
      <WalletMultiButton />
    </div>
  )
}
