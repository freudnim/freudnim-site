import Link from "next/link";

export default function AboutLayout() {
    return (
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <img className="w-56 h-auto object-contain" src="/freud_two.png" />
            <div className="flex flex-col">
                <p>
                    Hi! My name is Freud (pronounced 'froid' or 'frood'), but I also go by Kiri!<br /><br />
                    I'm a hobbyist illustrator who enjoys working with Vtubers on emotes, illustrations, character designs, and animations.<br /><br />
                    <Link
                        href="http://freudnim.co/ref"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-70 hover:opacity-100 transition-all duration-200 text-blue-800"
                    >
                        Ref sheet </Link>
                </p>
            </div>
        </div>
    );
}