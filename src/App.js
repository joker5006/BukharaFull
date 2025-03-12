import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About"
import "./styles/global.css";
import Contact from "./pages/Contact";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      once: true, // Анимация срабатывает один раз
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
