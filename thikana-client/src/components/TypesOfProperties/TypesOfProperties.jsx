import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import 'swiper/css';

// import required modules
import { Pagination } from "swiper/modules";

const TypesOfProperties = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Types Of Properties
      </h2>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="rounded-2xl">
            <div
              style={{ backgroundImage: 'url(https://i.ibb.co.com/ZWTgnNm/andrey-yachmenov-0-Wx-A37-EXV0-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
              className="w-full h-40 object-cover p-10 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black rounded-2xl opacity-65"></div>
              <div className="relative z-10">
                <h2 className="text-white text-xl">Apartment/Flat</h2>
                <h2 className=" text-gray-200 text-sm font-thin rounded-xl mt-2 p-2 bg-[#40484290] ">99+ Properties</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <div
              style={{ backgroundImage: 'urlhttps://i.ibb.co.com/qBkhTGs/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
              className="w-full h-40 object-cover p-10 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black rounded-2xl opacity-65"></div>
              <div className="relative z-10">
                <h2 className="text-white text-xl">Apartment/Flat</h2>
                <h2 className=" text-gray-200 text-sm font-thin rounded-xl mt-2 p-2 bg-[#40484290] ">99+ Properties</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <div
              style={{ backgroundImage: 'url(https://i.ibb.co.com/ZWTgnNm/andrey-yachmenov-0-Wx-A37-EXV0-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
              className="w-full h-40 object-cover p-10 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black rounded-2xl opacity-65"></div>
              <div className="relative z-10">
                <h2 className="text-white text-xl">Apartment/Flat</h2>
                <h2 className=" text-gray-200 text-sm font-thin rounded-xl mt-2 p-2 bg-[#40484290] ">99+ Properties</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <div
              style={{ backgroundImage: 'url(https://i.ibb.co.com/5YrcmmD/christopher-jolly-Gqb-U78bd-JFM-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
              className="w-full h-40 object-cover p-10 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black rounded-2xl opacity-65"></div>
              <div className="relative z-10">
                <h2 className="text-white text-xl">Apartment/Flat</h2>
                <h2 className=" text-gray-200 text-sm font-thin rounded-xl mt-2 p-2 bg-[#40484290] ">99+ Properties</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <div
              style={{ backgroundImage: 'url(https://i.ibb.co.com/r5JJVyD/outsite-co-R-LK3sq-Li-Bw-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
              className="w-full h-40 object-cover p-10 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black rounded-2xl opacity-65"></div>
              <div className="relative z-10">
                <h2 className="text-white text-xl">Apartment/Flat</h2>
                <h2 className=" text-gray-200 text-sm font-thin rounded-xl mt-2 p-2 bg-[#40484290] ">99+ Properties</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <div
              style={{ backgroundImage: 'url(https://i.ibb.co.com/M75gQGJ/naomi-hebert-2dc-Yhvb-HV-M-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
              className="w-full h-40 object-cover p-10 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black rounded-2xl opacity-65"></div>
              <div className="relative z-10">
                <h2 className="text-white text-xl">Apartment/Flat</h2>
                <h2 className=" text-gray-200 text-sm font-thin rounded-xl mt-2 p-2 bg-[#40484290] ">99+ Properties</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <div
              style={{ backgroundImage: 'url(https://i.ibb.co.com/nDyBXP0/scott-webb-1ddol8rg-UH8-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
              className="w-full h-40 object-cover p-10 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black rounded-2xl opacity-65"></div>
              <div className="relative z-10">
                <h2 className="text-white text-xl">Apartment/Flat</h2>
                <h2 className=" text-gray-200 text-sm font-thin rounded-xl mt-2 p-2 bg-[#40484290] ">99+ Properties</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <div
              style={{ backgroundImage: 'url(https://i.ibb.co.com/nDyBXP0/scott-webb-1ddol8rg-UH8-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}
              className="w-full h-40 object-cover p-10 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black rounded-2xl opacity-65"></div>
              <div className="relative z-10">
                <h2 className="text-white text-xl">Apartment/Flat</h2>
                <h2 className=" text-gray-200 text-sm font-thin rounded-xl mt-2 p-2 bg-[#40484290] ">99+ Properties</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TypesOfProperties;
