import { ArrowUpRight, CaretLeft, CaretRight } from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <section className="w-full flex justify-center my-7">
      <div className="md:w-[968px] lg:w-[1024px] flex flex-col mx-7 md:mx-7 lg:mx-0">
        <div className="flex justify-between mb-7 md:mx-7 items-center">
          <h3 className="text-xl font-bold text-black-500">Projetos</h3>
          <Link
            to={"/projetos"}
            className="text-sm flex gap-3 items-center bg-black-500 px-8 py-4 text-white-100 font-bold hover:bg-black-500/40 hover:text-black-500/90 transition-all duration-700"
          >
            Ver todos
            <ArrowUpRight size={24} />
          </Link>
        </div>
        <Swiper
          effect={"coverflow"}
          slidesPerView={"auto"}
          spaceBetween={32}
          grabCursor={true}
          loop={true}
          speed={300}
          scrollbar={false}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[EffectCoverflow, Navigation]}
          className="py-6 md:px-0 max-w-sm md:max-w-[768px] lg:max-w-[1024px]"
        >
          <SwiperSlide className="overflow-hidden relative md:h-[200px] group">
            <Link to={"/projeto/projeto-x"}>
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://media.graphassets.com/FMPA4VoyR6Gjhl1RzD15"
                alt=""
              />
              <div className="relative bottom-14 md:bottom-24 lg:bottom-14 flex justify-between items-end px-2">
                <div>
                  <h4 className="font-bold text-white-100 drop-shadow-sm">
                    Projeto Residencial Casa
                  </h4>
                  <span className="text-sm text-white-100 drop-shadow-sm">
                    Brasil
                  </span>
                </div>
                <div className="p-2 text-lg bg-black-500">
                  <ArrowUpRight size={24} color={"#fff"} />
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden relative md:h-[200px] group">
          <Link to={"/projeto/projeto-x"}>
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://media.graphassets.com/FMPA4VoyR6Gjhl1RzD15"
                alt=""
              />
              <div className="relative bottom-14 md:bottom-24 lg:bottom-14 flex justify-between items-end px-2">
                <div>
                  <h4 className="font-bold text-white-100 drop-shadow-sm">
                    Projeto Residencial Casa
                  </h4>
                  <span className="text-sm text-white-100 drop-shadow-sm">
                    Brasil
                  </span>
                </div>
                <div className="p-2 text-lg bg-black-500">
                  <ArrowUpRight size={24} color={"#fff"} />
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden relative md:h-[200px] group">
            <Link to={"/projeto/projeto-x"}>
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://media.graphassets.com/FMPA4VoyR6Gjhl1RzD15"
                alt=""
              />
              <div className="relative bottom-14 md:bottom-24 lg:bottom-14 flex justify-between items-end px-2">
                <div>
                  <h4 className="font-bold text-white-100 drop-shadow-sm">
                    Projeto Residencial Casa
                  </h4>
                  <span className="text-sm text-white-100 drop-shadow-sm">
                    Brasil
                  </span>
                </div>
                <div className="p-2 text-lg bg-black-500">
                  <ArrowUpRight size={24} color={"#fff"} />
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden relative md:h-[200px] group">
            <Link to={"/projeto/projeto-x"}>
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://media.graphassets.com/FMPA4VoyR6Gjhl1RzD15"
                alt=""
              />
              <div className="relative bottom-14 md:bottom-24 lg:bottom-14 flex justify-between items-end px-2">
                <div>
                  <h4 className="font-bold text-white-100 drop-shadow-sm">
                    Projeto Residencial Casa
                  </h4>
                  <span className="text-sm text-white-100 drop-shadow-sm">
                    Brasil
                  </span>
                </div>
                <div className="p-2 text-lg bg-black-500">
                  <ArrowUpRight size={24} color={"#fff"} />
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden relative md:h-[200px] group">
          <Link to={"/projeto/projeto-x"}>
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://media.graphassets.com/FMPA4VoyR6Gjhl1RzD15"
                alt=""
              />
              <div className="relative bottom-14 md:bottom-24 lg:bottom-14 flex justify-between items-end px-2">
                <div>
                  <h4 className="font-bold text-white-100 drop-shadow-sm">
                    Projeto Residencial Casa
                  </h4>
                  <span className="text-sm text-white-100 drop-shadow-sm">
                    Brasil
                  </span>
                </div>
                <div className="p-2 text-lg bg-black-500">
                  <ArrowUpRight size={24} color={"#fff"} />
                </div>
              </div>
            </Link>
          </SwiperSlide>
          

          <div className="md:mt-5 md:ml-7">
            <div className="swiper-button-prev bottom-5 md:bottom-0 top-[initial] after:text-sm left-[initial] p-2 bg-black-500 w-[initial] h-[initial] text-white-100 hover:bg-black-500/40 hover:text-black-500/90 transition-all duration-700">
              <CaretLeft size={24} />
            </div>
            <div className="swiper-button-next  bottom-5 md:bottom-0 top-[initial] after:text-sm right-[initial] left-20 md:left-20 p-2 text-sm bg-black-500 w-[initial] h-[initial] text-white-100 hover:bg-black-500/40 hover:text-black-500/90 transition-all duration-700">
              <CaretRight size={24} />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
