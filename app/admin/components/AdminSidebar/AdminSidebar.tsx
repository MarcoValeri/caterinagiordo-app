"use client";

import { useState } from "react";
import { MdDashboard, MdMenu, MdClose, MdArrowOutward, MdEvent, MdArticle } from "react-icons/md";
import AdminMenu from "../AdminMenu/AdminMenu";

const AdminSidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile burger button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded cursor-pointer"
      >
        {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-black text-white p-4 fixed lg:relative inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="lg:mt-0 mt-15 mb-8">
          <h1 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">
            Caterina Giordo
          </h1>
          <h2 className="text-xl font-bold">Admin</h2>
        </div>

        <div className="space-y-2">
          <div className="mb-5">
            <AdminMenu
              pathName="/admin"
              label="Dashboard"
              icon={MdDashboard}
            />
          </div>
          <div className="mb-5">
            <AdminMenu
              pathName="/admin/classes"
              label="Classes"
              icon={MdEvent}
            />
          </div>
          <div className="mb-5">
            <AdminMenu
              pathName="/admin/pages"
              label="Pages"
              icon={MdArticle}
            />
          </div>
          <div className="mb-5">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <MdArrowOutward size={18} />
              View Site
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
