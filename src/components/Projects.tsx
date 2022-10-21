import { ArrowUpRight, CaretLeft, CaretRight } from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper";

export function Projects() {
  return (
    <section className="w-full flex justify-center my-7">
      <div className="md:w-[968px] lg:w-[1024px] flex flex-col mx-7 md:mx-7 lg:mx-0">
        <div className="flex justify-between mb-7 md:mx-7 items-center">
          <h3 className="text-xl font-bold">Projetos</h3>
          <a
            href="#"
            className="text-sm flex gap-3 items-center bg-black px-8 py-4 text-white font-bold"
          >
            Ver todos
            <ArrowUpRight size={24} />
          </a>
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
          <SwiperSlide className="overflow-hidden relative md:h-[330px] group">
            <a href="#">
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://www.renatosmania.com.br/imagens/projeto-place-01.jpeg"
                alt=""
              />
              <div className="relative bottom-14 md:bottom-24 lg:bottom-14 flex justify-between items-end px-2">
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
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden relative md:h-[330px] group">
            <a href="#">
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://www.renatosmania.com.br/imagens/projeto-place-01.jpeg"
                alt=""
              />
              <div className="relative bottom-14 md:bottom-24 lg:bottom-14 flex justify-between items-end px-2">
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
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden relative md:h-[330px] group">
            <a href="#">
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://www.renatosmania.com.br/imagens/projeto-place-01.jpeg"
                alt=""
              />
              <div className="relative bottom-14 md:bottom-24 lg:bottom-14 flex justify-between items-end px-2">
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
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden relative md:h-[330px] group">
            <a href="#">
              <img
                className="group-hover:scale-[1.1] transition-all duration-700"
                src="https://www.renatosmania.com.br/imagens/projeto-place-01.jpeg"
                alt=""
              />
              <div className="relative bottom-14 md:bottom-24 lg:bottom-14 flex justify-between items-end px-2">
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
          </SwiperSlide>

          <div className="md:mt-5 md:ml-7">
            <div className="swiper-button-prev bottom-5 md:bottom-0 top-[initial] after:text-sm left-[initial] p-2 bg-black w-[initial] h-[initial] text-white">
              <CaretLeft size={24} />
            </div>
            <div className="swiper-button-next  bottom-5 md:bottom-0 top-[initial] after:text-sm right-[initial] left-20 md:left-20 p-2 text-sm bg-black w-[initial] h-[initial] text-white">
              <CaretRight size={24} />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
