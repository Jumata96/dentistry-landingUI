import React from "react";
export default function Card({ as: Tag = "div", className = "", children, ...props }) {
  return (
    <Tag className={["card", "p-5", className].join(" ")} {...props}>
      {children}
    </Tag>
  );
}
