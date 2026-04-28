<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Complete Booking - Astawash</title>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Theme Configuration -->
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
</head>
<body class="bg-background-light font-display text-slate-900 min-h-screen flex flex-col antialiased">
<!-- Minimal Header (Focused View) -->
<header class="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex items-center gap-4 sticky top-0 z-20 shadow-sm">
<button class="size-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors focus:ring-2 focus:ring-primary outline-none">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h1 class="text-2xl font-bold tracking-tight">Complete Your Booking</h1>
</header>
<!-- Main Content: Split Pane -->
<main class="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8 items-start">
<!-- Left Pane: Contextual Details -->
<div class="w-full lg:w-1/3 flex flex-col gap-6 sticky top-28">
<!-- Doctor/Facility Summary -->
<section class="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex items-center gap-5">
<div class="size-20 rounded-full bg-slate-200 bg-cover bg-center shrink-0 border border-slate-100" data-alt="Portrait of a friendly female doctor wearing a stethoscope and white coat in a bright clinic setting" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUcFGuGeVC-FAuq3OV9PdgMsRqYAXU960Sm_anB3IBXkTRPbFcts2Eq9aaHHckS3FHgyzoI4X6T0Jkm8YCLT2yE8KWs7H-P01uoL9BLV5BDstww-H3AoxmzvoCADIk_xSjLdjTjWlVyhdDOEaGfZ01LawHlFX40KqzEiMnpMQfMQBTMqUEIs4wyPQZk4QajFyz-ZG_GDn6LZt0LN-hEB0SaSjx7Kuzq5hU6q-4vSwhGO1iIodXmFt41kc6gH9n3hmFw8-R39Psojw');">
</div>
<div>
<h2 class="text-xl font-bold text-slate-900 leading-tight">Dr. Sarah Abebe</h2>
<p class="text-slate-500 font-medium">General Practice</p>
<div class="flex items-center gap-1 text-emerald-600 mt-1">
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="text-sm font-bold">Available Today</span>
</div>
</div>
</section>
<!-- Contextual Patient Toggle -->
<section class="bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex flex-col gap-4">
<h3 class="text-lg font-bold text-slate-900">Who is this visit for?</h3>
<div class="flex h-14 w-full max-w-[360px] items-center justify-center rounded-lg bg-background-light p-1 border border-slate-200">
<label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white has-[:checked]:shadow-sm has-[:checked]:border has-[:checked]:border-slate-200 has-[:checked]:text-primary text-slate-500 text-base font-bold transition-all select-none">
<span>Booking for Me</span>
<input checked="" class="invisible w-0 absolute" name="patient-type" type="radio" value="me"/>
</label>
<label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white has-[:checked]:shadow-sm has-[:checked]:border has-[:checked]:border-slate-200 has-[:checked]:text-primary text-slate-500 text-base font-bold transition-all select-none">
<span>Booking for My Child</span>
<input class="invisible w-0 absolute" name="patient-type" type="radio" value="child"/>
</label>
</div>
</section>
</div>
<!-- Right Pane: Calendar & Time Grid -->
<div class="w-full lg:w-2/3 bg-white rounded-lg shadow-sm border border-slate-200 relative overflow-hidden flex flex-col pb-28 lg:pb-0 min-h-[600px]">
<div class="p-6 md:p-8 flex-1 overflow-y-auto">
<!-- Date Selection -->
<section class="mb-10">
<h3 class="text-2xl font-bold text-slate-900 mb-6">Select a Date</h3>
<div class="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 md:-mx-8 md:px-8 snap-x snap-mandatory hide-scrollbar">
<!-- Selected Date -->
<button class="snap-start shrink-0 w-[110px] h-[130px] rounded-lg border-2 border-primary bg-primary text-white flex flex-col items-center justify-center gap-1 shadow-md transform transition-transform hover:scale-105 outline-none focus:ring-4 focus:ring-primary/30">
<span class="text-sm font-bold uppercase tracking-widest text-blue-100">Today</span>
<span class="text-4xl font-black tracking-tighter">12</span>
<span class="text-base font-bold text-blue-100">Oct</span>
</button>
<!-- Available Dates -->
<button class="snap-start shrink-0 w-[110px] h-[130px] rounded-lg border-2 border-slate-100 bg-white text-slate-700 flex flex-col items-center justify-center gap-1 hover:border-primary hover:text-primary transition-colors outline-none focus:ring-4 focus:ring-primary/30">
<span class="text-sm font-bold uppercase tracking-widest text-slate-400">Tomorrow</span>
<span class="text-4xl font-black tracking-tighter">13</span>
<span class="text-base font-bold text-slate-500">Oct</span>
</button>
<button class="snap-start shrink-0 w-[110px] h-[130px] rounded-lg border-2 border-slate-100 bg-white text-slate-700 flex flex-col items-center justify-center gap-1 hover:border-primary hover:text-primary transition-colors outline-none focus:ring-4 focus:ring-primary/30">
<span class="text-sm font-bold uppercase tracking-widest text-slate-400">Wed</span>
<span class="text-4xl font-black tracking-tighter">14</span>
<span class="text-base font-bold text-slate-500">Oct</span>
</button>
<button class="snap-start shrink-0 w-[110px] h-[130px] rounded-lg border-2 border-slate-100 bg-white text-slate-700 flex flex-col items-center justify-center gap-1 hover:border-primary hover:text-primary transition-colors outline-none focus:ring-4 focus:ring-primary/30">
<span class="text-sm font-bold uppercase tracking-widest text-slate-400">Thu</span>
<span class="text-4xl font-black tracking-tighter">15</span>
<span class="text-base font-bold text-slate-500">Oct</span>
</button>
<button class="snap-start shrink-0 w-[110px] h-[130px] rounded-lg border-2 border-slate-100 bg-white text-slate-700 flex flex-col items-center justify-center gap-1 hover:border-primary hover:text-primary transition-colors outline-none focus:ring-4 focus:ring-primary/30">
<span class="text-sm font-bold uppercase tracking-widest text-slate-400">Fri</span>
<span class="text-4xl font-black tracking-tighter">16</span>
<span class="text-base font-bold text-slate-500">Oct</span>
</button>
</div>
</section>
<hr class="border-slate-100 mb-8"/>
<!-- Time Selection -->
<section>
<div class="flex items-center justify-between mb-6">
<h3 class="text-2xl font-bold text-slate-900">Select a Time</h3>
<span class="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">EAT Timezone</span>
</div>
<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
<!-- Past / Unavailable -->
<div class="h-14 rounded-lg border-2 border-transparent bg-slate-50 text-slate-400 flex items-center justify-center font-bold text-lg opacity-60 cursor-not-allowed">
<span class="line-through decoration-slate-300">08:00 AM</span>
</div>
<div class="h-14 rounded-lg border-2 border-transparent bg-slate-50 text-slate-400 flex items-center justify-center font-bold text-lg opacity-60 cursor-not-allowed">
<span class="line-through decoration-slate-300">09:00 AM</span>
</div>
<!-- Selected Time -->
<button class="h-14 rounded-lg border-2 border-primary bg-primary text-white flex items-center justify-center font-bold text-lg shadow-md transform transition-transform hover:scale-105 outline-none focus:ring-4 focus:ring-primary/30">
                            10:00 AM
                        </button>
<!-- Available Times -->
<button class="h-14 rounded-lg border-2 border-slate-200 bg-white text-slate-700 flex items-center justify-center font-bold text-lg hover:border-primary hover:text-primary transition-colors outline-none focus:ring-4 focus:ring-primary/30">
                            10:30 AM
                        </button>
<button class="h-14 rounded-lg border-2 border-slate-200 bg-white text-slate-700 flex items-center justify-center font-bold text-lg hover:border-primary hover:text-primary transition-colors outline-none focus:ring-4 focus:ring-primary/30">
                            11:00 AM
                        </button>
<button class="h-14 rounded-lg border-2 border-slate-200 bg-white text-slate-700 flex items-center justify-center font-bold text-lg hover:border-primary hover:text-primary transition-colors outline-none focus:ring-4 focus:ring-primary/30">
                            11:30 AM
                        </button>
<button class="h-14 rounded-lg border-2 border-slate-200 bg-white text-slate-700 flex items-center justify-center font-bold text-lg hover:border-primary hover:text-primary transition-colors outline-none focus:ring-4 focus:ring-primary/30">
                            01:00 PM
                        </button>
<button class="h-14 rounded-lg border-2 border-slate-200 bg-white text-slate-700 flex items-center justify-center font-bold text-lg hover:border-primary hover:text-primary transition-colors outline-none focus:ring-4 focus:ring-primary/30">
                            02:00 PM
                        </button>
</div>
</section>
</div>
<!-- Sticky CTA Container -->
<div class="fixed bottom-0 left-0 w-full lg:absolute lg:bottom-0 lg:left-0 lg:w-full bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 md:p-6 flex justify-end z-10">
<button class="w-full lg:w-auto min-w-[280px] h-16 bg-primary text-white rounded-lg shadow-[0_8px_30px_rgba(10,85,184,0.3)] hover:bg-blue-700 transition-all active:scale-[0.98] flex items-center justify-center gap-3 outline-none focus:ring-4 focus:ring-primary/30">
<span class="text-xl font-bold uppercase tracking-wide">Confirm Appointment</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">arrow_forward</span>
</button>
</div>
</div>
</main>
<style>
        /* Utility to hide scrollbar but keep functionality for the horizontal calendar */
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
</body></html>