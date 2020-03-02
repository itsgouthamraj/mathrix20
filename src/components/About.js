import React, { Component } from "react";
import '../styles/Deck.css';
import about from "../assets/about.png";

class About extends Component {
  

    render() {
        const dat = [
            {
                name: '35th Edition of Mathrix',
                description: "The Department of Mathematics imparts consistent training and platform for research to the students. It provides state of the art facilities to the students enabling them to stay a step ahead. They are exposed to various opportunities such as inplant training, internships, and workshops during their course of study. The Department has been conducting an Intercollegiate Colloquium for more than three decades and we take pride in presenting the 35th edition of MATHRIX 2020.",
                image: about,
                category: 'Mathematics Colloquium',
            }
        ];

        let w = dat[0];
        return (
            <>
                <div className="efix">
                    <div className="mt">ABOUT MATHRIX</div>
                </div>
                <div className="e-c">
                    <div className="blog-slider events-box">
                        <div className="blog-slider__wrp swiper-wrapper">
                            <div className="blog-slider__item swiper-slide">
                                <div className="blog-slider__img">
                                    <img src={w.image} alt="" />
                                </div>
                                <div className="blog-slider__content">
                                    <span className="blog-slider__code">{w.name}</span>
                                    <div className="blog-slider__title">{w.category}</div>
                                    <div className="blog-slider__text">{w.description}</div>
                                    {/* <a href="#" className="blog-slider__button">REGISTRATIONS OPENS SOON</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default About;
