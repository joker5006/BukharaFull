import { Link } from "react-router-dom";
import winter from "../assets/data/winter"; // Импорт зимней коллекции
import "../styles/winter.css";
import banner from "../assets/img/nature.png"

const Winter = () => {
  return (
    <div className="home-page">
      {/* Блок с баннером */}
      <section 
        className="hero-banner"
        data-aos="fade-right"
        data-aos-duration="1000"
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

      {/* Заголовок коллекции */}
      <section 
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1000"
        className="collection-section"
      >
        <h2>Зимняя коллекция</h2>
        <p>Натуральный продукт Бухары</p>
        <div className="products-grid">
          {winter.slice(0, 8).map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card"
              data-aos="flip-up"
              data-aos-delay={index * 100} // Эффект задержки для каждого элемента
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

export default Winter;
