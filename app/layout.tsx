import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://przeprowadzkigorzow.com/"),
  title: {
    default: "KAMMYS Przeprowadzki Gorzów Wielkopolski Transport, 667903199",
    template:
      "%s | KAMMYS Przeprowadzki Gorzów Wielkopolski Transport, 667903199",
  },
  description:
    "KAMMYS oferuje profesjonalne i kompleksowe przeprowadzki w Gorzowie Wielkopolskim i okolicach. Konkurencyjne ceny, fachowa obsługa. Zadzwoń: 66790319",
  keywords: [
    "Przeprowadzki Gorzów",
    "KAMMYS Przeprowadzki",
    "Przeprowadzki Gorzów Wielkopolski",
    "Transport 667-903-199",
    "Przeprowadzki Międzyrzecz",
    "Przeprowadzki Myślibórz",
    "Transport Zielona Góra",
    "Przeprowadzki Kostrzyn nad Odrą",
    "Transport Szczecin",
    "Transport Warszawa",
    "Usługi transportowe Gorzów",
    "Taxi bagażowe Gorzów",
  ],
  robots: "index, follow",
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
      <head>
        <Script
          type="application/ld+json"
          id="jsonld"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "KAMMYS - Przeprowadzki Gorzów Wielkopolski",
              url: "https://przeprowadzkigorzow.com/",
              telephone: "+48667903199",
              description:
                "KAMMYS oferuje profesjonalne i kompleksowe przeprowadzki w Gorzowie Wielkopolskim i okolicach. Konkurencyjne ceny, fachowa obsługa. Zadzwoń: 66790319",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Zamenhofa 2",
                addressLocality: "Gorzów Wielkopolski",
                postalCode: "66-400",
                addressCountry: "PL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "52.7404141",
                longitude: "15.251934",
              },
              openingHours: "24/7",
              image: [
                "https://przeprowadzkigorzow.com/logo.svg",
                "https://przeprowadzkigorzow.com/hero/img9.jpg",
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=100063789150390",
                "https://www.instagram.com/kammys.transportprzeprowadzki",
                "https://www.tiktok.com/@przeprowadzkigorzow",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+48667903199",
                  contactType: "customer service",
                  availableLanguage: ["Polish"],
                },
                {
                  "@type": "ContactPoint",
                  email: "kamysprzeprowadzki@tlen.pl",
                  contactType: "customer service",
                  availableLanguage: ["Polish"],
                },
              ],
              paymentAccepted: [
                "Gotówka",
                "Karta kredytowa",
                "Przelew bankowy",
              ],
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "Gorzów Wielkopolski",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Lubuskie",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "77",
              },
              review: [
                {
                  "@type": "Review",
                  description:
                    "Jestem bardzo zadowolona z usług firmy. Chłopaki znają się na swojej robocie, przeprowadzka przeszła bardzo szybko i sprawnie. Meble sami zabezpieczali przed uszkodzeniem. Uczynni i sympatyczni panowie. Cena również przystępna!",
                  name: "Profesjonalna obsługa",
                  reviewRating: {
                    "@type": "Rating",
                    bestRating: "5",
                    ratingValue: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Review",
                  description:
                    "W pełni zasłużona, bardzo pozytywna opinia. Pianino, co do którego były obawy, że nie będzie możliwości wyniesienia go z miejsca w którym stało (pierwsze piętro, ciasna klatka schodowa), Panowie przetransportowali na miejsce docelowe.",
                  name: "Doskonała obsługa",
                  reviewRating: {
                    "@type": "Rating",
                    bestRating: "5",
                    ratingValue: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Review",
                  description:
                    "Pełen profesjonalizm. Panowie wykazują się niesamowitą punktualnością, sprawnością i pomysłowością. Zawsze wszystko starannie przewiezione bez najmniejszych uszkodzeń 💪🏾",
                  name: "Bardzo sprawnie",
                  reviewRating: {
                    "@type": "Rating",
                    bestRating: "5",
                    ratingValue: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Review",
                  description:
                    "Wspaniała Firma! Polecam klientom, którzy cenią uczciwość, dokładność i profesjonalizm. KAMMYS - WYBIERZ!!!",
                  name: "Uczciwa i dokładna firma",
                  reviewRating: {
                    "@type": "Rating",
                    bestRating: "5",
                    ratingValue: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Review",
                  description:
                    "Polecam. Panowie bardzo rzetelni, dokładni i profesjonalni a przy tym bardzo mili. Najlepszy wybór jeżeli chodzi o przeprowadzki. W naszym przypadku transport mebli i bagaży z Gorzowa do Szczecina. Wszystko odpowiednio zabezpieczone.",
                  name: "Rzetelna usługa",
                  reviewRating: {
                    "@type": "Rating",
                    bestRating: "5",
                    ratingValue: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Review",
                  description:
                    "Profesjonalna firma przeprowadzkowa. Sprawnie, szybko z głową. Panowie naprawdę spełnili oczekiwania. Właśnie skończyli przeprowadzać biuro z masą mebli i dokumentów. Wykonali swoją pracę, sprawnie i z dbałością o każdy szczegół.",
                  name: "Sprawna przeprowadzka biura",
                  reviewRating: {
                    "@type": "Rating",
                    bestRating: "5",
                    ratingValue: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Review",
                  description:
                    "Firma Kammys przeprowadzała moich rodziców z Międzyrzecza do Węgorzewa (prawie 600 km). Zlecenie zostało przeprowadzone bardzo profesjonalnie. Od momentu przygotowania oględzin, poprzez wycenę, pakowanie dobytku, przewóz i rozładunek - można było liczyć na pomoc, fachową opiekę i rzetelną informację od właściciela firmy i jego pracowników. Polecam!",
                  name: "Profesjonalna przeprowadzka na długi dystans",
                  reviewRating: {
                    "@type": "Rating",
                    bestRating: "5",
                    ratingValue: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Review",
                  description:
                    "Przeprowadzka na odległość ponad 100 km odbyła się bez zastrzeżeń. Wszystkie meble udało upchnąć w jednym transporcie. Mistrzostwo świata! Dali radę. Żadnych większych uszkodzeń. Firmę Kammys mogę spokojnie polecić.",
                  name: "Przeprowadzka na 100 km bez zastrzeżeń",
                  reviewRating: {
                    "@type": "Rating",
                    bestRating: "5",
                    ratingValue: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "Review",
                  description:
                    "Dziękuję firmie Kammys za przyjęcie zlecenia w dniu przeprowadzki :)) Panowie bezpiecznie i szybko przenosili rzeczy i cena nie jest wygórowana. Polecam wszystkim ich usługi.",
                  name: "Szybka i bezpieczna przeprowadzka",
                  reviewRating: {
                    "@type": "Rating",
                    bestRating: "5",
                    ratingValue: "5",
                    worstRating: "1",
                  },
                },
              ],
              knowsAbout: [
                "przeprowadzki lokalne",
                "przewóz mebli",
                "usługi transportowe",
              ],
              slogan:
                "Twoje przeprowadzki w Gorzowie - Profesjonalnie i bezstresowo!",
            }),
          }}
        ></Script>
      </head>
      <body
        className={`${inter.className} bg-white color-[#4C5967] h-full m-0 dark:bg-[rgb(8,15,16)] dark:color-[rgb(148,166,184)]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
