"use client";

import { useEffect, useState } from "react";

export default function ScrollUp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 350);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`scrollup${visible ? " show-scroll" : ""}`}
      id="scroll-up"
    >
      <i className="ri-arrow-up-s-line"></i>
    </a>
  );
}
