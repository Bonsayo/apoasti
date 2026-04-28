"use client";

import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import BottomNav from "@/components/BottomNav";

export default function PlatformHome() {
  const sectors = [
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Book hospitals, clinics, and leading specialists instantly.",
      icon: "medical_services",
      href: "/healthcare",
      active: true,
      color: "bg-[#2563EB]/5 text-[#2563EB]",
    },
    {
      id: "government",
      title: "Government",
      description: "Kebele, Woreda, and official civil services.",
      icon: "account_balance",
      href: "#",
      active: false,
      color: "bg-[#000000]/5 text-[#000000]/40",
    },
    {
      id: "fuel-station",
      title: "Fuel Station",
      description: "Find nearby stations and check fuel availability.",
      icon: "local_gas_station",
      href: "/fuel-station",
      active: true,
      color: "bg-[#2563EB]/5 text-[#2563EB]",
    },
    {
      id: "banking",
      title: "Finance",
      description: "Bank appointments and financial consultations.",
      icon: "account_balance_wallet",
      href: "#",
      active: false,
      color: "bg-[#000000]/5 text-[#000000]/40",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#000000] font-display selection:bg-[#2563EB] selection:text-[#FFFFFF] overflow-x-hidden">
      <TopNavBar />
      
      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-[#2563EB]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] -left-[10%] w-[40%] h-[40%] bg-[#2563EB]/3 rounded-full blur-[100px]"></div>
      </div>

      <main className="relative flex-1 flex flex-col items-center w-full pb-32 pt-32 md:pt-40 px-6 md:px-12">
        <div className="w-full max-w-[1200px] flex flex-col gap-20 md:gap-32">
          
          {/* Hero Section */}
          <section className="w-full flex flex-col items-start gap-8 max-w-5xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tighter text-[#000000]">
              Book services. <br />
              <span className="text-[#2563EB]">Instantly.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-[#000000]/40 font-medium max-w-3xl leading-tight">
              Experience a seamless, unified gateway to your healthcare, government, and financial appointments.
            </p>
          </section>

          {/* Cultural Pattern Divider */}
          <div className="w-full h-8 md:h-12 relative opacity-20">
            <div 
              className="absolute inset-0 bg-repeat-x bg-contain" 
              style={{ backgroundImage: "url('/Astwash-06.png')" }}
            ></div>
          </div>

          {/* Promotional Banner Area - Admin configurable */}
          <div className="w-full bg-[#F1F5F9] rounded-[2.5rem] border border-[#000000]/5 flex justify-center overflow-hidden group cursor-pointer shadow-inner">
            <div className="w-full h-24 md:h-32 relative">
              <div className="absolute inset-0 flex items-center justify-center text-[#000000]/20 border-2 border-dashed border-[#000000]/10 m-3 rounded-[1.5rem] group-hover:border-[#2563EB]/30 group-hover:text-[#2563EB]/40 transition-all duration-500">
                <span className="material-symbols-outlined text-3xl mr-3">campaign</span>
                <span className="text-xs font-black uppercase tracking-[0.3em]">Sponsored Space</span>
              </div>
            </div>
          </div>

          {/* Sectors Grid */}
          <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {sectors.map((sector) => (
              <Link 
                key={sector.id}
                href={sector.href}
                className={`group relative flex flex-col p-10 md:p-12 rounded-[3rem] border transition-all duration-700 focus:outline-none overflow-hidden ${
                  sector.active 
                    ? "bg-[#FFFFFF] border-[#000000]/5 hover:border-[#2563EB]/20 shadow-soft hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] hover:-translate-y-3 cursor-pointer" 
                    : "bg-[#000000]/3 border-transparent opacity-60 cursor-not-allowed"
                }`}
                aria-disabled={!sector.active}
                onClick={(e) => !sector.active && e.preventDefault()}
              >
                {/* Decorative Pattern Mask */}
                {sector.active && (
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#2563EB]/5 rounded-full blur-3xl group-hover:bg-[#2563EB]/10 transition-colors duration-700"></div>
                )}

                <div className="flex items-start justify-between mb-16 relative z-10">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 ${sector.active ? sector.color : "bg-[#000000]/10"}`}>
                    <span className={`material-symbols-outlined text-[44px] md:text-[52px] ${sector.active ? "" : "text-[#000000]/40"}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                      {sector.icon}
                    </span>
                  </div>
                  
                  {!sector.active ? (
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#000000]/30 bg-[#000000]/5 px-4 py-2 rounded-full">
                      Coming Soon
                    </span>
                  ) : (
                    <div className="w-14 h-14 rounded-full border-2 border-[#000000]/5 flex items-center justify-center group-hover:border-[#2563EB] group-hover:bg-[#2563EB] transition-all duration-500">
                      <span className="material-symbols-outlined text-[28px] text-[#000000]/20 group-hover:text-[#FFFFFF] transition-all duration-500 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="relative z-10">
                  <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tighter ${sector.active ? "text-[#000000]" : "text-[#000000]/30"}`}>
                    {sector.title}
                  </h2>
                  <p className={`text-xl font-medium leading-tight max-w-[280px] ${sector.active ? "text-[#000000]/40" : "text-[#000000]/20"}`}>
                    {sector.description}
                  </p>
                </div>
              </Link>
            ))}
          </section>

        </div>
      </main>

      <BottomNav />
    </div>
  );
}
