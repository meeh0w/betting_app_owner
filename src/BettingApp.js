import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useClient } from "./useClient";

export function BettingApp() {
  const { wallet, program, contract, addScheduledGame } = useClient()

  console.log('wallet?', wallet);
  console.log('program?', program);

  return (
    <div className="App">
      <WalletMultiButton />
      
      {!wallet && (
        <p style={{ color: 'red' }}>Connect your wallet first!</p>
      )}

      {wallet && (
        <>
          <button onClick={() => console.log('contract data:', contract)}>Log contract data</button>
          <button onClick={() => {
            console.log('calling addScheduledGame() method:');
            addScheduledGame('a', 1); // nie wiem jakie parametry xD
          }}>Add scheduled game</button>
        </>
      )}



    </div>
  )
}
