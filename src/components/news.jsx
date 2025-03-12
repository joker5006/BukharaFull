import { Link } from "react-router-dom";
import "../styles/footer.css";
import war from "../assets/img/war.png";
import mac from "../assets/img/mac.png";
import gadget from "../assets/img/gadget.png";

const News = () => {
  return (
    <div className="home-page">
      {/* --- Секция новостей --- */}
      <section className="news-section">
        <h2 data-aos="fade-up">Новости</h2>
        <p data-aos="fade-up" data-aos-delay="200">Натуральный продукт Бухары</p>
        <div className="news-grid">
          <article data-aos="fade-left" className="news-card">
            <img src={gadget} alt="Гаджеты" />
            <p className="date">10/05/2019 • от админа</p>
            <h3>Как выбрать идеальные гаджеты</h3>
            <p>Когда прекрасная долина полна пара вокруг меня...</p>
          </article>
          <article data-aos="fade-up" data-aos-delay="300" className="news-card">
            <img src={mac} alt="Гаджеты" />
            <p className="date">10/05/2019 • от админа</p>
            <h3>Как выбрать идеальные гаджеты</h3>
            <p>Когда прекрасная долина полна пара вокруг меня...</p>
          </article>
          <article data-aos="fade-right" className="news-card">
            <img src={war} alt="Гаджеты" />
            <p className="date">10/05/2019 • от админа</p>
            <h3>Как выбрать идеальные гаджеты</h3>
            <p>Когда прекрасная долина полна пара вокруг меня...</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default News;
