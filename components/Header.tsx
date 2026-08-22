"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 50);

      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = `#${current.getAttribute("id")}`;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActive(sectionId);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scroll-header" : ""}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <i className="ri-steering-fill"></i>
          NextCar
        </a>
        <div className={`nav__menu${menuOpen ? " show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li className="nav__item" key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link${active === link.href ? " active-link" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setMenuOpen(false)}
          >
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => setMenuOpen(true)}
        >
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}
