import { ArrowUpRight } from "phosphor-react";

export function Posts() {
  return (
    <section className="w-full flex justify-center my-7">
      <div className="md:w-[968px] lg:w-[1024px] flex flex-col mx-7 lg:mx-0">
        <div className="flex justify-between mb-7 items-center">
          <h3 className="text-xl font-bold">Últimas noticías</h3>
          <a
            href="#"
            className="text-sm flex gap-3 items-center bg-black px-8 py-4 text-white font-bold"
          >
            Ver todos
            <ArrowUpRight size={24} />
          </a>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li className="bg-slate-100 hover:drop-shadow-md transition-all duration-700">
            <a href="#" className="flex flex-col items-center">
              <img className="w-full" src="./assets/images/pedra.jpg" alt="" />
              <div className="flex flex-col p-4">
                <h4 className="text-sm md:text-lg text-black font-bold text-center mb-2">
                  Escadas e seu grande poder na arquitetura
                </h4>
              </div>
            </a>
          </li>
          <li className="bg-slate-100 hover:drop-shadow-md transition-all duration-700">
            <a href="#" className="flex flex-col items-center">
              <img className="w-full" src="./assets/images/pedra.jpg" alt="" />
              <div className="flex flex-col p-4">
                <h4 className="text-sm md:text-lg text-black font-bold text-center mb-2">
                  Qual Pedra Escolher para a bancada da cozinha?
                </h4>
              </div>
            </a>
          </li>
          <li className="bg-slate-100 hover:drop-shadow-md transition-all duration-700">
            <a href="#" className="flex flex-col items-center">
              <img className="w-full" src="./assets/images/pedra.jpg" alt="" />
              <div className="flex flex-col p-4">
                <h4 className="text-sm md:text-lg text-black font-bold text-center mb-2">
                  Uma das chaves para deixar um ambiente sofisticado e aconchegante, é a iluminação
                </h4>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
