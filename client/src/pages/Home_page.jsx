import React, { useEffect, useState } from "react";
import "../index.css";
import "github-markdown-css";
import { Link, Outlet } from "react-router-dom";
import HeaderReusable from "../components/HeaderReusable";
import useLocalStorage from "use-local-storage";
import { useSelector } from "react-redux";

function Home_page() {
  const { theme } = useSelector((store) => store.userLogInDetails);
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  console.log(theme);
  return (
    <section className="accountPage" data-theme={theme}>
      <HeaderReusable />
      <Outlet />
    </section>
  );
}

export default Home_page;
