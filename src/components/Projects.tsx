import { ArrowUpRight } from "phosphor-react";

export function Projects() {
  return (
    <section className="w-full flex justify-center my-7">
      <div className="md:w-[968px] lg:w-[1024px]">
        <div className="flex justify-between mb-7 items-center">
          <h3 className="text-xl font-bold">Projetos</h3>
          <a
            href="#"
            className="text-sm flex gap-3 items-center bg-black px-8 py-4 text-white font-bold"
          >
            Ver todos
            <ArrowUpRight size={24} />
          </a>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 px-7 md:px-0">
          <li className="overflow-hidden relative h-[330px] group">
            <a href="#">
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://www.renatosmania.com.br/imagens/projeto-place-01.jpeg"
                alt=""
              />
              <div className="relative bottom-14 flex justify-between items-end px-2">
                <div>
                  <h4 className="font-bold text-white drop-shadow-sm">
                    Residencia Lopes
                  </h4>
                  <span className="text-sm text-white drop-shadow-sm">
                    Brasil
                  </span>
                </div>
                <div className="p-2 text-lg bg-black">
                  <ArrowUpRight size={24} color={"#fff"} />
                </div>
              </div>
            </a>
          </li>
          <li className="overflow-hidden relative h-[330px] group">
            <a href="#">
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://www.renatosmania.com.br/imagens/projeto-place-01.jpeg"
                alt=""
              />
              <div className="relative bottom-14 flex justify-between items-end px-2">
                <div>
                  <h4 className="font-bold text-white drop-shadow-sm">
                    Residencia Lopes
                  </h4>
                  <span className="text-sm text-white drop-shadow-sm">
                    Brasil
                  </span>
                </div>
                <div className="p-2 text-lg bg-black">
                  <ArrowUpRight size={24} color={"#fff"} />
                </div>
              </div>
            </a>
          </li>
          <li className="overflow-hidden relative h-[330px] group">
            <a href="#">
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://www.renatosmania.com.br/imagens/projeto-place-01.jpeg"
                alt=""
              />
              <div className="relative bottom-14 flex justify-between items-end px-2">
                <div>
                  <h4 className="font-bold text-white drop-shadow-sm">
                    Residencia Lopes
                  </h4>
                  <span className="text-sm text-white drop-shadow-sm">
                    Brasil
                  </span>
                </div>
                <div className="p-2 text-lg bg-black">
                  <ArrowUpRight size={24} color={"#fff"} />
                </div>
              </div>
            </a>
          </li>
          <li className="overflow-hidden relative h-[330px] group">
            <a href="#">
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://www.renatosmania.com.br/imagens/projeto-place-01.jpeg"
                alt=""
              />
              <div className="relative bottom-14 flex justify-between items-end px-2">
                <div>
                  <h4 className="font-bold text-white drop-shadow-sm">
                    Residencia Lopes
                  </h4>
                  <span className="text-sm text-white drop-shadow-sm">
                    Brasil
                  </span>
                </div>
                <div className="p-2 text-lg bg-black">
                  <ArrowUpRight size={24} color={"#fff"} />
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
