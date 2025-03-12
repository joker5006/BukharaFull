import React from "react";
import "../styles/features.css";

const Features = () => {
  return (
    <section className="features" data-aos="fade-up" data-aos-duration="1000">
      <div className="feature" data-aos="fade-up" data-aos-delay="100">
        <i className="fa-solid fa-truck-fast"></i>
        <p>
          <strong>Бесплатная доставка</strong>
        </p>
        <span>Для всех товаров доставка бесплатная</span>
      </div>
      <div className="feature" data-aos="fade-up" data-aos-delay="200">
        <i className="fa-solid fa-rotate-left"></i>
        <p>
          <strong>Гарантия возварта</strong>
        </p>
        <span>В течении 30 дней доступна гарантия</span>
      </div>
      <div className="feature" data-aos="fade-up" data-aos-delay="300">
        <i className="fa-solid fa-headset"></i>
        <p>
          <strong>Онлайн помощ 24/7</strong>
        </p>
        <span>Быстрая помощ 24/7</span>
      </div>
      <div className="feature" data-aos="fade-up" data-aos-delay="400">
        <i className="fa-solid fa-shield-halved"></i>
        <p>
          <strong>Бехопасная оплата</strong>
        </p>
        <span>Принимаются все методы оплаты</span>
      </div>
    </section>
  );
};

export default Features;
