import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            autoplay: true,
            adaptiveHeight: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 4000,
            centerMode: true,
            fade: true,

        };
        return (
            <div>
                <Slider {...settings}>
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