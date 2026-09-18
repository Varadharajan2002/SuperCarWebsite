"use client";

import { createContext, useContext, useState } from "react";
import BookingModal from "@/components/BookingModal";

type BookingContextValue = {
  openBooking: () => void;
};

const BookingContext = createContext<BookingContextValue>({
  openBooking: () => {},
});

export function useBooking() {
  return useContext(BookingContext);
}

export default function BookingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <BookingContext.Provider value={{ openBooking: () => setOpen(true) }}>
      {children}
      <BookingModal isOpen={open} onClose={() => setOpen(false)} />
    </BookingContext.Provider>
  );
}
