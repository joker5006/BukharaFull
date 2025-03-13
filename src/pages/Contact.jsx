import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";
import Footer from "../components/footer";

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
    alert(
      `Ваше сообщение отправлено:\nEmail: ${formData.email}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`
    );
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
        <div className="map-container" data-aos="fade-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31213.812659339387!2d64.39238765!3d39.767586549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50063f4cba7e6f%3A0x7fd1d742b00b154e!2z0JHRg9GA0L7QvdGB0LrQsNGPINGD0LsuLCAyMDAwMA!5e0!3m2!1sru!2s!4v1710330305907!5m2!1sru!2s"
            width="450"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* ✅ Футер */}
      <Footer />
    </div>
  );
};

export default Contact;
