import { useRouter } from "next/router";
import { useCallback } from "react";
import Eth from "../../assets/Eth";

interface NFTCardProps {
  nft: {
    id: string;
    name: string;
    price: string;
    author: string;
    image: string;
    description: string;
  }
}

export default function NFTCard({ nft }: NFTCardProps){
  const router = useRouter();

  const handleNftClick = useCallback(() => {
    router.push(`/nft/${nft.id}`)
  }, [nft.id, router]);

  return (
    <div className="w-[24rem] h-[31rem] bg-[#242634] rounded-[1.25rem] cursor-pointer hover:scale-105 active:scale-95" onClick={handleNftClick}>
      <div>
        <img src={nft.image} alt={nft.name} className="rounded-[1.25rem] p-2 w-96 h-80" />
      </div>

      <div className="mx-6 mt-4">
        <div className="mb-5">
          <p className="text-2xl font-semibold">{nft.name}</p>
          <p className="text-[#93989A]">By {nft.author}</p>
        </div>

        <div>
          <p className="text-[#93989A]">Current Bid</p>

          <div className="flex mt-0.5">
            <Eth />
            <p className="text-xl font-semibold">{nft.price}</p>
          </div>

          <div className="relative">
            <button className="absolute right-1 bottom-0.5 bg-[#FF2748] py-[0.625rem] px-5 rounded-xl hover:scale-105 active:scale-95">
              Place a Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}