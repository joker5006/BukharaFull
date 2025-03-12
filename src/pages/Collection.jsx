import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "../components/sidebar.jsx";
import allCollections from "../assets/data/data.js";
import "../styles/collection.css";
import NotFound from "../components/notfound.jsx";
import Footer from "../components/footer.jsx";

const ITEMS_PER_PAGE = 8;

const Collection = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const season = params.get("season");

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [animation, setAnimation] = useState("fade-left"); // По умолчанию анимация для перехода вперед

  useEffect(() => {
    AOS.init({ duration: 700, once: false }); // Инициализация AOS
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [season]);

  useEffect(() => {
    if (!season || season === "all") {
      setFilteredProducts(allCollections);
    } else {
      const normalizedSeason = season.toLowerCase();
      const filtered = allCollections.filter((product) =>
        product.category.toLowerCase().includes(normalizedSeason)
      );
      setFilteredProducts(filtered);
    }
  }, [season]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(startIndex, endIndex);

  // Функция для изменения страницы с анимацией
  const changePage = (newPage) => {
    setAnimation(newPage > currentPage ? "fade-left" : "fade-right"); // Перелистывание влево или вправо
    setTimeout(() => setCurrentPage(newPage), 200); // Небольшая задержка для эффекта
  };

  return (
    <div className="collection-page">
      <Sidebar />

      <section className="collection-content">
        <h2>Коллекция</h2>
        <p>
          Показано {visibleProducts.length} из {filteredProducts.length}
        </p>

        {visibleProducts.length > 0 ? (
          <div className="products-grid" data-aos={animation}>
            {visibleProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="product-card"
              >
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
              </Link>
            ))}
          </div>
        ) : season === "spring" ? (
          <NotFound />
        ) : (
          <p className="no-products">Товары не найдены</p>
        )}

        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => changePage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <span
                key={i}
                onClick={() => changePage(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </span>
            ))}
            <button
              onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
export default Collection;
