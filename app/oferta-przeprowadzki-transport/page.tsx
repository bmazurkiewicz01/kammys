import MainLayout from "@/components/layout/MainLayout";
import AboutHeroSection from "@/components/layout/AboutHeroSection";
import dynamic from "next/dynamic";

const InfoCards = dynamic(() => import("@/components/layout/InfoCards"), {
  ssr: true,
});

const Services = dynamic(() => import("@/components/layout/Services"), {
  ssr: true,
});

const CallToAction = dynamic(() => import("@/components/layout/CallToAction"), {
  ssr: true,
});

const About: React.FC = () => {
  return (
    <MainLayout>
      <section className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#b4d5f9] to-white dark:from-[rgb(2,41,79)] dark:to-[rgba(9,14,16,0)] bg-no-repeat gradient-bg-size">
        <AboutHeroSection />
      </section>
      <section className="w-full flex flex-col justify-center items-center my-12">
        <InfoCards />
      </section>
      <section className="w-full flex flex-col justify-center items-center my-12">
        <Services />
      </section>
      <section className="w-full mt-24 mb-20">
        <CallToAction />
      </section>
    </MainLayout>
  );
};

export default About;
