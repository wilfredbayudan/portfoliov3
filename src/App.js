import React, { useRef } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppWrapper, PageContent } from "./styles/common";
import "./App.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <PageContent>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path="resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </PageContent>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
