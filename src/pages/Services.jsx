import React, { useEffect, useState } from "react";
import Section from "../components/ui/Section.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { fetchJSON } from "../lib/fetchJSON.js";

export default function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => { fetchJSON("/data/services/index.json").then(setServices).catch(() => setServices([])); }, []);

  return (
    <Section title="Todos los tratamientos" subtitle="Información clara y precios orientativos.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
      </div>
    </Section>
  );
}
