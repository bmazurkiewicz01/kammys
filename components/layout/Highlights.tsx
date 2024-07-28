import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EuroIcon from "@mui/icons-material/Euro";
import SecurityIcon from "@mui/icons-material/Security";
import BuildIcon from "@mui/icons-material/Build";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Divider from "../ui/Divider";

interface Item {
  icon: JSX.Element;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    icon: <LocalShippingIcon />,
    title: "Usługi przeprowadzkowe",
    description:
      "Oferujemy pełne rozwiązania przeprowadzkowe i transportowe, w tym transport towarów, okien, materiałów budowlanych, sprzętu AGD, a także pianin, fortepianów i antyków.",
  },
  {
    icon: <BusinessCenterIcon />,
    title: "Ponad 26-letnie doświadczenie",
    description:
      "Z ponad 26-letnim doświadczeniem na rynku, zdobyliśmy zaufanie wielu klientów, gwarantując najwyższy standard usług. Nasza długoletnia obecność na rynku to dowód na solidność i rzetelność.",
  },
  {
    icon: <EuroIcon />,
    title: "Przystępne ceny",
    description:
      "Oferujemy usługi na najwyższym poziomie w przystępnych cenach. Nasza oferta jest dostosowana do różnych potrzeb i budżetów, zapewniając doskonałą jakość w rozsądnej cenie.",
  },
  {
    icon: <SecurityIcon />,
    title: "Bezpieczeństwo i precyzja",
    description:
      "Nasze usługi są zaprojektowane z myślą o bezpieczeństwie i precyzyjnym wykonaniu. Dbamy o każdy detal, aby zapewnić, że Twoje mienie dotrze do celu w idealnym stanie.",
  },
  {
    icon: <BuildIcon />,
    title: "Innowacyjne rozwiązania",
    description:
      "Stale rozwijamy nasze usługi, aby spełniały najnowsze standardy i były dostosowane do zmieniających się potrzeb rynku. Nasze nowoczesne podejście zapewnia efektywność i wysoką jakość.",
  },
  {
    icon: <SupportAgentIcon />,
    title: "Wsparcie na każdym kroku",
    description:
      "Nasz zespół zapewnia pełne wsparcie na każdym etapie przeprowadzki i transportu. Jesteśmy tu, aby pomóc i doradzić, gwarantując, że cały proces przebiega bezproblemowo.",
  },
];

const Highlights = () => {
  return (
    <div className="container max-w-[1200px] w-full m-8 mx-auto flex flex-col items-center px-6 gap-6 sm:gap-12">
      <div className="text-left sm:text-center w-full 2md:w-[60%]">
        <h2 className="text-4xl font-bold text-[#131B20] dark:text-white pb-2">
          Dlaczego warto wybrać KAMMYS?
        </h2>
        <div className="hidden sm:block">
          <Divider width="w-[90%]" mb="mb-0" />
        </div>
        <p className="m-0 text-base text-[#4C5967] dark:text-[#94A6B8]">
          Firma KAMMYS, z ponad 26-letnim doświadczeniem na rynku, oferuje
          kompleksowe usługi przeprowadzkowe i transportowe w Gorzowie, Polsce i
          całej Europie. Oto, co nas wyróżnia:
        </p>
      </div>
      <div className="flex flex-wrap flex-row justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="max-w-full basis-full sm:max-w-[49%] sm:basis-[49%] 2md:max-w-[31%] 2md:basis-[31%] flex-grow sm:pl-5 pt-5"
          >
            <div className="rounded-[10px] flex flex-col gap-2 p-6 h-full border border-[#9CCCFC] dark:border-[rgb(19,27,32)] bg-[rgba(156,204,252,0.2)] dark:bg-[rgb(9,14,16)] hover:shadow-[0_0_24px_#CEE5FD] dark:hover:shadow-[0_0_24px_#02294F] hover:border-[#55A6F6] hover:dark:border-[#364049]">
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
  );
};

export default Highlights;
