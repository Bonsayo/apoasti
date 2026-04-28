import Link from "next/link";

export default function TopNavBar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50 flex items-center justify-between whitespace-nowrap px-6 md:px-10 py-4 bg-[#FFFFFF]/80 backdrop-blur-xl border border-[#000000]/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <Link href="/" className="flex items-center gap-4 text-[#000000] group focus:outline-none">
        <div className="relative h-12 md:h-14 group-hover:scale-105 transition-transform duration-300">
          <img src="/Astwash-10.png" alt="Astawash Logo" className="h-full w-auto object-contain" />
        </div>
      </Link>
      <div className="hidden md:flex flex-1 justify-end gap-10">
        <div className="flex items-center gap-10">
          <Link className="text-[#000000]/60 hover:text-[#2563EB] transition-colors text-sm font-bold uppercase tracking-widest" href="/">Home</Link>
          <Link className="text-[#000000]/60 hover:text-[#2563EB] transition-colors text-sm font-bold uppercase tracking-widest" href="/appointments">My Appointments</Link>
          <Link className="text-[#000000]/60 hover:text-[#2563EB] transition-colors text-sm font-bold uppercase tracking-widest" href="/profile">Profile</Link>
        </div>
      </div>
    </header>
  );
}
