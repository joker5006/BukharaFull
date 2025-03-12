import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../assets/data/data";
import "../styles/productpage.css";
import Footer from "../components/footer";
import NotFound from "../components/notfound.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id.toString() === id);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="product-page">
      <div className="product-container" data-aos="fade-up">
        {/* Изображение */}
        <div className="product-image">
          <img src={product.img} alt={product.name} />
        </div>

        {/* Информация */}
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>

          <table className="product-details">
            <tbody>
              <tr>
                <td className="detail-key">Материал</td>
                <td className="detail-value">{product.Material}</td>
              </tr>
              <tr>
                <td className="detail-key">Наволочка</td>
                <td className="detail-value">{product.Pillowcase}</td>
              </tr>
              <tr>
                <td className="detail-key">Простыня</td>
                <td className="detail-value">{product.sheet}</td>
              </tr>
              <tr>
                <td className="detail-key">Пододеяльник</td>
                <td className="detail-value">{product.Duvet}</td>
              </tr>
              <tr>
                <td className="detail-key">Размер</td>
                <td className="detail-value">{product.Size}</td>
              </tr>
              <tr>
                <td className="detail-key">Производитель</td>
                <td className="detail-value">{product.Manufacturer}</td>
              </tr>
            </tbody>
          </table>

          <p className="product-category">
            <strong>Категория:</strong> <span className="category">{product.category}</span>
          </p>
        </div>
      </div>

      {/* Описание */}
      <div className="product-description" data-aos="fade-up">
        <h2>Описание</h2>
        <p>{product.text}</p>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
