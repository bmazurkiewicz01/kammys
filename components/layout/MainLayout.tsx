import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./mainlayout.css";

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
