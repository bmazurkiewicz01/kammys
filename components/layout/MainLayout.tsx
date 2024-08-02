import React, { ReactNode } from "react";
import Header from "./Header";
import dynamic from "next/dynamic";
import "./mainlayout.css";

const Footer = dynamic(() => import("./Footer"), { ssr: true });

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="bg-[#fefeff] dark:bg-[#080f10]">{children}</main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default MainLayout;
