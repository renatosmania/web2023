import { Eye } from "phosphor-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Projectspg() {
  return (
    <>
      <Helmet>
        <title>Projetos - Renato Smania</title>
        <meta name="description" content="Confira nossos ultimos projetos" />
        <meta
          name="keywords"
          content="Projetos, Arquitetura, Renato Smania, Novidades, Residenciais, Interiores"
        />
      </Helmet>
      <Header />
      <main className="pt-28 w-full antialiased">
        <section className="max-w-full flex-col m-auto p-6">
          <Breadcrumbs
            breadcrumbs={[
              { name: "Home", href: "/" },
              { name: "Projetos", href: "/projetos" },
            ]}
          />
          <div className="flex max-w-5xl m-auto pb-5 justify-center">
            <h3 className="text-xl font-bold text-black lg:text-3xl  dark:text-gray-600">
              Projetos
            </h3>
          </div>
          <div className="flex flex-col max-w-5xl m-auto py-4">
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4">
              <li>
                <Link
                  to={""}
                  title="Title"
                  className="flex flex-col gap-2 md:gap-4 justify-center p-4 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                >
                  <img src="https://media.graphassets.com/FMPA4VoyR6Gjhl1RzD15" alt="Title" />
                  <h4 className="text-sm md:text-lg">Projeto Residencial Alpha</h4>
                  
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
