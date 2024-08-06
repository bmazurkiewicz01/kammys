import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Przeprowadzki Gorzów Wielkopolski Transport, 667903199",
    template: "%s | Przeprowadzki Gorzów Wielkopolski Transport, 667903199",
  },
  description:
    "Profesjonalne i kompleksowe przeprowadzki w Gorzowie Wielkopolskim i okolicach. Konkurencyjne ceny, fachowa obsługa, transport do 1,5 tony. Zadzwoń: 667903199",
  alternates: {
    canonical: "https://przeprowadzkigorzow.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white color-[#4C5967] h-full m-0 dark:bg-[rgb(8,15,16)] dark:color-[rgb(148,166,184)]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
