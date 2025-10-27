import React from "react";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <Section title="Página no encontrada" subtitle="La ruta solicitada no existe o ha cambiado.">
      <Button as="a" href="/">Volver al inicio</Button>
    </Section>
  );
}
