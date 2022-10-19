import { Header } from "../components/Header";
import { Helmet } from "react-helmet";
import { Footer } from "../components/Footer";
import { Newsletter } from "../components/Newsletter";
import { Slide } from "../components/Slide";
import { About } from "../components/About";
import { Video } from "../components/Video";
import { Projects } from "../components/Projects";
import { Posts } from "../components/Posts";

export function Home() {
  return (
    <>
      <Helmet title="Studio Renato Smania">
        <meta name="description" content="Arquitetura e Design de Interiores" />
        <meta
          name="keywords"
          content="Arquitetura, Renato Smani, Interiores, Design"
        />
      </Helmet>
      <Header />
      <main className="flex flex-col gap-12">
        <Slide />
        <About />
        <section className="w-full">
          <Video />
        </section>
        <Projects />
        <Posts />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
