import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar" data-aos="fade-right">
      <h3>Коллекция</h3>
      <ul>
        <li>
          <NavLink to="/collection?season=spring">Весенний сбор</NavLink>
        </li>
        <li>
          <NavLink to="/collection?season=summer">Летняя коллекция</NavLink>
        </li>
        <li>
          <NavLink to="/collection?season=autumn">Осенняя коллекция</NavLink>
        </li>
        <li>
          <NavLink to="/collection?season=winter">Зимняя коллекция</NavLink>
        </li>
        <li>
          <NavLink to="/collection">Все</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
