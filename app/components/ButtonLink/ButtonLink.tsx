import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ButtonLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

const ButtonLink = ({ href, label, isExternal = false }: ButtonLinkProps) => {
  const className =
    "inline-flex items-center gap-1.5 text-sm font-medium text-rose-400 hover:text-rose-500 transition-colors";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
        <HiOutlineExternalLink className="text-base" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};

export default ButtonLink;
