import MainLayout from "../layout/MainLayout";
import HeroParallax from "./HeroParallax";
import Features from "./Features";
import { useEffect, useState } from "react";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onThemeChange = (oldTheme) => {
    setIsDarkMode(oldTheme === "dark" ? false : true);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(userPrefersDark ? true : false);
    } else {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  return (
    <MainLayout isDarkMode={isDarkMode} onThemeChange={onThemeChange}>
      <section className="bg-gradient-to-b from-[#b4d5f9] to-white dark:from-[rgb(2,41,79)] dark:to-[rgba(9,14,16,0)] bg-no-repeat gradient-bg-size">
        <div className="pt-28 2xl:pt-0 3xl:pt-8">
          <HeroParallax products={products} />
        </div>
      </section>
      <section>
        <Features isDarkMode={isDarkMode} />
      </section>
    </MainLayout>
  );
};

const products = [
  {
    title: "Przeprowadzki Gorzów Wielkopolski",
    thumbnail: "hero/img1.jpg",
  },
  {
    title: "Szybkie i bezpieczne przeprowadzki",
    thumbnail: "hero/img2.jpg",
  },
  {
    title: "Kompleksowe Przeprowadzki Firm",
    thumbnail: "hero/img3.jpg",
  },
  {
    title: "Transport Pianin i Fortepianów",
    thumbnail: "hero/img4.jpg",
  },
  {
    title: "Przeprowadzki na Terenie Gorzowa",
    thumbnail: "hero/img5.jpg",
  },
  {
    title: "Przeprowadzki Międzynarodowe",
    thumbnail: "hero/img6.jpg",
  },
  {
    title: "Przeprowadzki z Ubezpieczeniem",
    thumbnail: "hero/img7.jpg",
  },
  {
    title: "Transport Materiałów Budowlanych",
    thumbnail: "hero/img8.jpg",
  },
  {
    title: "Przeprowadzki Bibliotek i Magazynów",
    thumbnail: "hero/img9.jpg",
  },
  {
    title: "Przeprowadzki z Ekipa",
    thumbnail: "hero/img10.jpg",
  },
  {
    title: "Transport Antyków i Delikatnych Przedmiotów",
    thumbnail: "hero/img11.jpg",
  },
  {
    title: "Przeprowadzki Mieszkań i Domów",
    thumbnail: "hero/img12.jpg",
  },
  {
    title: "Usługi Transportowe na Terenie Europy",
    thumbnail: "hero/img13.jpg",
  },
  {
    title: "Bezpieczne Przeprowadzki Sprzętu AGD",
    thumbnail: "hero/img14.jpg",
  },
  {
    title: "Przeprowadzki Sklepów i Biur",
    thumbnail: "hero/img14.jpg",
  },
];

export default Home;
