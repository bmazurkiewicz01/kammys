("");
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Testimonials from "@/components/layout/Testimonials";
import dynamic from "next/dynamic";
import "./contact.css";

const ArrowRight = dynamic(
  () => import("@/components/ui/Icons").then((mod) => mod.ArrowRight),
  { ssr: false }
);

const Contact: React.FC = () => {
  return (
    <MainLayout>
      <section className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#b4d5f9] to-white dark:from-[rgb(2,41,79)] dark:to-[rgba(9,14,16,0)] bg-no-repeat gradient-bg-size">
        <div className="max-w-[1200px] pt-14 md:pt-28 px-4 mt-10 2xl:pt-[80px] flex flex-col justify-center items-center">
          <div className="px-4 md:px-8 mb-4 w-full">
            <h2 className="text-3xl mb-4 md:text-[3rem] text-[rgb(31,41,55)] dark:text-white font-bold text-left md:text-center">
              <span className="text-gradient">Skontaktuj się z nami</span>
            </h2>
            <p className="text-gray-600 dark:text-[rgb(148,166,184)] text-base md:text-xl text-left md:text-center">
              Nawiążmy współpracę i stwórzmy razem świat pełen możliwości!
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row mx-auto px-4 md:px-8 py-6 md:py-12 mt-2 md:mt-8 rounded-lg border dark:border-2 border-[#9CCCFC] dark:border-[rgb(19,27,32)] bg-[rgba(156,204,252,0.2)] dark:bg-[rgb(9,14,16)] hover:shadow-[0_0_24px_#CEE5FD] dark:hover:shadow-[0_0_24px_#02294F] hover:border-[#55A6F6] hover:dark:border-[#364049]">
            <div className="w-full md:w-[50%] md:pr-4">
              <div className="w-full">
                <h1 className="text-lg mb-2 md:text-xl text-[rgb(31,41,55)] dark:text-white font-bold">
                  Kompleksowe Przeprowadzki Gorzów Wielkopolski
                </h1>
                <p className="text-gray-600 dark:text-[rgb(148,166,184)] text-sm md:text-base">
                  Nasza firma przeprowadzkowa w Gorzowie gwarantuje bezpieczny
                  transport Twojego mienia. Skontaktuj się z nami i zrelaksuj
                  się - resztą zajmiemy się my!
                </p>
              </div>
              <div className="w-full pt-6">
                <div className="text-sm md:text-base">
                  <ul>
                    <li className="mb-1">
                      <Link
                        href="https://www.google.com/maps/place/Kammys+-+Przeprowadzki+Transport+Gorz%C3%B3w/@52.7405721,15.2502544,17.31z/data=!4m15!1m8!3m7!1s0x47071f920c24984b:0x915b3573b5e15d83!2sZamenhofa+2,+66-400+Gorz%C3%B3w+Wielkopolski!3b1!8m2!3d52.7404141!4d15.251934!16s%2Fg%2F11cs8y1tqk!3m5!1s0x47071f92749c31ef:0x8f8a75255c21b3db!8m2!3d52.7404453!4d15.251933!16s%2Fg%2F11f5bvbhfm?entry=ttu"
                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                        target="_blank"
                      >
                        <LocationOnIcon className="mr-2" />
                        Zamenhofa 2, 66-400 Gorzów Wielkopolski
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link
                        href="tel:+48667903199"
                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        <LocalPhoneIcon className="mr-2" />
                        667 903 199
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="mailto:kamysprzeprowadzki@tlen.pl"
                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        <EmailIcon className="mr-2" />
                        kamysprzeprowadzki@tlen.pl
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link
                        href="https://www.facebook.com/profile.php?id=100063789150390"
                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        <FacebookIcon className="mr-2" />
                        Kammys Transport Przeprowadzki
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link
                        href="https://www.instagram.com/kammys.transportprzeprowadzki"
                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        <InstagramIcon className="mr-2" />
                        kammys.transportprzeprowadzki
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link
                        href="https://www.instagram.com/kammys.transportprzeprowadzki"
                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        <svg
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          width="100%"
                          height="100%"
                          className="w-6 h-6 mr-2"
                        >
                          <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
                        </svg>
                        kammys.transportprzeprowadzki
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full mt-5 md:mt-10">
                  <Link
                    href={"tel:+48667903199"}
                    className="w-full relative group inline-block py-4 px-6 text-white font-semibold bg-[rgb(25,117,210)] dark:text-[rgba(0,0,0,0.87)] dark:bg-[rgb(144,202,249)] rounded-md overflow-hidden"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-[rgb(52,154,255)] transform group-hover:translate-x-full group-hover:scale-102 transition duration-1000"></div>
                    <button className="w-full relative flex items-center justify-center dark:text-[rgba(0,0,0,0.87)]">
                      <span className="mr-2 font-bold text-[14px]">
                        Zadzwoń teraz
                      </span>
                      <span className="font-bold text-[14px]">
                        <ArrowRight />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[50%] md:pl-4 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2415.5426273899343!2d15.249358076507333!3d52.7404452721198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47071f92749c31ef%3A0x8f8a75255c21b3db!2sKammys%20-%20Przeprowadzki%20Transport%20Gorz%C3%B3w!5e0!3m2!1spl!2spl!4v1722455089396!5m2!1spl!2spl"
                allowFullScreen={false}
                loading="lazy"
                className="w-full h-full min-h-[400px] mt-6 md:mt-0 border-2 border-[rgb(26,115,232)]"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className="md:mt-20">
        <Testimonials />
      </section>
    </MainLayout>
  );
};

export default Contact;
