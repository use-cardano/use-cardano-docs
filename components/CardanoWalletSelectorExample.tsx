import "use-cardano/styles/use-cardano.css"

import { CardanoProvider, CardanoToaster, CardanoWalletSelector } from "use-cardano"

export const CardanoWalletSelectorExample = () => {
  return (
    <>
      <CardanoProvider
        options={{
          autoReconnect: false,
          allowedNetworks: ["Testnet", "Mainnet"],
          node: {
            provider: "blockfrost-proxy",
            proxyUrl: "/api/blockfrost",
          },
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingTop: "2rem",
          }}
        >
          <CardanoWalletSelector />
        </div>

        <CardanoToaster />
      </CardanoProvider>
    </>
  )
}
