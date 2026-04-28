"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import TopNavBar from "@/components/TopNavBar";
import BottomNav from "@/components/BottomNav";

export default function HealthcareHome() {
  const router = useRouter();

  const specialties = [
    { name: "Teeth", icon: "dentistry", active: true, color: "bg-[#2563EB]/5 text-[#2563EB]", desc: "Dental care & checkups" },
    { name: "General", icon: "stethoscope", active: true, color: "bg-[#2563EB]/5 text-[#2563EB]", desc: "General health & GP" },
    { name: "Eyes", icon: "visibility", active: true, color: "bg-[#2563EB]/5 text-[#2563EB]", desc: "Vision & eye care" },
    { name: "Skin", icon: "healing", active: true, color: "bg-[#2563EB]/5 text-[#2563EB]", desc: "Dermatology & skin" }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] selection:bg-[#2563EB] selection:text-[#FFFFFF]">
      <TopNavBar />
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-[#2563EB]/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] -left-[5%] w-[30%] h-[30%] bg-[#2563EB]/3 rounded-full blur-[100px]"></div>
      </div>

      <main className="relative flex-1 flex flex-col items-center w-full pb-32 pt-32 md:pt-40 px-6">
        <div className="w-full max-w-[1200px] flex flex-col items-start gap-16">
          
          {/* Hero Section */}
          <section className="w-full flex flex-col gap-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-[#000000]">
              How can we <span className="text-[#2563EB]">help</span> you today?
            </h1>
            
            <p className="text-xl md:text-2xl text-[#000000]/60 font-medium max-w-2xl leading-relaxed">
              Find and book the right medical care in seconds. From specialized clinics to general hospitals.
            </p>
          </section>

          {/* Cultural Pattern Divider */}
          <div className="w-full h-8 md:h-12 relative opacity-20 hover:opacity-40 transition-opacity duration-700">
            <div 
              className="absolute inset-0 bg-repeat-x bg-contain" 
              style={{ backgroundImage: "url('/Astwash-06.png')" }}
            ></div>
          </div>

          {/* Action Button Section */}
          <div className="w-full flex flex-col gap-6 items-stretch">
            {/* Find All Hospitals Button */}
            <Link 
              href="/selection"
              className="group relative flex items-center justify-between h-24 md:h-28 w-full bg-[#000000] text-[#FFFFFF] rounded-[2.5rem] px-8 md:px-10 overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-black/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#2563EB]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="flex flex-col items-start relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFFFFF]/40 mb-1">Advanced Search</span>
                <span className="text-xl md:text-2xl font-black tracking-tight">FIND ALL HOSPITALS</span>
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFFFFF] text-[#000000] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                <span className="material-symbols-outlined text-[28px] md:text-[32px]">search</span>
              </div>
            </Link>
          </div>

          {/* Specialties Grid */}
          <section className="w-full flex flex-col gap-8 mt-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black tracking-tight text-[#000000]">Specialized Care</h2>
              <div className="h-[2px] grow bg-[#000000]/5 mx-6 hidden md:block"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
              {specialties.map((specialty) => (
                <button 
                  key={specialty.name}
                  onClick={() => router.push(`/selection?type=${specialty.name.toLowerCase()}`)}
                  className="group relative flex flex-col items-start p-6 md:p-8 rounded-[2.5rem] border border-[#000000]/5 bg-[#FFFFFF] transition-all duration-500 text-left hover:border-[#2563EB]/20 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] hover:-translate-y-2 cursor-pointer"
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${specialty.color}`}>
                    <span className="material-symbols-outlined text-[32px] md:text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {specialty.icon}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-black tracking-tight text-[#000000]">
                      {specialty.name}
                    </h3>
                    <p className="text-sm font-medium leading-tight text-[#000000]/40">
                      {specialty.desc}
                    </p>
                  </div>

                  <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="material-symbols-outlined text-[#2563EB]">arrow_forward</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
