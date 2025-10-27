import React, { useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import Section from "../components/ui/Section.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ScheduleTable from "../components/ScheduleTable.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import Button from "../components/ui/Button.jsx";
import { fetchJSON } from "../lib/fetchJSON.js";

export default function Home() {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [hours, setHours] = useState([]);

  useEffect(() => {
    fetchJSON("/data/services/index.json").then(setServices).catch(() => setServices([]));
    fetchJSON("/data/testimonios.json").then(setTestimonials).catch(() => setTestimonials([]));
    fetchJSON("/data/horarios.json").then(setHours).catch(() => setHours([]));
  }, []);

  return (
    <>
      <Hero />

      <Section id="servicios" title="Tratamientos" subtitle="Selecciona el tratamiento que necesitas o déjanos asesorarte.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </Section>

      <Section id="horarios" title="Horarios de atención" subtitle="Planifica tu visita con comodidad.">
        <ScheduleTable data={hours} />
      </Section>

      <Section id="testimonios" title="Lo que dicen nuestros pacientes" subtitle="Historias reales de sonrisas recuperadas.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => <TestimonialCard key={idx} item={t} />)}
        </div>
      </Section>

      <Section id="contacto" title="Reserva tu cita" subtitle="Te responderemos en menos de 24 horas." actions={<Button as="a" href="tel:+34999999999">Llamar ahora</Button>}>
        <form className="card grid gap-4 p-6" aria-label="Formulario de contacto">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1">
              <label htmlFor="nombre" className="text-sm font-medium">Nombre</label>
              <input id="nombre" name="nombre" type="text" className="rounded-lg border px-3 py-2" placeholder="Tu nombre" required />
            </div>
            <div className="grid gap-1">
              <label htmlFor="telefono" className="text-sm font-medium">Teléfono</label>
              <input id="telefono" name="telefono" type="tel" className="rounded-lg border px-3 py-2" placeholder="+34…" required />
            </div>
          </div>
          <div className="grid gap-1">
            <label htmlFor="mensaje" className="text-sm font-medium">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="4" className="rounded-lg border px-3 py-2" placeholder="¿Cómo podemos ayudarte?"></textarea>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">Enviar</button>
          </div>
          <p className="text-xs text-subtle">Al enviar aceptas nuestra <a className="underline" href="/#privacidad">Política de privacidad</a>.</p>
        </form>
      </Section>
    </>
  );
}
