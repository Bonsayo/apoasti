"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import { hospitals } from "@/data/hospitals";
import { getBookingsByHospital, Booking } from "@/data/bookings";

export default function AdminPortal() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <TopNavBar />

      <main className="max-w-[1200px] mx-auto pt-32 pb-32 px-6 flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black tracking-tight text-[#000000]">Hospital Management</h1>
          <p className="text-sm font-bold text-[#000000]/40">Search for your hospital to view and manage patient registrations.</p>
        </div>

        {/* Hospital Search */}
        <div className="w-full max-w-2xl">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#000000]/20 text-[24px]">search</span>
            <input
              type="text"
              placeholder="Enter hospital name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 pl-14 pr-6 bg-white border border-[#000000]/5 rounded-3xl text-lg font-bold shadow-xl shadow-black/[0.02] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10 focus:border-[#2563EB]/20 transition-all"
            />
          </div>
        </div>

        {/* Hospital Cards */}
        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-xs font-black uppercase tracking-widest text-[#000000]/30">
            {searchQuery.trim() !== "" ? "Search Results" : "All Hospitals"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hospitals
              .filter(h => h.name.toLowerCase().includes(searchQuery.toLowerCase()) || h.nameAm.includes(searchQuery))
              .map(hospital => {
              return (
                <Link
                  key={hospital.id}
                  href={`/admin/${hospital.id}`}
                  className="group bg-white rounded-[2rem] border border-[#000000]/5 p-8 flex flex-col gap-6 hover:border-[#2563EB]/20 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-500 shadow-sm"
                >
                  {/* Top Row */}
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                          hospital.type === "public" ? "bg-[#2563EB]/5 text-[#2563EB]" : "bg-purple-50 text-purple-600"
                        }`}>
                          {hospital.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-black tracking-tight mt-1">{hospital.name}</h3>
                      <p className="text-sm font-bold text-[#2563EB]">{hospital.nameAm}</p>
                      <p className="text-xs font-bold text-[#000000]/30 mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {hospital.location}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-[#000000]/5 flex items-center justify-center group-hover:border-[#2563EB] group-hover:bg-[#2563EB] transition-all duration-500">
                      <span className="material-symbols-outlined text-[22px] text-[#000000]/20 group-hover:text-white transition-colors duration-500 group-hover:translate-x-0.5">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </main>
    </div>
  );
}
