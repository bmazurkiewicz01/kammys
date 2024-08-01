import dynamic from "next/dynamic";

const ArrowRight = dynamic(
  () => import("@/components/ui/Icons").then((mod) => mod.ArrowRight),
  { ssr: false }
);

const ContactForm = () => {
  return (
    <form /*onSubmit={handleSubmit(onSubmit)}*/>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-1 ml-1 block text-base font-medium text-black"
        >
          Imię i nazwisko
        </label>
        <input
          type="text"
          placeholder="Jan Kowalski"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          // {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-1 ml-1 block text-base font-medium text-black"
        >
          Adres email
        </label>
        <input
          type="email"
          placeholder="jan.kowalski@gmail.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          // {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-1 ml-1 block text-base font-medium text-black"
        >
          Wiadomość
        </label>
        <textarea
          rows={4}
          placeholder="Napisz do nas..."
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          // {...register("message", { required: true })}
        ></textarea>
      </div>
      <div className="w-full relative group inline-block py-4 px-6 text-white font-semibold bg-[rgb(25,117,210)] dark:text-[rgba(0,0,0,0.87)] dark:bg-[rgb(144,202,249)] rounded-md overflow-hidden">
        <div className="absolute top-0 right-full w-full h-full bg-[rgb(52,154,255)] transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
        <button className="w-full relative flex items-center justify-center dark:text-[rgba(0,0,0,0.87)]">
          <span className="mr-2 font-bold text-base">Wyślij wiadomość</span>
          <span className="font-bold text-base">
            <ArrowRight />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
