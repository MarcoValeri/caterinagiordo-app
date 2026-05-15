import { GiLotusFlower } from "react-icons/gi";
import Image from "next/image";
import logo from "../../assets/images/caterina-giordo-logo.png";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="/" className="flex items-center gap-2 group">
              <Image
                src={logo}
                alt="Caterina Giordo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-semibold text-white">
                Caterina Giordo
              </span>
            </a>
            <p className="text-sm text-gray-400 max-w-xs">
              Yoga classes in London. Find your balance, build strength, and
              nurture your wellbeing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#45858C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>London, United Kingdom</li>
              <li>
                <a
                  href="mailto:cat@caterinagiordo.com"
                  className="hover:text-[#45858C] transition-colors"
                >
                  cat@caterinagiordo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-10 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400 mb-4">
            Stay up to date with class schedules and wellness tips
          </p>
          <a
            href="https://mailchi.mp/caterinagiordo/newsletter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 text-sm font-medium text-white bg-[#0F4C5C] rounded-full hover:bg-[#45858C] hover:shadow-lg hover:shadow-[#0F4C5C]/20 transition-all duration-300"
          >
            Subscribe to my Newsletter
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Caterina Giordo. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
