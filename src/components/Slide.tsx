import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Slide() {
  return (
    <section>
      <Swiper
        className="z-0 w-full overflow-hidden"
        effect={"coverflow"}
        slidesPerView={"auto"}
        grabCursor={true}
        loop={true}
        speed={1000}
      >
        <SwiperSlide>
          <img
            src="https://media.graphassets.com/1h35Q6AHRJC3pS5kv08Z"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.graphassets.com/GQCkZ5CbT2G6RYdqkKxq"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.graphassets.com/VMI6QgPOT1yPmlbzvWj9"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
