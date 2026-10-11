import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../Components/Slider.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide><img src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/bne02.jpg" alt="not seen" /></SwiperSlide>
      <SwiperSlide><img src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/bne03.jpg" alt="not seen" /></SwiperSlide>
      <SwiperSlide><img src="https://billu.co.in/wp-content/themes/billu/billuNew/assets/img/bne01.jpg" alt="not seen" /></SwiperSlide>
    </Swiper>
  );
}

export default Slider;