import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex w-full flex-row justify-between">
          <div className="flex flex-col items-start gap-6 text-left sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              hi.
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              under construction ovo
            </p>
          </div>
          <Image src="./kiri-closed.gif" alt="avatar closed" width="200" height="200" unoptimized />
        </div>
        <Footer />
      </main>
    </div>
  );
}
