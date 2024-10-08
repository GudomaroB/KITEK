import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import style from "./pages.module.scss";
import { Header } from "./Header";
import { Head } from "./Head";
import { Container } from "../Container";
import { Motion } from "./Motion";
import { Footer } from "./Footer";

export const Layout = () => {
  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1210);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1210);
    const debounceResize = debounce(handleResize, 200);
    window.addEventListener("resize", debounceResize);

    return () => window.removeEventListener("resize", debounceResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setMenu(true); // Всегда открытое меню на большом экране
    }

    const handleClickOutside = (event) => {
      if (isMobile) {
        const headerElement = document.querySelector(`.${style.header}`);
        if (headerElement && !headerElement.contains(event.target)) {
          setMenu(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }

  return (
    <div className={style["flex-container"]}>
      <div>
        <Container>
          <Head menu={menu} setMenu={setMenu} />
        </Container>
        <Motion menu={menu}>{menu && <Header />}</Motion>
      </div>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};
