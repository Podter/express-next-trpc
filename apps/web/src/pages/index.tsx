import Head from "next/head";
import { Inter } from "next/font/google";
import Greet from "@/components/greet";
import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string | undefined>();

  return (
    <main
      className={`flex flex-col justify-center items-center gap-3 h-screen w-full ${inter.className}`}
    >
      <Head>
        <title>Next.js + Express + tRPC</title>
        <meta
          name="description"
          content="Next.js application with Express + tRPC as backend"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-bold text-3xl">Next.js + Express + tRPC</h1>
      <form
        className="flex gap-1"
        onSubmit={(e) => {
          e.preventDefault();
          setName(inputRef.current?.value);
        }}
      >
        <input
          ref={inputRef}
          type="text"
          className="px-2 py-1 text-sm border-2 border-neutral-400 rounded-full"
        />
        <button className="bg-indigo-500 text-white rounded-full px-3 text-sm">
          Send
        </button>
      </form>
      <Greet name={name} />
    </main>
  );
}
