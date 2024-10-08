import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Accordeon.module.scss";
import { useTranslation } from "react-i18next";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // Изначально закрыт

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.accordion}>
      <h3
        className={`${style["accordion-header"]} ${
          isOpen ? style["header-open"] : ""
        }`}
        onClick={toggleAccordion}
      >
        <span
          className={`${style["accordion-icon"]} ${
            isOpen ? style["icon-open"] : ""
          }`}
        >
          ►
        </span>
        {title}
      </h3>
      <div
        style={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "0.3s" // Убираем анимацию
        }}
        className={style["accordion-content"]}
      >
        <div>{content}</div>
      </div>
    </div>
  );
};

export const Accordion = () => {
  const { t } = useTranslation();

  // Функция для форматирования контента в HTML-список
  const formatContent = (...keys) => {
    const formattedString = keys
      .map((key) => t(key)) // Получаем строки по ключам
      .join("—") // Объединяем строки, разделяя "—"
      .split("—") // Разделяем их по этому символу
      .filter((item) => item.trim() !== "") // Убираем пустые строки
      .map((item) => `<li>${item.trim()}</li>`) // Формируем HTML
      .join(""); // Объединяем элементы в строку

    return `<ul>${formattedString}</ul>`;
  };

  // Формируем контент для всех элементов
  const items = [
    { title: t("ac1header"), content: formatContent("ac1title") }, // первый элемент
    { title: t("ac2header"), content: formatContent("ac2title") }, // второй элемент
    { title: t("ac3header"), content: formatContent("ac3title") }, // третий элемент
    { title: t("ac4header"), content: formatContent("ac4title") } // четвертый элемент

    //
  ];

  // Функция для рендеринга HTML
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div className={style.ddd}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={
            // Для всех элементов используем dangerouslySetInnerHTML
            <div dangerouslySetInnerHTML={renderHTML(item.content)} />
          }
        />
      ))}
    </div>
  );
};
