import { useEffect } from "react";

export default function useScrollLock(active) {
  useEffect(() => {
    const body = document.body;
    if (active) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      return () => { body.style.overflow = prev; };
    }
  }, [active]);
}
