import { Helmet } from "react-helmet";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";

export function Projectpg() {
  return (
    <>
      <Helmet>
        <title>Projeto X</title>
        <meta name="description" content="Projeto X" />
        <meta name="keywords" content="Projeto X" />
      </Helmet>
      <main className="pt-28 p-6 w-full flex justify-center items-center">
        <section className="max-w-5xl flex-col p-6">
          <Breadcrumbs
            breadcrumbs={[
              { href: "/", name: "Home" },
              { href: "/projetos", name: "Projetos" },
              { href: "/projeto/nome", name: "Projeto X" },
            ]}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
