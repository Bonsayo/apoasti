"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full h-20 md:h-24 bg-[#FFFFFF] border-t border-[#000000]/10 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] z-40 flex justify-center pb-safe">
      <div className="w-full max-w-[1200px] h-full flex justify-around items-center px-4 md:px-12">
        <Link 
          href="/"
          className={`flex items-center gap-2 h-12 px-6 rounded-full transition-colors focus:outline-none ${
            pathname === "/" ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-[#000000]/40 hover:text-[#2563EB]"
          }`}
        >
          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: pathname === "/" ? "'FILL' 1" : "'FILL' 0" }}>home</span>
          <span className={`font-bold text-base hidden sm:block ${pathname !== "/" ? "hidden" : ""}`}>Home</span>
        </Link>
        
        <Link 
          href="/appointments"
          className={`flex items-center gap-2 h-12 px-6 rounded-full transition-colors focus:outline-none ${
            pathname === "/appointments" ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-[#000000]/40 hover:text-[#2563EB]"
          }`}
        >
          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: pathname === "/appointments" ? "'FILL' 1" : "'FILL' 0" }}>calendar_today</span>
          <span className={`font-bold text-base hidden sm:block ${pathname !== "/appointments" ? "hidden" : ""}`}>Appointments</span>
        </Link>
        
        <Link 
          href="/profile"
          className={`flex items-center gap-2 h-12 px-6 rounded-full transition-colors focus:outline-none ${
            pathname === "/profile" ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-[#000000]/40 hover:text-[#2563EB]"
          }`}
        >
          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: pathname === "/profile" ? "'FILL' 1" : "'FILL' 0" }}>person</span>
          <span className={`font-bold text-base hidden sm:block ${pathname !== "/profile" ? "hidden" : ""}`}>Profile</span>
        </Link>
      </div>
    </nav>
  );
}
