import style from "./Footer.module.scss";
import logoFooter from "../assets/images/footerlogo.svg";
import { FaPhoneVolume as Phone } from "react-icons/fa6";
import { IoMailUnreadSharp as Mail } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={style.footer}>
      <div className={style["footer__addres"]}>
        <address>
          <h2>{t("tooKitek")}</h2>
          <p>{t("tooAdress")}</p>
        </address>
      </div>
      <div className={style.logo}>
        <NavLink to={"/home"}>
          <img src={logoFooter} alt={"KITEK"} />
        </NavLink>
      </div>
      <div className={style.contact}>
        <div>
          <Phone />
          <a href="tel:+7 (7122) 76 60 50">+7 (7122) 76 60 50</a>
        </div>
        <div>
          <Mail />
          <a href="mailto:info @kitek.kz">info_kitek@kitek.kz</a>
        </div>
      </div>
    </footer>
  );
};
