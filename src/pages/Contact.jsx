import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";
import Footer from "../components/footer";
import location from "../assets/img/image1.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ваше сообщение отправлено:\nEmail: ${formData.email}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`);
  };

  return (
    <div className="contact-page">
      <section className="contact-content">
        {/* ✅ Форма */}
        <div className="form-section" data-aos="fade-right">
          <h1>Контакты</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Электронная Почта"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон Номер"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Ваше Сообщение"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Отправить</button>
          </form>
        </div>

        {/* ✅ Карта */}
        <div className="map-section" data-aos="fade-left">
          <img src={location} alt="Карта" />
        </div>
      </section>

      {/* ✅ Футер */}
      <Footer />
    </div>
  );
};

export default Contact;
