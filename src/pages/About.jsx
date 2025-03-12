import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";
import Footer from "../components/footer";
import Image from "../assets/img/image.png";

const About = () => {
  const [email, setEmail] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleSubscribe = () => {
    alert(`Вы подписались на рассылку: ${email}`);
  };

  return (
    <div className="about-page">
      <section className="about-content">
        <div className="text-section" data-aos="fade-right">
          <h1>Натуральный продукт Бухары</h1>
          <p>
            Компания <strong>Bukhara Natural Product</strong> — это не просто производство тканей, а целая философия качества, традиций и уважения к окружающей среде.
            Уже более 17 лет мы создаем высококачественные хлопковые ткани, которые выбирают по всему миру.
          </p>
          
          {/* ✅ Блок со скрытым текстом */}
          <div className={`hidden-text ${isExpanded ? "expanded" : ""}`}>
            <p>
              Каждый этап производства — от отбора сырья до конечного продукта — проходит строгий контроль. Мы используем только экологически чистые материалы и современные технологии,
              чтобы создать ткани, которые не просто красивы, но и безопасны для человека и природы.
            </p>
            <p>
              Наши специалисты с вниманием к деталям создают продукцию, соответствующую мировым стандартам.
              Более 80 семей вносят свой вклад в успех компании, а наши фабрики работают непрерывно, чтобы удовлетворить высокий спрос.
            </p>
            <p>
              Мы гордимся тем, что являемся официальным дилером <strong>Dongjia</strong> — ведущего производителя ткацких машин в Узбекистане.
              Наши мощности позволяют выпускать от 200 000 до 250 000 метров ткани ежемесячно, что делает нас одними из лидеров отрасли.
            </p>
            <p>
              Следуя традициям Бухары, мы создаем не просто ткани, а историю, вплетенную в каждую нить. Мы верим, что качество — это не просто стандарт,
              а ответственность перед нашими клиентами и будущими поколениями.
            </p>
          </div>

          {/* ✅ Кнопка "Читать больше / Скрыть" */}
          <button className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Скрыть" : "Читать больше"}
          </button>
        </div>

        <div className="image-section" data-aos="fade-left">
          <img src={Image} alt="Команда Bukhara Natural Product" />
        </div>
      </section>

      <footer className="footer" data-aos="fade-up">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
