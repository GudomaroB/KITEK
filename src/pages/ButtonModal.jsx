import style from "./Project.module.scss";
import React, { useState, useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
export const ButtonWithModal = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null); // Создаем реф для модального окна
  const modalVariants = {
    hidden: { opacity: 0, y: "-50%" },
    visible: { opacity: 1, y: "0%" },
    exit: { opacity: 0, y: "50%" }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Проверяем, был ли клик вне модального окна
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    // Закрываем модальное окно при нажатии клавиши ESC
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Добавляем обработчики событий при открытии модального окна
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    // Убираем обработчики событий при закрытии модального окна
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button className={style["main-btn"]} onClick={toggleModal}>
        {buttonText}
      </button>

      {isOpen && (
        <div className={style.overlay}>
          <motion.div
            className={style.modal}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.3 }} // Настройка времени анимации
            ref={modalRef}
          >
            <div className={style["modal__content"]}>
              <button className={style["close-btn"]} onClick={toggleModal}>
                <GrClose />
              </button>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
