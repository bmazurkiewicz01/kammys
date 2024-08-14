import dynamic from "next/dynamic";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import HeroParallax from "@/components/ui/HeroParallax";
import HeroHeader from "@/components/layout/HeroHeader";
import Carousel from "@/components/ui/Carousel";

const CompanyInfo = dynamic(() => import("@/components/layout/CompanyInfo"), {
  ssr: true,
});

const Features = dynamic(() => import("@/components/layout/Features"), {
  ssr: true,
});

const Highlights = dynamic(() => import("@/components/layout/Highlights"), {
  ssr: true,
});

const Testimonials = dynamic(() => import("@/components/layout/Testimonials"), {
  ssr: true,
});

const CallToAction = dynamic(() => import("@/components/layout/CallToAction"), {
  ssr: true,
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
        <div className="block sm:hidden w-full pt-24">
          <HeroHeader className="max-w-7xl mx-auto pt-0 px-4 w-full" />
          <div className="p-4 max-h-[300px] presm:max-h-[450px]">
            <Carousel autoSlide={true} autoSlideInterval={3500}>
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Image
                    src={slide}
                    alt="Przeprowadzki Gorzów Wielkopolski"
                    quality={50}
                    width={600}
                    height={600}
                    loading="eager"
                    className="object-cover w-full h-full rounded-lg shadow-lg"
                    priority={true}
                  />
                </div>
              ))}
            </Carousel>
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
      <section>
        <Testimonials />
      </section>
      <section className="py-10">
        <CallToAction />
      </section>
    </MainLayout>
  );
};

const slides = [
  "/hero/img7.jpg",
  "/hero/img2.jpg",
  "/hero/img9.jpg",
  "/hero/img4.jpg",
];

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
  title: "Przeprowadzki Gorzów Wielkopolski i Usługi Transportowe",
  items: [
    {
      title: "Kompleksowe Przeprowadzki Gorzów Wielkopolski",
      description:
        "Od ponad 26 lat świadczymy profesjonalne i kompleksowe usługi przeprowadzkowe na terenie Gorzowa Wielkopolskiego oraz całej Europy. Nasza doświadczona ekipa tragarzy zadba o bezpieczny transport Twojego mienia. Wybierz naszą firmę przeprowadzkową w Gorzowie Wielkopolskim i ciesz się bezstresową przeprowadzką.",
      img: "/hero/img12.jpg",
    },
    {
      title: "Międzynarodowy Transport z Gorzowa Wielkopolskiego",
      description:
        "Organizujemy przeprowadzki z Gorzowa Wielkopolskiego do Anglii, Skandynawii, Niemiec, Francji, Holandii oraz innych krajów. Gwarantujemy bezpieczny i terminowy przewóz Twojego dobytku. Skorzystaj z naszych usług transportowych z Gorzowa Wielkopolskiego i zyskaj spokój o swój majątek.",
      img: "/hero/img6.jpg",
    },
  ],
};

export default Home;
