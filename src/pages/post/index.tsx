import { Eye, SpinnerGap } from "phosphor-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useGetPostsQueryQuery } from "../../graphql/generated";

export function Postspg() {
  const { data, loading, error } = useGetPostsQueryQuery();
  if (loading) {
    return (
      <div className="flex flex-col items-center p-6 mt-6">
        <div className="flex flex-col items-center gap-3">
          <SpinnerGap size={32} className="animate-spin text-green-600" />
          <p className="animate-pulse text-sm text-green-600 font-bold">
            Carregando ...
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>Novidades - Renato Smania</title>
        <meta
          name="description"
          content="Confira nossas ultimas notícias sobre arquitetura "
        />
        <meta
          name="keywords"
          content="Renato Smania, Notícias, novidades, arquitetura, dicas"
        />
      </Helmet>
      <Header />
      <main className="pt-28 w-full antialiased dark:bg-gray-200">
        <section className="max-w-full flex-col m-auto p-6">
          <Breadcrumbs
            breadcrumbs={[
              { name: "Home", href: "/" },
              { name: "Notícias", href: "/noticias" },
            ]}
          />
          <div className="flex max-w-5xl m-auto pb-5 justify-center">
            <h3 className="text-xl font-bold text-black lg:text-3xl  dark:text-gray-600">
              Notícias
            </h3>
          </div>
          <div className="flex flex-col max-w-5xl m-auto py-4">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
              {data?.posts.map((post) => {
                return (
                  <li>
                    <Link
                      to={`/noticia/${post.slug}`}
                      title={post.title}
                      className="flex flex-col gap-2 md:gap-4 justify-center p-4 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                    >
                      <img src={post.thumbnail?.url} alt={post.title} />
                      <h4>{post.title}</h4>
                      <div className="flex justify-between items-center">
                        <button className="text-sm flex gap-3 items-center bg-black px-8 py-4 text-white font-bold">
                          Detalhes
                        </button>
                        <div className="flex flex-col gap-1 items-center w-[60px]">
                          <Eye size={24} />
                          <span className="text-sm">
                            {post.view ? post.view : ""}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
