import style from "./style/index.module.scss";

export const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
