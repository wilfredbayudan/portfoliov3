import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppWrapper, PageContent } from "./styles/common";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <PageContent>Content</PageContent>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
