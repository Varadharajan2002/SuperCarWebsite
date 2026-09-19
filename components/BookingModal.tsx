"use client";

import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    pickup: "",
    drop: "",
    adultMale: "0",
    adultFemale: "0",
    children: "0",
    vehicle: "glanza",
    tripType: "local",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () =>
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      pickup: "",
      drop: "",
      adultMale: "0",
      adultFemale: "0",
      children: "0",
      vehicle: "glanza",
      tripType: "local",
      notes: "",
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSuccess(true);
        setMessage("Booking request sent successfully!");
        resetForm();
        setTimeout(() => {
          onClose();
          setMessage("");
          setIsSuccess(false);
        }, 2000);
      } else {
        setIsSuccess(false);
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setIsSuccess(false);
      setMessage("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="booking-modal__close" onClick={onClose} type="button">
          ×
        </button>

        <h2 className="booking-modal__title">Book Your Trip</h2>
        <p className="booking-modal__subtitle">Ooty • Nilgiris Cabs</p>

        <form className="booking-modal__form" onSubmit={handleSubmit}>
          <div className="booking-modal__row">
            <div className="booking-modal__group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="booking-modal__group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="7806882556"
              />
            </div>
          </div>

          <div className="booking-modal__group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com (optional)"
            />
          </div>

          <div className="booking-modal__row">
            <div className="booking-modal__group">
              <label>Date *</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="booking-modal__group">
              <label>Time *</label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="booking-modal__group">
            <label>From location *</label>
            <input
              type="text"
              name="pickup"
              required
              value={formData.pickup}
              onChange={handleChange}
              placeholder="e.g. Ooty Bus Stand"
            />
          </div>

          <div className="booking-modal__group">
            <label>To location *</label>
            <input
              type="text"
              name="drop"
              required
              value={formData.drop}
              onChange={handleChange}
              placeholder="e.g. Coonoor / Airport"
            />
          </div>

          <div className="booking-modal__row">
            <div className="booking-modal__group">
              <label>Adult Male</label>
              <input
                type="number"
                name="adultMale"
                min="0"
                value={formData.adultMale}
                onChange={handleChange}
              />
            </div>
            <div className="booking-modal__group">
              <label>Adult Female</label>
              <input
                type="number"
                name="adultFemale"
                min="0"
                value={formData.adultFemale}
                onChange={handleChange}
              />
            </div>
            <div className="booking-modal__group">
              <label>Children</label>
              <input
                type="number"
                name="children"
                min="0"
                value={formData.children}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="booking-modal__row">
            <div className="booking-modal__group">
              <label>Vehicle</label>
              <select name="vehicle" value={formData.vehicle} onChange={handleChange}>
                <option value="glanza">Toyota Glanza</option>
                <option value="dzire">Maruti Dzire</option>
                <option value="swift">Maruti Swift</option>
                <option value="etios">Toyota Etios</option>
                <option value="innova">Toyota Innova</option>
                <option value="crysta">Innova Crysta</option>
                <option value="hycross">Innova Hycross</option>
                <option value="mazda">Swaraj Mazda</option>
                <option value="tempo">Tempo Traveller</option>
                <option value="urbania">Force Urbania</option>
              </select>
            </div>
            <div className="booking-modal__group">
              <label>Trip Type</label>
              <select name="tripType" value={formData.tripType} onChange={handleChange}>
                <option value="local">Local Sightseeing</option>
                <option value="coonoor">Coonoor</option>
                <option value="pykara">Pykara / Avalanche</option>
                <option value="mudumalai">Mudumalai</option>
                <option value="outstation">Outstation</option>
                <option value="airport">Airport Transfer</option>
                <option value="railway">Railway Transfer</option>
              </select>
            </div>
          </div>

          <div className="booking-modal__group">
            <label>Special Notes</label>
            <textarea
              name="notes"
              rows={2}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Passengers, days, sightseeing needs"
            />
          </div>

          {message && (
            <p className={`booking-modal__message ${isSuccess ? "success" : "error"}`}>
              {message}
            </p>
          )}

          <button type="submit" className="booking-modal__submit" disabled={loading}>
            {loading ? "Sending..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}
