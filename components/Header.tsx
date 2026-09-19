"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`header${scrolled ? " scroll-header" : ""}`} id="header">
      <nav className="nav container">
        <Link href="/" className="nav__logo">
          <i className="ri-steering-fill"></i>
          {site.name}
        </Link>


        <a href={`tel:${site.phoneTel}`} className="nav-phone nav-phone--bar">
          <i className="ri-phone-fill"></i>
          {site.phoneDisplay}
        </a>

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
