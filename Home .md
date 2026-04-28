<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Astawash Healthcare - Home</title>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Google Fonts: Manrope -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Configuration -->
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
            boxShadow: {
              'soft': '0 12px 40px rgba(10, 85, 184, 0.08)',
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
        }
        /* Hide scrollbar for clean UI */
        ::-webkit-scrollbar {
            display: none;
        }
        body {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
</head>
<body class="bg-background-light font-display text-background-dark antialiased pb-24">
<!-- Shared Component: TopNavBar (Exact transcription) -->
<div class="relative flex h-auto min-h-screen w-full flex-col bg-slate-50 group/design-root overflow-x-hidden" style='font-family: Manrope, "Noto Sans", sans-serif;'>
<div class="layout-container flex h-full grow flex-col">
<div class="px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1">
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ecf4] px-10 py-3">
<button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0a55b8] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
<span class="truncate">አማ</span>
</button>
</header>
<div class="flex flex-wrap justify-between gap-3 p-4">
<p class="text-[#0d131c] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">What do you need today?</p>
</div>
<div class="flex justify-center">
<div class="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
<button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#0a55b8] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] grow">
<span class="truncate">SEARCH HOSPITALS</span>
</button>
<button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#0a55b8] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] grow">
<span class="truncate">FIND A DOCTOR</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Specialty Grid (Pulled up over the massive empty space of the min-h-screen shared component) -->
<div class="absolute top-[400px] left-0 w-full flex justify-center px-4 pointer-events-none">
<div class="max-w-[960px] w-full flex justify-center gap-6 sm:gap-12 pointer-events-auto flex-wrap">
<!-- Specialty Item: Baby Care -->
<button class="flex flex-col items-center gap-3 group focus:outline-none">
<div class="w-20 h-20 bg-white rounded-full shadow-soft flex items-center justify-center transition-transform group-hover:-translate-y-1">
<span class="material-symbols-outlined text-[40px] text-primary" data-icon="child_care">child_care</span>
</div>
<span class="text-sm font-bold text-background-dark/80">Baby Care</span>
</button>
<!-- Specialty Item: Heart -->
<button class="flex flex-col items-center gap-3 group focus:outline-none">
<div class="w-20 h-20 bg-white rounded-full shadow-soft flex items-center justify-center transition-transform group-hover:-translate-y-1">
<span class="material-symbols-outlined text-[40px] text-primary" data-icon="favorite">favorite</span>
</div>
<span class="text-sm font-bold text-background-dark/80">Heart</span>
</button>
<!-- Specialty Item: Teeth -->
<button class="flex flex-col items-center gap-3 group focus:outline-none">
<div class="w-20 h-20 bg-white rounded-full shadow-soft flex items-center justify-center transition-transform group-hover:-translate-y-1">
<span class="material-symbols-outlined text-[40px] text-primary" data-icon="dentistry">dentistry</span>
</div>
<span class="text-sm font-bold text-background-dark/80">Teeth</span>
</button>
<!-- Specialty Item: General -->
<button class="flex flex-col items-center gap-3 group focus:outline-none">
<div class="w-20 h-20 bg-white rounded-full shadow-soft flex items-center justify-center transition-transform group-hover:-translate-y-1">
<span class="material-symbols-outlined text-[40px] text-primary" data-icon="stethoscope">stethoscope</span>
</div>
<span class="text-sm font-bold text-background-dark/80">General</span>
</button>
</div>
</div>
<!-- Sticky Bottom Navigation -->
<nav class="fixed bottom-0 left-0 w-full h-24 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] z-50 flex justify-center">
<div class="w-full max-w-[960px] h-full flex justify-around items-center px-4 sm:px-10">
<!-- Active Item: Home -->
<button class="flex items-center gap-2 h-12 px-6 rounded-full bg-primary/10 text-primary transition-colors focus:outline-none">
<span class="material-symbols-outlined text-[28px]" data-icon="home" data-weight="fill" style="font-variation-settings: 'FILL' 1;">home</span>
<span class="font-bold text-base hidden sm:block">Home</span>
</button>
<!-- Inactive Item: My Appointments -->
<button class="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-primary transition-colors focus:outline-none">
<span class="material-symbols-outlined text-[28px]" data-icon="calendar_today">calendar_today</span>
<span class="font-semibold text-xs">Appointments</span>
</button>
<!-- Inactive Item: Profile -->
<button class="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-primary transition-colors focus:outline-none">
<span class="material-symbols-outlined text-[28px]" data-icon="person">person</span>
<span class="font-semibold text-xs">Profile</span>
</button>
</div>
</nav>
</body></html>