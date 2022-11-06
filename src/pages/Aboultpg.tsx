import { Calendar } from "phosphor-react";
import { Helmet } from "react-helmet";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Slide } from "../components/Slide";

export function Aboutpg() {
  return (
    <>
      <Helmet title="Tudo Sobre Renato Smania">
        <meta
          name="description"
          content="Conheça um pouco mais sobre a história de Renato Smania"
        />
        <meta
          name="keywords"
          content="Arquiteto, Renato Smania, Projetos, Historia Renato Smania"
        />
      </Helmet>
      <Header />
      <main className="flex flex-col gap-7">
        <Slide />
        <section className="w-full flex justify-center items-center">
          <div className="flex flex-col gap-6 md:w-[968px] lg:w-[1024px] mx-7 lg:mx-0">
            <article className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold mb-7">
                Renato Smania Studio de Arquitetura comemora 19 anos de sucesso
              </h2>
              <p>
                Muitos esperam acontecer, outros fazem acontecer. Assim é Renato
                Smania, arquiteto que domina a habilidade de desenhar e se
                supera a cada novo projeto desenvolvido.
              </p>
              <p>
                Ele começou cedo. Ainda no primeiro ano de faculdade, decidiu
                que abriria um escritório. Para muitos, uma ideia ousada, mas
                Renato sabia que para alcançar o sucesso precisaria fazer o que
                a maioria dos estudantes não fazia, precisaria começar. “Eu
                sempre fui muito ansioso e quando entrei na faculdade não tinha
                noção nenhuma do que era arquitetura. No entanto eu sempre soube
                que deveria começar cedo, se quisesse me destacar no mercado
                futuramente. Por isso montei um escritório”, explica Smania.
              </p>
              <p>
                E como ele é natural de Santa Terezinha de Itaipu (PR), foi lá
                que abriu o escritório que leva seu nome – Renato Smania Studio
                de Arquitetura – em 2003. Hoje, passados 15 anos desde aquela
                iniciativa, o escritório não apenas está consolidado na cidade,
                como também realiza projetos para outras cidades do país e
                exterior.
              </p>
              <h4 className="text-xl font-bold">Tons de preto</h4>
              <p>
                Todo profissional da arquitetura busca inspirar-se em alguém no
                início da carreira profissional ou ainda quando está na vida
                acadêmica. Os primeiros profissionais em que Smania se inspirou
                na faculdade foram o arquiteto italiano Renzo Piano e o
                americano Richard Meier. No entanto hoje ele tem sua própria
                identidade, que é caracterizada pela utilização da cor preta,
                seja em área interna ou externa.
              </p>
              <p>
                Buscando um equilíbrio entre a forma e a funcionalidade, o
                trabalho do arquiteto é voltado para projetos e interiores
                contemporâneos e neoclássicos nas áreas comercial, residencial,
                corporativa, condominial e predial. “Trabalhamos sempre com o
                que o cliente almeja. Eu tenho uma marca, as pessoas identificam
                meu traço, mas eu busco seguir o desejo dos clientes, sem um
                padrão. Eu topo o desafio que aparecer”, destaca.
              </p>
              <img
                src="https://media.graphassets.com/JQ5OJnODRjyvzPxk3dtw"
                alt="Renato Smania Projeto Interior"
              />
              <p>
                Também está sempre inovando nos trabalhos, por isso realiza
                muitas viagens pelo mundo, além de manter-se atualizado com
                pesquisas e cursos voltados à arquitetura.
              </p>
            </article>
            <article className="flex flex-col gap-4 items-center">
              <h2 className="text-2xl font-bold">
                Principais viagens e premiações da carreira
              </h2>
              <div className="grid grid-cols-20 md:grid-cols-18 my-7 justify-center">
                <div className="grid gap-6 grid-cols-16">
                  <div>
                    <h3 className="text-md">
                      Feira de Bologna e Milão, na Itália.
                    </h3>
                    <div className="flex gap-2 items-center justify-end">
                      2011
                      <Calendar size={24} />
                    </div>
                  </div>

                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div></div>
                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                  <div>
                    <h3 className="text-md">
                      1° lugar na premiação do Top Decor.
                    </h3>
                    <div className="flex gap-2 items-center justify-start">
                      <Calendar size={24} />
                      2014
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div>
                    <h3 className="text-md">
                      Viagem para a Jordânia, pelo programa Lá Vou Eu, da
                      Todeschini.
                    </h3>
                    <div className="flex gap-2 items-center justify-end">
                      2015
                      <Calendar size={24} />
                    </div>
                  </div>

                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div></div>
                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                  <div>
                    <h3 className="text-md">
                      Feira de Milão, na Itália, pelo Top Decor.
                    </h3>
                    <div className="flex gap-2 items-center justify-start">
                      <Calendar size={24} />
                      2015
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div>
                    <h3 className="text-md">
                      1° lugar na premiação do Top Decor.
                    </h3>
                    <div className="flex gap-2 items-center justify-end">
                      2016
                      <Calendar size={24} />
                    </div>
                  </div>

                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div></div>
                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                  <div>
                    <h3 className="text-md">
                      Visita dos melhores arquitetos do Brasil a fabrica da
                      Natuzzi na Itália.
                    </h3>
                    <div className="flex gap-2 items-center justify-start">
                      <Calendar size={24} />
                      2016
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div>
                    <h3 className="text-md">
                      Viagem para a Tailândia e Dubai, pelo programa Lá Vou Eu,
                      da Todeschini.
                    </h3>
                    <div className="flex gap-2 items-center justify-end">
                      2016
                      <Calendar size={24} />
                    </div>
                  </div>

                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div></div>
                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                  <div>
                    <h3 className="text-md">
                      1° lugar na premiação do Top Decor.
                    </h3>
                    <div className="flex gap-2 items-center justify-start">
                      <Calendar size={24} />
                      2017
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div>
                    <h3 className="text-md">
                      Vitrine assinada na loja Sierra Móveis.
                    </h3>
                    <div className="flex gap-2 items-center justify-end">
                      2017
                      <Calendar size={24} />
                    </div>
                  </div>

                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div></div>
                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                  <div>
                    <h3 className="text-md">
                      Viagem para a Eslovênia, pelo programa Lá Vou Eu, da
                      Todeschini.
                    </h3>
                    <div className="flex gap-2 items-center justify-start">
                      <Calendar size={24} />
                      2017
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div>
                    <h3 className="text-md">
                      Viagem para a França, pela Evviva.
                    </h3>
                    <div className="flex gap-2 items-center justify-end">
                      2017
                      <Calendar size={24} />
                    </div>
                  </div>

                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div></div>
                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block w-[1px] h-[100%] bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                  <div>
                    <h3 className="text-md">
                      Viagem para as Bahamas e Miami, pela SCA.
                    </h3>
                    <div className="flex gap-2 items-center justify-start">
                      <Calendar size={24} />
                      2018
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 grid-cols-16">
                  <div>
                    <h3 className="text-md">Feira de Milão, na Itália.</h3>
                    <div className="flex gap-2 items-center justify-end">
                      2018
                      <Calendar size={24} />
                    </div>
                  </div>

                  <div>
                    <span className="w-8 h-8 inline-block rounded-[50%] bg-black-500"></span>
                    <span className="block bg-black-500 translate-x-[15px] translate-y-[-15px]"></span>
                  </div>
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-4">
              <p>
                Essas constantes viagens e premiações proporcionaram a Smania a
                credibilidade de ter seu trabalho reconhecido
                internacionalmente. Hoje ele tem trabalhos na área da
                arquitetura de interiores assinados em Miami e Itália. Já no
                Brasil, os principais projetos concentram-se em São Paulo, Minas
                Gerais, Mato Grosso, Goiás e Paraná.
              </p>
              <img
                src="https://media.graphassets.com/uxsZJF4gQFizV9HYlR9d"
                alt="Renato Smania Projeto Residencial"
              />
            </article>
            <article className="flex flex-col gap-4">
              <h4 className="text-xl font-bold">
                Renato Smania Studio de Arquitetura
              </h4>
              <p>
                Há 15 anos, quando montou o escritório, Smania sonhava em poder
                oferecer um trabalho de qualidade, mas com o diferencial de
                atender a todos os públicos, valorizando o traço e a essência de
                cada obra. Hoje o escritório possui uma equipe com cinco
                arquitetos e quatro estagiárias e realiza constantes trabalhos
                para a região e também para o Paraguai. “Posso dizer, com toda a
                certeza e orgulho, que ter começado cedo contribuiu para que eu
                fizesse o meu nome na região, e hoje poder ter a minha marca
                divulgada em outros países mundo afora é o auge da minha
                satisfação pessoal e profissional. Agradeço muito a Deus por
                sempre me abençoar, e a minha família e minha esposa, Elaine,
                por estarem comigo em cada novo desafio”, conclui.
              </p>
              <img
                src="https://media.graphassets.com/X7nDDXocQuWewFV2gZsi"
                alt="Renato Smania e Equipe 2019"
              />
              <p>
                Endereço: Rua João XXIII, 728 – Sala 01
                <br />
                Santa Terezinha de Itaipu <br /> Telefone: (45) 3541-0010
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
