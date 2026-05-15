"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface AdminMenuProps {
  pathName: string;
  label: string;
  icon: IconType;
}

const AdminMenu = ({ pathName, label, icon: Icon }: AdminMenuProps) => {
  const currentPath = usePathname();
  const isActive = currentPath === pathName;

  return (
    <Link
      href={pathName}
      className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg transition-colors ${
        isActive
          ? "text-white bg-gray-800 font-medium"
          : "text-gray-400 hover:text-white hover:bg-gray-800/50"
      }`}
    >
      <Icon size={18} />
      {label}
    </Link>
  );
};

export default AdminMenu;
