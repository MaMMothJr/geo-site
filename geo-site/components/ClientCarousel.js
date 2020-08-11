import React, { Component } from "react";
import Slider from "react-slick";

export default class ClientCarousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 6000,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider  {...settings}>
                    <div>
                        <img src="/images/clientLogo/gasprom_0.png" alt="slide1"/>
                    </div>
                    <div>
                        <img src="/images/clientLogo/gasprom_neft_0.png" alt="slide1"/>
                    </div>
                    <div>
                        <img src="/images/clientLogo/lukoil_0.png" alt="slide1"/>
                    </div>
                    <div>
                        <img src="/images/clientLogo/rosneft_0.png" alt="slide1"/>
                    </div>
                    <div>
                        <img src="/images/clientLogo/Russneft.png" alt="slide1"/>
                    </div>
                    <div>
                        <img src="/images/clientLogo/ssk.png" alt="slide1"/>
                    </div>
                </Slider>
            </div>
        );
    }
}