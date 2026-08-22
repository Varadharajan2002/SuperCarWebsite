"use client";

import { useEffect, useState } from "react";
// Adjust this path to wherever you actually placed the file — e.g. if you
// created it at styles/booking-modal.scss, use "@/styles/booking-modal.scss".
// If it's a .scss file, install sass first: npm install -D sass
// import "./booking-modal.scss"

type Status = "idle" | "loading" | "success" | "error";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCar?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultCar,
}: BookingModalProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    from: "",
    to: "",
    date: "",
    time: "",
    car: defaultCar || "",
  });

  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setErrorMsg("");
      setForm((f) => ({ ...f, car: defaultCar || f.car }));
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, defaultCar]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="booking-modal__overlay" onClick={onClose}>
      <div
        className="booking-modal__box"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        <button
          type="button"
          className="booking-modal__close"
          onClick={onClose}
          aria-label="Close booking form"
        >
          <i className="ri-close-line"></i>
        </button>

        {status === "success" ? (
          <div className="booking-modal__success">
            <i className="ri-checkbox-circle-fill"></i>
            <h3>Booking Request Sent!</h3>
            <p>
              Thanks, {form.name.split(" ")[0] || "there"}. We&apos;ve received your
              trip details and will call you shortly to confirm your Ooty cab.
            </p>
            <button type="button" className="button" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 id="booking-modal-title" className="booking-modal__title">
              Book Your Ooty Cab
            </h3>
            <p className="booking-modal__subtitle">
              Fill in your trip details and we&apos;ll confirm your ride within minutes.
            </p>

            <form className="booking-modal__form" onSubmit={handleSubmit}>
              <div className="booking-modal__group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="booking-modal__group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="booking-modal__row">
                <div className="booking-modal__group">
                  <label htmlFor="from">From Location</label>
                  <input
                    id="from"
                    name="from"
                    type="text"
                    required
                    placeholder="e.g. Ooty Bus Stand"
                    value={form.from}
                    onChange={handleChange}
                  />
                </div>
                <div className="booking-modal__group">
                  <label htmlFor="to">To Location</label>
                  <input
                    id="to"
                    name="to"
                    type="text"
                    required
                    placeholder="e.g. Coonoor"
                    value={form.to}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="booking-modal__row">
                <div className="booking-modal__group">
                  <label htmlFor="date">Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="booking-modal__group">
                  <label htmlFor="time">Time</label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="booking-modal__group">
                <label htmlFor="car">Preferred Car</label>
                <select id="car" name="car" value={form.car} onChange={handleChange}>
                  <option value="">No preference</option>
                  <option value="Toyota Glanza">Toyota Glanza</option>
                  <option value="Toyota Innova Crysta">Toyota Innova Crysta</option>
                  <option value="Maruti Suzuki Swift Dzire">
                    Maruti Suzuki Swift Dzire
                  </option>
                  <option value="Swaraj Mazda Tempo Traveller">
                    Swaraj Mazda Tempo Traveller
                  </option>
                </select>
              </div>

              {status === "error" && (
                <p className="booking-modal__error">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="button booking-modal__submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Confirm Booking"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}