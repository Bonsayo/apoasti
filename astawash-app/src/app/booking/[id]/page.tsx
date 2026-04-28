"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getHospitalById, Hospital, Department, Doctor } from "@/data/hospitals";
import { saveBooking } from "@/data/bookings";

type Step = "doctor_knowledge" | "select_doctor" | "select_dept" | "schedule" | "form" | "done";

export default function BookingPage() {
  const { id } = useParams();
  const router = useRouter();
  const [hospital, setHospital] = useState<Hospital | null>(null);
  const [step, setStep] = useState<Step>("doctor_knowledge");
  
  // Selection state
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [calendarType, setCalendarType] = useState<"gregorian" | "ethiopian">("ethiopian");
  
  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [idType, setIdType] = useState<"fayda" | "passport">("fayda");
  const [idNumber, setIdNumber] = useState("");
  
  // Confirmation state
  const [bookingCode, setBookingCode] = useState("");

  useEffect(() => {
    if (id) {
      const h = getHospitalById(id as string);
      if (h) setHospital(h);
      else router.push("/selection");
    }
  }, [id, router]);

  const generateCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setBookingCode(code);
    return code;
  };

  const handleConfirmBooking = () => {
    const code = generateCode();
    if (!hospital) return;
    saveBooking({
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
      bookingCode: code,
      status: "confirmed",
    });
  };

  const nextStep = (next: Step) => setStep(next);

  if (!hospital) return null;

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans">
      {/* Simple Header */}
      <header className="bg-white border-b border-[#000000]/5 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <h1 className="text-lg font-black leading-none">{hospital.name}</h1>
            <p className="text-[10px] font-bold text-[#2563EB]">{hospital.nameAm}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full ${step === 'done' ? 'bg-emerald-500' : 'bg-[#2563EB]'}`}></div>
          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Step {
            step === 'doctor_knowledge' ? 1 : 
            step === 'select_doctor' || step === 'select_dept' ? 2 : 
            step === 'schedule' ? 3 : 
            step === 'form' ? 4 : 5
          }/5</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-6 pb-32">
        
        {/* STEP 1: DOCTOR KNOWLEDGE */}
        {step === "doctor_knowledge" && (
          <div className="flex flex-col gap-10 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col items-center text-center gap-4">
              <span className="material-symbols-outlined text-[64px] text-[#2563EB]/20">person_search</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Do you know which doctor you want?</h2>
              <p className="text-xl font-bold text-[#2563EB]">የሚፈልጉትን ዶክተር ያውቃሉ?</p>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => nextStep("select_doctor")}
                className="group flex items-center justify-between p-8 bg-white border-2 border-[#2563EB] rounded-[2rem] hover:bg-[#2563EB]/5 transition-all text-left"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#2563EB]">YES</span>
                  <span className="text-sm font-bold text-[#2563EB]/60 uppercase tracking-widest">አዎ፣ አውቃለሁ</span>
                </div>
                <span className="material-symbols-outlined text-4xl text-[#2563EB] group-hover:translate-x-2 transition-transform">check_circle</span>
              </button>

              <button 
                onClick={() => nextStep("select_dept")}
                className="group flex items-center justify-between p-8 bg-[#F8FAFC] border-2 border-transparent hover:border-[#000000]/10 rounded-[2rem] transition-all text-left"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#000000]">NO</span>
                  <span className="text-sm font-bold text-[#000000]/40 uppercase tracking-widest">አላውቅም፣ እንዲረዳኝ እፈልጋለሁ</span>
                </div>
                <span className="material-symbols-outlined text-4xl text-[#000000]/20 group-hover:translate-x-2 transition-transform">help</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2A: SELECT DOCTOR */}
        {step === "select_doctor" && (
          <div className="flex flex-col gap-8 py-6 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-black">Select Doctor</h2>
              <p className="text-sm font-bold text-[#2563EB]">ዶክተር ይምረጡ</p>
            </div>
            
            <div className="flex flex-col gap-3">
              {hospital.departments.flatMap(d => d.doctors).map(doc => (
                <button 
                  key={doc.id}
                  onClick={() => { setSelectedDoctor(doc); nextStep("schedule"); }}
                  className="flex items-center gap-6 p-6 bg-white border border-[#000000]/5 rounded-[1.5rem] hover:border-[#2563EB]/30 hover:shadow-lg transition-all text-left group"
                >
                  <div className="w-16 h-16 bg-[#2563EB]/5 rounded-2xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[32px] text-[#2563EB]">medical_services</span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <span className="text-lg font-black">{doc.name}</span>
                    <span className="text-sm font-bold text-[#000000]/40 uppercase tracking-widest">{doc.specialty}</span>
                  </div>
                  <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 text-[#2563EB] transition-opacity">arrow_forward</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2B: SELECT DEPARTMENT */}
        {step === "select_dept" && (
          <div className="flex flex-col gap-8 py-6 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-black">Choose Department</h2>
              <p className="text-sm font-bold text-[#2563EB]">ክፍል ይምረጡ</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hospital.departments.map(dept => (
                <button 
                  key={dept.id}
                  onClick={() => { setSelectedDept(dept); nextStep("schedule"); }}
                  className="flex flex-col items-start gap-4 p-8 bg-white border border-[#000000]/5 rounded-[2rem] hover:border-[#2563EB]/30 hover:shadow-xl transition-all text-left group"
                >
                  <div className="w-14 h-14 bg-[#2563EB]/5 rounded-2xl flex items-center justify-center text-[#2563EB] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">{dept.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-black">{dept.name}</span>
                    <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest">{dept.nameAm}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: SCHEDULE */}
        {step === "schedule" && (
          <div className="flex flex-col gap-8 py-6 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-black">Choose Date & Time</h2>
              <p className="text-sm font-bold text-[#2563EB]">ቀን እና ሰዓት ይምረጡ</p>
            </div>

            {/* Calendar Type Toggle */}
            <div className="flex bg-[#F1F5F9] p-1.5 rounded-2xl w-full">
              <button
                onClick={() => { setCalendarType("ethiopian"); setSelectedDate(""); }}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${calendarType === "ethiopian" ? "bg-white shadow-md text-[#2563EB]" : "text-[#000000]/40 hover:text-[#000000]/60"}`}
              >
                Ethiopian (ኢትዮጵያ)
              </button>
              <button
                onClick={() => { setCalendarType("gregorian"); setSelectedDate(""); }}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${calendarType === "gregorian" ? "bg-white shadow-md text-[#2563EB]" : "text-[#000000]/40 hover:text-[#000000]/60"}`}
              >
                Gregorian
              </button>
            </div>

            {/* Date Selection */}
            <div className="flex flex-col gap-4 mt-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#000000]/40">Available Dates</h3>
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6">
                {(calendarType === "ethiopian" 
                  ? ["ዛሬ (ሚያዚያ 20)", "ነገ (ሚያዚያ 21)", "ረቡዕ, ሚያዚያ 22", "ሀሙስ, ሚያዚያ 23"] 
                  : ["Today", "Tomorrow", "Wed, Apr 29", "Thu, Apr 30"]
                ).map(date => (
                  <button 
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`shrink-0 px-6 py-4 rounded-2xl font-black text-sm border transition-all ${selectedDate === date ? 'bg-[#2563EB] border-[#2563EB] text-white' : 'bg-white border-[#000000]/5 text-[#000000]/60'}`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#000000]/40">Available Slots</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"].map(time => (
                  <button 
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-4 rounded-xl font-black text-xs border transition-all ${selectedTime === time ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-lg' : 'bg-white border-[#000000]/5 text-[#000000]/60'}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <button 
              disabled={!selectedDate || !selectedTime}
              onClick={() => nextStep("form")}
              className={`w-full h-16 rounded-2xl flex items-center justify-center gap-3 font-black text-base uppercase tracking-widest transition-all ${selectedDate && selectedTime ? 'bg-[#000000] text-white shadow-xl hover:scale-[1.02]' : 'bg-[#000000]/5 text-[#000000]/20 cursor-not-allowed'}`}
            >
              CONTINUE
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        )}

        {/* STEP 4: FORM */}
        {step === "form" && (
          <div className="flex flex-col gap-10 py-6 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-black">Your Details</h2>
              <p className="text-lg font-bold text-[#2563EB]">መረጃዎን ያስገቡ</p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#000000]/40 px-2">Full Name (ሙሉ ስም)</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full h-16 px-6 bg-[#F1F5F9] border-none rounded-2xl text-lg font-bold focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#000000]/40 px-2">Phone Number (ስልክ ቁጥር)</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0911..."
                  className="w-full h-16 px-6 bg-[#F1F5F9] border-none rounded-2xl text-lg font-bold focus:ring-4 focus:ring-[#2563EB]/10 transition-all outline-none"
                />
              </div>

              {/* ID Type Selector */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-black uppercase tracking-widest text-[#000000]/40 px-2">ID Type (የማንነት ካርድ)</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => { setIdType("fayda"); setIdNumber(""); }}
                    className={`flex flex-col items-start gap-2 p-5 rounded-2xl border-2 transition-all ${
                      idType === "fayda"
                        ? "border-[#2563EB] bg-[#2563EB]/5"
                        : "border-[#000000]/5 bg-[#F1F5F9] hover:border-[#000000]/15"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      idType === "fayda" ? "bg-[#2563EB] text-white" : "bg-white text-[#000000]/30"
                    }`}>
                      <span className="material-symbols-outlined text-[20px]">id_card</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className={`text-sm font-black leading-none ${
                        idType === "fayda" ? "text-[#2563EB]" : "text-[#000000]/60"
                      }`}>Fayda</span>
                      <span className="text-[10px] font-bold text-[#000000]/30">ፋይዳ ካርድ</span>
                    </div>
                    {idType === "fayda" && (
                      <span className="material-symbols-outlined text-[#2563EB] text-[16px] absolute top-4 right-4" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => { setIdType("passport"); setIdNumber(""); }}
                    className={`flex flex-col items-start gap-2 p-5 rounded-2xl border-2 transition-all ${
                      idType === "passport"
                        ? "border-[#2563EB] bg-[#2563EB]/5"
                        : "border-[#000000]/5 bg-[#F1F5F9] hover:border-[#000000]/15"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      idType === "passport" ? "bg-[#2563EB] text-white" : "bg-white text-[#000000]/30"
                    }`}>
                      <span className="material-symbols-outlined text-[20px]">book</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className={`text-sm font-black leading-none ${
                        idType === "passport" ? "text-[#2563EB]" : "text-[#000000]/60"
                      }`}>Passport</span>
                      <span className="text-[10px] font-bold text-[#000000]/30">ፓስፖርት</span>
                    </div>
                    {idType === "passport" && (
                      <span className="material-symbols-outlined text-[#2563EB] text-[16px] absolute top-4 right-4" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    )}
                  </button>
                </div>
              </div>

              {/* ID Number */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#000000]/40 px-2">
                  {idType === "fayda" ? "Fayda ID Number (ፋይዳ ቁጥር)" : "Passport Number (ፓስፖርት ቁጥር)"}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <span className={`material-symbols-outlined text-[20px] ${
                      idNumber ? "text-[#2563EB]" : "text-[#000000]/20"
                    }`}>{idType === "fayda" ? "id_card" : "book"}</span>
                  </div>
                  <input 
                    key={idType}
                    type="text"
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    placeholder={idType === "fayda" ? "Enter your Fayda ID" : "Enter your Passport No."}
                    className="w-full h-16 pl-14 pr-6 bg-[#F1F5F9] border-2 border-transparent rounded-2xl text-lg font-bold focus:ring-4 focus:ring-[#2563EB]/10 focus:border-[#2563EB]/20 transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-[1.5rem] border border-blue-100 flex items-start gap-4">
              <span className="material-symbols-outlined text-blue-600">info</span>
              <p className="text-sm font-bold text-blue-900/60 leading-relaxed">
                We will send an SMS confirmation to this number. Please show the code when you arrive at the hospital.
              </p>
            </div>

            <button 
              disabled={!name || !phone || !idNumber}
              onClick={() => { handleConfirmBooking(); nextStep("done"); }}
              className={`w-full h-20 rounded-2xl flex items-center justify-center gap-3 font-black text-xl uppercase tracking-widest transition-all ${name && phone && idNumber ? 'bg-[#2563EB] text-white shadow-2xl shadow-blue-200 hover:scale-[1.02]' : 'bg-[#000000]/5 text-[#000000]/20 cursor-not-allowed'}`}
            >
              CONFIRM BOOKING
              <span className="material-symbols-outlined">verified</span>
            </button>
          </div>
        )}

        {/* STEP 5: DONE */}
        {step === "done" && (
          <div className="flex flex-col items-center py-10 gap-8 animate-in zoom-in duration-700">
            <div className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-200">
              <span className="material-symbols-outlined text-[64px]">check</span>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
              <h2 className="text-4xl font-black tracking-tight text-[#000000]">Booking Confirmed!</h2>
              <p className="text-xl font-bold text-emerald-600 uppercase tracking-widest">ቀጠሮዎ ተይዟል</p>
            </div>

            <div className="w-full bg-[#FFFFFF] border-4 border-dashed border-[#F1F5F9] rounded-[2.5rem] p-10 flex flex-col items-center gap-6">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-[#000000]/20">Your Booking Code</span>
              <div className="text-6xl md:text-7xl font-black tracking-[0.2em] text-[#000000]">
                {bookingCode}
              </div>
              <div className="w-full h-px bg-[#F1F5F9]"></div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg font-black">{hospital.name}</span>
                <span className="text-sm font-bold text-[#000000]/40">{selectedDate} at {selectedTime}</span>
              </div>
            </div>

            <div className="flex flex-col w-full gap-4">
              <button 
                onClick={() => router.push("/")}
                className="w-full h-16 bg-[#000000] text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
              >
                BACK TO HOME
              </button>
              <button className="w-full h-16 bg-white border border-[#000000]/10 rounded-2xl font-black uppercase tracking-widest text-[#000000]/40 hover:bg-slate-50 transition-colors">
                SAVE AS IMAGE
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
