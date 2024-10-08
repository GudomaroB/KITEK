import homeBg from "../assets/images/bghome.png";
import { IoIosMan } from "react-icons/io";
import styles from "./Modal.module.scss";
import style from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import { Accordion } from "../libs/Accor";
import { Slider } from "./Slider";
import { Button } from "../components/Button";
import { Modal } from "./Modal";
import { useState } from "react";
import logoJitek from "../assets/images/logo.svg";

export const Home = () => {
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();

  const onClose = () => {
    setModal(false);
  };

  return (
    <>
      <div className={style.home}>
        <img src={homeBg} alt="KITEK" />
      </div>
      <h1 className={style["home__title"]}>{t("titleSection1")}</h1>
      <Accordion />
      <Slider />
      <div className={style.news}>
        <div className={style["news__block"]}>
          <div></div>
          <h2>{t("news")}</h2>
          <div></div>
        </div>

        <Button onClick={() => setModal(true)} className={style.button}>
          {t("oilTitle")}{" "}
          <span>
            <IoIosMan />
          </span>
        </Button>
        {modal && (
          <Modal onClose={onClose}>
            <div className={styles["modal__images"]}>
              <img src={logoJitek} alt="Kitek" />
            </div>
            <div className={styles["modal-contents"]}>
              <h2>{t("collegTitle")}</h2>
              <p>{t("collegP")}</p>
              <p>{t("collegp1")}</p>
              <p>{t("collegp2")}</p>
              <div className={styles.signature}>{t("rustam")}</div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};
