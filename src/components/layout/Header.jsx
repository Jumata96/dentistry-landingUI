import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useScrollLock from "../../hooks/useScrollLock.js";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";

export default function Header() {
  const [site, setSite] = useState(null);
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  useEffect(() => {
    fetch("/data/site.json").then(r => r.json()).then(setSite).catch(() => setSite(null));
  }, []);

  const nav = [
    { to: "/", label: "Inicio" },
    { to: "/servicios", label: "Servicios" },
    { to: "/#horarios", label: "Horarios" },
    { to: "/#contacto", label: "Contacto" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-soft/80 backdrop-blur supports-[backdrop-filter]:bg-soft/70 border-b">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.svg" alt="" className="h-8 w-8" />
          <span className="font-bold">Clínica Dental</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Principal">
          {nav.map((i) => (
            <NavLink key={i.to} to={i.to} className={({ isActive }) => (isActive ? "font-semibold underline underline-offset-4" : "hover:underline underline-offset-4")}>
              {i.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as="a" href="tel:+34999999999" aria-label="Llamar a la clínica">Reservar cita</Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="sr-only">Abrir menú</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </Container>

      {/* Mobile menu */}
      <div id="mobile-menu" hidden={!open} className="md:hidden border-t bg-soft">
        <Container className="py-3">
          <div className="flex flex-col gap-2">
            {nav.map((i) => (
              <NavLink key={i.to} to={i.to} onClick={() => setOpen(false)} className="rounded px-2 py-2 hover:bg-white">
                {i.label}
              </NavLink>
            ))}
            <Button as="a" href="tel:+34999999999" className="mt-1">Reservar cita</Button>
          </div>
        </Container>
      </div>

      {/* Top info bar (visually subtle) */}
      <div className="hidden border-t bg-white/70 md:block">
        <Container className="flex items-center justify-between gap-4 py-2 text-sm text-subtle">
          <div className="flex items-center gap-3">
            <span aria-hidden="true">📍</span>
            <span>{site?.direccion ?? "Calle Salud 123 · Centro"}</span>
          </div>
          <div className="flex items-center gap-5">
            <a className="hover:underline" href={`tel:${site?.telefono ?? "+34999999999"}`}>☎ {site?.telefono ?? "+34 999 999 999"}</a>
            <span className="hidden sm:inline">🕒 {site?.horarioCorto ?? "L-V 9:00–20:00"}</span>
            <a className="hover:underline" href="#contacto">Escríbenos</a>
          </div>
        </Container>
      </div>
    </header>
  );
}
