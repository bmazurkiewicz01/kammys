"use client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import NextJsImage from "./NextImage";
import Image from "next/image";
import {
  Counter,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";

interface Image {
  src: string;
}

const images: Image[] = [
  {
    src: "/hero/img1.jpg",
  },
  {
    src: "/hero/img2.jpg",
  },
  {
    src: "/hero/img3.jpg",
  },
  {
    src: "/hero/img4.jpg",
  },
  {
    src: "/hero/img5.jpg",
  },
  {
    src: "/hero/img6.jpg",
  },
  {
    src: "/hero/img7.jpg",
  },
  {
    src: "/hero/img8.jpg",
  },
  {
    src: "/hero/img9.jpg",
  },
  {
    src: "/hero/img10.jpg",
  },
  {
    src: "/hero/img11.jpg",
  },
  {
    src: "/hero/img12.jpg",
  },
  {
    src: "/hero/img13.jpg",
  },
  {
    src: "/hero/img14.jpg",
  },
  {
    src: "/hero/img15.jpeg",
  },
  {
    src: "/hero/img16.jpeg",
  },
  {
    src: "/hero/img17.jpeg",
  },
  {
    src: "/hero/img18.jpeg",
  },
  {
    src: "/hero/img19.jpeg",
  },
  {
    src: "/hero/img20.jpeg",
  },
];

const Gallery = () => {
  const [index, setIndex] = useState<number>(-1);

  const handleClickImage = (index: number) => {
    setIndex(index);
  };

  return (
    <div className="w-full max-w-[1200px] px-4 mt-12 flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-auto-fit-minmax gap-4 md:gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-full cursor-pointer"
            onClick={() => handleClickImage(index)}
          >
            <Image
              src={image.src}
              className="w-full h-80 max-h-80 rounded-xl object-cover object-center"
              width={300}
              height={500}
              objectFit="cover"
              alt="Przeprowadzki i transport gorzów"
            />
          </div>
        ))}
      </div>

      <Lightbox
        plugins={[Fullscreen, Zoom, Counter, Thumbnails]}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
};

export default Gallery;
