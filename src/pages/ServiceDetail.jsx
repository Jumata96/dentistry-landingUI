import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import { fetchJSON } from "../lib/fetchJSON.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchJSON(`/data/services/${slug}.json`).then(setData).catch(() => setData(null));
  }, [slug]);

  if (!data) {
    return (
      <Section title="Servicio no encontrado">
        <p className="text-subtle">No pudimos cargar la información solicitada. <Link className="text-brand underline" to="/servicios">Volver a servicios</Link></p>
      </Section>
    );
  }

  return (
    <>
      <Section title={data.title} subtitle={data.description}>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <img src={data.icon} alt="" className="h-16 w-16" />
            <h3 className="mt-4 font-semibold">¿En qué consiste?</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/90">{data.longDescription ?? data.description}</p>
            {data.steps?.length ? (
              <div className="mt-6">
                <h4 className="font-semibold">Pasos del tratamiento</h4>
                <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-ink/90">
                  {data.steps.map((s, i) => <li key={i}>{s}</li>)}
                </ol>
              </div>
            ) : null}
          </Card>
          <aside className="space-y-4">
            <Card>
              <h4 className="font-semibold">Precio orientativo</h4>
              <p className="mt-1 text-2xl font-extrabold">{data.price ?? "A consultar"}</p>
              <p className="text-sm text-subtle">Incluye valoración inicial.</p>
              <a href="/#contacto" className="btn btn-primary mt-3 w-full text-center">Reservar cita</a>
            </Card>
            <Card>
              <h4 className="font-semibold">Beneficios</h4>
              <ul className="mt-2 list-inside list-disc text-sm text-ink/90 space-y-1">
                {(data.benefits ?? ["Resultados naturales", "Recuperación rápida", "Seguimiento personalizado"]).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </Card>
          </aside>
        </div>
      </Section>
      <Section>
        <Link className="text-brand underline" to="/servicios">← Volver a servicios</Link>
      </Section>
    </>
  );
}
