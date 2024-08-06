import MainLayout from "@/components/layout/MainLayout";

export default function NotFound() {
  <MainLayout>
    <section className="w-full pb-20 md:pb-32 flex flex-col justify-center items-center bg-gradient-to-b from-[#b4d5f9] to-white dark:from-[rgb(2,41,79)] dark:to-[rgba(9,14,16,0)] bg-no-repeat gradient-bg-size">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-6xl mb-4 md:text-[6rem] text-[rgb(31,41,55)] dark:text-white font-bold text-left md:text-center px-4 leading-[1.1]">
          <span className="text-gradient">404</span>
        </h2>
        <p className="text-gray-600 dark:text-[rgb(148,166,184)] text-base md:text-xl text-left md:text-center px-4">
          Strona nie została znaleziona
        </p>
      </div>
    </section>
  </MainLayout>;
}
