import { Link } from "react-router-dom";
export function About() {
  return (
    <section className="w-full flex justify-center py-7 px-7" id="about">
      <div className="w-[968px] md:w-[1024px] flex flex-col md:flex-row justify-between gap-7">
        <div className="w-full md:max-w-sm lg:max-w-xl flex flex-col justify-between order-2 md:order-1">
          <h3 className="text-xl font-bold">Renato Smania</h3>
          <div className="flex flex-col gap-4 mt-2 text-sm">
            <p>
              Dono de uma arquitetura exclusiva e requintada, Renato Smania faz
              projetos residenciais, comerciais, edifícios e condomínios de
              pequena e grande complexidade, projetos corporativos e Design de
              interiores de alto padrão que dará um toque de bom gosto em cada
              detalhe.
            </p>
            <p>
              Imagine, ele dará forma a seu sonho. Quer saber mais sobre como
              contratá-lo?
            </p>
          </div>
          <div className="mt-7">
            <Link
              to={"/sobre"}
              className="bg-black px-8 py-4 text-white font-bold"
            >
              Mais detalhes
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center md:order-2">
          <div className="overflow-hidden">
            <img
              className="hover:scale-[1.1] transition-all duration-700"
              width={130}
              src="https://media.graphassets.com/fbcC0b8RYmetm3EEGSGc"
              alt="Renato Smania"
            />
          </div>
          <div className="overflow-hidden">
            <img
              className="hover:scale-[1.1] transition-all duration-700"
              width={180}
              src="https://media.graphassets.com/VlW49aoT8iH6dJZUwFQg"
              alt="Renato Smania"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
