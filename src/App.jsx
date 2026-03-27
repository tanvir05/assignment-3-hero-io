import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Installation from "./pages/Installation";
import AppDetails from "./pages/AppDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  const [pageLoading, setPageLoading] = useState(false);

  // Loading animation during page navigation
  useEffect(() => {
    setPageLoading(true);
    const t = setTimeout(() => setPageLoading(false), 450);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="site">
      <ToastContainer position="top-right" />
      <Header />

      {pageLoading && <Loader label="Loading page..." />}

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/apps/:id" element={<AppDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}