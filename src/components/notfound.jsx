import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/404-animation/404.json";
import "../styles/notfound.css"; // Стили

const NotFound = () => {
  return (
    <div className="not-found-container">
      <Lottie animationData={animationData} loop={true} style={{ width: "70%", height: "70%", margin:"auto" }} />
      <h2>Упс! Товар не найден</h2>
      <p>Попробуйте вернутся в главное меню.</p>
    </div>
  );
};

export default NotFound;
