import style from "./Careers.module.scss";
import hiringImg from "../assets/images/hiring1.png";
import hhImg from "../assets/images/hh.png";
import { useTranslation } from "react-i18next";
import { FaArrowTrendDown } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

import { BsPhoneFill } from "react-icons/bs";

export const Careers = () => {
  const { t } = useTranslation();
  return (
    <div className={style.wrapper}>
      <div className={style.contacts}>
        <h2>
          {t("hiringTitle")}{" "}
          <span>
            <FaArrowTrendDown />
          </span>
        </h2>
        <a href="https://hh.ru/employer/1249960" target="_blank">
          <img src={hhImg} alt="hh" />
        </a>
        <div className={style.vacancies}>
          <h3>{t("vacanci")}</h3>
          <div className={style.block}>
            <span>
              <CiMail />
            </span>
            <a href="mailto:cv@kitek.kz">cv@kitek.kz</a>
          </div>
          <div className={style.block}>
            <span>
              <CiMail />
            </span>
            <a href="mailto:info_kitek@kitek.kz">info_kitek@kitek.kz</a>
          </div>
          <div className={style.phones}>
            <h3>{t("hiringPhone")}</h3>
            <div>
              <span>
                <BsPhoneFill />
              </span>
              <a href="tel:+77122766050">+7-7122-766050</a>
            </div>
            <div>
              <span>
                <BsPhoneFill />
              </span>
              <a href="tel:+77122766049">+7-7122-766049</a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.images}>
        <img src={hiringImg} alt="hiring" />
      </div>
    </div>
  );
};
