import MainLayout from "@/components/layout/MainLayout";
import AboutHeroSection from "@/components/layout/AboutHeroSection";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import Locations from "@/components/layout/Locations";
import Image from "next/image";

const InfoCards = dynamic(() => import("@/components/layout/InfoCards"), {
  ssr: true,
});

const Services = dynamic(() => import("@/components/layout/Services"), {
  ssr: true,
});

const CallToAction = dynamic(() => import("@/components/layout/CallToAction"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Oferta",
  alternates: {
    canonical: "https://przeprowadzkigorzow.com/oferta-przeprowadzki-transport",
  },
  openGraph: {
    url: "https://przeprowadzkigorzow.com/oferta-przeprowadzki-transport",
    title:
      "Oferta | KAMMYS - Przeprowadzki Gorzów Wielkopolski Transport, 667903199",
    type: "website",
    locale: "pl_PL",
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

const locationsConfig = {
  preTitle: "Zaufaj naszym specjalistom",
  title: "Usługi Transportowe Gorzów Wielkopolski",
  description:
    "W KAMMYS zapewniamy kompleksową ofertę usług przeprowadzkowych i transportowych na najwyższym poziomie. Nasza firma działa na terenie Gorzowa Wielkopolskiego oraz w okolicznych miejscowościach, zapewniając bezstresową, bezpieczną i terminową obsługę każdego zlecenia. Oferujemy pełen zakres usług związanych z przeprowadzkami mieszkań i domów na terenie Gorzowa Wielkopolskiego. Zajmujemy się wszystkim od pakowania i zabezpieczania mienia, poprzez transport, aż po rozpakowanie i ustawienie rzeczy w nowym miejscu.",
  locationTitle: "Lokalizacje obsługiwane:",
};

const Offer: React.FC = () => {
  return (
    <MainLayout>
      <section className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#b4d5f9] to-white dark:from-[rgb(2,41,79)] dark:to-[rgba(9,14,16,0)] bg-no-repeat gradient-bg-size">
        <AboutHeroSection
          headerText="Profesjonalne przeprowadzki doskonale dopasowane do twoich potrzeb i wymagań"
          paragraphText="Nasza oferta"
          imgSrc="/hero/img7.jpg"
        />
      </section>
      <section className="w-full flex flex-col justify-center items-center my-12">
        <InfoCards />
      </section>
      <section className="w-full flex flex-col justify-center items-center my-12">
        <Services />
      </section>
      <section className="my-20">
        <Locations config={locationsConfig}>
          <Image
            src="/hero/img17.jpeg"
            width={600}
            height={500}
            alt="Przeprowadzka w Gorzowie Wielkopolskim"
            className="h-6/6 max-h-[300px] 2md:max-h-[600px] w-[600px] rounded-lg shadow-lg 2md:ml-auto object-cover"
          />
        </Locations>
      </section>
      <section className="w-full mt-24 mb-20">
        <CallToAction />
      </section>
    </MainLayout>
  );
};

export default Offer;
