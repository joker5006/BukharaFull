import { Link } from "react-router-dom";
import "../styles/footer.css";


const Footer = () => {
  return (
    <div className="home-page">
      {/* --- Футер --- */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-about" data-aos="zoom-in">
            <div className="logo-footer">
              <i className="fa-solid fa-bed"></i>
            </div>
            <p>
              'Bukhara Natural Product' has been a company that produces cotton
              fabrics for many years for use all over the world.
            </p>
          </div>
          <nav className="footer-menu" data-aos="fade-up">
            <h4>Меню</h4>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/about">О нас</Link>
              </li>
              <li>
                <Link to="/collection">Коллекция</Link>
              </li>
              <li>
                <Link to="/contact">Контакт</Link>
              </li>
            </ul>
          </nav>
          <div
            className="footer-contacts"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4>Контакты</h4>
            <p>Bukhara, st. Apomysh 80.</p>
            <p>bnpz@bkr.ru</p>
            <p>bnp_fabrik</p>
            <p>info@bnpfabric.com</p>
            <p>+998 93 383 75 85</p>
            <p>+998 93 960 78 00</p>
          </div>
          <div className="footer-subscribe" data-aos="fade-left">
            <h4>Подпишитесь на нашу почту</h4>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter Your Email" />
              <button>Подписаться</button>
            </div>
          </div>
        </div>
        <p className="footer-bottom" data-aos="fade-up">
          © 2025 ООО 'BUKHARA NATURAL PRODUCT'. Все права защищены.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
