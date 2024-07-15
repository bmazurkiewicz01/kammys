import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Przeprowadzki Gorzów",
  description: "Przeprowadzki Gorzów",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${inter.className} bg-white color-[#4C5967] h-full m-0 dark:bg-[rgb(8,15,16)] dark:color-[rgb(148,166,184)]`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
