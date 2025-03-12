import React from "react";
import "../styles/hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import natureBed from "../assets/img/introimg.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
          Бухора
        </p>
        <p
          className="bold"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          Натуральный
        </p>
        <h1 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
          ПРОДУКТ
        </h1>
      </div>
      <img
        src={natureBed}
        alt="Кровать"
        className="hero-image"
        data-aos="fade-left"
      />
    </section>
  );
};

export default Hero;
