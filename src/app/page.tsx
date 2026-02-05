import ThemeToggle from "@/components/ThemeToggle";
import Footer from "../components/Footer";
import Avatar from "@/components/Avatar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center px-16 py-32 sm:items-start mx-auto">
        <main className="flex w-full flex-col justify-between">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-col items-start gap-6 text-left sm:items-start sm:text-left">
              <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                hi.
              </h1>
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                under construction ovo
              </p>
            </div>
            <div className="pb-16">
              <Avatar />
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <ThemeToggle />
    </div>
  );
}
