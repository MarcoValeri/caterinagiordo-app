"use client";

import "@/app/utils/configureAmplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const AdminPage = () => {
  return (
    <Authenticator hideSignUp={true}>
      {({ signOut, user }) => (
        <div className="min-h-screen bg-gray-50">
          {/* Admin Header */}
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-800">
                Admin Dashboard
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {user?.signInDetails?.loginId}
                </span>
                <button
                  onClick={signOut}
                  className="px-4 py-2 text-sm font-medium text-white bg-[#0F4C5C] rounded-full hover:bg-[#45858C] transition-colors cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </header>

          {/* Admin Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-light text-gray-800 mb-4">
                Welcome, Caterina
              </h2>
              <p className="text-gray-600">
                This is your admin area. You can manage your classes, update
                content, and more from here.
              </p>
            </div>
          </main>
        </div>
      )}
    </Authenticator>
  );
};

export default AdminPage;
