"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getHospitalById, Hospital } from "@/data/hospitals";
import { getBookingsByHospital, updateBookingStatus, Booking } from "@/data/bookings";

const STATUS_STYLES: Record<Booking["status"], { bg: string; text: string; dot: string; label: string }> = {
  confirmed:  { bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-500",   label: "Confirmed" },
  "checked-in": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", label: "Checked In" },
  completed:  { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500", label: "Completed" },
  cancelled:  { bg: "bg-red-50",    text: "text-red-700",    dot: "bg-red-400",    label: "Cancelled" },
};

export default function HospitalAdminPage() {
  const { id } = useParams();
  const router = useRouter();
  const [hospital, setHospital] = useState<Hospital | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filterStatus, setFilterStatus] = useState<Booking["status"] | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const refresh = () => {
    const h = getHospitalById(id as string);
    if (!h) { router.push("/admin"); return; }
    setHospital(h);
    setBookings(getBookingsByHospital(id as string));
  };

  useEffect(() => {
    refresh();
    // Auto-refresh every 10 seconds so the admin sees new bookings in near real-time
    const interval = setInterval(refresh, 10000);
    // Also update instantly when a booking is saved/cancelled in the same or another tab
    window.addEventListener("storage", refresh);
    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", refresh);
    };
  }, [id]);

  const handleStatusChange = (bookingId: string, status: Booking["status"]) => {
    updateBookingStatus(bookingId, status);
    refresh();
    if (selectedBooking?.id === bookingId) {
      setSelectedBooking(prev => prev ? { ...prev, status } : null);
    }
  };

  const filtered = bookings.filter(b => {
    const matchStatus = filterStatus === "all" || b.status === filterStatus;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      b.patientName.toLowerCase().includes(q) ||
      b.bookingCode.toLowerCase().includes(q) ||
      b.phone.includes(q) ||
      b.idNumber.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  const stats = {
    total: bookings.length,
    confirmed: bookings.filter(b => b.status === "confirmed").length,
    checkedIn: bookings.filter(b => b.status === "checked-in").length,
    completed: bookings.filter(b => b.status === "completed").length,
  };

  if (!hospital) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-[#000000]/5 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/admin")}
            className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-lg font-black leading-none">{hospital.name}</h1>
            <p className="text-[11px] font-bold text-[#2563EB]">{hospital.nameAm} — Admin Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#000000]/40">Live</span>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col gap-8">

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {label: "Total Bookings", value: stats.total, icon: "calendar_month", color: "text-[#2563EB] bg-[#2563EB]/5" },
            {label: "Confirmed", value: stats.confirmed, icon: "check_circle", color: "text-[#2563EB] bg-[#2563EB]/5" },
            {label: "Checked In", value: stats.checkedIn, icon: "login", color: "text-[#2563EB] bg-[#2563EB]/5" },
            {label: "Completed", value: stats.completed, icon: "task_alt", color: "text-[#2563EB] bg-[#2563EB]/5" },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-[1.5rem] border border-[#000000]/5 p-6 flex flex-col gap-3 shadow-sm">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
              </div>
              <div>
                <p className="text-3xl font-black">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#000000]/30 mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#000000]/30 text-[20px]">search</span>
            <input
              type="text"
              placeholder="Search by name, code, phone or ID..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-11 pr-4 bg-white border border-[#000000]/5 rounded-2xl text-sm font-bold focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10 focus:border-[#2563EB]/20 transition-all"
            />
          </div>
          {/* Status Filter */}
          <div className="flex bg-white border border-[#000000]/5 p-1 rounded-2xl gap-1">
            {(["all", "confirmed", "checked-in", "completed", "cancelled"] as const).map(s => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  filterStatus === s ? "bg-[#2563EB] text-white shadow" : "text-[#000000]/40 hover:text-[#000000]/60"
                }`}
              >
                {s === "all" ? "All" : STATUS_STYLES[s as Booking["status"]].label}
              </button>
            ))}
          </div>
        </div>

        {/* Patients Table */}
        <div className="bg-white rounded-[2rem] border border-[#000000]/5 shadow-sm overflow-hidden">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <span className="material-symbols-outlined text-[64px] text-[#000000]/10">person_search</span>
              <p className="text-lg font-black text-[#000000]/20">No registrations found</p>
              <p className="text-sm font-bold text-[#000000]/20">Bookings will appear here once patients register</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#000000]/5 bg-[#F8FAFC]">
                    {["Code", "Patient", "Phone", "Date & Time", "Department", "Doctor", "Status", "Actions"].map(h => (
                      <th key={h} className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-widest text-[#000000]/30">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#000000]/5">
                  {filtered.map(booking => {
                    const style = STATUS_STYLES[booking.status];
                    return (
                      <tr key={booking.id} className="hover:bg-[#F8FAFC] transition-colors group">
                        <td className="px-6 py-4">
                          <span className="font-black text-sm tracking-widest text-[#2563EB] bg-[#2563EB]/5 px-2 py-1 rounded-lg">
                            {booking.bookingCode}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-black text-sm">{booking.patientName}</span>
                            <span className="text-[10px] font-bold text-[#000000]/30 uppercase tracking-widest">
                              {booking.idType === "fayda" ? "Fayda" : "Passport"}: {booking.idNumber}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-bold text-sm text-[#000000]/60">{booking.phone}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-black text-sm">{booking.date}</span>
                            <span className="text-[10px] font-bold text-[#000000]/30">{booking.time}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-bold text-sm text-[#000000]/60">{booking.department}</td>
                        <td className="px-6 py-4 font-bold text-sm text-[#000000]/60">{booking.doctor}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${style.bg} ${style.text}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`}></span>
                            {style.label}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {booking.status === "confirmed" && (
                              <button
                                onClick={() => handleStatusChange(booking.id, "checked-in")}
                                title="Mark Checked In"
                                className="h-8 px-3 bg-amber-50 text-amber-700 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-amber-100 transition-colors"
                              >
                                Check In
                              </button>
                            )}
                            {booking.status === "checked-in" && (
                              <button
                                onClick={() => handleStatusChange(booking.id, "completed")}
                                title="Mark Completed"
                                className="h-8 px-3 bg-emerald-50 text-emerald-700 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-100 transition-colors"
                              >
                                Complete
                              </button>
                            )}
                            {(booking.status === "confirmed" || booking.status === "checked-in") && (
                              <button
                                onClick={() => handleStatusChange(booking.id, "cancelled")}
                                title="Cancel"
                                className="h-8 w-8 flex items-center justify-center bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors"
                              >
                                <span className="material-symbols-outlined text-[16px]">close</span>
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer count */}
        {filtered.length > 0 && (
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-[#000000]/20">
            Showing {filtered.length} of {bookings.length} registrations
          </p>
        )}

      </main>
    </div>
  );
}
