import Head from "next/head";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import NFTCard from "../components/NFTCard";

export default function Home() {
  const [search, setSearch] = useState(``);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const filteredNFTs = useMemo(() => {
    return nfts.filter((nft) => search ? nft.name.toLowerCase().includes(search.toLowerCase()) : true);
  }, [search, nfts]);

  return (
    <div className="h-full w-screen bg-[#1D1F2B] px-24">
      <Head>
        <title>Coders NFT</title>
      </Head>

      <div className="flex justify-between items-baseline">
        <h2 className="text-5xl font-bold mt-24">Discover</h2>

        <input placeholder="Search item" className="h-12 w-64 p-4 rounded-xl" onChange={handleSearch} />
      </div>

      <hr className="w-full border-[#242634] mt-12" />

      <div className="flex-col items-start gap-7 mt-12">
        <h2 className="text-5xl font-bold">Popular Bid</h2>

        <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]">
          {filteredNFTs.map((nft) => (
            <NFTCard nft={nft} key={nft.id} />
          ))}
        </div>
      </div>

    </div>
  )
}

export const nfts = [
  {
    id: '1',
    name: '#4473',
    price: '0.1',
    author: '0xE51B77159',
    image: 'https://einvestidor.estadao.com.br/wp-content/uploads/sites/715/2021/09/boredape_150920212720.jpg',
    description: 'Descrição do NFT',
  },
  {
    id: '2',
    name: '#4474',
    price: '0.1',
    author: '0xE51B77159',
    image: 'https://www.bitmag.com.br/wp-content/uploads/2022/03/monkey-7009603_1920.jpg',
    description: 'Descrição do NFT',
  },
  {
    id: '3',
    name: '#4475',
    price: '0.1',
    author: '0xE51B77159',
    image: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/01/bored-ape-yacht-club3-e1643290520341.jpeg',
    description: 'Descrição do NFT',
  },
  {
    id: '4',
    name: '#4476',
    price: '0.1',
    author: '0xE51B77159',
    image: 'https://media.moneytimes.com.br/uploads/2021/10/bored-ape-8585.jpg',
    description: 'Descrição do NFT',
  },
]