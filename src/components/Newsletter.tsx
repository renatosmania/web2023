export function Newsletter() {
  return (
    <section className="w-full flex flex-col items-center bg-black md:bg-transparent sm:bg-none px-5 md:px-0">
      <div className="flex flex-col items-center gap-6 bg-none md:bg-black md:w-[968px] lg:w-[1024px]  py-7">
        <div className="flex flex-col items-center">
          <h4 className="text-xl text-blue-300 font-bold">Newsletter</h4>
          <span className="text-blue-200">
            Receba novidades em projetos, legislação e dicas.
          </span>
        </div>
        <form action="" className="flex justify-center w-[470px] my-7">
          <div className="bg-white px-4 py-2 flex justify-between gap-8 w-full">
            <input type="email" placeholder="Entre com seu melhor e-mail!" className="w-2/3 outline-none font-bold text-gray-500"/>
            <button className="bg-black px-8 py-4 text-white font-bold">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
}
