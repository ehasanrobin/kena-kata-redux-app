import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
          <div className="lg:flex md:h-screen slider-box py-16">
            <div className="lg:text-left text-center lg:w-1/2">
              <span className="md:text-xl text-md">SALE UP! UPTO 50% OFF</span>
              <h1 className="md:text-6xl text-5xl   font-bold">
                Summer Sale <br /> Collections
              </h1>
              <button className="btn md:btn-md btn-md mt-3 md:px-8 md:py-1">
                Shop
              </button>
            </div>
            <div className="m-auto">
              <img
                src="https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fbg1-1.png&w=750&q=75"
                className="md:w-full w-2/3 m-auto"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex md:h-screen slider-box py-16">
            <div className="lg:text-left text-center lg:w-1/2">
              <span className="md:text-xl text-md">SALE UP! UPTO 50% OFF</span>
              <h1 className="md:text-6xl text-5xl   font-bold">
                Fashion For <br /> Every Occation
              </h1>
              <button className="btn md:btn-md btn-md mt-3 md:px-8 md:py-1">
                Shop
              </button>
            </div>
            <div className="m-auto">
              <img
                src="https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fbg1-2.png&w=750&q=75"
                className="md:w-full w-2/3 m-auto"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex md:h-screen slider-box py-16">
            <div className="lg:text-left text-center lg:w-1/2">
              <span className="md:text-xl text-md">SALE UP! UPTO 50% OFF</span>
              <h1 className="md:text-6xl text-5xl   font-bold">
                Stylish Look For <br /> Every Season
              </h1>
              <button className="btn md:btn-md btn-md mt-3 md:px-8 md:py-1">
                Shop
              </button>
            </div>
            <div className="m-auto">
              <img
                src="https://anvogue.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fbg1-3.png&w=750&q=75"
                className="md:w-full w-2/3 m-auto"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
