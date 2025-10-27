import React from "react";
import Container from "./Container.jsx";

export default function Section({ id, title, subtitle, actions, children }) {
  return (
    <section id={id} className="py-10 md:py-16">
      <Container>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="subtitle mt-1 max-w-prose">{subtitle}</p>}
          </div>
          {actions ? <div className="flex gap-3">{actions}</div> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
