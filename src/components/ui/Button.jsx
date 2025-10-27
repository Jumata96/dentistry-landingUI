import React from "react";
import clsx from "clsx";

export default function Button({ variant = "primary", as: Tag = "button", className, children, ...props }) {
  const base = "btn";
  const style = variant === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <Tag className={clsx(base, style, className)} {...props}>
      {children}
    </Tag>
  );
}
