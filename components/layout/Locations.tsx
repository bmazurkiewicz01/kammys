import { ArrowRight } from "@mui/icons-material";
import Image from "next/image";
import { config } from "process";

const initialConfig = {
  preTitle: "Zaufaj naszym specjalistom",
  title: "Usługi Transportowe Gorzów Wielkopolski",
  description:
    "KAMMYS to wiodąca firma w branży przeprowadzek w Gorzowie Wielkopolskim, oferująca kompleksowe usługi transportowe dostosowane do indywidualnych potrzeb klientów. Jako renomowany lider w dziedzinie przeprowadzek i transportu, zapewniamy najwyższy standard obsługi klienta, co czyni nas idealnym wyborem do realizacji Twoich przeprowadzek lokalnych i krajowych.",
  locationTitle: "Lokalizacje obsługiwane:",
};

const defaultChildren = (
  <Image
    src={"/hero/img13.jpg"}
    width={600}
    height={500}
    alt="Przeprowadzka w Gorzowie Wielkopolskim"
    className="h-6/6 max-h-[300px] 2md:max-h-[500px] w-[600px] rounded-lg shadow-lg 2md:ml-auto object-cover"
  />
);

const Locations: React.FC<{
  config?: typeof initialConfig;
  children?: React.ReactNode;
}> = ({ config = initialConfig, children = defaultChildren }) => {
  return (
    <div className="container max-w-[1200px] w-full m-8 mx-auto flex flex-col 2md:flex-row items-center px-6 gap-6 sm:gap-12">
      <div className="w-full 2md:w-[50%]">
        <p className="text-[18px] ml-1 text-[rgb(25,90,210)] dark:text-[rgb(25,118,255)]">
          {config.preTitle}
        </p>
        <h2 className="text-3xl 2md:text-5xl text-[rgb(31,41,55)] dark:text-white pt-5">
          {config.title}
        </h2>
        <p className="text-gray-600 dark:text-[rgb(148,166,184)] pt-2 pb-5">
          {config.description}
        </p>
        <p className="text-lg 2md:text-lg text-[rgb(31,41,55)] dark:text-white font-medium">
          {config.locationTitle}
        </p>
        <div className="flex flex-row w-full 2md:gap-4 text-[rgb(31,41,55)] dark:text-white text-[14px]">
          <ul className="hidden 2md:block">
            <li>
              <ArrowRight />
              Przeprowadzki Gorzów Wielkopolski
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Zielona Góra
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Międzyrzecz
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Wrocław
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Toruń
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Warszawa
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Wałbrzych
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Berlin
            </li>
          </ul>
          <ul className="hidden 2md:block">
            <li>
              <ArrowRight />
              Przeprowadzki Kostrzyn nad Odrą
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Szczecin
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Poznań
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Legnica
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Gdańsk
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Piła
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Wałcz
            </li>
            <li>
              <ArrowRight />
              Przeprowadzki Bydgoszcz
            </li>
          </ul>
          <ul className="block 2md:hidden">
            <li>
              <ArrowRight />
              Gorzów Wielkopolski
            </li>
            <li>
              <ArrowRight />
              Zielona Góra
            </li>
            <li>
              <ArrowRight />
              Międzyrzecz
            </li>
            <li>
              <ArrowRight />
              Wrocław
            </li>
            <li>
              <ArrowRight />
              Toruń
            </li>
            <li>
              <ArrowRight />
              Warszawa
            </li>
            <li>
              <ArrowRight />
              Wałbrzych
            </li>
            <li>
              <ArrowRight />
              Berlin
            </li>
          </ul>
          <ul className="block 2md:hidden">
            <li>
              <ArrowRight />
              Kostrzyn nad Odrą
            </li>
            <li>
              <ArrowRight />
              Szczecin
            </li>
            <li>
              <ArrowRight />
              Poznań
            </li>
            <li>
              <ArrowRight />
              Legnica
            </li>
            <li>
              <ArrowRight />
              Gdańsk
            </li>
            <li>
              <ArrowRight />
              Piła
            </li>
            <li>
              <ArrowRight />
              Wałcz
            </li>
            <li>
              <ArrowRight />
              Bydgoszcz
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full 2md:w-[50%]">{children}</div>
    </div>
  );
};

export default Locations;
