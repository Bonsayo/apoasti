"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function TopNavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50 flex items-center justify-between whitespace-nowrap px-4 md:px-10 py-3 md:py-4 bg-[#FFFFFF]/80 backdrop-blur-xl border border-[#000000]/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className="flex items-center gap-3 md:gap-4">
        {pathname !== "/" && (
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-[#F1F5F9] text-[#000000]/60 hover:bg-[#2563EB] hover:text-white transition-all duration-300 shadow-sm md:w-12 md:h-12"
          >
            <span className="material-symbols-outlined text-[20px] md:text-[24px]">arrow_back</span>
          </button>
        )}
        <Link href="/" className="flex items-center gap-4 text-[#000000] group focus:outline-none">
          <div className="relative h-10 md:h-14 group-hover:scale-105 transition-transform duration-300">
            <img src="/Astwash-10.png" alt="Astawash Logo" className="h-full w-auto object-contain" />
          </div>
        </Link>
      </div>
      
      <div className="flex items-center gap-6 md:gap-10">
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-[#000000]/60 hover:text-[#2563EB] transition-colors text-sm font-bold uppercase tracking-widest" href="/">{t("Home", "ቤት")}</Link>
          <Link className="text-[#000000]/60 hover:text-[#2563EB] transition-colors text-sm font-bold uppercase tracking-widest" href="/appointments">{t("My Appointments", "ቀጠሮዎቼ")}</Link>
          <Link className="text-[#000000]/60 hover:text-[#2563EB] transition-colors text-sm font-bold uppercase tracking-widest" href="/profile">{t("Profile", "መገለጫ")}</Link>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center bg-[#F1F5F9] p-1 rounded-2xl">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${language === "en" ? "bg-white text-[#2563EB] shadow-sm" : "text-[#000000]/30 hover:text-[#000000]/60"}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("am")}
            className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${language === "am" ? "bg-white text-[#2563EB] shadow-sm" : "text-[#000000]/30 hover:text-[#000000]/60"}`}
          >
            አማ
          </button>
        </div>
      </div>
    </header>
  );
}
