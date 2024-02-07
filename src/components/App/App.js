import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import PageNotFound from "../PageNotFound/PageNotFound";
import AboutUs from "../AboutUs/AboutUs";
import "./App.css";
import Privacy from "../Privacy/Privacy";

function App() {
  const [isFixedMenu, setIsFixedMenu] = useState(false);
  const heightForScroll = 350;

  const location = useLocation();
  let path = location.pathname;

  useEffect(() => {
    function switchFixedMenu() {
      setIsFixedMenu(true);
    }

    function switchNotFixedMenu() {
      setIsFixedMenu(false);
    }

    function checkPath() {
      if (path !== "/") {
        switchFixedMenu();
        window.removeEventListener("scroll", checkPath);
        return;
      } else {
        handleScroll();
      }
    }

    function handleScroll() {
      if (window.scrollY < heightForScroll) {
        switchNotFixedMenu();
      } else {
        switchFixedMenu();
      }
    }

    window.addEventListener("scroll", checkPath);

    return () => {
      window.removeEventListener("scroll", checkPath);
    };
  }, [path, location]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="page">
      <Header scrollToTop={scrollToTop} isFixedMenu={isFixedMenu} />
      <main className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
