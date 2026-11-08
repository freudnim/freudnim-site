import Image from "next/image";

const ImageItem = ({ src }: { src: string }) => (
    <Image
        src={src}
        alt="showcase art"
        width={800}
        height={800}
        className="w-full h-auto rounded-lg transition-transform duration-200 group-hover:scale-[1.02]"
    />
);

export default function ArtLayout() {
    {/* TODO: revisit. dumping code for sake of having showcase out quickly. */ }
    return (
        <div>
            <h2>
                Illustration
            </h2>
            <br />
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
                <ImageItem src={"/art/illustrations/2-28-26_mecha.webp"} />
                <ImageItem src={"/art/illustrations/5-17-23_meesh.webp"} />
                <ImageItem src={"/art/illustrations/5-27-26_loyally_edited.webp"} />
                <ImageItem src={"/art/illustrations/07-18-16_meesh_altaria.webp"} />
                <ImageItem src={"/art/illustrations/11-7-25_celest_with_grain.webp"} />
                <ImageItem src={"/art/illustrations/12-3-25_meesh_merged.webp"} />
            </div>

            <br />
            <h2>
                Static Emotes
            </h2>
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
                <ImageItem src={"/art/static_emotes/celestBow.webp"} />
                <ImageItem src={"/art/static_emotes/noted.webp"} />
                <ImageItem src={"/art/static_emotes/phanStare.webp"} />
                <ImageItem src={"/art/static_emotes/detective.webp"} />
                <ImageItem src={"/art/static_emotes/phanUppies.webp"} />
                <ImageItem src={"/art/static_emotes/niaHug_500px.webp"} />
            </div>

            <br />
            <h2>
                Animated Emotes
            </h2>
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
                <ImageItem src={"/art/animated_emotes/coraNoted.webp"} />
                <ImageItem src={"/art/animated_emotes/kiroVibe.webp"} />
                <ImageItem src={"/art/animated_emotes/meeshPew_500px.webp"} />
                <ImageItem src={"/art/animated_emotes/nhanScheme.webp"} />
                <ImageItem src={"/art/animated_emotes/phanNopers.webp"} />
                <ImageItem src={"/art/animated_emotes/phanRun.webp"} />
            </div>

            <br />
            <h2>
                Original Design
            </h2>
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
                <ImageItem src={"/art/original_design/1-16-26_kale.webp"} />
                <ImageItem src={"/art/original_design/1-25-25_devu.webp"} />
                <ImageItem src={"/art/original_design/1-31-26_sky.webp"} />
            </div>
        </div>
    );
}