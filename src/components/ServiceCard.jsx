import React from "react";
import { Link } from "react-router-dom";
import Card from "./ui/Card.jsx";

export default function ServiceCard({ service }) {
  return (
    <Card as="article" className="flex flex-col">
      <img src={service.icon} alt="" className="h-14 w-14" />
      <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
      <p className="mt-1 text-sm text-subtle line-clamp-3">{service.description}</p>
      <div className="mt-4">
        <Link to={`/servicios/${service.slug}`} className="text-brand hover:underline">Saber más →</Link>
      </div>
    </Card>
  );
}
