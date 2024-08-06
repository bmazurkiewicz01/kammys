import MainLayout from "@/components/layout/MainLayout";
import CallToAction from "@/components/layout/CallToAction";
import dynamic from "next/dynamic";
import AboutHeroSection from "@/components/layout/AboutHeroSection";

const Gallery = dynamic(() => import("@/components/ui/Gallery"), {
  ssr: false,
});

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
      <section className="w-full mt-24 mb-20">
        <CallToAction />
      </section>
    </MainLayout>
  );
};

export default Realizations;
