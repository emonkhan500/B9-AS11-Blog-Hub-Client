
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay,Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container mx-auto mt-12'>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        
        pagination={{
            clickable: true,
        }} 
        modules={[Pagination,Autoplay,Navigation]} className="mySwiper">
        <SwiperSlide><div className='slide slide1'>
           <div className='text-center'>
           <h1 className='text-white font-bold text-5xl '> <span className='text-red-600'>Country </span> roads take me <br /> home</h1>
           <button className="btn btn-success bg-[#0BE58A] w-[180px] mt-7 text-white text-xl font-semibold rounded-xl">Read More</button>
           </div>
           <br />
           
        </div></SwiperSlide>
        <SwiperSlide><div className='slide slide2'> <div className='text-center'>
           <h1 className='text-white font-bold text-5xl'>Love this <span className='text-red-600'>Morning </span> outside love this cup of <br /> coffee</h1>
           <button className="btn btn-success bg-[#0BE58A] w-[180px] mt-7 text-white text-xl font-semibold rounded-xl">Read More</button>
           </div>
           <br /></div></SwiperSlide>
        <SwiperSlide><div className='slide slide3'> <div className='text-center'>
           <h1 className='text-white font-bold text-5xl'>The story of <span className='text-red-600'>Alibaba</span> and his 40 bandits was my favorite</h1>
           <button className="btn btn-success bg-[#0BE58A] w-[180px] mt-7 text-white text-xl font-semibold rounded-xl">Read More</button>
           </div>
           <br /></div></SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Banner;