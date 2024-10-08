import style from "./pages.module.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

const isActiveClass = ({ isActive }) => (isActive ? style.actives : "");

// Хедер
export const Header = forwardRef((props, ref) => {
  const { t } = useTranslation(); // Используем для получения функции перевода

  return (
    <div ref={ref} className={style.header}>
      <ul>
        <li className={style["header__list"]}>
          <NavLink className={isActiveClass} to="/home">
            {t("home")}
          </NavLink>
        </li>
        <li className={style["header__list"]}>
          <NavLink className={isActiveClass} to="/about-us">
            {t("about")}
          </NavLink>
        </li>
        <li className={style["header__list"]}>
          <NavLink className={isActiveClass} to="/projects">
            {t("projects")}
          </NavLink>
        </li>
        <li className={style["header__list"]}>
          <NavLink className={isActiveClass} to="/careers">
            {t("careers")}
          </NavLink>
        </li>
        <li className={style["header__list"]}>
          <NavLink className={isActiveClass} to="/healt-safety">
            {t("helt")}
          </NavLink>
        </li>
        <li className={style["header__list"]}>
          <NavLink className={isActiveClass} to="/certificates">
            {t("certificates")}
          </NavLink>
        </li>
        <li className={style["header__list"]}>
          <NavLink className={isActiveClass} to="/contact">
            {t("contact")}
          </NavLink>
        </li>
      </ul>
    </div>
  );
});
