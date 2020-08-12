import React, { Component } from "react";
import Slider from "react-slick";

export default class SectionCarousel extends Component {
    render() {
        const settings =  {
            fade: true,
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider  {...settings}>
                    <div>
                        <img src="/images/slide1.png" alt="slide1"/>
                    </div>
                    <div>
                        <img src="/images/slide2.png" alt="slide1"/>
                    </div>
                    <div>
                        <img src="/images/slide3.png" alt="slide1"/>
                    </div>
                </Slider>
            </div>
        );
    }
}