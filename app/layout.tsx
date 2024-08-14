import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://przeprowadzkigorzow.com/"),
  title: {
    default: "KAMMYS - Przeprowadzki Gorzów Wielkopolski Transport, 667903199",
    template:
      "%s | KAMMYS - Przeprowadzki Gorzów Wielkopolski Transport, 667903199",
  },
  description:
    "KAMMYS oferuje profesjonalne i kompleksowe przeprowadzki w Gorzowie Wielkopolskim i okolicach. Konkurencyjne ceny, fachowa obsługa. Zadzwoń: 66790319",
  alternates: {
    canonical: "https://przeprowadzkigorzow.com/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://przeprowadzkigorzow.com/",
    siteName: "KAMMYS - Przeprowadzki Gorzów Wielkopolski Transport, 667903199",
    images: [
      {
        url: "https://przeprowadzkigorzow.com/opengraph-image.jpg",
        width: 1200,
        height: 272,
        alt: "KAMMYS - Przeprowadzki Gorzów Wielkopolski Transport, 667903199",
      },
    ],
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
