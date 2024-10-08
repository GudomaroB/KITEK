import style from "./Certificates.module.scss";

import { Swiper, SwiperSlide } from "swiper/react"; // Импортируем Swiper
import sertificate1 from "../assets/images/serti1.jpg";
import sertificate2 from "../assets/images/serti2.jpg";
import sertificate3 from "../assets/images/serti3.jpg";
import sertificate4 from "../assets/images/serti4.jpg";
import sertificate5 from "../assets/images/serti5.jpg";
import sertificate6 from "../assets/images/serti6.jpg";
import { useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SassColor } from "sass";

const images = [
  sertificate1,
  sertificate2,
  sertificate3,
  sertificate4,
  sertificate5,
  sertificate6
];

export const Certificates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={style.certificatesContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }} // Включаем пагинацию
        breakpoints={{
          0: {
            slidesPerView: 1, // На экране меньше 800px показывать 1 слайд
            spaceBetween: 10, // Меньшее расстояние между слайдами для мобильных устройств
            centeredSlides: true,
            marginBottom: "100px"
          },
          800: {
            slidesPerView: 3, // На экране больше 800px показывать 4 слайда
            spaceBetween: 50, // Большее расстояние между слайдами
            centeredSlides: false,
            marginBottom: "200px"
          }
        }}
        autoplay={{
          delay: 1500, // Автопрокрутка каждые 800 мс
          disableOnInteraction: false
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              onClick={() => handleImageClick(image)}
              style={{ cursor: "pointer", width: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <div className={style.fullscreenOverlay} onClick={handleClose}>
          <img
            src={currentImage}
            alt="Full Screen"
            className={style.fullscreenImage}
          />
        </div>
      )}
    </div>
  );
};
