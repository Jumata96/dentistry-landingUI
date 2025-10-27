import React from "react";
export default function Container({ className = "", children, as: Tag = "div", ...props }) {
  return (
    <Tag className={["container", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </Tag>
  );
}
