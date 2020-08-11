import React, { Component } from "react";
import Slider from "react-slick";

export default class SectionCarousel extends Component {
    render() {
        const settings =  {
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 2000
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