import React from "react";
export default function VisuallyHidden({ children }) {
  return (
    <span className="sr-only">{children}</span>
  );
}
