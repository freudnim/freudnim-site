import Image from "next/image";

export default function ArtLayout() {
    {/* TODO: revisit. dumping code for sake of having showcase out quickly. */ }
    return (
        <div>
            <h2>
                Illustration
            </h2>
            <br />
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
                <Image src={"/art/illustrations/2-28-26_mecha.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/illustrations/5-17-23_meesh.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/illustrations/5-27-26_loyally_edited.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/illustrations/07-18-16_meesh_altaria.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/illustrations/11-7-25_celest_with_grain.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/illustrations/12-3-25_meesh_merged.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
            </div>

            <br />
            <h2>
                Static Emotes
            </h2>
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
                <Image src={"/art/static_emotes/celestBow.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/static_emotes/noted.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/static_emotes/phanStare.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/static_emotes/detective.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/static_emotes/phanUppies.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/static_emotes/niaHug_500px.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
            </div>

            <br />
            <h2>
                Animated Emotes
            </h2>
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
                <Image src={"/art/animated_emotes/coraNoted.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/animated_emotes/kiroVibe.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/animated_emotes/meeshPew_500px.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/animated_emotes/nhanScheme.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/animated_emotes/phanNopers.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/animated_emotes/phanRun.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
            </div>

            <br />
            <h2>
                Original Design
            </h2>
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
                <Image src={"/art/original_design/1-16-26_kale.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/original_design/1-25-25_devu.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
                <Image src={"/art/original_design/1-31-26_sky.webp"} alt="showcase art" width={800} height={800} className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]" />
            </div>
        </div>
    );
}