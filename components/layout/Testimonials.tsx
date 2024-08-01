import Image from "next/image";
import Divider from "../ui/Divider";
import "./testimonials.css";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

const defaultConfig: Testimonial[] = [
  {
    text: "“Jestem bardzo zadowolona z usług firmy. Chłopaki znają się na swojej robocie, przeprowadzka przeszła bardzo szybko i sprawnie. Meble sami zabezpieczali przed uszkodzeniem. Uczynni i sympatyczni panowie. Cena również przystępna!”",
    name: "Żaneta Siwka",
    role: "Zadowolona klientka",
    image: "/testimonials/google_review_1.png",
  },
  {
    text: "“W pełni zasłużona, bardzo pozytywna opinia. Pianino, co do którego były obawy, że nie będzie możliwości wyniesienia go z miejsca w którym stało (pierwsze piętro, ciasna klatka schodowa), Panowie przetransportowali na miejsce docelowe.”",
    name: "Marek Płachta",
    role: "Zadowolony klient",
    image: "/testimonials/google_review_2.png",
  },
  {
    text: "“Pełen profesjonalizm. Panowie wykazują się niesamowitą punktualnością, sprawnością i pomysłowością. Zawsze wszystko starannie przewiezione bez najmniejszych uszkodzeń 💪🏾”",
    name: "Natalia Ostrowska",
    role: "Zadowolona klientka",
    image: "/testimonials/google_review_3.png",
  },
  {
    text: "“Wspaniała Firma! Polecam klientom, którzy cenią uczciwość, dokładność i profesjonalizm. KAMMYS - WYBIERZ!!!”",
    name: "Dorota Meyer",
    role: "Zadowolona klientka",
    image: "/testimonials/google_review_4.png",
  },
  {
    text: "“Polecam. Panowie bardzo rzetelni, dokładni i profesjonalni a przy tym bardzo mili. Najlepszy wybór jeżeli chodzi o przeprowadzki. W naszym przypadku transport mebli i bagaży z Gorzowa do Szczecina. Wszystko odpowiednio zabezpieczone.”",
    name: "Ariel Jaworski",
    role: "Zadowolony klient",
    image: "/testimonials/google_review_5.png",
  },
  {
    text: "“Profesjonalna firma przeprowadzkowa. Sprawnie, szybko z głową. Panowie naprawdę spełnili oczekiwania. Właśnie skończyli przeprowadzać biuro z masą mebli i dokumentów. Wykonali swoją pracę, sprawnie i z dbałością o każdy szczegół.”",
    name: "Agnieszka Jabłońska",
    role: "Zadowolona klientka",
    image: "/testimonials/google_review_6.png",
  },
  {
    text: "“Firma Kammys przeprowadzała moich rodziców z Międzyrzecza do Węgorzewa (prawie 600 km). Zlecenie zostało przeprowadzone bardzo profesjonalnie. Od momentu przygotowania oględzin, poprzez wycenę, pakowanie dobytku, przewóz i rozładunek - można było liczyć na pomoc, fachową opiekę i rzetelną informację od właściciela firmy i jego pracowników. Polecam!”",
    name: "Ewa Bujak",
    role: "Zadowolona klientka",
    image: "/testimonials/google_review_7.png",
  },
  {
    text: "“Przeprowadzka na odległość ponad 100 km odbyła się bez zastrzeżeń. Wszystkie meble udało upchnąć w jednym transporcie. Mistrzostwo świata! Dali radę. Żadnych większych uszkodzeń. Firmę Kammys mogę spokojnie polecić.”",
    name: "Adam Baraniecki",
    role: "Zadowolony klient",
    image: "/testimonials/google_review_8.png",
  },
  {
    text: "“Dziękuję firmie Kammys za przyjęcie zlecenia w dniu przeprowadzki :)) Panowie bezpiecznie i szybko przenosili rzeczy i cena nie jest wygórowana. Polecam wszystkim ich usługi.”",
    name: "Marta Sochaj",
    role: "Zadowolona klientka",
    image: "/testimonials/google_review_9.png",
  },
];

interface TestimonialsProps {
  config?: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  config = defaultConfig,
}) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 dark:text-[rgb(148,166,184)] font-pj">
              77+ osób napisało jak dobrze wykonujemy nasze usługi
            </p>
            <h2 className="mt-4 text-3xl mb-2 font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl font-pj">
              {"Nasi zadowoleni klienci mówią o nas:"
                .split(" ")
                .map((word, index) => (
                  <span
                    key={index}
                    className={
                      index % 2 ? "text-[rgb(25,118,210)]" : "text-border"
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
            </h2>
            <Divider />
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a
              href="https://www.google.com/search?sa=X&sca_esv=1de0a4ee025c56b1&biw=2560&bih=1262&tbm=lcl&sxsrf=ADLYWIJn4Y-vHnvkkA9Osdr4yiJipXjSjQ:1720547962082&q=kammys%20-%20przeprowadzki%20transport%20gorz%C3%B3w%20gorz%C3%B3w%20wielkopolski%20opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDA2MTYysDCyNDcFYkNzcyPjDYyMrxhdshNzcyuLFXQVCoqqUguK8ssTU6qyMxVKihLzigvyi0oU0vOLqg5vLofT5ZmpOdn5Bfk5xUBl-QWZeZmpi1ipYgwAXXkcCqkAAAA&rldimm=10343208297529717723&hl=pl-PL&ved=0CAYQ5foLahcKEwj4gbLRxJqHAxUAAAAAHQAAAAAQCw#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSUN6alBLT3dBRRAB"
              target="_blank"
              rel="noreferrer"
              title=""
              className="pb-2 text-base font-bold leading-7 text-gray-900 dark:text-[rgb(25,118,210)] transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 dark:hover:border-[rgba(25,118,210,0.5)] font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
            >
              Sprawdź wszystkie opinie na Google
            </a>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter custom-gradient"></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {config.map(({ text, name, role, image }, index) => (
                <div key={index} className="flex flex-col overflow-hidden">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white dark:bg-[rgba(8,15,16,0.9)] border-[1px] border-[rgb(156,204,252)] dark:border-[rgb(2,41,79)] rounded-3xl lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, starIndex) => (
                            <svg
                              key={starIndex}
                              className="w-5 h-5 text-[#FDB241]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <Link
                          href={
                            "https://www.google.com/search?sa=X&sca_esv=1de0a4ee025c56b1&biw=2560&bih=1262&tbm=lcl&sxsrf=ADLYWIJn4Y-vHnvkkA9Osdr4yiJipXjSjQ:1720547962082&q=kammys%20-%20przeprowadzki%20transport%20gorz%C3%B3w%20gorz%C3%B3w%20wielkopolski%20opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDA2MTYysDCyNDcFYkNzcyPjDYyMrxhdshNzcyuLFXQVCoqqUguK8ssTU6qyMxVKihLzigvyi0oU0vOLqg5vLofT5ZmpOdn5Bfk5xUBl-QWZeZmpi1ipYgwAXXkcCqkAAAA&rldimm=10343208297529717723&hl=pl-PL&ved=0CAYQ5foLahcKEwj4gbLRxJqHAxUAAAAAHQAAAAAQCw#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSUN6alBLT3dBRRAB"
                          }
                          className="text-[rgb(25,118,210)] hover:text-[rgb(25,50,255)]"
                        >
                          <GoogleIcon />
                        </Link>
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 dark:text-[#AAAAAA] font-pj">
                          {text}
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <Image
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={image}
                        alt={name}
                        width={44}
                        height={44}
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 dark:text-white font-pj">
                          {name}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600 dark:text-[rgb(156,163,175)]">
                          {role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
