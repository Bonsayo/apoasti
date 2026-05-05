"use client";

import { useState, useEffect, Suspense } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import BottomNav from "@/components/BottomNav";
import { getHospitalById, Hospital, Department, Doctor } from "@/data/hospitals";
import { saveBooking, Booking } from "@/data/bookings";

type Step = "doctor_knowledge" | "select_doctor" | "select_dept" | "schedule" | "form" | "done";

import { useLanguage } from "@/context/LanguageContext";

function BookingContent() {
  const { id } = useParams();
  const router = useRouter();
  const { t, language } = useLanguage();
  const [hospital, setHospital] = useState<Hospital | null>(null);
  const [step, setStep] = useState<Step>("doctor_knowledge");
  
  // Selection state
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [calendarType, setCalendarType] = useState<"gregorian" | "ethiopian">("ethiopian");
  const [currentMonthIdx, setCurrentMonthIdx] = useState(7); // ሚያዚያ / April
  const [currentYear, setCurrentYear] = useState(2016);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [idType, setIdType] = useState<"fayda" | "passport">("fayda");
  const [idNumber, setIdNumber] = useState("");
  
  // Confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  const ethMonths = ["መስከረም", "ጥቅምት", "ህዳር", "ታህሳስ", "ጥር", "የካቲት", "መጋቢት", "ሚያዚያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"];
  const gregMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekdays = language === "am" 
    ? ["እሁድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "አርብ", "ቅዳሜ"]
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const timeSlots = Array.from({ length: 25 }, (_, i) => {
    const hour = Math.floor(i / 2) + 8;
    const min = i % 2 === 0 ? "00" : "30";
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${min} ${period}`;
  });

  const getEthTime = (gregTime: string) => {
    const [time, period] = gregTime.split(' ');
    let [h, m] = time.split(':').map(Number);
    
    // Ethiopian time is offset by 6 hours
    // 7 AM Greg = 1 AM Eth
    let ethH = h - 6;
    if (period === "PM" && h !== 12) ethH += 6;
    if (period === "AM" && h === 12) ethH -= 6;
    
    if (ethH <= 0) ethH += 12;
    if (ethH > 12) ethH -= 12;

    const ethPeriod = (h >= 6 && h < 12 && period === "AM") || (h === 12 && period === "PM") ? "ጠዋት" :
                     (h >= 1 && h < 6 && period === "PM") ? "ቀን" :
                     (h >= 6 && h < 12 && period === "PM") || (h === 12 && period === "AM") ? "ማታ" : "ሌሊት";
    
    return `${ethH}:${m} (${ethPeriod})`;
  };

  useEffect(() => {
    if (id) {
      const h = getHospitalById(id as string);
      if (h) setHospital(h);
      else router.push("/selection");
    }
  }, [id, router]);

  useEffect(() => {
    const isAm = language === "am";
    setCalendarType(isAm ? "ethiopian" : "gregorian");
    setCurrentMonthIdx(isAm ? 7 : 3); // ሚያዚያ is 8th month (idx 7), April is 4th (idx 3)
    setCurrentYear(isAm ? 2016 : 2024);
    setSelectedDate("");
  }, [language]);

  const generateCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleConfirmBooking = () => {
    if (!hospital) return;
    const b = saveBooking({
      hospitalId: hospital.id,
      hospitalName: hospital.name,
      patientName: name,
      phone,
      idType,
      idNumber,
      date: selectedDate,
      time: selectedTime,
      department: selectedDept?.name || selectedDoctor?.specialty || "General",
      doctor: selectedDoctor?.name || "Any Available",
      bookingCode: generateCode(),
      status: "confirmed",
    });
    setConfirmedBooking(b);
  };

  const nextStep = (next: Step) => setStep(next);

  if (!hospital) return null;

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000] font-display selection:bg-[#2563EB] selection:text-[#FFFFFF] overflow-x-hidden">
      <TopNavBar />

      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-[#2563EB]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] -left-[10%] w-[40%] h-[40%] bg-[#2563EB]/3 rounded-full blur-[100px]"></div>
      </div>
      
      <main className="relative flex-1 flex flex-col items-center w-full pb-40 pt-40 px-6">
        <div className="w-full max-w-2xl flex flex-col gap-10">
          
          {/* Progress Indicator */}
          {step !== "done" && (
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex flex-col">
                 <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#2563EB]">
                    {t("Booking Flow", "የቦታ ማስያዝ ሂደት")}
                 </h2>
                 <p className="text-xs font-bold text-[#000000]/40">
                    {t("Step", "ደረጃ")} {step === 'doctor_knowledge' ? 1 : step === 'select_doctor' || step === 'select_dept' ? 2 : step === 'schedule' ? 3 : 4} {t("of 4", "ከ 4")}
                 </p>
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map((i) => {
                  const currentIdx = step === 'doctor_knowledge' ? 1 : step === 'select_doctor' || step === 'select_dept' ? 2 : step === 'schedule' ? 3 : 4;
                  return (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-500 ${i <= currentIdx ? 'w-8 bg-[#2563EB]' : 'w-4 bg-[#000000]/5'}`}
                    ></div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 1: DOCTOR KNOWLEDGE */}
          {step === "doctor_knowledge" && (
            <div className="flex flex-col gap-12 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-24 h-24 bg-[#2563EB]/5 rounded-[2rem] flex items-center justify-center text-[#2563EB]">
                    <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>person_search</span>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{t("Do you have a preferred doctor?", "የሚፈልጉትን ዶክተር ያውቃሉ?")}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <button 
                  onClick={() => nextStep("select_doctor")}
                  className="group relative flex items-center justify-between p-10 bg-[#FFFFFF] border border-[#000000]/5 rounded-[2.5rem] shadow-soft hover:shadow-hover hover:border-[#2563EB]/20 transition-all duration-500 text-left overflow-hidden"
                >
                  <div className="flex flex-col relative z-10">
                    <span className="text-2xl font-black text-[#000000]">{t("YES, I know my doctor", "አዎ፣ አውቃለሁ")}</span>
                  </div>
                  <div className="w-14 h-14 bg-[#2563EB]/5 rounded-full flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-500">
                    <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </button>

                <button 
                  onClick={() => nextStep("select_dept")}
                  className="group relative flex items-center justify-between p-10 bg-[#FFFFFF] border border-[#000000]/5 rounded-[2.5rem] shadow-soft hover:shadow-hover hover:border-[#2563EB]/20 transition-all duration-500 text-left overflow-hidden"
                >
                  <div className="flex flex-col relative z-10">
                    <span className="text-2xl font-black text-[#000000]">{t("NO, show me by department", "አላውቅም፣ እንዲረዳኝ እፈልጋለሁ")}</span>
                  </div>
                   <div className="w-14 h-14 bg-[#F1F5F9] rounded-full flex items-center justify-center text-[#000000]/20 group-hover:bg-[#000000] group-hover:text-white transition-all duration-500">
                    <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">help</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2A: SELECT DOCTOR */}
          {step === "select_doctor" && (
            <div className="flex flex-col gap-8 py-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-[#2563EB] rounded-full"></div>
                  <h2 className="text-3xl font-black tracking-tight">{t("Select Specialist", "ዶክተር ይምረጡ")}</h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {hospital.departments.flatMap(d => d.doctors).map((doc, idx) => (
                  <button 
                    key={doc.id}
                    onClick={() => { setSelectedDoctor(doc); nextStep("schedule"); }}
                    className="flex items-center gap-5 p-6 bg-white border border-[#000000]/5 rounded-[2rem] hover:border-[#2563EB] hover:shadow-hover transition-all duration-300 text-left group"
                  >
                    <div className="relative">
                      <div className="w-14 h-14 bg-[#F1F5F9] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/10 transition-colors">
                        <span className="material-symbols-outlined text-[28px] text-[#2563EB]/40 group-hover:text-[#2563EB] transition-colors">medical_services</span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"></div>
                    </div>
                    
                    <div className="flex-1 flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-black text-[#000000]">
                          {language === "en" ? doc.name : doc.nameAm} ({language === "en" ? doc.specialty : doc.specialtyAm})
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{t("Available", "ይገኛሉ")}</span>
                      <div className="w-8 h-8 bg-[#F1F5F9] rounded-full flex items-center justify-center text-[#000000]/20 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2B: SELECT DEPARTMENT */}
          {step === "select_dept" && (
            <div className="flex flex-col gap-10 py-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-black tracking-tighter">{t("Choose Department", "ክፍል ይምረጡ")}</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hospital.departments.map(dept => (
                  <button 
                    key={dept.id}
                    onClick={() => { setSelectedDept(dept); nextStep("schedule"); }}
                    className="flex flex-col items-start gap-6 p-10 bg-white border border-[#000000]/5 rounded-[2.5rem] shadow-soft hover:shadow-hover hover:border-[#2563EB]/20 transition-all duration-500 text-left group"
                  >
                    <div className="w-16 h-16 bg-[#2563EB]/5 rounded-[1.5rem] flex items-center justify-center text-[#2563EB] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>{dept.icon}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xl font-black">{language === "en" ? dept.name : dept.nameAm}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: SCHEDULE */}
          {step === "schedule" && (
            <div className="flex flex-col gap-10 py-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="text-4xl font-black tracking-tighter">{t("Choose Date & Time", "ቀን እና ሰዓት ይምረጡ")}</h2>
              </div>

              {/* Date Selection */}
              <div className="flex flex-col gap-8 bg-white p-8 rounded-[3rem] border border-[#000000]/5 shadow-soft relative overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                    <button 
                        onClick={() => setShowMonthPicker(true)}
                        className="text-2xl font-black text-[#000000] hover:text-[#2563EB] transition-colors flex items-center gap-2"
                    >
                        {language === "am" ? ethMonths[currentMonthIdx] : gregMonths[currentMonthIdx]}
                        <span className="material-symbols-outlined opacity-30">expand_more</span>
                    </button>
                    <button 
                        onClick={() => setShowYearPicker(true)}
                        className="text-2xl font-black text-[#2563EB] hover:opacity-80 transition-opacity flex items-center gap-2"
                    >
                        {currentYear}
                        <span className="material-symbols-outlined opacity-30">expand_more</span>
                    </button>
                </div>

                {/* Month Picker Modal */}
                {showMonthPicker && (
                    <div className="absolute inset-0 z-50 bg-white p-8 flex flex-col gap-6 animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black">{t("Select Month", "ወር ይምረጡ")}</h3>
                            <button onClick={() => setShowMonthPicker(false)} className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center"><span className="material-symbols-outlined">close</span></button>
                        </div>
                        <div className="grid grid-cols-3 gap-2 overflow-y-auto max-h-[300px] pr-2">
                            {(language === 'am' ? ethMonths : gregMonths).map((m, idx) => (
                                <button 
                                    key={m} 
                                    onClick={() => { setCurrentMonthIdx(idx); setShowMonthPicker(false); setSelectedDate(""); }}
                                    className={`py-4 rounded-2xl font-bold text-sm ${currentMonthIdx === idx ? 'bg-[#2563EB] text-white' : 'bg-[#F1F5F9] hover:bg-[#2563EB]/10'}`}
                                >
                                    {m}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Year Picker Modal */}
                {showYearPicker && (
                    <div className="absolute inset-0 z-50 bg-white p-8 flex flex-col gap-6 animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-black">{t("Select Year", "አመት ይምረጡ")}</h3>
                            <button onClick={() => setShowYearPicker(false)} className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center"><span className="material-symbols-outlined">close</span></button>
                        </div>
                        <div className="grid grid-cols-3 gap-2 overflow-y-auto max-h-[300px] pr-2">
                            {[2024, 2025, 2026, 2016, 2017, 2018].map(y => (
                                <button 
                                    key={y} 
                                    onClick={() => { setCurrentYear(y); setShowYearPicker(false); setSelectedDate(""); }}
                                    className={`py-4 rounded-2xl font-bold text-sm ${currentYear === y ? 'bg-[#2563EB] text-white' : 'bg-[#F1F5F9] hover:bg-[#2563EB]/10'}`}
                                >
                                    {y}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 md:gap-2 relative z-10">
                    {weekdays.map(day => (
                        <div key={day} className="h-10 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-[#000000]/30">
                            {day.substring(0, 3)}
                        </div>
                    ))}
                    {/* Mock empty days for grid alignment */}
                    {Array.from({ length: 2 }).map((_, i) => <div key={`empty-${i}`} />)}
                    {Array.from({ length: 30 }).map((_, i) => {
                        const dayNum = i + 1;
                        const dateStr = `${dayNum} ${language === 'am' ? ethMonths[currentMonthIdx] : gregMonths[currentMonthIdx]} ${currentYear}`;
                        return (
                            <button 
                                key={dayNum}
                                onClick={() => setSelectedDate(dateStr)}
                                className={`h-12 md:h-16 rounded-2xl md:rounded-[1.5rem] font-black text-sm md:text-lg transition-all duration-300 ${selectedDate === dateStr ? 'bg-[#2563EB] text-white shadow-lg' : 'hover:bg-[#2563EB]/5 text-[#000000]/60'}`}
                            >
                                {dayNum}
                            </button>
                        );
                    })}
                </div>
              </div>

              {/* Time Selection */}
              <div className="flex flex-col gap-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#000000]/30 px-2">{t("Available Slots", "የሚገኙ ሰዓቶች")}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map(time => {
                    const displayTime = language === "am" ? getEthTime(time) : time;
                    return (
                      <button 
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-5 rounded-[1.5rem] font-bold text-xs border-2 transition-all duration-300 ${selectedTime === time ? 'bg-[#000000] border-[#000000] text-white shadow-xl' : 'bg-white border-[#000000]/5 text-[#000000]/60 hover:border-[#2563EB]/20'}`}
                      >
                        {displayTime}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button 
                disabled={!selectedDate || !selectedTime}
                onClick={() => nextStep("form")}
                className={`w-full h-20 rounded-[2rem] flex items-center justify-center gap-3 font-black text-base uppercase tracking-[0.2em] transition-all duration-500 mt-6 ${selectedDate && selectedTime ? 'bg-[#2563EB] text-white shadow-2xl shadow-blue-500/30 hover:-translate-y-1' : 'bg-[#000000]/5 text-[#000000]/20 cursor-not-allowed'}`}
              >
                {t("Continue to Details", "ወደ ዝርዝር መረጃ ይቀጥሉ")}
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          )}

          {/* STEP 4: FORM */}
          {step === "form" && (
            <div className="flex flex-col gap-12 py-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-black tracking-tighter">{t("Patient Details", "የታካሚ መረጃ")}</h2>
              </div>

              <div className="flex flex-col gap-8">
                {/* Full Name */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#000000]/40 px-6">{t("Full Name", "ሙሉ ስም")}</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("Enter your name", "ስምዎን ያስገቡ")}
                    className="w-full h-20 px-8 bg-[#F1F5F9] border-none rounded-[2rem] text-xl font-bold focus:ring-8 focus:ring-[#2563EB]/5 transition-all outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#000000]/40 px-6">{t("Phone Number", "ስልክ ቁጥር")}</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0911..."
                    className="w-full h-20 px-8 bg-[#F1F5F9] border-none rounded-[2rem] text-xl font-bold focus:ring-8 focus:ring-[#2563EB]/5 transition-all outline-none"
                  />
                </div>

                {/* ID Type Selector */}
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#000000]/40 px-6">{t("ID Type", "የማንነት ካርድ")}</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => { setIdType("fayda"); setIdNumber(""); }}
                      className={`flex flex-col items-start gap-3 p-8 rounded-[2.5rem] border-2 transition-all duration-500 ${
                        idType === "fayda"
                          ? "border-[#2563EB] bg-[#2563EB]/5 shadow-xl shadow-blue-500/5"
                          : "border-[#000000]/5 bg-[#FFFFFF] hover:border-[#000000]/15"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        idType === "fayda" ? "bg-[#2563EB] text-white" : "bg-[#F1F5F9] text-[#000000]/30"
                      }`}>
                        <span className="material-symbols-outlined text-[24px]">id_card</span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className={`text-lg font-black leading-none ${
                          idType === "fayda" ? "text-[#2563EB]" : "text-[#000000]/60"
                        }`}>Fayda</span>
                        <span className="text-[10px] font-bold text-[#000000]/30 uppercase tracking-widest">{t("FAYDA CARD", "ፋይዳ ካርድ")}</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => { setIdType("passport"); setIdNumber(""); }}
                      className={`flex flex-col items-start gap-3 p-8 rounded-[2.5rem] border-2 transition-all duration-500 ${
                        idType === "passport"
                          ? "border-[#2563EB] bg-[#2563EB]/5 shadow-xl shadow-blue-500/5"
                          : "border-[#000000]/5 bg-[#FFFFFF] hover:border-[#000000]/15"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        idType === "passport" ? "bg-[#2563EB] text-white" : "bg-[#F1F5F9] text-[#000000]/30"
                      }`}>
                        <span className="material-symbols-outlined text-[24px]">book</span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className={`text-lg font-black leading-none ${
                          idType === "passport" ? "text-[#2563EB]" : "text-[#000000]/60"
                        }`}>Passport</span>
                        <span className="text-[10px] font-bold text-[#000000]/30 uppercase tracking-widest">{t("PASSPORT", "ፓስፖርት")}</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* ID Number */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#000000]/40 px-6">
                    {idType === "fayda" ? t("Fayda ID Number", "የፋይዳ መለያ ቁጥር") : t("Passport Number", "የፓስፖርት ቁጥር")}
                  </label>
                  <input 
                    key={idType}
                    type="text"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    placeholder={idType === "fayda" ? t("Enter Fayda ID", "የፋይዳ መለያ ያስገቡ") : t("Enter Passport No.", "የፓስፖርት ቁጥር ያስገቡ")}
                    className="w-full h-20 px-8 bg-[#F1F5F9] border-none rounded-[2rem] text-xl font-bold focus:ring-8 focus:ring-[#2563EB]/5 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="bg-blue-50/50 p-8 rounded-[2.5rem] border border-blue-100 flex items-start gap-5">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">info</span>
                </div>
                <p className="text-sm font-bold text-blue-900/60 leading-relaxed">
                  {t(`A high-priority SMS confirmation will be sent to your phone. Present this at the ${language === 'en' ? hospital.name : hospital.nameAm} reception to skip manual queues.`, `ከፍተኛ ቅድሚያ የሚሰጠው የኤስኤምኤስ ማረጋገጫ ወደ ስልክዎ ይላካል። በእጅ የሚደረጉ ወረፋዎችን ለማስቀረት ይህንን በ ${language === 'en' ? hospital.name : hospital.nameAm} መስተንግዶ ያሳዩ።`)}
                </p>
              </div>

              <button 
                disabled={!name || !phone || !idNumber}
                onClick={() => { handleConfirmBooking(); nextStep("done"); }}
                className={`w-full h-20 rounded-[2.5rem] flex items-center justify-center gap-3 font-black text-xl uppercase tracking-[0.2em] transition-all duration-500 ${name && phone && idNumber ? 'bg-[#000000] text-white shadow-2xl hover:-translate-y-1' : 'bg-[#000000]/5 text-[#000000]/20 cursor-not-allowed'}`}
              >
                {t("Confirm Appointment", "ቀጠሮውን ያረጋግጡ")}
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </button>
            </div>
          )}

          {/* STEP 5: DONE */}
          {step === "done" && confirmedBooking && (
            <div className="flex flex-col items-center py-10 gap-10 animate-in zoom-in duration-700">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl scale-150 animate-pulse"></div>
                <div className="relative w-32 h-32 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-200">
                    <span className="material-symbols-outlined text-[72px]">check_circle</span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#000000]">{t("Confirmed!", "ተረጋግጧል!")}</h2>
              </div>

              {/* Digital Ticket */}
              <div className="w-full bg-[#FFFFFF] border border-[#000000]/5 rounded-[3rem] p-12 flex flex-col items-center gap-10 shadow-soft overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                    <div className="w-full h-full" style={{ backgroundImage: "url('/Astwash-06.png')", backgroundSize: "100px" }}></div>
                </div>

                <div className="flex flex-col items-center gap-2 relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#000000]/30">{t("Your Booking Code", "የቦታ ማስያዣ ኮድ")}</span>
                    <div className="text-7xl md:text-8xl font-black tracking-[0.1em] text-[#2563EB]">
                        {confirmedBooking.bookingCode}
                    </div>
                </div>

                <div className="w-full h-px bg-[#F1F5F9] relative z-10"></div>
                
                <div className="grid grid-cols-2 gap-x-10 gap-y-6 w-full relative z-10">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#000000]/30">{t("Facility", "ተቋም")}</span>
                        <span className="text-base font-black truncate">{language === "en" ? hospital.name : hospital.nameAm}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#000000]/30">{t("Date & Time", "ቀን እና ሰዓት")}</span>
                        <span className="text-base font-black">{selectedDate} @ {selectedTime}</span>
                    </div>
                    <div className="flex flex-col gap-1 col-span-2 border-t border-[#F1F5F9] pt-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#000000]/30">{t("Department / Specialist", "ክፍል / ስፔሻሊስት")}</span>
                        <span className="text-base font-black">
                            {selectedDoctor 
                                ? `${language === 'en' ? selectedDoctor.name : selectedDoctor.nameAm} (${language === 'en' ? selectedDoctor.specialty : selectedDoctor.specialtyAm})`
                                : (selectedDept ? (language === "en" ? selectedDept.name : selectedDept.nameAm) : "-")
                            }
                        </span>
                    </div>
                </div>
              </div>

              <div className="flex flex-col w-full gap-4">
                <Link 
                  href="/"
                  className="w-full h-20 bg-[#2563EB] text-white rounded-[2rem] flex items-center justify-center font-black uppercase tracking-[0.2em] hover:-translate-y-1 transition-all shadow-2xl shadow-blue-500/30"
                >
                  {t("Back to Home", "ወደ መጀመሪያ ገጽ ተመለስ")}
                </Link>
              </div>
            </div>
          )}

        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center font-black text-4xl animate-pulse">PREPARING BOOKING...</div>}>
      <BookingContent />
    </Suspense>
  );
}
