import { SpinnerGap } from "phosphor-react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useGetPostBySlugQuery } from "../../graphql/generated";

export function Postpg() {
  const { slug } = useParams<{ slug: string }>();
  const { data, loading } = useGetPostBySlugQuery({
    variables: {
      slug,
    },
  });
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
        <title>{data?.post?.title}</title>
        <meta name="description" content={data?.post?.title} />
        <meta name="keywords" content={data?.post?.title} />
      </Helmet>
      <Header />
      <main className="pt-28 p-6 w-full flex justify-center items-center">
        <section className="flex flex-col w-full">
          <h3 className="text-3xl font-bold">{data?.post?.title}</h3>
          <img
            width={150}
            src={data?.post?.thumbnail?.url}
            alt={data?.post?.title}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: `${data?.post?.content?.html}`,
            }}
          ></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
