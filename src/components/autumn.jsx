import { Link } from "react-router-dom";
import autumn from "../assets/data/autumn"; // Импорт осенней коллекции
import "../styles/autumn.css";
import banner from "../assets/img/nature.png"

const Autumn = () => {
  return (
    <div className="home-page">
      {/* Баннер без кровати */}
      <section 
        className="hero-banner autumn-banner"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="banner-content">
          <h2 data-aos="fade-up">100%</h2>
          <p data-aos="fade-up" data-aos-delay="200">Качество продукта</p>
        </div>
        <img src={banner} alt="Кровать" className="banner-image" data-aos="zoom-in" />
        <div 
          className="banner-info"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h3>Натуральный продукт Бухары</h3>
          <p>
            является компанией, производящей хлопковые ткани для всего мира на
            протяжении многих лет
          </p>
          <Link to="/collection" className="button" data-aos="zoom-in">
            Коллекция
          </Link>
        </div>
      </section>
      {/* Заголовок коллекции */}
      <section 
        className="collection-section"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
      >
        <h2>Осенняя коллекция</h2>
        <p>Натуральный продукт Бухары</p>
        <div className="products-grid">
          {autumn.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card"
              data-aos="flip-up"
              data-aos-delay={index * 100} // Плавная задержка карточек
            >
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Autumn;
