import Image, { StaticImageData } from "next/image";
import Nav from "../Nav/Nav";

import yogaPlaceholderOne from "../../assets/images/yoga-placeholder-one.jpg";

interface HeaderProps {
    showHero: boolean;
    heroImage?: StaticImageData;
    headline?: string;
    subtitle?: string;
    ctaText?: string;
    ctaHref?: string;
}

const Header = ({
    showHero,
    heroImage = yogaPlaceholderOne,
    headline = "Find Your Balance",
    subtitle = "Yoga classes in London with Caterina Giordo",
    ctaText = "Book a Class",
    ctaHref = "/book",
}: HeaderProps) => {
    return (
        <header className="w-full">
            {/* Navigation */}
            <div className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Nav />
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            {showHero && <div className="relative w-full h-[60vh] min-h-[400px]">
                <Image
                    src={heroImage}
                    alt="Yoga with Caterina Giordo"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wide">
                        {headline}
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl">
                        {subtitle}
                    </p>
                    <a
                        href={ctaHref}
                        className="mt-8 px-8 py-3 text-sm font-medium text-white bg-rose-400 rounded-full hover:bg-rose-500 transition-colors"
                    >
                        {ctaText}
                    </a>
                </div>
            </div>}
        </header>
    );
};

export default Header;
