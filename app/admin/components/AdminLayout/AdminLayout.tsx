"use client";

import "@/app/utils/configureAmplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { ReactNode } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminFooter from "../AdminFooter/AdminFooter";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <Authenticator hideSignUp={true}>
      {({ signOut, user }) => (
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 border flex flex-col lg:min-h-screen min-h-0 bg-black">
            <AdminSidebar />
            <AdminFooter
              userEmail={user?.signInDetails?.loginId}
              signOut={() => signOut?.()}
            />
          </div>
          <div className="w-full lg:w-2/3 border">
            {children}
          </div>
        </div>
      )}
    </Authenticator>
  );
};

export default AdminLayout;
