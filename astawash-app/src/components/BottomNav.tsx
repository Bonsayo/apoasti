"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[600px] z-50">
      <nav className="h-20 bg-[#FFFFFF]/80 backdrop-blur-xl border border-[#000000]/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[2.5rem] flex items-center justify-around px-2">
        <Link 
          href="/"
          className={`flex items-center justify-center gap-2 h-14 min-w-[56px] px-6 rounded-full transition-all duration-300 focus:outline-none ${
            pathname === "/" ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/20" : "text-[#000000]/40 hover:text-[#2563EB] hover:bg-[#2563EB]/5"
          }`}
        >
          <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: pathname === "/" ? "'FILL' 1" : "'FILL' 0" }}>home</span>
          <span className={`font-black text-xs uppercase tracking-widest hidden sm:block ${pathname !== "/" ? "hidden" : ""}`}>{t("Home", "ቤት")}</span>
        </Link>
        
        <Link 
          href="/appointments"
          className={`flex items-center justify-center gap-2 h-14 min-w-[56px] px-6 rounded-full transition-all duration-300 focus:outline-none ${
            pathname === "/appointments" ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/20" : "text-[#000000]/40 hover:text-[#2563EB] hover:bg-[#2563EB]/5"
          }`}
        >
          <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: pathname === "/appointments" ? "'FILL' 1" : "'FILL' 0" }}>calendar_month</span>
          <span className={`font-black text-xs uppercase tracking-widest hidden sm:block ${pathname !== "/appointments" ? "hidden" : ""}`}>{t("Bookings", "ቀጠሮዎች")}</span>
        </Link>
        
        <Link 
          href="/profile"
          className={`flex items-center justify-center gap-2 h-14 min-w-[56px] px-6 rounded-full transition-all duration-300 focus:outline-none ${
            pathname === "/profile" ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/20" : "text-[#000000]/40 hover:text-[#2563EB] hover:bg-[#2563EB]/5"
          }`}
        >
          <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: pathname === "/profile" ? "'FILL' 1" : "'FILL' 0" }}>person</span>
          <span className={`font-black text-xs uppercase tracking-widest hidden sm:block ${pathname !== "/profile" ? "hidden" : ""}`}>{t("Profile", "መገለጫ")}</span>
        </Link>
      </nav>
    </div>
  );
}
