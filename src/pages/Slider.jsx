import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import styles from "./Slider.module.scss"; // Импортируем стили
import "swiper/swiper-bundle.css";
import slide1 from "../assets/images/img1.png";
import slide2 from "../assets/images/img2.jpeg";
import slide3 from "../assets/images/img3.png";
import slide4 from "../assets/images/img4.png";
import slide5 from "../assets/images/img5.png";
import slide6 from "../assets/images/img6.png";
import slide7 from "../assets/images/img7.png";
import slide8 from "../assets/images/img8.png";
import slide9 from "../assets/images/img9.png";
import slide10 from "../assets/images/img10.png";
import slide11 from "../assets/images/img11.png";
import slide12 from "../assets/images/img12.png";
import slide13 from "../assets/images/img13.png";
import slide14 from "../assets/images/img14.png";
import slide15 from "../assets/images/img15.png";
import slide16 from "../assets/images/img16.png";
import slide17 from "../assets/images/img17.png";
import slide18 from "../assets/images/img18.png";
import slide19 from "../assets/images/img19.png";
import slide20 from "../assets/images/img20.png";
import slide21 from "../assets/images/img21.png";
import slide22 from "../assets/images/img22.png";
import slide23 from "../assets/images/img23.png";
import slide24 from "../assets/images/img24.png";
import slide25 from "../assets/images/img25.png";
import slide26 from "../assets/images/img26.png";
import slide27 from "../assets/images/img27.png";
import slide28 from "../assets/images/img28.png";
import slide29 from "../assets/images/img29.png";
import slide30 from "../assets/images/img30.png";
import slide31 from "../assets/images/img31.png";

const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
  slide16,
  slide17,
  slide18,
  slide19,
  slide20,
  slide21,
  slide22,
  slide23,
  slide24,
  slide25,
  slide26,
  slide27,
  slide28,
  slide29,
  slide30,
  slide31
];

export const Slider = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.wrapper}>
        <div></div>
        <h1 className={styles.titles}>{t("partnersTitle")}</h1>
        <div></div>
      </div>
      <Swiper
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "60px",
          height: "170px",
          transition: "all 2s" // Плавная анимация всех изменений
        }}
        spaceBetween={100} // Расстояние между слайдами
        slidesPerView={4} // По умолчанию показывать 4 слайда
        autoplay={{
          delay: 800, // Автопрокрутка каждые 800 мс
          disableOnInteraction: false
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // На экране меньше 800px показывать 1 слайд
            spaceBetween: 10, // Меньшее расстояние между слайдами для мобильных устройств
            centeredSlides: true,
            marginBottom: "200px"
          },
          800: {
            slidesPerView: 4, // На экране больше 800px показывать 4 слайда
            spaceBetween: 100, // Большее расстояние между слайдами
            centeredSlides: false,
            marginBottom: "200px"
          }
        }}
        pagination={{
          clickable: true // Делаем точки кликабельными
        }}
        modules={[Autoplay]} // Подключаем модули
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className={styles["slider-img"]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
