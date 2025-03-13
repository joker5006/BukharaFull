import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Логотип */}
      <div className="logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-bed"></i>
        </Link>
      </div>

      {/* Основное меню (скрывается на мобилках) */}
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/collection">Коллекции</Link>
        <Link to="/about">О нас</Link>
        <Link to="/contact">Контакты</Link>
      </nav>

      {/* Бургер-иконка (показывается на мобильных) */}
      <div className="burger-menu" onClick={() => setMenuOpen(true)}>
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Боковое меню для мобильных */}
      <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        {/* Кнопка закрытия */}
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-times"></i>
        </div>

        {/* Навигационные ссылки */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Главная
        </Link>
        <Link to="/collection" onClick={() => setMenuOpen(false)}>
          Коллекции
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          О нас
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Контакты
        </Link>
      </div>
    </header>
  );
};

export default Header;
