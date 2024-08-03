import { ArrowRight } from "@mui/icons-material";
import Link from "next/link";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const AboutHeroSection = () => {
  return (
    <div className="max-w-[1200px] w-full pt-14 md:pt-28 px-4 mt-10 2xl:pt-[80px] flex flex-col justify-center items-center">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-[50%] flex flex-col gap-6 md:gap-10 md:pr-10 md:pt-20 pb-10 md:pb-20">
          <p className="text-[18px] ml-1 text-[rgb(25,90,210)] dark:text-[rgb(25,118,255)]">
            Nasza oferta
          </p>
          <h1 className="text-3xl md:text-5xl text-[rgb(31,41,55)] dark:text-white">
            Profesjonalne przeprowadzki doskonale dopasowane do twoich potrzeb i
            wymagań
          </h1>
          <div className="border-l border-[rgba(50,48,48,0.20)] dark:border-[rgba(255,255,255,0.20)] w-full flex flex-row items-center gap-3">
            <div className="">
              <PhoneIphoneIcon className="ml-4 text-[#3B82F6] dark:text-[#3B82F6] text-5xl" />
            </div>
            <div className="flex flex-col gap-2 text-[14px]">
              <p className="text-gray-600 dark:text-[rgb(148,166,184)]">
                Porozmawiajmy o szczegółach <br></br> twojej przeprowadzki
              </p>
              <Link
                href={"tel:+48667903199"}
                className="w-full relative group inline-block py-2 px-3 text-white font-semibold bg-[rgb(25,117,210)] dark:text-[rgba(0,0,0,0.87)] dark:bg-[rgb(144,202,249)] rounded-md overflow-hidden"
              >
                <div className="absolute top-0 right-full w-full h-full bg-[rgb(52,154,255)] transform group-hover:translate-x-full group-hover:scale-102 transition duration-1000"></div>
                <button className="w-full relative flex items-center justify-center dark:text-[rgba(0,0,0,0.87)]">
                  <span className="mr-2 font-bold text-[12px]">
                    Zadzwoń teraz
                  </span>
                  <span className="font-bold text-[12px]">
                    <ArrowRight />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] min-h-[300px] md:min-h-0 flex flex-col bg-[url('/hero/img7.jpg')] bg-center bg-cover md:rounded-br-[150px] hover:bg-[rgba(25,118,210,0.04)] hover:shadow-[0_0_24px_#CEE5FD] dark:hover:shadow-[0_0_24px_#02294F]"></div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
