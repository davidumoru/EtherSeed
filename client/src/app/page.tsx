import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import etherIcon from "@public/thirdweb.svg";
import { client } from "./client";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Header />

        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "EtherSeed | Decentralised Crowdfunding",
              url: "https://etherseed.vercel.app",
            }}
          />
        </div>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={etherIcon}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-4xl md:text-8xl font-bold md:font-extrabold tracking-tighter mb-4 text-zinc-100">
        EtherSeed
      </h1>
      <h1 className="text-lg md:text-4xl font-medium md:font-semibold tracking-tighter inline-block -skew-x-6 mb-4 text-blue-500">
        The Future of Crowdfunding!
      </h1>
      <h1 className="text-lg md:text-4xl font-medium md:font-semibold tracking-tighter inline-block -skew-x-6 mb-4 text-blue-500">
        Invest directly in projects using blockchain technology.
      </h1>

      <p className="text-zinc-300 text-base">
        Click the{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          Connect
        </code>{" "}
        button to get started.
      </p>
    </header>
  );
}
