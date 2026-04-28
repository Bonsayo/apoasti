"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TopNavBar from "@/components/TopNavBar";
import { hospitals } from "@/data/hospitals";

function SelectionContent() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "public" | "private">("all");

  const filteredHospitals = hospitals.filter((h) => {
    const matchesSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         h.nameAm.includes(searchQuery);
    const matchesType = filterType === "all" || h.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <TopNavBar />
      
      {/* Hero Header Area */}
      <div className="w-full bg-[#FFFFFF] pt-28 md:pt-36 pb-10 px-6 border-b border-[#000000]/5 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6 relative z-10 text-center md:text-left">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#000000]">
              Choose a Hospital
            </h1>
            <p className="text-lg font-bold text-[#2563EB]">
              ሆስፒታል ይምረጡ
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-2xl group mx-auto md:mx-0">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-[#2563EB] text-[24px]">search</span>
            </div>
            <input 
              type="text" 
              placeholder={`Search hospital name...`} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 md:h-16 pl-14 pr-8 bg-[#F1F5F9] border-none rounded-2xl text-lg font-bold text-[#000000] placeholder:text-[#000000]/30 focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10 transition-all"
            />
          </div>
        </div>
      </div>

      <main className="flex justify-center py-8 px-6 pb-32">
        <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-10">
          
          {/* Filters Sidebar */}
          <aside className="w-full md:w-60 flex-shrink-0 flex flex-col gap-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#000000]/40 px-2">Filter By Type</h3>
            
            <div className="flex flex-row md:flex-col gap-3">
              {[
                { id: "all", label: "All", labelAm: "ሁሉም" },
                { id: "public", label: "Public", labelAm: "መንግስታዊ" },
                { id: "private", label: "Private", labelAm: "ግል" }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFilterType(type.id as any)}
                  className={`flex-1 flex flex-col items-start px-6 py-4 rounded-2xl border transition-all ${
                    filterType === type.id 
                      ? "bg-[#2563EB] border-[#2563EB] text-white shadow-lg shadow-blue-100" 
                      : "bg-white border-[#000000]/5 text-[#000000]/60 hover:border-[#2563EB]/30"
                  }`}
                >
                  <span className="text-sm font-black uppercase tracking-widest leading-none">{type.label}</span>
                  <span className={`text-[10px] font-bold opacity-70 ${filterType === type.id ? "text-white" : "text-[#2563EB]"}`}>{type.labelAm}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1 flex flex-col gap-4">
            {filteredHospitals.map((hospital) => (
              <div 
                key={hospital.id}
                onClick={() => router.push(`/booking/${hospital.id}`)}
                className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 bg-white border border-[#000000]/5 rounded-[2rem] hover:border-[#2563EB]/20 hover:shadow-xl transition-all cursor-pointer overflow-hidden"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#2563EB]/5 rounded-3xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[40px] text-[#2563EB]">local_hospital</span>
                </div>
                
                <div className="flex-1 flex flex-col gap-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <h3 className="text-xl md:text-2xl font-black text-[#000000]">
                      {hospital.name}
                    </h3>
                    <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${hospital.type === 'public' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'} border border-current self-center sm:self-auto`}>
                      {hospital.type}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-[#2563EB]/80 leading-none mb-2">{hospital.nameAm}</p>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-4 text-[#000000]/40 font-bold">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">location_on</span>
                      <span className="text-sm">{hospital.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="shrink-0 w-full sm:w-auto">
                  <button className="w-full sm:w-14 h-14 bg-[#2563EB] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                    <span className="material-symbols-outlined text-[28px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}

            {filteredHospitals.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <span className="material-symbols-outlined text-[64px] text-[#000000]/10 mb-4">search_off</span>
                <h3 className="text-xl font-black">No hospitals found</h3>
                <p className="text-[#000000]/40 font-bold">ያልተገኘ ውጤት</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function SelectionPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center font-black">Loading Hospitals...</div>}>
      <SelectionContent />
    </Suspense>
  );
}
