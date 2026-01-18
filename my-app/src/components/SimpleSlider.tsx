"use client";
import Image from "next/image";
import { carouselImages } from "./SliderImages";
import Slider from "react-slick";
import "./SimpleSlider.css";
export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    className: "slides",
  };

  return (
    <div className="slider-container pb-5 relative">
      <Slider {...settings}>
        {carouselImages.map((img, i) => (
          <div key={i} className="relative w-full h-[400px] z-10">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-bottom "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
