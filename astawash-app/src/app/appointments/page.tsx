"use client";

import { useState, useEffect } from "react";
import TopNavBar from "@/components/TopNavBar";
import BottomNav from "@/components/BottomNav";
import { getAllBookings, updateBookingStatus, Booking } from "@/data/bookings";

export default function AppointmentsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [cancelling, setCancelling] = useState<string | null>(null);

  const load = () => {
    const all = getAllBookings().filter(b => b.status !== "cancelled");
    setBookings(all.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
  };

  useEffect(() => {
    load();
    // Listen for changes from other tabs / booking confirmations
    window.addEventListener("storage", load);
    return () => window.removeEventListener("storage", load);
  }, []);

  const handleCancel = (booking: Booking) => {
    setCancelling(booking.id);
    setTimeout(() => {
      updateBookingStatus(booking.id, "cancelled");
      load();
      setCancelling(null);
    }, 800);
  };

  const STATUS_COLOR: Record<string, string> = {
    confirmed:    "bg-blue-50 text-blue-700",
    "checked-in": "bg-amber-50 text-amber-700",
    completed:    "bg-emerald-50 text-emerald-700",
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <TopNavBar />

      <main className="max-w-2xl mx-auto pt-32 pb-32 px-6">
        <div className="flex flex-col gap-8">

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black">My Appointments</h1>
            <p className="text-sm font-bold text-[#2563EB]">ቀጠሮዎቼ</p>
          </div>

          {bookings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4 bg-white rounded-[2.5rem] border border-[#000000]/5">
              <span className="material-symbols-outlined text-[64px] text-[#000000]/10">calendar_month</span>
              <p className="text-xl font-black text-[#000000]/20">No appointments yet</p>
              <p className="text-sm font-bold text-[#000000]/20">Book a hospital visit to see it here</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {bookings.map(booking => (
                <div
                  key={booking.id}
                  className="bg-white border border-[#000000]/5 rounded-[2.5rem] p-8 flex flex-col gap-6 shadow-sm"
                >
                  {/* Code & Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#000000]/20">Booking Code</span>
                      <span className="text-4xl font-black tracking-[0.2em] text-[#000000]">{booking.bookingCode}</span>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${STATUS_COLOR[booking.status] ?? "bg-slate-50 text-slate-500"}`}>
                      {booking.status === "checked-in" ? "Checked In" : booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>

                  <div className="w-full h-px bg-[#F1F5F9]"></div>

                  {/* Details */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#2563EB]/5 rounded-xl flex items-center justify-center text-[#2563EB]">
                        <span className="material-symbols-outlined">local_hospital</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-black uppercase tracking-widest text-[#000000]/30">Hospital</span>
                        <span className="text-base font-black">{booking.hospitalName}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#2563EB]/5 rounded-xl flex items-center justify-center text-[#2563EB]">
                        <span className="material-symbols-outlined">medical_services</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-black uppercase tracking-widest text-[#000000]/30">Doctor / Department</span>
                        <span className="text-base font-black">{booking.doctor}</span>
                        <span className="text-xs font-bold text-[#000000]/40">{booking.department}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#2563EB]/5 rounded-xl flex items-center justify-center text-[#2563EB]">
                          <span className="material-symbols-outlined">calendar_month</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-black uppercase tracking-widest text-[#000000]/30">Date</span>
                          <span className="text-base font-black">{booking.date}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#2563EB]/5 rounded-xl flex items-center justify-center text-[#2563EB]">
                          <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-black uppercase tracking-widest text-[#000000]/30">Time</span>
                          <span className="text-base font-black">{booking.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  {(booking.status === "confirmed" || booking.status === "checked-in") && (
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => handleCancel(booking)}
                        disabled={cancelling === booking.id}
                        className="w-full h-14 bg-red-50 text-red-500 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-red-100 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {cancelling === booking.id ? (
                          <>
                            <span className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin"></span>
                            Cancelling...
                          </>
                        ) : "CANCEL APPOINTMENT"}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-[1.5rem] border border-blue-100">
            <span className="material-symbols-outlined text-blue-600">info</span>
            <p className="text-xs font-bold text-blue-900/60 leading-relaxed">
              Arrive 15 minutes before your time and show your booking code at the reception desk to skip the queue.
            </p>
          </div>

        </div>
      </main>

      <BottomNav />
    </div>
  );
}
