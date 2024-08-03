import ArrowRight from "@mui/icons-material/ArrowRight";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SecurityIcon from "@mui/icons-material/Security";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Link from "next/link";

interface Item {
  icon: JSX.Element;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    icon: <ApartmentIcon />,
    title: "Doświadczenie i Profesjonalizm",
    description:
      "Posiadamy ponad 26 lat doświadczenia w świadczeniu usług transportowych.",
  },
  {
    icon: <BusinessCenterIcon />,
    title: "Najwyższy Standard Usług",
    description:
      "Nasze usługi cechują się najwyższym standardem, a jednocześnie oferujemy je w przystępnych cenach.",
  },
  {
    icon: <SecurityIcon />,
    title: "Materiały Zabezpieczające",
    description:
      "Dysponujemy wszelkimi niezbędnymi materiałami do zabezpieczania mienia podczas przeprowadzki.",
  },
  {
    icon: <LocalShippingIcon />,
    title: "Nowoczesne Auta Przeprowadzkowe",
    description: "Nasza flota składa się z nowoczesnych aut przeprowadzkowych.",
  },
  {
    icon: <AccountBalanceIcon />,
    title: "Ubezpieczenie OCP",
    description:
      "W trosce o bezpieczeństwo przewożonego mienia, posiadamy ubezpieczenie OCP.",
  },
];

const InfoCards = () => {
  return (
    <div className="max-w-[1200px] w-full pt-14 flex flex-col justify-center items-center px-4">
      <div className="w-full flex flex-col 2md:flex-row">
        <div className="w-full 2md:w-[50%] flex flex-col gap-5 md:gap-10 bg-[#5393fa] dark:bg-[#3465b4] py-28 md:py-40 px-12 mr-20 rounded-tl-[120px] rounded-br-[200px]">
          <h2 className="text-xl md:text-3xl text-white dark:text-white">
            Planujesz przeprowadzkę lub szukasz profesjonalnej firmy
            transportowej?
          </h2>
          <p className="text-[rgba(255,255,255,0.8)] dark:text-[rgba(255,255,255,0.8)]">
            Poznaj naszą ofertę na kompleksowe przeprowadzki i usługi
            transportowe. Gwarantujemy bezpieczeństwo, konkurencyjne ceny i
            pełne zadowolenie z wykonanej usługi.
          </p>
          <Link
            href={"/przeprowadzki"}
            className="w-full md:w-[50%] relative group inline-block py-2 px-3 text-white font-semibold bg-[rgb(41,55,128)] dark:bg-[rgb(26,35,81)] rounded-md overflow-hidden"
          >
            <div className="absolute top-0 right-full w-full h-full bg-[rgb(31,42,96)] dark:bg-[rgb(18,24,55)] transform group-hover:translate-x-full group-hover:scale-102 transition duration-1000"></div>
            <button className="w-full relative flex items-center justify-center">
              <span className="mr-1 font-bold text-[12px]">
                Zobacz realizacje
              </span>
              <span className="font-bold text-[12px]">
                <ArrowRight />
              </span>
            </button>
          </Link>
        </div>
        <div className="w-full 2md:w-[50%] flex flex-wrap flex-row pt-10 2md:pt-0">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${index === items.length - 1 ? "mr-auto" : ""} ${
                index % 2 === 0 ? "2md:pl-5" : "sm:pl-5"
              } ${
                index in [0, 1] ? "pt-5 sm:pt-0" : "pt-5"
              } max-w-full basis-full sm:max-w-[49%] sm:basis-[49%] 2md:max-w-[49%] 2md:basis-[49%] flex-grow`}
            >
              <div
                className={`rounded-[10px] flex flex-col gap-2 p-6 h-full border border-[#9CCCFC] dark:border-[rgb(19,27,32)] bg-[rgba(156,204,252,0.2)] dark:bg-[rgb(9,14,16)] hover:shadow-[0_0_24px_#CEE5FD] dark:hover:shadow-[0_0_24px_#02294F] hover:border-[#55A6F6] hover:dark:border-[#364049]`}
              >
                <div className="text-[#0959AA] dark:text-[#0959AA]">
                  {item.icon}
                </div>
                <div>
                  <p className="m-0 text-base font-medium text-[#131B20] dark:text-white">
                    {item.title}
                  </p>
                  <p className="m-0 text-[14px] text-[#4C5967] dark:text-[#94A6B8] leading-[1.43]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
