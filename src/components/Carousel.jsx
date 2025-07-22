import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";




export default function Carousel() {
    const [carouselImages, setCarouselImages] = useState([]);

useEffect(() =>{
    async function Fetchcarouselimages() {
     const response = await fetch("https://waifu.now.sh/type/endpoint");
     const resData = await response.json();
     setCarouselImages(resData)
 
    }
    Fetchcarouselimages();
}, [])

console.log(carouselImages);

const images = [
    'https://unsplash.com/photos/aerial-view-photography-of-road-between-highrise-building-CAFq0pv9HjY',
    'https://unsplash.com/photos/fuji-mountain-and-cherry-blossoms-in-spring-japan-8X_Rz3giae4',
];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="w-full h-[300px] sm:h-[400px]"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


