import { useTranslation } from "react-i18next";
import style from "./About.module.scss";
import { useState } from "react";
import pdfLink from "../documents/pdfLink.pdf";
import hitachi from "../documents/hitachi.pdf";
import hitachiLogo from "../assets/images/hitachienergy.webp";
import hit from "../assets/images/hit.png";

export const About = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0); // Начальный активный таб
  const [title, setTitle] = useState(false);

  // каждый таб
  const tabs = [
    {
      title: t("companyTitle"),
      content: (
        <div className={style.wrapper}>
          <h2>ТОО KITEK CONSTRUCTION</h2>
          <p className={style["header-titles"]}> {t("comHeader")}</p>
          <div className={style.lists}>
            <p>{t("li1")}</p>
            <p>{t("li2")}</p>
            <p>{t("li3")}</p>
            <p>{t("li4")}</p>
            <p>{t("li5")}</p>
            <p>{t("li6")}</p>
            <p>{t("li7")}</p>
            <p>{t("li8")}</p>
          </div>
        </div>
      )
    },
    {
      title: t("companyTitle1"),
      content: (
        <div className={style.wrapper}>
          <h2>{t("missions")}</h2>
          <p className={style["header-titles"]}> {t("missTitle1")}</p>
          <div className={style.lists}>
            <p>{t("dostij")}</p>
            <p>{t("dostij1")}</p>
            <p>{t("dostij2")}</p>
            <p>{t("dostij3")}</p>
            <p>{t("listTitle")}</p>
            <p>{t("listTitle1")}</p>
            <p>{t("listTitle2")}</p>
            <p>{t("listTitle3")}</p>
            <p>{t("listTitle4")}</p>
          </div>
        </div>
      )
    },
    {
      title: t("companyTitle2"),
      content: (
        <div className={style.wrapper}>
          <div className={style["wrapper-links"]}>{t("helpTitle")}</div>
          <div className={style["link-block"]}>
            <p>{t("titleLink")}</p>
            <a href={pdfLink} target="_blank">
              KC-QA-DP-013
            </a>
          </div>
        </div>
      )
    }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={style["flex-container"]}>
      <div className={style.tabs}>
        <div className={style["tab-headers"]}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${style["tab-header"]} ${
                activeTab === index ? style.active : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              <p>{tab.title}</p>
            </button>
          ))}
        </div>
        <div className={style["tab-content"]}>{tabs[activeTab].content}</div>
      </div>
      <div className={style.partner}>
        <div className={style["partner__images"]}>
          <img src={hitachiLogo} alt="hitachi-energy" />
        </div>
        <button
          onClick={() => setTitle((prev) => !prev)}
          className={style["hitachi-btn"]}
        >
          {t("hitachiBtn")}
        </button>
        <div className={style["hitachi-doc"]}>
          {title ? (
            <h2 className={style["hitachi-title"]}>{t("titlePartner")}</h2>
          ) : (
            <a href={hitachi} target="_blank">
              <img src={hit} alt="" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
