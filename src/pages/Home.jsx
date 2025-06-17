import React, { useEffect, useState } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

const mockNFTs = [
  { id: 1, name: "Golden Cat", image: "https://placekitten.com/200/200" },
  { id: 2, name: "Crypto Fox", image: "https://placekitten.com/201/200" },
  { id: 3, name: "Pixel Ape", image: "https://placekitten.com/202/200" }
];

export default function Home() {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    // Загрузка NFT (моки пока)
    setNFTs(mockNFTs);
  }, []);

  return (
    <div className="p-4 font-sans">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">🎁 NFT Gifts</h1>
        <TonConnectButton />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {nfts.map(nft => (
          <div key={nft.id} className="rounded-xl border p-2 shadow">
            <img src={nft.image} alt={nft.name} className="rounded-lg" />
            <h2 className="text-md mt-2 font-semibold">{nft.name}</h2>
            <button className="mt-2 bg-blue-500 text-white rounded px-3 py-1 text-sm">
              Подарить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}