"use client";

import TopNavBar from "@/components/TopNavBar";
import BottomNav from "@/components/BottomNav";

export default function ProfilePage() {
  const profileSettings = [
    { id: "personal", label: "Personal Information", icon: "person", value: "Abebe Kebede" },
    { id: "medical", label: "Medical Records", icon: "medical_information", value: "3 Files" },
    { id: "payment", label: "Payment Methods", icon: "payments", value: "Visa ending in 4242" },
    { id: "family", label: "Family Members", icon: "family_restroom", value: "1 Child" },
    { id: "notifications", label: "Notifications", icon: "notifications", value: "Email, SMS" },
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
        <div className="w-full max-w-[800px] flex flex-col gap-16">
          
          {/* Profile Header */}
          <header className="flex flex-col md:flex-row items-center md:items-start gap-10 border-b border-[#000000]/5 pb-12 relative">
            <div className="relative group">
              <div className="w-40 h-40 rounded-[3rem] bg-[#F1F5F9] flex items-center justify-center border-8 border-[#FFFFFF] shadow-soft overflow-hidden transition-all duration-500 group-hover:rotate-3 group-hover:scale-105">
                <span className="material-symbols-outlined text-[80px] text-[#000000]/10">person</span>
              </div>
              <button className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#2563EB] text-[#FFFFFF] rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none">
                <span className="material-symbols-outlined text-[24px]">edit</span>
              </button>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 pt-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-5xl font-black tracking-tight text-[#000000]">
                  Abebe Kebede
                </h1>
                <p className="text-xl font-medium text-[#000000]/40">
                  abebe.kebede@example.com
                </p>
              </div>
              <div className="px-5 py-2 bg-[#2563EB]/5 rounded-full border border-[#2563EB]/10 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2563EB]">Verified Citizen</span>
              </div>
            </div>

            {/* Cultural Pattern Divider */}
            <div className="absolute -bottom-1 left-0 w-full h-1 opacity-20">
              <div 
                className="w-full h-full bg-repeat-x bg-contain" 
                style={{ backgroundImage: "url('/Astwash-06.png')" }}
              ></div>
            </div>
          </header>

          {/* Settings List */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#000000]/30 px-6">
              Account Settings
            </h2>
            
            <div className="flex flex-col gap-3">
              {profileSettings.map((item) => (
                <button 
                  key={item.id} 
                  className="group flex items-center justify-between p-8 bg-[#FFFFFF] hover:bg-[#F1F5F9] border border-[#000000]/5 hover:border-[#2563EB]/20 rounded-[2rem] transition-all duration-500 focus:outline-none hover:shadow-soft"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#F1F5F9] group-hover:bg-[#FFFFFF] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                      <span className="material-symbols-outlined text-[32px] text-[#000000]/40 group-hover:text-[#2563EB] transition-colors">{item.icon}</span>
                    </div>
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-xl font-black tracking-tight text-[#000000]">{item.label}</span>
                      <span className="text-sm font-medium text-[#000000]/30 md:hidden">{item.value}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-black uppercase tracking-widest text-[#000000]/20 hidden md:block">{item.value}</span>
                    <div className="w-10 h-10 rounded-full border border-[#000000]/5 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-[#FFFFFF] transition-all duration-500">
                      <span className="material-symbols-outlined text-[20px] group-hover:translate-x-0.5 transition-transform">chevron_right</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Logout */}
          <div className="flex justify-center mt-12">
            <button className="flex items-center gap-3 px-10 py-5 rounded-[2rem] bg-[#000000] hover:bg-[#2563EB] text-[#FFFFFF] font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500 hover:scale-105 shadow-xl shadow-black/10">
              <span className="material-symbols-outlined text-[20px]">logout</span>
              Sign Out
            </button>
          </div>

        </div>
      </main>

      <BottomNav />
    </div>
  );
}
