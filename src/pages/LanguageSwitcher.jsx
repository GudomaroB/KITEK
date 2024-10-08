import React, { useState } from "react";
import style from "../pages/pages.module.scss";
import { useTranslation } from "react-i18next";
import { Motion } from "./Motion";

import rus from "../assets/icon/ru.svg";
import cn from "../assets/icon/cn.svg";
import kz from "../assets/icon/kz.svg";
import usa from "../assets/icon/us.svg";
import ua from "../assets/icon/ua.svg";
import es from "../assets/icon/es.svg";
import fr from "../assets/icon/fr.svg";
import ar from "../assets/icon/ar.svg";

const languages = [
  { code: "en", name: "English", image: usa },
  { code: "ru", name: "Русский", image: rus },
  { code: "kz", name: "Қазақша", image: kz },
  { code: "zh", name: "中文", image: cn },
  { code: "uk", name: "Українська", image: ua },
  { code: "es", name: "español", image: es },
  { code: "fr", name: "français", image: fr },
  { code: "ar", name: "العربية", image: ar }
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]); // Начальный язык — английский

  const changeLanguage = (language) => {
    if (language.code !== i18n.language) {
      i18n.changeLanguage(language.code);
      setCurrentLang(language);
    }
    setLangMenuOpen(false);
  };

  return (
    <div className={style["head__lang"]}>
      <button
        onClick={() => setLangMenuOpen((prev) => !prev)}
        className={style["button-main"]}
      >
        <img src={currentLang.image} alt="language" />
      </button>
      {langMenuOpen && (
        <Motion menu={langMenuOpen}>
          <div className={style.buttons}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang)}
                className={style["buttons__lang"]}
              >
                <img src={lang.image} alt={lang.name} />
                <p>{lang.name}</p>
                {currentLang.code === lang.code && <p>✔</p>}
              </button>
            ))}
          </div>
        </Motion>
      )}
    </div>
  );
};
