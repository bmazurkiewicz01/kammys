import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

interface HeroHeaderProps {
  className?: string;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ className }) => {
  const defaultClasses =
    "max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 translate-y-[-125px]";
  const appliedClasses = className || defaultClasses;

  return (
    <div className={appliedClasses}>
      <h1 className="text-2xl md:text-7xl font-bold text-[#111111] dark:text-white">
        Przeprowadzki i Transport w Gorzowie Wielkopolskim
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-2 sm:mt-8 text-[#111111] dark:text-neutral-200">
        Firma usługowa KAMMYS oferuje kompleksowe przeprowadzki oraz transport
        na terenie Gorzowa, Polski i całej Europy. Działamy na rynku od ponad 26
        lat, zapewniając najwyższy standard usług w przystępnych cenach.
        Zajmujemy się transportem towarów, okien, materiałów budowlanych,
        sprzętu AGD, a także pianin, fortepianów i antyków.
      </p>
      <div className="w-full max-w-2xl pt-3 flex justify-start">
        <Link
          href="tel:+48667903199"
          className="transition-btn-trans duration-250 ease-btn-trans-time delay-0 flex items-center justify-center cursor-pointer text-base md:text-xl px-[10px] py-[8px] text-white font-medium bg-[rgb(25,117,210)] uppercase rounded-md z-90 hover:shadow-btn-hover-shadow dark:text-[rgba(0,0,0,0.87)] dark:bg-[rgb(144,202,249)] dark:hover:bg-[rgb(66,165,245)]"
        >
          <LocalPhoneIcon className="mr-2" />
          667 903 199
        </Link>
      </div>
    </div>
  );
};

export default HeroHeader;
