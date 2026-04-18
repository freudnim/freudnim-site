"use client";
import {
    TwitterIcon,
} from "@/components/icons";

const posts = [
    {
        image: "/gifted_art/11-11-2025_widheim.webp",
        url: "https://x.com/Widheim/status/1988131059683451301",
    },
    {
        image: "/gifted_art/11-11-2023_Matcha___lattea.webp",
        url: "https://x.com/Matcha__lattea/status/1723204056628465969",
    },
    {
        image: "/gifted_art/9-27-2023_AzaleaArchivist.webp",
        url: "https://x.com/AzaleaArchivist/status/1707126516000371064/",
    },
    {
        image: "/gifted_art/5-20-2023_BloodyCaffeine.webp",
        url: "https://x.com/BloodyCaffeine/status/1659795380220088320",
    },
    {
        image: "/gifted_art/10-2-2025_LoyallyBear.webp",
        url: "https://x.com/LoyallyBear/status/1973937444820304211",
    },
    {
        image: "/gifted_art/7-29-2023_AzaleaArchivist.webp",
        url: "https://x.com/AzaleaArchivist/status/1685477970419630080",
    },

    {
        image: "/gifted_art/11-11-2023_AlexisNguyen80.webp",
        url: "https://x.com/AlexisNguyen80/status/1723378784131264756",
    },
    {
        image: "/gifted_art/11-11-2023_BloodyCaffeine.webp",
        url: "https://x.com/BloodyCaffeine/status/1723367894292062504",
    },
    {
        image: "/gifted_art/12-25-2023__BloodyCaffeine.webp",
        url: "https://x.com/BloodyCaffeine/status/1739379628081655979",
    },
    {
        image: "/gifted_art/12-15-2023_meeshchannel.webp",
        url: "https://x.com/meeshchannel/status/1735726965720506730",
    },
    {
        image: "/gifted_art/11-12-2022_fancy_plantsy.webp",
        url: "https://x.com/fancy_plantsy/status/1591335094719217665",
    },
    {
        image: "/gifted_art/11-11-2023_meeshchannel.webp",
        url: "https://x.com/meeshchannel/status/1723467320079564984",
    },
    {
        image: "/gifted_art/11-7-2022_LeMothzVT.webp",
        url: "https://x.com/LeMothzVT/status/1589699584862797826",
    },
    {
        image: "/gifted_art/9-8-2024_Matcha__lattea_1.webp",
        url: "https://x.com/Matcha__lattea/status/1832850375835111917",
    },
    {
        image: "/gifted_art/9-8-2024_Matcha__lattea_2.webp",
        url: "https://x.com/Matcha__lattea/status/1832850375835111917",
    },
    {
        image: "/gifted_art/12-21-2022_widheim.webp",
        url: "https://x.com/Widheim/status/1605444085589848064",
    },
    {
        image: "/gifted_art/11-10-2022_Widheim.webp",
        url: "https://x.com/Widheim/status/1590888824758226945",
    },
    {
        image: "/gifted_art/11-23-2022_dicyflynn.webp",
        url: "https://x.com/dicyflynn/status/1595369268123963397",
    },
    {
        image: "/gifted_art/11-10-2024_Matcha__lattea.webp",
        url: "https://x.com/Matcha__lattea/status/1855775987016856008",
    },
    {
        image: "/gifted_art/11-10-2024_BloodyCaffeine.webp",
        url: "https://x.com/BloodyCaffeine/status/1855721063109607928",
    },
    {
        image: "/gifted_art/10-14-2023_SpellyDoesArt.webp",
        url: "https://x.com/SpellyDoesArt/status/1713048516065423669",
    },
    {
        image: "/gifted_art/11-11-2023_Widheim.webp",
        url: "https://x.com/Widheim/status/1723371815005815004",
    },
    {
        image: "/gifted_art/11-19-2023_meeshchannel.webp",
        url: "https://x.com/meeshchannel/status/1729918700650676320",
    },
    {
        image: "/gifted_art/4-19-2022_ajondc.webp",
        url: "https://x.com/ajondc/status/1516411930948390918",
    },
    {
        image: "/gifted_art/5-20-2022_Shindari1.webp",
        url: "https://x.com/Shindari1/status/1527522533339447296",
    },
    {
        image: "/gifted_art/5-27-2022_SpellyDoesArt.webp",
        url: "https://x.com/SpellyDoesArt/status/1530303154222399489",
    },
    {
        image: "/gifted_art/10-19-2022_SpellyDoesArt.webp",
        url: "https://x.com/SpellyDoesArt/status/1582919425749286912",
    },
    {
        image: "/gifted_art/11-10-2022_GachikoNana.webp",
        url: "https://x.com/GachikoNana/status/1590852164355702785",
    },
    {
        image: "/gifted_art/11-10-2022_mecha1921.webp",
        url: "https://x.com/mecha1921/status/1590884882250891264",
    },
    {
        image: "/gifted_art/11-10-2022_meeshchannel.webp",
        url: "https://x.com/meeshchannel/status/1590890767240790018",
    },
    {
        image: "/gifted_art/11-11-2022_rewi_dump.webp",
        url: "https://x.com/rewi_dump/status/1590958506789994496",
    },
    {
        image: "/gifted_art/11-20-2022_Shindari1.webp",
        url: "https://x.com/Shindari1/status/1594345080659136512",
    },
    {
        image: "/gifted_art/2-14-2023_LeMothz.webp",
        url: "https://x.com/LeMothzVT/status/1625565107429289984",
    },
    {
        image: "/gifted_art/2-14-2023_AzaleaArchivist.webp",
        url: "https://x.com/AzaleaArchivist/status/1625678791241797632",
    },
    {
        image: "/gifted_art/6-9-2023_SpellyDoesArt.webp",
        url: "https://x.com/SpellyDoesArt/status/1667287683259850757",
    },
    {
        image: "/gifted_art/6-22-2023_SpellyDoesArt.webp",
        url: "https://x.com/SpellyDoesArt/status/1672019065693433856",
    },
    {
        image: "/gifted_art/10-1-23_BloodyCaffeine.webp",
        url: "https://x.com/BloodyCaffeine/status/1708533311927361680",
    },
    {
        image: "/gifted_art/10-16-2023_BloodyCaffeine.webp",
        url: "https://x.com/BloodyCaffeine/status/1713963878143676457",
    },
    {
        image: "/gifted_art/2-23-2024_BloodyCaffeine.webp",
        url: "https://x.com/BloodyCaffeine/status/1761092478244139384",
    },
    {
        image: "/gifted_art/5-22-2024_fs_kymera.webp",
        url: "https://x.com/fs_kymera/status/1793272978341326994",
    },
    {
        image: "/gifted_art/3-27-2025_AzaleaArchives.webp",
        url: "https://x.com/AzaleaArchives/status/1905213535313117212",
    },
    {
        image: "/gifted_art/3-4-2026_LoyallyBear.webp",
        url: "https://x.com/cowboypony/status/2029279826952032464",
    },
    // {
    //     image: "/gifted_art/.webp",
    //     url: "",
    // },
];

export default function GiftedArtPage() {
    return (
        <div className="columns-2 sm:columns-3 gap-4 space-y-4">
            {posts.map((post, i) => (
                <a
                    key={i}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block break-inside-avoid group"
                >
                    <div className="relative">
                        <img
                            src={post.image}
                            alt="gifted art"
                            className="w-full rounded-lg transition-transform duration-200 group-hover:scale-[1.02]"
                        />

                        {/* twitter overlay */}
                        {/* twitter overlay */}
                        <div className="absolute bottom-2 right-2 opacity-80 group-hover:opacity-100 transition text-blue-500">
                            <TwitterIcon className="w-4 h-4 drop-shadow" />
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}