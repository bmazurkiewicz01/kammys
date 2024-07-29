import React, { Suspense } from "react";
import Divider from "@/components/ui/Divider";
import MainLayout from "@/components/layout/MainLayout";
import HeroParallax from "@/components/ui/HeroParallax";
import CompanyInfo from "@/components/layout/CompanyInfo";
import dynamic from "next/dynamic";
import Testimonials from "@/components/layout/Testimonials";
import Features from "@/components/layout/Features";
import HeroHeader from "@/components/layout/HeroHeader";
import Highlights from "@/components/layout/Highlights";
import Image from "next/image";
import CallToAction from "@/components/layout/CallToAction";

const GlobeDynamic = dynamic(() => import("@/components/ui/GlobeDynamic"), {
  suspense: true,
});

const Home: React.FC = () => {
  return (
    <MainLayout>
      <section className="bg-gradient-to-b from-[#b4d5f9] to-white dark:from-[rgb(2,41,79)] dark:to-[rgba(9,14,16,0)] bg-no-repeat gradient-bg-size">
        <div className="hidden sm:block pt-28 2xl:pt-0 3xl:pt-8">
          <HeroParallax products={products}>
            <HeroHeader />
          </HeroParallax>
        </div>
        <div className="flex sm:hidden pt-6 w-full h-screen justify-center items-center flex-col">
          <HeroHeader className="max-w-7xl mx-auto pt-20 px-4 w-full" />
          <div className="w-full h-full p-4 ">
            <Image
              src="/hero/img9.jpg"
              alt="Przeprowadzki Gorzów Wielkopolski"
              quality={100}
              width={200}
              height={200}
              className="w-full max-h-[300px] object-cover rounded-lg shadow-lg object-center"
              priority={true}
            />
          </div>
        </div>
      </section>
      <section>
        <CompanyInfo config={companyInfoConfig} />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Highlights />
      </section>
      <section className="hidden sm:block py-8">
        <div className="flex flex-row items-center pb-4 justify-center h-[70vh] my-8 md:h-auto dark:bg-[rgb(8,15,16)] bg-white relative max-w-[1200px] mx-auto w-full">
          <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[60rem] px-4">
            <h2 className="text-center text-3xl md:text-4xl dark:font-bold text-black dark:text-white mb-2">
              Łączymy Świat, Przeprowadzka po Przeprowadzce 🌍
            </h2>
            <Divider />
            <p className="text-center text-base md:text-lg max-w-3xl font-normal text-neutral-700 dark:text-neutral-200 mt-2 mx-auto">
              Od 1999 roku KAMMYS jest zaufaną marką w branży przeprowadzek i
              transportu. Z silną obecnością w Gorzowie Wielkopolskim i rozległą
              siecią w całej Europie, zapewniamy niezawodne, wydajne i
              profesjonalne usługi dostosowane do Twoich potrzeb.
            </p>
            <Suspense fallback={<div>Loading...</div>}>
              <GlobeDynamic />
            </Suspense>
          </div>
        </div>
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="py-10">
        <CallToAction />
      </section>
    </MainLayout>
  );
};

const products = [
  {
    title: "Przeprowadzki Gorzów Wielkopolski",
    thumbnail: "/hero/img1.jpg",
  },
  {
    title: "Szybkie i bezpieczne przeprowadzki",
    thumbnail: "/hero/img2.jpg",
  },
  {
    title: "Kompleksowe Przeprowadzki Firm",
    thumbnail: "/hero/img3.jpg",
  },
  {
    title: "Transport Pianin i Fortepianów",
    thumbnail: "/hero/img4.jpg",
  },
  {
    title: "Przeprowadzki na Terenie Gorzowa",
    thumbnail: "/hero/img5.jpg",
  },
  {
    title: "Przeprowadzki Międzynarodowe",
    thumbnail: "/hero/img6.jpg",
  },
  {
    title: "Przeprowadzki z Ubezpieczeniem",
    thumbnail: "/hero/img7.jpg",
  },
  {
    title: "Transport Materiałów Budowlanych",
    thumbnail: "/hero/img8.jpg",
  },
  {
    title: "Przeprowadzki Bibliotek i Magazynów",
    thumbnail: "/hero/img9.jpg",
  },
  {
    title: "Przeprowadzki z Ekipa",
    thumbnail: "/hero/img10.jpg",
  },
  {
    title: "Transport Antyków i Delikatnych Przedmiotów",
    thumbnail: "/hero/img11.jpg",
  },
  {
    title: "Przeprowadzki Mieszkań i Domów",
    thumbnail: "/hero/img12.jpg",
  },
  {
    title: "Usługi Transportowe na Terenie Europy",
    thumbnail: "/hero/img13.jpg",
  },
  {
    title: "Bezpieczne Przeprowadzki Sprzętu AGD",
    thumbnail: "/hero/img14.jpg",
  },
  {
    title: "Przeprowadzki Sklepów i Biur",
    thumbnail: "/hero/img14.jpg",
  },
];

const companyInfoConfig = {
  title: "Przeprowadzki i Usługi Transportowe",
  items: [
    {
      title: "Kompleksowe Przeprowadzki",
      description:
        "Od ponad 26 lat świadczymy profesjonalne i kompleksowe usługi przeprowadzkowe na terenie całej Europy. Nasza doświadczona ekipa tragarzy zadba o bezpieczny transport Twojego mienia.",
      img: "/hero/img12.jpg",
    },
    {
      title: "Transport Międzynarodowy",
      description:
        "Organizujemy przeprowadzki do Anglii, Skandynawii, Niemiec, Francji, Holandii oraz innych państw. Gwarantujemy bezpieczny i terminowy przewóz Twojego dobytku.",
      img: "/hero/img6.jpg",
    },
  ],
};

export default Home;
