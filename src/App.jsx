import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <a href="#main" className="sr-only-focusable m-2 inline-block rounded bg-white px-3 py-2 text-sm text-ink shadow-card">
        Saltar al contenido
      </a>
      <Header />
      <main id="main" className="container py-8 md:py-12">
        <Suspense fallback={<div className="text-center text-subtle">Cargando…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/servicios/:slug" element={<ServiceDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
