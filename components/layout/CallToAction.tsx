import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ArrowRight = dynamic(
  () => import("../ui/Icons").then((mod) => mod.ArrowRight),
  { ssr: false }
);

const TripleCircles = dynamic(
  () => import("../ui/Icons").then((mod) => mod.TripleCircles),
  { ssr: false }
);

const CallToAction = () => {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden ">
      <TripleCircles
        className={
          "absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px]"
        }
      />
      <Image
        className="absolute top-0 left-0 block dark:hidden"
        src="/cta/blue-light-left-top.png"
        alt=""
        width={387}
        height={577}
      />
      <Image
        className="absolute top-0 right-0 block dark:hidden"
        src="/cta/orange-right-bottom.png"
        alt=""
        width={464}
        height={764}
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
          <h1 className="text-4xl xs:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-10">
            <span>Przygotuj się na przeprowadzkę z </span>
            <span className="font-serif italic text-[rgb(25,118,210)]">
              łatwością
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-[#94A6B8] mb-10">
            Zmieniaj miejsce zamieszkania z nami u boku.
          </p>
          <div className="md:flex mb-10 items-center">
            <div className="flex mb-6 md:mb-0 md:mr-6 items-center">
              <Image
                src="/testimonials/google_review_7.png"
                className="w-[44px]"
                alt=""
                width={64}
                height={64}
              />
              <Image
                className="-ml-2 w-[44px]"
                src="/testimonials/google_review_8.png"
                alt=""
                width={64}
                height={64}
              />
              <Image
                className="-ml-2 w-[44px]"
                src="/testimonials/google_review_2.png"
                alt=""
                width={64}
                height={64}
              />
              <Image
                className="-ml-2 w-[44px]"
                src="/testimonials/google_review_3.png"
                alt=""
                width={64}
                height={64}
              />
              <Image
                className="-ml-2 w-[44px]"
                src="/testimonials/google_review_1.png"
                alt=""
                width={64}
                height={64}
              />
            </div>
            <div>
              <span className="block text-2xl font-bold dark:text-white leading-none">
                1000+
              </span>
              <span className="block text-xs text-gray-500 dark:text-white font-semibold">
                Zadowolonych klientów
              </span>
            </div>
          </div>
          <Link
            className="relative group inline-block py-4 px-6 text-white font-semibold bg-[rgb(25,117,210)] dark:text-[rgba(0,0,0,0.87)] dark:bg-[rgb(144,202,249)] rounded-md overflow-hidden"
            href="/kontakt"
          >
            <div className="absolute top-0 right-full w-full h-full bg-[rgb(52,154,255)] transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
            <div className="relative flex items-center justify-center dark:text-[rgba(0,0,0,0.87)]">
              <span className="mr-4">Kontakt</span>
              <span>
                <ArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
