"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import TopNavBar from "@/components/TopNavBar";
import BottomNav from "@/components/BottomNav";
import { hospitals } from "@/data/hospitals";

import { useLanguage } from "@/context/LanguageContext";

function SelectionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t, language } = useLanguage();
  const initialType = searchParams.get("type");

  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "public" | "private">("all");
  
  // Map URL types to categories
  const categoryMap: Record<string, string> = {
    general: "General Hospitals",
    teeth: "Dental Clinics",
    eyes: "Eye Clinics (Ophthalmology)",
    skin: "Dermatological Clinics (Skin Care)",
  };
  
  const initialCategory = initialType ? categoryMap[initialType] || "all" : "all";
  const [filterCategory, setFilterCategory] = useState<string>(initialCategory);

  const filteredHospitals = hospitals.filter((h) => {
    const nameToSearch = language === "en" ? h.name : h.nameAm;
    const matchesSearch = nameToSearch.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || h.type === filterType;
    const matchesCategory = filterCategory === "all" || h.category === filterCategory;
    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000] font-display selection:bg-[#2563EB] selection:text-[#FFFFFF] overflow-x-hidden">
      <TopNavBar />
      
      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] -left-[5%] w-[40%] h-[40%] bg-[#2563EB]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-[#2563EB]/5 rounded-full blur-[80px]"></div>
      </div>

      {/* Hero Header Area */}
      <div className="relative w-full pt-40 md:pt-48 pb-20 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8 relative z-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#000000] leading-[0.9]">
              {t("Find your", "የሚፈልጉትን")} <span className="text-[#2563EB]">{t("Facility.", "ተቋም ያግኙ።")}</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-[#000000]/40 max-w-2xl mx-auto">
              {t("Choose from Ethiopia's leading hospitals and specialized clinics. Instant booking, zero wait.", "ከኢትዮጵያ ቀዳሚ ሆስፒታሎች እና ልዩ ክሊኒኮች ይምረጡ። ፈጣን ቦታ ማስያዝ፣ ያለምንም ጥበቃ።")}
            </p>
          </div>

          {/* Search Bar - Large & Minimal */}
          <div className="relative w-full max-w-3xl group mt-8">
            <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-[#2563EB] text-[32px]">search</span>
            </div>
            <input 
              type="text" 
              placeholder={t("Search hospital name...", "የሆስፒታል ስም ይፈልጉ...")} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-20 md:h-24 pl-20 pr-10 bg-[#F1F5F9] border-none rounded-[2.5rem] text-xl font-bold text-[#000000] placeholder:text-[#000000]/20 focus:outline-none focus:ring-8 focus:ring-[#2563EB]/5 transition-all shadow-inner"
            />
          </div>
        </div>
      </div>

      <main className="relative flex justify-center py-10 px-6 pb-40">
        <div className="max-w-[1200px] w-full flex flex-col gap-10">
          
          <div className="flex flex-col gap-5 w-full">
            {/* Category Scrollable Tabs */}
            <div className="w-full overflow-x-auto hide-scrollbar pb-2 -mx-6 px-6 md:mx-0 md:px-0">
              <div className="flex items-center gap-3 w-max">
                {[
                  { id: "all", label: t("All Specialties", "ሁሉንም"), icon: "grid_view" },
                  { id: "General Hospitals", label: t("General", "ጠቅላላ"), icon: "stethoscope" },
                  { id: "Dental Clinics", label: t("Dental", "ጥርስ"), icon: "dentistry" },
                  { id: "Eye Clinics (Ophthalmology)", label: t("Eye Care", "አይን"), icon: "visibility" },
                  { id: "Dermatological Clinics (Skin Care)", label: t("Dermatology", "ቆዳ"), icon: "healing" }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilterCategory(cat.id)}
                    className={`px-5 py-2.5 rounded-2xl border transition-all duration-300 flex items-center gap-2 ${
                      filterCategory === cat.id 
                        ? "bg-[#000000] border-[#000000] text-white shadow-md" 
                        : "bg-[#FFFFFF] border-[#000000]/10 text-[#000000]/60 hover:bg-gray-50"
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[18px] ${filterCategory === cat.id ? 'text-white' : 'text-[#2563EB]'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      {cat.icon}
                    </span>
                    <span className="text-sm font-bold whitespace-nowrap">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sector Segmented Control */}
            <div className="flex items-center p-1 bg-[#F1F5F9] rounded-2xl self-start w-full md:w-auto">
              {[
                { id: "all", label: t("All Sectors", "ሁሉም") },
                { id: "public", label: t("Public", "መንግስታዊ") },
                { id: "private", label: t("Private", "ግል") }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFilterType(type.id as any)}
                  className={`flex-1 md:flex-none px-6 py-2 rounded-xl transition-all duration-300 ${
                    filterType === type.id 
                      ? "bg-[#FFFFFF] text-[#000000] shadow-sm font-bold" 
                      : "text-[#000000]/40 font-semibold hover:text-[#000000]/70"
                  }`}
                >
                  <span className="text-sm whitespace-nowrap">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results List - Compact & Professional Row Cards */}
          <div className="flex flex-col gap-3 mt-6">
            {filteredHospitals.map((hospital) => (
              <div 
                key={hospital.id}
                onClick={() => router.push(`/booking/${hospital.id}`)}
                className="group relative flex items-center p-4 md:p-5 bg-[#FFFFFF] border border-[#000000]/5 rounded-[1.5rem] hover:border-[#2563EB]/20 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 shrink-0 bg-[#2563EB]/5 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-[#2563EB]/10 group-hover:scale-105 transition-all duration-300">
                  <span className="material-symbols-outlined text-[28px] text-[#2563EB]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {hospital.category.includes('Dental') ? 'dentistry' : hospital.category.includes('Eye') ? 'visibility' : hospital.category.includes('Skin') ? 'healing' : 'local_hospital'}
                  </span>
                </div>
                
                {/* Content Area */}
                <div className="flex-1 min-w-0 pr-4">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <h3 className="text-base md:text-lg font-bold text-[#000000] truncate group-hover:text-[#2563EB] transition-colors">
                      {language === "en" ? hospital.name : hospital.nameAm}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shrink-0 ${hospital.type === 'public' ? 'bg-[#2563EB]/10 text-[#2563EB]' : 'bg-[#000000]/10 text-[#000000]'}`}>
                      {t(hospital.type, hospital.type === 'public' ? 'መንግስታዊ' : 'ግል')}
                    </span>
                  </div>
                  
                  <p className="text-xs font-medium text-[#000000]/50 line-clamp-1 mb-1">
                    {hospital.features}
                  </p>
                  
                  <div className="flex items-center gap-1 text-[#000000]/40">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    <span className="text-[10px] font-bold tracking-wider truncate">{language === "en" ? hospital.location : hospital.locationAm}</span>
                  </div>
                </div>

                {/* Right Action */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#000000]/30 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-0.5 transition-transform">chevron_right</span>
                </div>
              </div>
            ))}

            {filteredHospitals.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-40 text-center gap-6">
                <div className="w-32 h-32 bg-[#F1F5F9] rounded-full flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[64px] text-[#000000]/10">search_off</span>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-3xl font-black">{t("No facilities found", "ምንም ተቋም አልተገኘም")}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default function SelectionPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center font-black text-4xl animate-pulse">FINDING FACILITIES...</div>}>
      <SelectionContent />
    </Suspense>
  );
}
