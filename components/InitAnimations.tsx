"use client";

import { useEffect } from "react";

export default function InitAnimations() {
  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const { default: ScrollReveal } = await import("scrollreveal");
      if (cancelled) return;

      const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 1500,
        delay: 400,
      });

      sr.reveal(".home__title, .popular__container, .features__img, .featured__filters");
      sr.reveal(".home__subtitle", { delay: 500 });
      sr.reveal(".home__elec", { delay: 600 });
      sr.reveal(".home__img", { delay: 800 });
      sr.reveal(".home__car-data, .footer__copy", {
        delay: 900,
        interval: 100,
        origin: "bottom",
      });
      sr.reveal(".home__button", { delay: 1000, origin: "bottom" });
      sr.reveal(".about__group, .offer__data", { origin: "left" });
      sr.reveal(".about__data, .offer__img, .home__social-icon", { origin: "right" });
      sr.reveal(".features__map, .slider__bg", { delay: 600, origin: "bottom" });
      sr.reveal(".features__card", { interval: 300 });
      sr.reveal(".featured__card, .footer__content, .tour-card, .tariff-wrap", {
        interval: 100,
      });
    };

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
