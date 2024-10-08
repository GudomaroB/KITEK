import style from "./Contacts.module.scss";
import { useTranslation } from "react-i18next";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const YandexMap = ({ center = [47.0913, 51.9246], zoom = 15 }) => {
  const mapState = {
    center,
    zoom
  };

  console.log("Map center:", center); // Для отладки

  return (
    <YMaps>
      <Map state={mapState} width="100%" height="450px">
        <Placemark
          geometry={center} // Координаты метки
          properties={{ balloonContent: "Это место!" }} // Содержимое балуна
        />
      </Map>
    </YMaps>
  );
};

export const Contact = () => {
  const { t } = useTranslation(); // Использование перевода
  return (
    <div className={style.wrapper}>
      <div className={style["contact-info"]}>
        <h2>{t("contactTitle")}</h2>
        <h2>{t("contactInfo")}</h2>
        <p>{t("contactAddres")}</p>
        <p>{t("contactIndex")}</p>
        <div className={style.phones}>
          <p>{t("contactPhone")}</p>
          <div>
            <span>
              <FaPhoneVolume />
            </span>
            <a href="tel:+77122766049">+7(7122) 76-60-49</a>
          </div>
          <div>
            <span>
              <FaPhoneVolume />
            </span>
            <a href="tel:+77122766050">+7(7122) 76-60-50</a>
          </div>
        </div>
        <div>
          <p>{t("contactMail")}</p>
          <div className={style.mail}>
            <span>
              <FaMessage />
            </span>
            <a href="mailto:info_kitek@kitek.kz">info_kitek@kitek.kz</a>
          </div>
        </div>
      </div>
      <div className={style.maps}>
        <YandexMap />
      </div>
    </div>
  );
};
