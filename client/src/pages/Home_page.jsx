import React, { useEffect } from "react";
import "../index.css";
import { Link, Outlet } from "react-router-dom";
import HeaderReusable from "../components/HeaderReusable";
function Home_page() {
  useEffect(() => {
    const params = window.location.search;
    const urlParams = new URLSearchParams(params);
    const code_by_git = urlParams.get("code");
    console.log(code_by_git);
  }, []);
  function loginWithGithub() {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" +
        import.meta.env.VITE_CLIENT_ID
    );
  }
  return (
    <section className="accountPage" data-theme={"light"}>
      <HeaderReusable />
      <Outlet/>
    </section>
  );
}

export default Home_page;
