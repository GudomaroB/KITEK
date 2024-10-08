import { useState } from "react";
import style from "../pages/pages.module.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logoHead from "../assets/images/logo.svg";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Motion } from "./Motion";

export const Head = ({ menu, setMenu }) => {
  const { t } = useTranslation();

  return (
    <div className={style.head}>
      <div className={style["head__logo"]}>
        <NavLink to={"/home"}>
          <img src={logoHead} alt="kitek" />
        </NavLink>
      </div>
      <h1 className={style["head__title"]}>{t("welcome")}</h1>
      <button onClick={() => setMenu((prev) => !prev)} className={style.burger}>
        {menu ? <AiOutlineClose /> : <HiMenuAlt3 />}
      </button>

      <LanguageSwitcher />
    </div>
  );
};
