import dynamic from "next/dynamic";
import Image from "next/image";
import ArrowRight from "@mui/icons-material/ArrowRight";

const Carousel = dynamic(() => import("@/components/ui/Carousel"), {
  ssr: false,
});

const Services = () => {
  return (
    <div className="max-w-[1200px] w-full pt-14 flex flex-col justify-center items-center px-4">
      <div className="w-full gap-20 flex flex-col md:flex-row bg-[rgb(246,247,248)] dark:bg-[rgba(8,15,16,0.9)] dark:border-[1px] border-[rgb(156,204,252)] dark:border-[rgb(2,41,79)] rounded-xl py-10 md:py-20 px-4 md:px-10">
        <div className="w-full md:w-[50%] flex flex-col gap-10">
          <h2 className="text-xl md:text-3xl text-[rgb(31,41,55)] dark:text-white">
            Realizujemy Przeprowadzki, Które Skutecznie Zwiększają Twój Spokój i
            Komfort
          </h2>
          <p className="text-gray-600 dark:text-[#AAAAAA]">
            Świadczenie usług przeprowadzkowych w naszej firmie traktujemy
            kompleksowo. Dlatego nasza oferta obejmuje wszystkie aspekty
            związane z przeprowadzkami i transportem mienia. Dla nas
            przeprowadzki to nie tylko bezpieczny transport i terminowość.
            Realizując projekt przeprowadzki, zagłębiamy się w specyfikę Twoich
            potrzeb.
          </p>
          <p className="text-gray-600 dark:text-[#AAAAAA]">
            Analizujemy kluczowe wyzwania logistyczne. Badamy trasy i warunki
            transportu. Przychodzimy z gotową odpowiedzią na pytanie, jak
            zorganizować przeprowadzkę. Szybką, bezpieczną, a przede wszystkim
            skuteczną.
          </p>
          <div className="flex flex-col w-full md:flex-row md:gap-4 text-[rgb(31,41,55)] dark:text-white text-[14px]">
            <ul>
              <li>
                <ArrowRight />
                Przeprowadzki Domów
              </li>
              <li>
                <ArrowRight />
                Przeprowadzki Firm i Biur
              </li>
              <li>
                <ArrowRight />
                Transport Specjalistyczny
              </li>
            </ul>
            <ul>
              <li>
                <ArrowRight />
                Międzynarodowe Przeprowadzki
              </li>
              <li>
                <ArrowRight />
                Dodatkowe Usługi
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <Carousel autoSlide={true} autoSlideInterval={3500}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 md:min-h-[500px]"
              >
                <Image
                  src={slide}
                  alt="Przeprowadzki Gorzów Wielkopolski"
                  quality={50}
                  width={600}
                  height={600}
                  loading="eager"
                  className="object-cover object-center w-full h-full rounded-lg shadow-lg"
                  priority={true}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const slides = [
  "/hero/img1.jpg",
  "/hero/img2.jpg",
  "/hero/img9.jpg",
  "/hero/img4.jpg",
];

export default Services;
