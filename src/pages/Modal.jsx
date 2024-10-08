// // Modal.js
import style from "./Modal.module.scss";
import React, { useEffect } from "react";
import { GrClose } from "react-icons/gr";

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Очистка события при размонтировании компонента
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div onClick={onClose} className={style["modal-overlay"]}>
      <div
        className={style["modal-content"]}
        onClick={(e) => e.stopPropagation()} // Остановить событие клика
      >
        <button className={style["close-button"]} onClick={onClose}>
          <GrClose />
        </button>
        {children}
      </div>
    </div>
  );
};
