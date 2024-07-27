"use client";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useState } from "react";
import "./features.css";
import Image from "next/image";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Link from "next/link";
import { title } from "process";

interface Item {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
}

const items: Item[] = [
  {
    icon: <LocalShippingIcon />,
    title: "Przeprowadzki Gorzów i okolice, cały kraj i Europa",
    description:
      "Realizujemy przeprowadzki w Gorzowie, całej Polsce oraz Europie, w tym do Anglii, Skandynawii, Niemiec, Francji, Holandii i innych krajów.",
    image: "/hero/img12.jpg",
  },
  {
    icon: <DirectionsCarIcon />,
    title: "Kompleksowe usługi transportowe",
    description:
      "Przewozimy pianina, fortepiany, sprzęt AGD i RTV, antyki, maszyny i towary na paletach. Zapewniamy pełne zabezpieczenie ładunku.",
    image: "/hero/img10.jpg",
  },
  {
    icon: <GroupsIcon />,
    title: "Elastyczność i dostosowanie do klienta",
    description:
      "Oferujemy demontaż i montaż mebli, utylizację starych rzeczy, sprzątanie piwnic i garaży oraz wynajem aut z kierowcą. Dostosowujemy się do indywidualnych potrzeb.",
    image: "/hero/img1.jpg",
  },
];

const Features = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <div className="max-w-[1200px] py-16 mx-auto flex flex-col 2md:flex-row gap-[48px] px-6">
      <div className="w-full 2md:max-w-[48%]">
        <h2 className="text-[#131B20] dark:text-white text-[34px] leading-[1.235]">
          Twoje Mienie w Dobrych Rękach!
        </h2>
        <p className="text-[#4C5967] dark:text-[rgb(148,166,184)] mb-4 sm:mb-8 leading-normal font-normal">
          Oferujemy kompleksowe usługi przeprowadzkowe i transportowe,
          dostosowane do indywidualnych potrzeb klientów. Nasze doświadczenie i
          profesjonalizm gwarantują satysfakcję i bezpieczeństwo podczas każdej
          przeprowadzki.
        </p>
        <div className="w-full flex sm:hidden flex-wrap box-border gap-2 flex-row">
          {items.map(({ title }, index) => (
            <div
              key={index}
              className={` flex items-center justify-center cursor-pointer self-center py-3 px-1 font-semibold h-8 border ${
                selectedItemIndex === index
                  ? "border-[#9CCCFC] dark:border-[#9CCCFC] bg-[#0959AA]"
                  : "border-[rgba(9,89,170,0.3)] bg-chip-gradient dark:bg-none"
              } ripple rounded-2xl hover:bg-[#0959AA] hover:dark:bg-[#064079] focus-visible:border-[#02294F] `}
              onClick={() => handleItemClick(index)}
            >
              <span
                className={`text-[12px] px-3 ${
                  selectedItemIndex === index
                    ? "text-white"
                    : "text-[rgb(9,89,170)] dark:text-[rgb(156,204,252)]"
                }`}
              >
                {title}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full block sm:hidden mt-8 bg-light-card-gradient dark:bg-dark-card-gradient rounded-[24px] border-[1px] border-[rgba(214,226,235,0.8)] dark:border-[rgba(54,64,73,0.3)] hover:bg-[rgba(25,118,210,0.04)] hover:shadow-[0_0_24px_#CEE5FD] dark:hover:shadow-[0_0_24px_#02294F] hover:border-[#55A6F6]">
          <Image
            className="w-full max-h-[280px] object-cover box-border rounded-t-[24px]"
            src={items[selectedItemIndex].image}
            alt={items[selectedItemIndex].title}
            width={449}
            height={280}
          />
          <div className="pl-4 pr-4 pb-4 text-[14px]">
            <p className="text-[#131B20] dark:text-white pt-10 font-bold">
              {selectedFeature.title}
            </p>
            <p className="py-1 leading-[1.43] text-[#4C5967] dark:text-[rgb(148,166,184)]">
              {selectedFeature.description}
            </p>
            <Link
              className="text-[rgb(25,118,210)] inline-flex items-center transition-all duration-250 hover:translate-x-[2px] hover:underline font-bold"
              href={"/oferta"}
              passHref
            >
              <span>Dowiedz się więcej</span>
              <ChevronRightRoundedIcon
                fontSize="small"
                sx={{ mt: "1px", ml: "2px" }}
              />
            </Link>
          </div>
        </div>
        <div className="w-full hidden sm:flex items-start justify-center flex-col gap-4">
          {items.map((item, index) => (
            <button
              key={index}
              className={`cursor-pointer h-fit w-full inline-flex items-center justify-center outline-0 margin-0 font-medium text-[0.875rem] uppercase min-w-16 ${
                selectedItemIndex === index
                  ? "text-[rgba(156,204,252,0.2)] dark:text-[rgba(2,41,79,0.2)]"
                  : ""
              } border ${
                selectedItemIndex === index
                  ? "border-[#9CCCFC] dark:border-[rgb(2,41,79)]"
                  : "border-[#D6E2EB] dark:border-[#131B20]"
              } ${
                selectedItemIndex === index
                  ? "bg-[rgba(156,204,252,0.2)] dark:bg-[rgba(25,118,210,0.04)]"
                  : ""
              } ripple hover:bg-[rgba(25,118,210,0.04)] hover:shadow-[0_0_24px_#CEE5FD] dark:hover:shadow-[0_0_24px_#02294F] hover:border-[#55A6F6] hover:dark:border-[#364049] shadow-card rounded-[4px] box-border transition-all duration-100 ease-in focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[rgba(9,89,170,0.5)] p-6`}
              onClick={() => handleItemClick(index)}
            >
              <div className="w-full flex text-left flex-col 2md:flex-row items-center gap-[20px]">
                <div
                  className={`w-full 2md:w-auto ${
                    selectedItemIndex === index
                      ? "text-[#0959AA] dark:text-[#0959AA]"
                      : "text-[#BFCCD9] dark:text-[#364049]"
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[#131B20] dark:text-white font-bold">
                    {item.title}
                  </p>
                  <p className="text-[#4C5967] dark:text-rgb(148,166,184) my-[4px]">
                    {item.description}
                  </p>
                  <Link
                    className="text-[rgb(25,118,210)] inline-flex items-center transition-all duration-250 hover:translate-x-[2px] hover:underline font-bold"
                    href={"/oferta"}
                    passHref
                  >
                    <span>Dowiedz się więcej</span>
                    <ChevronRightRoundedIcon
                      fontSize="small"
                      sx={{ mt: "1px", ml: "2px" }}
                    />
                  </Link>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full max-h-[560px] 2md:max-h-full 2md:max-w-[52%] hidden sm:flex">
        <Image
          src={items[selectedItemIndex].image}
          alt={items[selectedItemIndex].title}
          width={600}
          height={757}
          className="w-full object-cover rounded-[4px] border-[1px] border-[rgba(214,226,235,0.8)] dark:border-[rgba(54,64,73,0.3)] hover:bg-[rgba(25,118,210,0.04)] hover:shadow-[0_0_24px_#CEE5FD] dark:hover:shadow-[0_0_24px_#02294F] hover:border-[#55A6F6]"
        />
      </div>
    </div>
  );
};

export default Features;
