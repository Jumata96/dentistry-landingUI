import React from "react";
import Container from "../ui/Container.jsx";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="" className="h-8 w-8" />
            <strong>Clínica Dental</strong>
          </div>
          <p className="mt-3 text-subtle max-w-xs">Cuidamos tu sonrisa con tecnología de última generación y un equipo cercano.</p>
        </div>
        <div>
          <h3 className="font-semibold">Clínica</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:underline" href="/#equipo">Equipo</a></li>
            <li><a className="hover:underline" href="/#horarios">Horarios</a></li>
            <li><a className="hover:underline" href="/servicios">Servicios</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Ayuda</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:underline" href="/#faq">Preguntas frecuentes</a></li>
            <li><a className="hover:underline" href="/#contacto">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:underline" href="/#privacidad">Privacidad</a></li>
            <li><a className="hover:underline" href="/#terminos">Términos</a></li>
          </ul>
        </div>
      </Container>
      <div className="border-t py-4 text-center text-xs text-subtle">© {new Date().getFullYear()} Clínica Dental. Todos los derechos reservados.</div>
    </footer>
  );
}
