
export default function ArtLayout() {
    {/* TODO: revisit. dumping code for sake of having showcase out quickly. */ }
    {/* credit: https://www.material-tailwind.com/docs/v3/html/gallery */ }
    return (
        <div>
            <h2>
                Illustration
            </h2>
            <div className="relative tab-group">
                <div className="mt-4">
                    <div className="tab-content text-slate-500 text-sm block grid grid-cols-2 gap-4 md:grid-cols-3">
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/illustrations/2-28-26_mecha.webp" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/illustrations/5-17-23_meesh.webp" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/illustrations/5-27-26_loyally_edited.webp" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/illustrations/07-18-16_meesh_altaria.webp" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/illustrations/11-7-25_celest_with_grain.webp" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/illustrations/12-3-25_meesh_merged.webp" alt="image-photo" /></div>
                    </div>
                </div>
            </div>

            <br />
            <h2>
                Static Emotes
            </h2>
            <div className="relative tab-group">
                <div className="mt-4">
                    <div className="tab-content text-slate-500 text-sm block grid grid-cols-2 gap-4 md:grid-cols-3">
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/static_emotes/celestBow.webp" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/static_emotes/noted.webp" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/static_emotes/phanStare.webp" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/static_emotes/detective.webp" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/static_emotes/phanUppies.webp" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/static_emotes/niaHug_500px.webp" alt="image-photo" /></div>
                    </div>
                </div>
            </div>

            <br />
            <h2>
                Animated Emotes
            </h2>
            <div className="relative tab-group">
                <div className="mt-4">
                    <div className="tab-content text-slate-500 text-sm block grid grid-cols-2 gap-4 md:grid-cols-3">
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/animated_emotes/coraNoted.gif" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/animated_emotes/kiroVibe.gif" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/animated_emotes/meeshPew_500px.gif" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/animated_emotes/nhanScheme.gif" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/animated_emotes/phanNopers.gif" alt="image-photo" /></div>
                        <div><img className="h-50 w-full max-w-full rounded-lg object-cover object-center" src="/art/animated_emotes/phanRun.gif" alt="image-photo" /></div>
                    </div>
                </div>
            </div>

            <br />
            <h2>
                Original Design
            </h2>
            <div className="relative tab-group">
                <div className="mt-4">
                    <div className="tab-content text-slate-500 text-sm block grid grid-cols-2 gap-4 md:grid-cols-3">
                        <div><img className="h-60 w-full max-w-full rounded-lg object-cover object-left" src="/art/original_design/1-16-26_kale.webp" alt="image-photo" /></div>
                        <div><img className="h-60 w-full max-w-full rounded-lg object-cover object-left" src="/art/original_design/1-25-25_devu.webp" alt="image-photo" /></div>
                        <div><img className="h-60 w-full max-w-full rounded-lg object-cover object-left" src="/art/original_design/1-31-26_sky.webp" alt="image-photo" /></div>
                    </div>
                </div>
            </div>

        </div>
    );
}