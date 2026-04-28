"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface SmartTriageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SmartTriageModal({ isOpen, onClose }: SmartTriageModalProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  const handleSelection = (specialty: string) => {
    // In a real app, you might pass this as a query param
    router.push("/selection");
    onClose();
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-[#1A2530]/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
        <div className="relative w-full max-w-4xl bg-white rounded-[24px] shadow-[0_12px_40px_rgba(0,74,173,0.08)] overflow-hidden flex flex-col max-h-[90vh] pointer-events-auto">
          
          <button 
            onClick={onClose}
            aria-label="Close modal" 
            className="absolute top-6 right-6 text-[#8295A9] hover:text-[#1A2530] transition-colors p-2 rounded-full hover:bg-slate-100 z-10 focus:outline-none"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          <div className="overflow-y-auto px-6 py-10 md:px-16 md:py-16">
            <div className="text-center mb-10 md:mb-12">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A2530] mb-3 md:mb-4">Where does it hurt?</h1>
              <p className="text-base md:text-xl text-[#8295A9] font-medium">Select an area to find the right specialist quickly.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
              {[
                { name: "Head & Neck", icon: "psychology" },
                { name: "Chest & Heart", icon: "ecg_heart" },
                { name: "Stomach", icon: "medication" },
                { name: "Bones & Joints", icon: "accessibility_new" },
                { name: "Skin", icon: "front_hand" },
                { name: "Eyes", icon: "visibility" },
                { name: "Mental Health", icon: "sentiment_satisfied" },
                { name: "Other", icon: "more_horiz" },
              ].map((item) => (
                <button 
                  key={item.name}
                  onClick={() => handleSelection(item.name)}
                  className="group flex flex-col items-center justify-center gap-3 md:gap-4 bg-[#F4F7F9] hover:bg-white border-2 border-transparent hover:border-primary rounded-[20px] md:rounded-[24px] p-6 md:p-8 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-primary/20"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <span className="material-symbols-outlined text-[36px] md:text-[48px]" style={{ fontVariationSettings: "'FILL' 0" }}>{item.icon}</span>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-[#1A2530] text-center">{item.name}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-center border-t border-slate-100 pt-6 md:pt-8">
              <button 
                onClick={() => handleSelection("General")}
                className="flex items-center justify-center h-12 md:h-14 px-6 md:px-8 rounded-full bg-transparent hover:bg-slate-50 text-[#1A2530] text-base md:text-lg font-bold leading-normal tracking-wide transition-colors group focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                <span className="group-hover:text-primary transition-colors">I'm not sure, just show General Doctors</span>
                <span className="material-symbols-outlined ml-2 text-xl text-[#8295A9] group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
