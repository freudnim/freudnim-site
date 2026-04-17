import Avatar from "@/components/Avatar";

export default function Home() {
  return (
    <div className="flex w-full flex-row justify-between">
      <div className="flex flex-col items-start gap-6 text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-wider heading-text">
          hello there | ˙ ᵕ˙ )/
        </h1>
        <p className="max-w-md text-lg leading-8 subheading-text">
          illustrator, animator, programmer
        </p>
      </div>
      <div className="pb-16">
        <Avatar />
      </div>
    </div>
  );
}