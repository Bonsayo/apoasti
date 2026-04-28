<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Astawash Healthcare - Selection</title>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
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
              "display": ["Manrope", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "0.5rem", "lg": "1.5rem", "xl": "1.5rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        body { font-family: 'Manrope', sans-serif; }
    </style>
</head>
<body class="bg-background-light text-[#0d131c] min-h-screen flex flex-col">
<!-- Top Navbar (Shared Component) -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ecf4] px-10 py-3 bg-white sticky top-0 z-50">
<div class="flex items-center gap-4 text-[#0d131c]">
<div class="size-4 text-primary">
<svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_535)">
<path clip-rule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fill-rule="evenodd"></path>
</g>
<defs>
<clippath id="clip0_6_535"><rect fill="white" height="48" width="48"></rect></clippath>
</defs>
</svg>
</div>
<h2 class="text-[#0d131c] text-lg font-bold leading-tight tracking-[-0.015em]">Astawash Healthcare</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-[#0d131c] hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Home</a>
<a class="text-[#0d131c] hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">My Appointments</a>
<a class="text-[#0d131c] hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Profile</a>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 flex justify-center py-8 px-4 sm:px-6 lg:px-8">
<div class="max-w-[1200px] w-full flex flex-col md:flex-row gap-8">
<!-- Sidebar / Filters -->
<aside class="w-full md:w-72 flex-shrink-0 flex flex-col gap-4">
<div class="flex items-center justify-between mb-2">
<h3 class="text-xl font-bold">Filters</h3>
<button class="text-sm font-medium text-primary hover:underline">Reset</button>
</div>
<!-- Filter Radio Group (Shared Component Logic) -->
<div class="flex flex-col gap-3" style="--radio-dot-svg: url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(10,85,184)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e');">
<label class="flex items-center gap-4 rounded-xl border border-solid border-[#cedae8] p-[15px] bg-white hover:bg-slate-50 cursor-pointer transition-colors">
<input checked="" class="h-6 w-6 border-2 border-[#cedae8] bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer" name="filter-type" type="radio"/>
<div class="flex grow flex-col"><p class="text-[#0d131c] text-base font-semibold leading-normal">Nearest</p></div>
</label>
<label class="flex items-center gap-4 rounded-xl border border-solid border-[#cedae8] p-[15px] bg-white hover:bg-slate-50 cursor-pointer transition-colors">
<input class="h-6 w-6 border-2 border-[#cedae8] bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer" name="filter-type" type="radio"/>
<div class="flex grow flex-col"><p class="text-[#0d131c] text-base font-medium leading-normal">Public vs Private</p></div>
</label>
<label class="flex items-center gap-4 rounded-xl border border-solid border-[#cedae8] p-[15px] bg-white hover:bg-slate-50 cursor-pointer transition-colors">
<input class="h-6 w-6 border-2 border-[#cedae8] bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer" name="filter-type" type="radio"/>
<div class="flex grow flex-col"><p class="text-[#0d131c] text-base font-medium leading-normal">Level of Care</p></div>
</label>
</div>
</aside>
<!-- Main Directory Area -->
<div class="flex-1 flex flex-col gap-4">
<div class="flex items-center justify-between mb-2">
<h1 class="text-3xl font-bold font-display">Hospitals near you</h1>
<span class="text-sm text-[#496d9c] font-medium">12 Results</span>
</div>
<!-- Directory List -->
<div class="flex flex-col gap-4">
<!-- Card 1: Selected State -->
<div class="group relative flex items-center gap-6 bg-white border-2 border-primary rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer min-h-[120px] ring-4 ring-primary/10">
<div class="flex-shrink-0">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border border-slate-100 shadow-sm" data-alt="modern hospital building exterior daytime clear sky" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvCl4kgxyCTVqfmB2ORLiFhtNDYTcXH6fCqwGUTRyG1EnN4RhJHQ_oOIvh3t4AGjuOkBqRl7CQkbgaGWLLNUF0jsjn-cOfVIasr4Cxxo-HMd4aBAZMup4g138ukxyzCLwM-wnKRxEydnCwvHL2X4SIFk1a8o2RWFHd1MlohrxOguMD7IjbW9Zx7od-h87tkE-KSmCi-0918WICwTdFNq7Y6ZVRy6r7Kb0YvjKi8deq3sA5UVp8GVJ7OVLKfS8eJlwDUfslwiHVCVg");'></div>
</div>
<div class="flex flex-col justify-center flex-1">
<div class="flex items-center gap-3 mb-1">
<h3 class="text-[#0d131c] text-2xl font-bold font-display leading-tight line-clamp-1">Addis General Hospital</h3>
<div class="flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded-full">
<div class="w-3 h-3 rounded-full bg-[#10B981]"></div>
<span class="text-xs font-bold text-[#10B981] uppercase tracking-wide">Accepting</span>
</div>
</div>
<p class="text-[#496d9c] text-base font-medium leading-normal flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]">location_on</span>
                                1.2 km away • Downtown Addis
                            </p>
</div>
<div class="flex-shrink-0 pl-4 border-l border-slate-100">
<button class="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-sm">
<span>Book Now</span>
</button>
</div>
</div>
<!-- Card 2: Default State (Available) -->
<div class="group relative flex items-center gap-6 bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer min-h-[120px]">
<div class="flex-shrink-0">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border border-slate-100 shadow-sm" data-alt="clean brightly lit hospital corridor with medical equipment" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfY2Q2XdhlNYZHcJkyZwFr7gv1mneO5CR9cHsWCnQqgCtr_0_jk3JcnQLNYteAwFy0VN3gkoXJQWOLELIkrMkjwsEfntK2ej-dH3LUSqf4XMv93mXZ1QB7gGKNvd8VkFBnk9exFWALrqGB7He1V7n5y_bBbC1u-WMo8Iv8VGnTF2bl2cgOmxhrYjfBsnduO3i7EzRfFjxu4s0MHHqLWpA7m3NzIP2xi2faeZkzszNfvmq9RHkJDCDJm1TejoVb6pQ4y8eCg5V8W90");'></div>
</div>
<div class="flex flex-col justify-center flex-1">
<div class="flex items-center gap-3 mb-1">
<h3 class="text-[#0d131c] text-2xl font-bold font-display leading-tight line-clamp-1">St. Paul's Hospital</h3>
<div class="flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded-full">
<div class="w-3 h-3 rounded-full bg-[#10B981]"></div>
<span class="text-xs font-bold text-[#10B981] uppercase tracking-wide">Accepting</span>
</div>
</div>
<p class="text-[#496d9c] text-base font-medium leading-normal flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]">location_on</span>
                                3.4 km away • West District
                            </p>
</div>
<div class="flex-shrink-0 pl-4 border-l border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-slate-100 text-primary text-base font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">
<span>Select</span>
</button>
</div>
</div>
<!-- Card 3: Busy State -->
<div class="group relative flex items-center gap-6 bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer min-h-[120px]">
<div class="flex-shrink-0">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border border-slate-100 shadow-sm" data-alt="modern medical clinic exterior with glass facade daytime" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwk5fUQdafp5tnql5TY5VF_5GKuCOwWWcpcdxYOYBZ1Y-T0qmjdshHNW5Y9BfhvjEC78jPJtA2MjUmwiSESbGGv24Trg1ZwmKnRg_0mbg7VuDgGoXTegRDU1Bj9hykrqGdrn8RmK3RvbxSiJ5602GjmZxF3ESyCEwKuyvUED4_xD6qfcmbIbP0o6VkolRt3BMqbRwz7DTj0uQYj0TpS6F3s2iGK-_9CZSLK16WYtGR-uL-3VsH37zUvDs0sbynlUQTEJDkiG6ZJ38");'></div>
</div>
<div class="flex flex-col justify-center flex-1">
<div class="flex items-center gap-3 mb-1">
<h3 class="text-[#0d131c] text-2xl font-bold font-display leading-tight line-clamp-1">Bole Specialty Clinic</h3>
<div class="flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-full">
<div class="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
<span class="text-xs font-bold text-[#F59E0B] uppercase tracking-wide">Busy</span>
</div>
</div>
<p class="text-[#496d9c] text-base font-medium leading-normal flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]">location_on</span>
                                5.1 km away • Bole
                            </p>
</div>
<div class="flex-shrink-0 pl-4 border-l border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-slate-100 text-primary text-base font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">
<span>Select</span>
</button>
</div>
</div>
<!-- Card 4: Full/Unavailable State -->
<div class="group relative flex items-center gap-6 bg-slate-50 border border-slate-200 rounded-lg p-4 min-h-[120px] opacity-75">
<div class="flex-shrink-0 grayscale">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border border-slate-200 shadow-sm" data-alt="hospital entrance area with medical staff walking blur" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMKSQrGxg-ViEaP5RfG2O7sfpn0hUgCS5YU17cPe9GIq_hyNIAgaN8MBiXx3DtUMRI0PkjNLIe7csM-a3BhyWMS5-ZIcgSJGSEn6an6mvPMunGxYd-hqKvXDdHciPbSk7QogCcCZhBcKNtnZbgFAUlQZF_eHvcNh4uHQTDoaCIn4eLmGi_OaeXMqnhzhkA_76BBIQUuOLa9k5TQqGKw6kQfT8nMpKODZPT9Krwf-r-CGcgBh1R5wkoYpDcq0LPZLxdiIm5hNqcClc");'></div>
</div>
<div class="flex flex-col justify-center flex-1">
<div class="flex items-center gap-3 mb-1">
<h3 class="text-[#8295a9] text-2xl font-bold font-display leading-tight line-clamp-1">Yeka Medical Center</h3>
<div class="flex items-center gap-1.5 bg-red-50 px-2 py-1 rounded-full">
<div class="w-3 h-3 rounded-full bg-[#EF4444]"></div>
<span class="text-xs font-bold text-[#EF4444] uppercase tracking-wide">Full</span>
</div>
</div>
<p class="text-[#8295a9] text-base font-medium leading-normal flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]">location_on</span>
                                8.0 km away • Yeka District
                            </p>
</div>
<div class="flex-shrink-0 pl-4">
<div class="flex min-w-[120px] items-center justify-center h-12 px-6 text-[#8295a9] text-sm font-semibold uppercase tracking-wider">
                                Unavailable
                            </div>
</div>
</div>
</div>
</div>
</div>
</main>
</body></html>