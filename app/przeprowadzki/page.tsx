import MainLayout from "@/components/layout/MainLayout";
import CallToAction from "@/components/layout/CallToAction";
import dynamic from "next/dynamic";
import AboutHeroSection from "@/components/layout/AboutHeroSection";
import { Metadata } from "next";
import Locations from "@/components/layout/Locations";
import Image from "next/image";
import Testimonials from "@/components/layout/Testimonials";

const Gallery = dynamic(() => import("@/components/ui/Gallery"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Realizacje",
  alternates: {
    canonical: "https://przeprowadzkigorzow.com/przeprowadzki",
  },
  openGraph: {
    url: "https://przeprowadzkigorzow.com/przeprowadzki",
    title:
      "Realizacje | KAMMYS - Przeprowadzki Gorzów Wielkopolski Transport, 667903199",
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

const configLocations = {
  preTitle: "Zaufaj naszym specjalistom",
  title: "Zrealizowane Projekty - Przeprowadzki Gorzów Wielkopolski",
  description:
    "KAMMYS z dumą przedstawia galerię zrealizowanych projektów przeprowadzek, które perfekcyjnie odpowiadają Twoim oczekiwaniom i standardom. Jako lider w branży, nasze usługi przeprowadzek w Gorzowie Wielkopolskim oraz w okolicach gwarantują pełne zadowolenie klientów. Zobacz, jak KAMMYS pomógł licznym osobom i firmom w ich bezstresowych przeprowadzkach.",
  locationTitle: "Zrealizowane projekty przeprowadzek:",
};

const Realizations: React.FC = () => {
  return (
    <MainLayout>
      <section className="w-full pb-20 md:pb-32 flex flex-col justify-center items-center bg-gradient-to-b from-[#b4d5f9] to-white dark:from-[rgb(2,41,79)] dark:to-[rgba(9,14,16,0)] bg-no-repeat gradient-bg-size">
        <AboutHeroSection
          headerText="Zrealizowane projekty perfekcyjnie odpowiadające Twoim oczekiwaniom i standardom"
          paragraphText="Nasze realizacje"
          imgSrc="/hero/img10.jpg"
        />
      </section>
      <section>
        <Locations config={configLocations}>
          <Image
            src="/hero/img6.jpg"
            width={600}
            height={500}
            alt="Przeprowadzka w Gorzowie Wielkopolskim"
            className="h-6/6 max-h-[300px] 2md:max-h-[600px] w-[600px] rounded-lg shadow-lg 2md:ml-auto object-cover"
          />
        </Locations>
      </section>
      <section className="w-full flex flex-col justify-center items-center pt-20">
        <h2 className="text-3xl mb-4 md:text-[3rem] text-[rgb(31,41,55)] dark:text-white font-bold text-left md:text-center px-4 leading-[1.1]">
          <span className="text-gradient">
            Przeprowadzki Gorzów Wielkopolski
          </span>
        </h2>
        <p className="text-gray-600 dark:text-[rgb(148,166,184)] text-base md:text-xl text-left md:text-center px-4">
          Nasza galeria zrealizowanych przeprowadzek i transportów
        </p>
        <Gallery />
      </section>
      <section className="md:mt-20">
        <Testimonials />
      </section>
      <section className="w-full mt-24 mb-20">
        <CallToAction />
      </section>
    </MainLayout>
  );
};

export default Realizations;
