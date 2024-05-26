import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slides = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
                Madinah
              </span>
            </h1>
            
            
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide2 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
                Makkah
              </span>
            </h1>
            
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
                Kashmir
              </span>
            </h1>
            
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
                Kolkata
              </span>
            </h1>
            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
