import React from "react";
import Slider from "react-slick";
import {banners} from "../../utils/constants";

const BannerSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        centerMode: true,
        centerPadding: "200px",

    }
    return (
        <div className="w-full bg-white py-6">
            <div className="mx-auto px-4">
                <Slider {...settings}>
                    {banners.map((banner,index) => (
                        <div key={index} className="px-2">
                            <img src={banner} alt={`banner-${index}`} className="w-full h-[300px] rounded-xl object-cover"/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default BannerSlider;