"use client"

interface IMessages {
  id: number;
  advice: string;
}

import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Skeleton from "react-loading-skeleton";

import 'react-loading-skeleton/dist/skeleton.css'

import { getAdvice } from "./api/advice";

export default function Home() {
  const [messages, setMessages] = useState<IMessages>({ id: 0, advice: "" });
  const [loading, setLoading] = useState(false);

  async function handleRandom() {
    setLoading(true);
    const response = await getAdvice();

    setLoading(false);
    return setMessages(response.slip);
  }

  useEffect(() => {
    handleRandom();
  }, [])

  return (
    <main className="bg-dark-blue w-full h-screen flex justify-center items-center">
      <section className="bg-dark-grayish-blue max-w-[340px] md:max-w-[560px] w-full rounded-xl pt-4 pb-14 relative h-fit md:max-h-[400px]">
        <p className="text-center py-6 uppercase tracking-[0.2rem] text-neon-green text-[12px]">advice #{loading ? <Skeleton baseColor="#333333" highlightColor="hsl(217, 19%, 24%)" className="w-[10px] h-[10px] bg-gray-500" style={{ background: "none" }} /> : messages.id}</p>

        {loading ? <Skeleton baseColor="#333333" highlightColor="hsl(217, 19%, 24%)" className="h-[80px] bg-gray-500" count={1} style={{ background: "none" }} /> :
          <h1 className="text-center text-[24px] mb-4 px-4">{messages.advice}</h1>
        }

        <div className="flex justify-center items-center w-full h-[60px]">
          <div className="bg-mobile md:bg-desktop w-[295px] md:w-[444px] h-[16px] bg-no-repeat"></div>
        </div>
        <button onClick={() => handleRandom()} disabled={loading} className="bg-neon-green hover:shadow-lg border-green-400 hover:shadow-neon-green w-[60px] h-[60px] rounded-full flex justify-center items-center absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 -translate-y-1/3">
          {loading ? <ClipLoader color="hsl(217, 19%, 24%)" /> : <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>}
        </button>
      </section>
    </main>
  );
}
