import React from "react";
import Card from "./ui/Card.jsx";

export default function TestimonialCard({ item }) {
  return (
    <Card as="figure" className="relative">
      <blockquote className="text-sm leading-relaxed text-ink/90">“{item.quote}”</blockquote>
      <figcaption className="mt-4 text-sm font-medium text-subtle">— {item.author}</figcaption>
    </Card>
  );
}
