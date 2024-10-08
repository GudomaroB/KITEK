import style from "./Healt.module.scss";
import { useTranslation } from "react-i18next";
import healtImg from "../assets/images/healt.jpg";

export const Healt = () => {
  const { t } = useTranslation();
  return (
    <div className={style.healt}>
      <div className={style.content}>
        <h2>{t("healtTitle")}</h2>
        <p>{t("healtDescr")}</p>
        <div className={style.number}>
          <h3>1,000,000 +</h3>
          <span>{t("healtNum")}</span>
        </div>
      </div>
      <div className={style.images}>
        <img src={healtImg} alt="helt" />
      </div>
    </div>
  );
};
