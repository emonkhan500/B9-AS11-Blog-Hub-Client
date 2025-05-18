import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import '../../../src/index.css';

const Banner = () => {
  return (
    <div className="px-2 md:px-5 mt-4 md:mt-7 lg:mt-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1 h-64 sm:h-80 md:h-[450px] lg:h-[600px] xl:h-[700px] px-2 lg:px-7">
            <div className="text-center">
              <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">
                <span className="text-green-600">Country</span> roads take me home
              </h1>
              <Link
                to="/allBlogs"
                className="mt-7 inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-lg lg:text-xl font-medium lg:font-semibold rounded px-3 py-2 lg:px-6 lg:py-3 shadow"
              >
                Read More
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide2 h-64 sm:h-80 md:h-[500px] lg:h-[600px] xl:h-[700px] px-2 lg:px-7">
            <div className="text-center">
              <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">
                Love this <span className="text-green-600">Morning</span> outside love this cup of coffee
              </h1>
              <Link
                to="/allBlogs"
                className="mt-7 inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-lg lg:text-xl font-medium lg:font-semibold rounded px-3 py-2 lg:px-6 lg:py-3 shadow"
              >
                Read More
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide3 h-64 sm:h-80 md:h-[500px] lg:h-[600px] xl:h-[700px] px-2 lg:px-7">
            <div className="text-center">
              <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">
                The story of <span className="text-green-600">Alibaba</span> and his 40 bandits was my favorite
              </h1>
              <Link
                to="/allBlogs"
                className="mt-7 inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-lg lg:text-xl font-medium lg:font-semibold rounded px-3 py-2 lg:px-6 lg:py-3 shadow"
              >
                Read More
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
