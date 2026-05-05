"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNavBar from "@/components/TopNavBar";
import BottomNav from "@/components/BottomNav";
import { useLanguage } from "@/context/LanguageContext";
import { hospitals } from "@/data/hospitals";

export default function HospitalPortal() {
  const router = useRouter();
  const { t } = useLanguage();
  const [hospitalName, setHospitalName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth
    setTimeout(() => {
      router.push("/staff");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000] font-display selection:bg-[#2563EB] selection:text-[#FFFFFF] overflow-x-hidden">
      <TopNavBar />

      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] bg-[#2563EB]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] -left-[10%] w-[40%] h-[40%] bg-purple-500/3 rounded-full blur-[100px]"></div>
      </div>

      <main className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6">
        <div className="w-full max-w-xl flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest">Secure Access</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-[#000000] leading-none">
              Hospital <span className="text-[#2563EB]">Login.</span>
            </h1>
            <p className="text-lg font-bold text-[#000000]/40 max-w-md">
              Enter your facility credentials to access the management dashboard.
            </p>
          </div>

          {/* Login Form */}
          <form 
            onSubmit={handleLogin}
            className="bg-white border border-[#000000]/5 rounded-[3rem] p-8 md:p-12 shadow-soft flex flex-col gap-8 relative overflow-hidden"
          >
            {/* Form Glass Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex flex-col gap-6">
              {/* Hospital Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#000000]/30 px-6">Hospital Name</label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-[#000000]/20 group-focus-within:text-[#2563EB] transition-colors">
                    <span className="material-symbols-outlined">local_hospital</span>
                  </span>
                  <input 
                    type="text"
                    required
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                    placeholder="e.g. Tikur Anbessa"
                    className="w-full h-16 pl-16 pr-8 bg-[#F1F5F9] border-none rounded-2xl text-base font-bold focus:ring-4 focus:ring-[#2563EB]/5 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Employee ID */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#000000]/30 px-6">Employee ID / Name</label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-[#000000]/20 group-focus-within:text-[#2563EB] transition-colors">
                    <span className="material-symbols-outlined">person</span>
                  </span>
                  <input 
                    type="text"
                    required
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    placeholder="Enter employee ID"
                    className="w-full h-16 pl-16 pr-8 bg-[#F1F5F9] border-none rounded-2xl text-base font-bold focus:ring-4 focus:ring-[#2563EB]/5 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#000000]/30 px-6">Password</label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-[#000000]/20 group-focus-within:text-[#2563EB] transition-colors">
                    <span className="material-symbols-outlined">lock</span>
                  </span>
                  <input 
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-16 pl-16 pr-8 bg-[#F1F5F9] border-none rounded-2xl text-base font-bold focus:ring-4 focus:ring-[#2563EB]/5 transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full h-20 bg-[#2563EB] text-white rounded-[2rem] flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 hover:-translate-y-1 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {loading ? (
                <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  {t("Login to Portal", "ወደ ፖርታል ይግቡ")}
                  <span className="material-symbols-outlined">login</span>
                </>
              )}
            </button>

            <div className="text-center mt-2">
              <a href="#" className="text-xs font-black uppercase tracking-widest text-[#2563EB] hover:underline opacity-60">Forgot Credentials?</a>
            </div>
          </form>

          {/* Footer Info */}
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-[#000000]/20">
            Astawash Healthcare Infrastructure v2.0
          </p>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
