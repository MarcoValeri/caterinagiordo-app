import Link from "next/link";
import { HiOutlineExternalLink, HiArrowRight } from "react-icons/hi";

interface ButtonLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

const ButtonLink = ({ href, label, isExternal = false }: ButtonLinkProps) => {
  const className =
    "group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-rose-400 rounded-full overflow-hidden transition-all duration-300 hover:bg-rose-500 hover:shadow-lg hover:shadow-rose-200 hover:scale-105 active:scale-95";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
          {label}
        </span>
        <HiOutlineExternalLink className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
        {label}
      </span>
      <HiArrowRight className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};

export default ButtonLink;
