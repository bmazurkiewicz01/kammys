import React from "react";
import Divider from "./Divider";
import Image from "next/image";

interface ConfigItem {
  title: string;
  description: string;
  img: string;
}

interface Config {
  title: string;
  items: ConfigItem[];
}

interface CompanyInfoProps {
  config: Config;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ config }) => {
  const [firstItem, secondItem] = config.items;

  return (
    <section className="bg-background py-8" id="product">
      <div className="container max-w-[1200px] m-8 mx-auto">
        <h1 className="w-full my-2 text-3xl md:text-5xl font-bold leading-tight text-center text-[rgb(31,41,55)] dark:text-[rgb(231,237,243)]">
          {config.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-[rgb(25,118,210)]" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6 mt-20">
            <h3 className="text-3xl text-gray-800 dark:text-white dark:font-bold leading-none mb-3">
              {firstItem?.title}
            </h3>
            <p className="text-gray-600 dark:text-[rgb(148,166,184)]">
              {firstItem?.description}
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <Image
              className="h-6/6 max-h-[500px] w-[600px] rounded-lg shadow-lg sm:ml-auto object-cover"
              src={firstItem?.img}
              alt={firstItem?.title}
              width={600}
              height={500}
            />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6">
            <Image
              className="h-6/6 max-h-[500px] w-[600px] rounded-lg shadow-lg object-cover"
              src={secondItem?.img}
              alt={secondItem?.title}
              width={600}
              height={500}
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-20">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 dark:text-white dark:font-bold leading-none mb-3">
                {secondItem?.title}
              </h3>
              <p className="text-gray-600 dark:text-[rgb(148,166,184)] mb-8">
                {secondItem?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
