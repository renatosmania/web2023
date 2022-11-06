import { ArrowUpRight, SpinnerGap } from "phosphor-react";
import { Link } from "react-router-dom";
import { useGetPostsQueryQuery } from "../graphql/generated";

export function Posts() {
  const { data, error } = useGetPostsQueryQuery();

  if (error) {
    <section className="w-full flex justify-center my-7">
      <div className="flex flex-col items-center gap-3">
        <SpinnerGap size={32} className="animate-spin text-black-500" />
        <p className="animate-pulse text-sm text-black-500 font-bold">
          Carregando ...
        </p>
      </div>
    </section>;
  }
  return (
    <section className="w-full flex justify-center my-7">
      <div className="md:w-[968px] lg:w-[1024px] flex flex-col px-4 md:px-7 lg:mx-0">
        <div className="flex justify-between mb-7 items-center">
          <h3 className="text-xl font-bold">Últimas noticías</h3>
          <Link
            to={"/posts"}
            className="text-sm flex gap-3 items-center bg-black-500 px-8 py-4 font-bold text-white-100 hover:bg-black-500/40 hover:text-black-500/90 transition-all duration-700"
          >
            Ver todos
            <ArrowUpRight size={24} />
          </Link>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.posts.map((post) => {
            return (
              <li className="bg-slate-100 hover:drop-shadow-md transition-all duration-700">
                <Link
                  to={`/post/${post.slug}`}
                  title={post.title}
                  className="flex flex-col items-center"
                >
                  <img
                    className="w-full"
                    width={290}
                    height={290}
                    src={post.thumbnail?.url}
                    alt={post.title}
                  />
                  <div className="flex flex-col p-4">
                    <h4 className="text-sm md:text-lg text-black-500 font-bold text-center mb-2">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
