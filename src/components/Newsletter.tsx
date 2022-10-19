export function Newsletter() {
  return (
    <section
      className="w-full flex flex-col items-center bg-black md:bg-transparent sm:bg-none px-5 md:px-0"
      id="newsletter"
    >
      <div className="flex flex-col items-center gap-6 bg-none md:bg-black md:w-[968px] lg:w-[1024px]  py-7">
        <div className="flex flex-col items-center">
          <h4 className="text-xl text-white font-bold">Newsletter</h4>
          <span className="text-white">
            Receba novidades em projetos, legislação e dicas.
          </span>
        </div>
        <form action="" className="flex justify-center my-7">
          <div className="bg-white px-2 py-2 flex justify-between gap-8">
            <input
              type="email"
              placeholder="Entre com seu melhor e-mail!"
              className="w-2/3 md:w-80 outline-none font-bold text-gray-500 placeholder:text-sm"
            />
            <button className="bg-black px-8 py-4 text-white font-bold">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
