import { Link } from "react-router-dom";
import summer from "../assets/data/summer"; // Импорт летней коллекции
import "../styles/summer.css";
import banner from "../assets/img/nature.png"

const Summer = () => {
  return (
    <div className="home-page">
      {/* Баннер с кроватью */}
      <section 
        data-aos="fade-right" 
        data-aos-duration="1000"
        className="hero-banner summer-banner"
      >
        <div className="banner-content">
          <h2 data-aos="fade-up">100%</h2>
          <p data-aos="fade-up" data-aos-delay="200">Качество продукта</p>
        </div>
        <img src={banner} alt="Кровать" className="banner-image" data-aos="zoom-in" />

        <div 
          data-aos="fade-left"
          data-aos-duration="1000"
          className="banner-info"
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

      {/* Летняя коллекция */}
      <section 
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        className="collection-section"
      >
        <h2>Летняя коллекция</h2>
        <p>Натуральный продукт Бухары</p>
        <div className="products-grid">
          {summer.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card"
              data-aos="flip-up"
              data-aos-delay={index * 100} // Плавный эффект для каждого элемента
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

export default Summer;
