"use client";

import { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import { hospitals } from "@/data/hospitals";

export default function StaffPortal() {
  const [selectedHospital, setSelectedHospital] = useState(hospitals[0]);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock bookings
  const [bookings, setBookings] = useState([
    { id: "BK1", name: "Abebe Balcha", phone: "0911223344", time: "09:00 AM", status: "pending", code: "AX72B1" },
    { id: "BK2", name: "Sara Tesfaye", phone: "0922334455", time: "09:30 AM", status: "checked_in", code: "ZR91C4" },
    { id: "BK3", name: "Kebede Haile", phone: "0933445566", time: "10:00 AM", status: "pending", code: "MK33D9" },
    { id: "BK4", name: "Marta Girma", phone: "0944556677", time: "10:30 AM", status: "pending", code: "LW88E2" },
  ]);

  const updateStatus = (id: string, newStatus: string) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  const filteredBookings = bookings.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    b.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.phone.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <TopNavBar />
      
      <main className="max-w-[1200px] mx-auto pt-32 pb-32 px-6">
        <div className="flex flex-col gap-8">
          
          {/* Staff Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] font-black uppercase tracking-widest">Front Desk Portal</span>
              </div>
              <h1 className="text-4xl font-black">{selectedHospital.name}</h1>
              <p className="text-sm font-bold text-[#000000]/40 uppercase tracking-widest">Queue & Appointment Management</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#000000]/20">search</span>
                </span>
                <input 
                  type="text" 
                  placeholder="Search by name, phone, or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 pl-12 pr-6 bg-white border border-[#000000]/5 rounded-2xl text-sm font-bold focus:ring-4 focus:ring-[#2563EB]/5 transition-all w-full md:w-80 shadow-sm"
                />
              </div>
              <button className="h-14 w-14 bg-[#2563EB] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Booked", value: "42", icon: "event", color: "text-blue-600" },
              { label: "Checked In", value: "18", icon: "how_to_reg", color: "text-emerald-600" },
              { label: "Waiting", value: "12", icon: "hourglass_empty", color: "text-amber-600" },
              { label: "Completed", value: "12", icon: "task_alt", color: "text-slate-600" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-[1.5rem] border border-[#000000]/5 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-[#000000]/3 flex items-center justify-center ${stat.color}`}>
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black leading-none">{stat.value}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bookings List */}
          <div className="bg-white border border-[#000000]/5 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#000000]/5 bg-[#F8FAFC]">
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#000000]/40">Time</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#000000]/40">Patient</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#000000]/40">Booking Code</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#000000]/40">Status</th>
                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#000000]/40">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#000000]/5">
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <span className="text-sm font-black text-[#000000]">{booking.time}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="text-base font-black text-[#000000]">{booking.name}</span>
                          <span className="text-xs font-bold text-[#000000]/40">{booking.phone}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-black tracking-widest text-[#000000]/60">
                          {booking.code}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                          booking.status === 'checked_in' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                          booking.status === 'completed' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                          'bg-amber-50 text-amber-600 border-amber-100'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            booking.status === 'checked_in' ? 'bg-emerald-500' : 
                            booking.status === 'completed' ? 'bg-blue-500' :
                            'bg-amber-500'
                          }`}></span>
                          {booking.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          {booking.status === 'pending' && (
                            <button 
                              onClick={() => updateStatus(booking.id, 'checked_in')}
                              className="h-10 px-4 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-colors"
                            >
                              Check In
                            </button>
                          )}
                          {booking.status === 'checked_in' && (
                            <button 
                              onClick={() => updateStatus(booking.id, 'completed')}
                              className="h-10 px-4 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-colors"
                            >
                              Complete
                            </button>
                          )}
                          <button className="h-10 w-10 flex items-center justify-center text-[#000000]/20 hover:text-[#000000]/60 transition-colors">
                            <span className="material-symbols-outlined">more_vert</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredBookings.length === 0 && (
              <div className="py-20 text-center flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl text-[#000000]/10">search_off</span>
                <p className="text-sm font-bold text-[#000000]/30">No patients found matching your search</p>
              </div>
            )}
          </div>
        </div>
      </main>

    </div>
  );
}
