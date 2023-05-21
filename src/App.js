import React, { useEffect } from "react";
import { Header, Home, Footer, ScrollTopBtn } from "./components";
const App = () => {
  useEffect(() => {
    window.addEventListener("load", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
      <ScrollTopBtn />
    </div>
  );
};

export default App;
