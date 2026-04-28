// Bookings data store — persisted in localStorage

export interface Booking {
  id: string;
  hospitalId: string;
  hospitalName: string;
  patientName: string;
  phone: string;
  idType: "fayda" | "passport";
  idNumber: string;
  date: string;
  time: string;
  department: string;
  doctor: string;
  bookingCode: string;
  status: "confirmed" | "checked-in" | "completed" | "cancelled";
  createdAt: string;
}

const STORAGE_KEY = "astawash_bookings";

function persist(data: Booking[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  // Dispatch a custom event so same-tab listeners (admin page) also pick up changes
  window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
}

export function getAllBookings(): Booking[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getBookingsByHospital(hospitalId: string): Booking[] {
  return getAllBookings().filter((b) => b.hospitalId === hospitalId);
}

export function saveBooking(booking: Omit<Booking, "id" | "createdAt">): Booking {
  const all = getAllBookings();
  const newBooking: Booking = {
    ...booking,
    id: Math.random().toString(36).substring(2, 10).toUpperCase(),
    createdAt: new Date().toISOString(),
  };
  all.push(newBooking);
  persist(all);
  return newBooking;
}

export function updateBookingStatus(bookingId: string, status: Booking["status"]): void {
  const all = getAllBookings();
  const idx = all.findIndex((b) => b.id === bookingId);
  if (idx !== -1) {
    all[idx].status = status;
    persist(all);
  }
}
