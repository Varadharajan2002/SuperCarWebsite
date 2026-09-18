"use client";

import { useBooking } from "@/components/BookingContext";

export default function BookButton({
  children = "Book Now",
  className = "button",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { openBooking } = useBooking();

  return (
    <button type="button" className={className} onClick={openBooking}>
      {children}
    </button>
  );
}
