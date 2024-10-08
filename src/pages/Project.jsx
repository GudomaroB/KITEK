import style from "./Project.module.scss";
import { ButtonWithModal } from "./ButtonModal";
import { useTranslation } from "react-i18next";
import dietsmannImg from "../assets/images/img15.png";
import gateImg from "../assets/images/img22.png";
import agipImg from "../assets/images/agip.png";
import kssImg from "../assets/images/img19.png";
import aspmkImg from "../assets/images/aspmk.png";
import mineralsImg from "../assets/images/img16.png";
import siemensImg from "../assets/images/img8.png";
import abbImg from "../assets/images/img7.png";
import psnImg from "../assets/images/img14.png";
import sinopecImg from "../assets/images/sinpoec.png";
import hyundaiImg from "../assets/images/hyundai.png";
import iskerImg from "../assets/images/img5.png";
import ncocImg from "../assets/images/img1.png";
import ersaiImg from "../assets/images/img4.png";
import kazpacoImg from "../assets/images/kazpaco.png";
import doosanImg from "../assets/images/img31.png";
import kusImg from "../assets/images/img32.png";
import bonnatiImg from "../assets/images/bonnati.png";
import kpoImg from "../assets/images/img28.png";
import ktkImg from "../assets/images/ktk.png";
import tcoImg from "../assets/images/tco.png";
import kcoImg from "../assets/images/img18.png";
import insatImg from "../assets/images/insat.webp";
export const Project = () => {
  const { t } = useTranslation();
  return (
    <div className={style.wrapper}>
      <div className={style["active-project"]}>
        <div>
          <div className={style.proj}>
            <h2 className={style["active-title"]}>{t("activeProjects")}</h2>
            <div className={style["active-images"]}>
              <a href="https://www.tengizchevroil.com/" target="_blank">
                <img src={tcoImg} alt="TCO" />
              </a>
              <a href="https://www.kpo.kz/ru/o-kompanii" target="_blank">
                <img src={kpoImg} alt="kpo" />
              </a>
              <a href="https://www.bonattinternational.com/" target="_blank">
                <img src={bonnatiImg} alt="bonnati" />
              </a>
            </div>
            <div className={style.buttons}>
              <ButtonWithModal buttonText="2018">
                <div className={style["flex-container"]}>
                  <div className={style.images}>
                    <h2 className={style.descr}>ABB Казахстан</h2>
                    <img src={abbImg} alt="KPO" />
                  </div>
                  <div className={style.title}>
                    <p>{t("year2018")}</p>
                  </div>
                </div>
              </ButtonWithModal>
              <ButtonWithModal buttonText="2020">
                <div className={style["flex-container"]}>
                  <div className={style.images}>
                    <h2 className={style.descr}> KPO b.v. / Bonatti SpA</h2>
                    <img src={kpoImg} alt="KPO" />
                    <img src={bonnatiImg} alt="Bonatti" />
                  </div>
                  <div className={style.title}>
                    <p>{t("year2020")}</p>
                  </div>
                </div>
              </ButtonWithModal>
              <ButtonWithModal buttonText="2020">
                <div className={style["flex-container"]}>
                  <div className={style.images}>
                    <h2 className={style.descr}>
                      Каспийский Трубопроводный Консорциум(KTK-K)
                    </h2>
                    <img src={ktkImg} alt="KTK-K" />
                  </div>
                  <div className={style.title}>
                    <p>{t("year2020t1")}</p>
                  </div>
                </div>
              </ButtonWithModal>
              <ButtonWithModal buttonText="2017">
                <div className={style["flex-container"]}>
                  <div className={style.images}>
                    <h2 className={style.descr}>Тенгизшевройл (ТШО)</h2>
                    <img src={tcoImg} alt="ТШО" />
                  </div>
                  <div className={style.title}>
                    <p>{t("year2020t1")}</p>
                  </div>
                </div>
              </ButtonWithModal>
            </div>
            <div className={style["active-images"]}>
              <a
                href="https://www.cpc.ru/RU/Pages/default.aspx"
                target="_blank"
              >
                <img src={ktkImg} alt="ktk" />
              </a>
              <a href="https://new.abb.com/kz" target="_blank">
                <img src={abbImg} alt="abb" />
              </a>
            </div>
          </div>
        </div>
        <div className={style["buttons-wrapper"]}>
          <h2>{t("realProjects")}</h2>
          <div className={style["buttons-block"]}>
            <ButtonWithModal buttonText="2011-2013">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>Dietsmann S.p.A.</h2>
                  <img src={dietsmannImg} alt="Dietsmann S.p.A" />
                </div>
                <div className={style.title}>
                  <p>{t("year2011To2013")}</p>
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2012-2013">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>GATE Insaat</h2>
                  <img src={insatImg} alt="Insaat" />
                  <img src={gateImg} alt="GATE" />
                </div>
                <div className={style.title}>
                  <p>{t("year2012To2013")}</p>
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2013-2014">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>Agip KCO</h2>
                  <img src={agipImg} alt="Agip" />
                  <img src={kcoImg} alt="KCO" />
                </div>
                <div className={style.title}>
                  <p>{t("year2013To2014")}</p>
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2014-2015">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>Pentair / KSS</h2>
                  <img src={kssImg} alt="Pentair" />
                </div>
                <div className={style.title}>
                  <p>{t("year2014To2015")}</p>
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2014-2015">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>ASPMK-519 / KPJV / TCO</h2>
                  <img src={aspmkImg} alt="ASPMK-519" />
                </div>
                <div className={style.title}>
                  <p>{t("year2014T12015")}</p>
                  <img src={tcoImg} alt="TCO" />
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2014-2016">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>KAZ Minerals</h2>
                  <img src={mineralsImg} alt="Minerals" />
                </div>
                <div className={style.title}>
                  <p>{t("year2014To2016")}</p>
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2016">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>Siemens</h2>
                  <img src={siemensImg} alt="Siemens" />
                </div>
                <div className={style.title}>
                  <p>{t("year2016")}</p>
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2014-2017">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>ABB / Sinopec</h2>
                  <img src={abbImg} alt="ABB" />
                  <img src={sinopecImg} alt="SINOPEC" />
                </div>
                <div className={style.title}>
                  <p>{t("year2014To2017")}</p>
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2015-2017">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>PSN KazStroy / NCOC</h2>
                  <img src={ncocImg} alt="NCOC" />
                  <img src={psnImg} alt="PSN" />
                </div>
                <div className={style.title}>
                  <p>{t("year2015To2017")}</p>
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2016-2017">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>
                    ABB Finland / Hyundai Engineering
                  </h2>
                  <img src={abbImg} alt="ABB" />
                </div>
                <div className={style.title}>
                  <img src={hyundaiImg} alt="Engineering" />
                  <p>{t("year2016To2017")}</p>
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2016-2019">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>
                    ABB Kazakhstan / Sinopec Engineering
                  </h2>
                  <img src={abbImg} alt="ABB" />
                </div>
                <div className={style.title}>
                  <p>{t("year2016To2019")}</p>
                  <img src={sinopecImg} alt="Sinopec" />
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2015-2019">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>ISKER / NCOC</h2>
                  <img src={ncocImg} alt="NCOC" />
                  <img src={iskerImg} alt="ISKER" />
                </div>
                <div className={style.title}>
                  <p>{t("year2015To2019")}</p>
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2014-2020">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>ERSAI / NCOC</h2>
                  <img src={ersaiImg} alt="ERSAI" />
                  <img src={ncocImg} alt="NCOC" />
                </div>
                <div className={style.title}>
                  <p>{t("year2014To2020")}</p>
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2019-2020">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>ТОО «KAZPACO» для ENI</h2>
                  <img src={agipImg} alt="ENI" />
                </div>
                <div className={style.title}>
                  <p>{t("year2019To2020")}</p>
                  <img src={kazpacoImg} alt="KAZPACO" />
                </div>
              </div>
            </ButtonWithModal>
            <ButtonWithModal buttonText="2019-2021">
              <div className={style["flex-container"]}>
                <div className={style.images}>
                  <h2 className={style.descr}>
                    Doosan Heavy Industry для ТОО «KUS»
                  </h2>
                  <img src={doosanImg} alt="Doosan" />
                  <img src={kusImg} alt="KUS" />
                </div>
                <div className={style.title}>
                  <p>{t("year2019To2021")}</p>
                </div>
              </div>
            </ButtonWithModal>
          </div>
        </div>
      </div>
    </div>
  );
};
