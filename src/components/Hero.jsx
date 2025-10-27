import React from "react";
import Button from "./ui/Button.jsx";
import Container from "./ui/Container.jsx";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="grid gap-10 py-12 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Sonríe sin complejos</h1>
          <p className="mt-3 text-lg text-subtle">Tratamientos modernos, resultados naturales y atención humana. Reserva tu primera cita en 2 minutos.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button as="a" href="#contacto">Reservar cita</Button>
            <Button as="a" href="/servicios" variant="ghost">Ver tratamientos</Button>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-subtle">
            <li>✓ Financiación disponible</li>
            <li>✓ Seguridad y esterilización</li>
            <li>✓ Equipo certificado</li>
            <li>✓ Urgencias</li>
          </ul>
        </div>
        <div className="relative">
          <img src="/images/hero.svg" alt="Ilustración de sonrisa saludable" className="mx-auto max-h-80" />
        </div>
      </Container>
    </section>
  );
}
