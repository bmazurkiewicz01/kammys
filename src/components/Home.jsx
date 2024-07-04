import MainLayout from "../layout/MainLayout";
import HeroParallax from "./HeroParallax";

const Home = () => {
  return (
    <MainLayout>
      <section className="bg-gradient-to-b from-[#b4d5f9] to-white dark:from-[rgb(2,41,79)] dark:to-[rgba(9,14,16,0)] bg-no-repeat gradient-bg-size">
        <div className="pt-28 2xl:pt-0 3xl:pt-8">
          <HeroParallax products={products} />;
        </div>
      </section>
    </MainLayout>
  );
};

const products = [
  {
    title: "Profesjonalne Przeprowadzki Gorzów",
    link: "",
    thumbnail: "hero/img1.jpg",
  },
  {
    title: "Szybkie i Bezpieczne Przeprowadzki",
    link: "",
    thumbnail: "hero/img2.jpg",
  },
  {
    title: "Kompleksowe Przeprowadzki Firm",
    link: "",
    thumbnail: "hero/img3.jpg",
  },
  {
    title: "Transport Pianin i Fortepianów",
    link: "",
    thumbnail: "hero/img4.jpg",
  },
  {
    title: "Przeprowadzki na Terenie Gorzowa",
    link: "",
    thumbnail: "hero/img5.jpg",
  },
  {
    title: "Przeprowadzki Międzynarodowe",
    link: "",
    thumbnail: "hero/img6.jpg",
  },
  {
    title: "Przeprowadzki z Ubezpieczeniem",
    link: "",
    thumbnail: "hero/img7.jpg",
  },
  {
    title: "Transport Materiałów Budowlanych",
    link: "",
    thumbnail: "hero/img8.jpg",
  },
  {
    title: "Przeprowadzki Bibliotek i Magazynów",
    link: "",
    thumbnail: "hero/img9.jpg",
  },
  {
    title: "Przeprowadzki z Ekipa",
    link: "",
    thumbnail: "hero/img10.jpg",
  },
  {
    title: "Transport Antyków i Delikatnych Przedmiotów",
    link: "",
    thumbnail: "hero/img11.jpg",
  },
  {
    title: "Przeprowadzki Mieszkań i Domów",
    link: "",
    thumbnail: "hero/img12.jpg",
  },
  {
    title: "Usługi Transportowe na Terenie Europy",
    link: "",
    thumbnail: "hero/img13.jpg",
  },
  {
    title: "Bezpieczne Przeprowadzki Sprzętu AGD",
    link: "",
    thumbnail: "hero/img14.jpg",
  },
  {
    title: "Przeprowadzki Sklepów i Biur",
    link: "",
    thumbnail: "hero/img14.jpg",
  },
];

export default Home;
