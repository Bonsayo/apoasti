<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Smart Triage - Astawash Healthcare</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "primary": "#0a55b8",
          "background-light": "#f5f7f8",
          "background-dark": "#101822",
        },
        fontFamily: {
          "display": ["Manrope"]
        },
        borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
      },
    },
  }
</script>
<style>
  body { font-family: 'Manrope', sans-serif; }
</style>
</head>
<body class="bg-background-light text-[#1A2530] antialiased min-h-screen flex items-center justify-center p-4">
<!-- Backdrop Overlay -->
<div class="fixed inset-0 bg-[#1A2530]/40 backdrop-blur-sm z-40 transition-opacity"></div>
<!-- Modal Container -->
<div class="relative w-full max-w-4xl bg-white rounded-[24px] shadow-[0_12px_40px_rgba(0,74,173,0.08)] z-50 overflow-hidden flex flex-col max-h-[921px]">
<!-- Close Button -->
<button aria-label="Close modal" class="absolute top-6 right-6 text-[#8295A9] hover:text-[#1A2530] transition-colors p-2 rounded-full hover:bg-slate-100 z-10 focus:outline-none">
<span class="material-symbols-outlined text-3xl">close</span>
</button>
<!-- Content Scroll Area -->
<div class="overflow-y-auto px-8 py-10 md:px-16 md:py-16">
<!-- Conversational Header -->
<div class="text-center mb-12">
<h1 class="text-4xl md:text-5xl font-bold tracking-tight text-[#1A2530] mb-4">Where does it hurt?</h1>
<p class="text-lg md:text-xl text-[#8295A9] font-medium">Select an area to find the right specialist quickly.</p>
</div>
<!-- Visual Symptom Grid -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
<!-- Option 1: Head & Neck -->
<button class="group flex flex-col items-center justify-center gap-4 bg-[#F4F7F9] hover:bg-white border-2 border-transparent hover:border-primary rounded-[24px] p-8 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-primary/20">
<div class="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
<span class="material-symbols-outlined text-[48px]" style="font-variation-settings: 'FILL' 0;">psychology</span>
</div>
<span class="text-xl font-bold text-[#1A2530] text-center">Head &amp; Neck</span>
</button>
<!-- Option 2: Chest & Heart -->
<button class="group flex flex-col items-center justify-center gap-4 bg-[#F4F7F9] hover:bg-white border-2 border-transparent hover:border-primary rounded-[24px] p-8 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-primary/20">
<div class="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
<span class="material-symbols-outlined text-[48px]" style="font-variation-settings: 'FILL' 0;">ecg_heart</span>
</div>
<span class="text-xl font-bold text-[#1A2530] text-center">Chest &amp; Heart</span>
</button>
<!-- Option 3: Stomach -->
<button class="group flex flex-col items-center justify-center gap-4 bg-[#F4F7F9] hover:bg-white border-2 border-transparent hover:border-primary rounded-[24px] p-8 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-primary/20">
<div class="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
<span class="material-symbols-outlined text-[48px]" style="font-variation-settings: 'FILL' 0;">medication</span>
</div>
<span class="text-xl font-bold text-[#1A2530] text-center">Stomach</span>
</button>
<!-- Option 4: Bones & Joints -->
<button class="group flex flex-col items-center justify-center gap-4 bg-[#F4F7F9] hover:bg-white border-2 border-transparent hover:border-primary rounded-[24px] p-8 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-primary/20">
<div class="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
<span class="material-symbols-outlined text-[48px]" style="font-variation-settings: 'FILL' 0;">accessibility_new</span>
</div>
<span class="text-xl font-bold text-[#1A2530] text-center">Bones &amp; Joints</span>
</button>
<!-- Option 5: Skin -->
<button class="group flex flex-col items-center justify-center gap-4 bg-[#F4F7F9] hover:bg-white border-2 border-transparent hover:border-primary rounded-[24px] p-8 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-primary/20">
<div class="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
<span class="material-symbols-outlined text-[48px]" style="font-variation-settings: 'FILL' 0;">front_hand</span>
</div>
<span class="text-xl font-bold text-[#1A2530] text-center">Skin</span>
</button>
<!-- Option 6: Eyes -->
<button class="group flex flex-col items-center justify-center gap-4 bg-[#F4F7F9] hover:bg-white border-2 border-transparent hover:border-primary rounded-[24px] p-8 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-primary/20">
<div class="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
<span class="material-symbols-outlined text-[48px]" style="font-variation-settings: 'FILL' 0;">visibility</span>
</div>
<span class="text-xl font-bold text-[#1A2530] text-center">Eyes</span>
</button>
<!-- Option 7: Mental Health -->
<button class="group flex flex-col items-center justify-center gap-4 bg-[#F4F7F9] hover:bg-white border-2 border-transparent hover:border-primary rounded-[24px] p-8 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-primary/20">
<div class="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
<span class="material-symbols-outlined text-[48px]" style="font-variation-settings: 'FILL' 0;">sentiment_satisfied</span>
</div>
<span class="text-xl font-bold text-[#1A2530] text-center">Mental Health</span>
</button>
<!-- Option 8: Other -->
<button class="group flex flex-col items-center justify-center gap-4 bg-[#F4F7F9] hover:bg-white border-2 border-transparent hover:border-primary rounded-[24px] p-8 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-4 focus:ring-primary/20">
<div class="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
<span class="material-symbols-outlined text-[48px]" style="font-variation-settings: 'FILL' 0;">more_horiz</span>
</div>
<span class="text-xl font-bold text-[#1A2530] text-center">Other</span>
</button>
</div>
<!-- Skip CTA -->
<div class="flex justify-center border-t border-slate-100 pt-8">
<button class="flex items-center justify-center h-14 px-8 rounded-full bg-transparent hover:bg-slate-50 text-[#1A2530] text-lg font-bold leading-normal tracking-wide transition-colors group focus:outline-none focus:ring-4 focus:ring-slate-200">
<span class="group-hover:text-primary transition-colors">I'm not sure, just show General Doctors</span>
<span class="material-symbols-outlined ml-2 text-xl text-[#8295A9] group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300">arrow_forward</span>
</button>
</div>
</div>
</div>
</body></html>