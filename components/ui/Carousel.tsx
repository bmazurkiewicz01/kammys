"use client";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useEffect, useState } from "react";

interface CarouselProps {
  children: any;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 2500,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  const previousSlide = () => {
    if (!slides) return;
    setSelectedItemIndex((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    if (!slides) return;
    setSelectedItemIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full h-full">
      <div
        className="flex transition-transform ease-out duration-500 h-full"
        style={{ transform: `translateX(-${selectedItemIndex * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-6">
        <button
          onClick={previousSlide}
          className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_: any, i: any) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                selectedItemIndex === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
