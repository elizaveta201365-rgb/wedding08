import { createFileRoute } from "@tanstack/react-router";
import photoBooth from "@/assets/photo-booth.png.asset.json";
import blossom from "@/assets/blossom.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen w-full bg-[#f5f2ea] text-[#2d3d2a] overflow-hidden relative font-serif">
      {/* Soft ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 20% 15%, #ffffff 0%, transparent 65%), radial-gradient(60% 55% at 85% 90%, #ebe6d8 0%, transparent 70%)",
        }}
      />

      {/* Decorative blossoms — corners */}
      <img
        src={blossom.url}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -top-16 -left-20 w-[420px] opacity-95 rotate-[-15deg]"
      />
      <img
        src={blossom.url}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-24 -right-16 w-[460px] opacity-90 rotate-[165deg]"
      />
      <img
        src={blossom.url}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute top-1/3 -right-40 w-[320px] opacity-70 rotate-[45deg] hidden lg:block"
      />

      <section className="relative mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center w-full">
          {/* Left column — invitation text */}
          <div className="animate-fade-up order-2 md:order-1 relative">
            <div className="flex items-center gap-3 mb-6 text-[#5a6b4e]">
              <span className="block h-px w-10 bg-[#b8956a]" />
              <span className="font-sans uppercase tracking-[0.4em] text-[10px]">
                save the date · 2026
              </span>
              <span className="block h-px w-10 bg-[#b8956a]" />
            </div>

            <p className="italic text-lg md:text-xl text-[#5a6b4e] mb-3 tracking-wide">
              электронное
            </p>
            <h2 className="font-serif italic text-4xl md:text-5xl text-[#2d3d2a] mb-3 leading-tight">
              приглашение
            </h2>
            <div className="flex items-center gap-3 mb-8 text-[#5a6b4e]">
              <span className="block h-px w-8 bg-[#b8956a]" />
              <span className="font-sans uppercase tracking-[0.35em] text-[11px]">
                на свадьбу
              </span>
              <span className="block h-px w-8 bg-[#b8956a]" />
            </div>

            <p className="font-sans text-[15px] leading-[1.9] text-[#3d4a37] max-w-md mb-6">
              С трепетом и радостью в сердце мы приглашаем вас разделить с нами
              один из самых важных дней нашей жизни — день, когда мы навсегда
              соединим наши судьбы.
            </p>
            <p className="font-sans text-[15px] leading-[1.9] text-[#3d4a37] max-w-md mb-10">
              Будем счастливы видеть вас рядом — под шёпот сосен и мягкий свет
              летнего вечера на берегу залива.
            </p>

            {/* Details */}
            <div className="flex items-stretch gap-6 mb-10">
              <div>
                <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#5a6b4e] mb-1">
                  когда
                </div>
                <div className="italic text-2xl md:text-[26px] text-[#2d3d2a]">
                  08 · 08 · 2026
                </div>
                <div className="font-sans text-xs text-[#5a6b4e] mt-1 tracking-widest uppercase">
                  суббота
                </div>
              </div>
              <span className="w-px bg-[#c9bba3]" />
              <div>
                <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#5a6b4e] mb-1">
                  где
                </div>
                <div className="italic text-xl md:text-[22px] text-[#2d3d2a] leading-tight">
                  Дача на заливе
                </div>
                <div className="font-sans text-xs text-[#5a6b4e] mt-1">
                  Санкт-Петербург, Приморское ш., 448
                </div>
              </div>
            </div>

            <a
              href="#rsvp"
              className="group inline-flex items-center justify-center gap-3 bg-[#2d3d2a] border border-[#2d3d2a] px-10 py-4 font-sans text-[11px] tracking-[0.35em] uppercase text-[#f5f2ea] hover:bg-[#3d5238] transition-all duration-500"
            >
              <span>стать свидетелем чуда</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Right column — photo card with overlay */}
          <div className="relative order-1 md:order-2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(45,61,42,0.4)] animate-fade-up">
              <img
                src={photoBooth.url}
                alt="Андрей и Елизавета"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Dark elegant overlay */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(45,61,42,0.55) 0%, rgba(45,61,42,0.15) 40%, rgba(45,61,42,0.2) 70%, rgba(45,61,42,0.8) 100%)",
                }}
              />

              {/* Top corner label */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[#f4ead8]">
                <span className="font-sans uppercase tracking-[0.35em] text-[9px] opacity-90">
                  свадьба
                </span>
                <span className="font-sans uppercase tracking-[0.35em] text-[9px] opacity-90">
                  08.08.26
                </span>
              </div>

              {/* Names overlaid */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[#f4ead8] px-6">
                <h1 className="italic leading-[0.95] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
                  <span className="block text-5xl md:text-6xl lg:text-7xl">
                    Андрей
                  </span>
                  <span className="block italic text-2xl md:text-3xl text-[#e6c99b] my-2">
                    &amp;
                  </span>
                  <span className="block text-5xl md:text-6xl lg:text-7xl">
                    Елизавета
                  </span>
                </h1>
                <div className="mt-5 flex items-center justify-center gap-3 text-[#e6c99b]">
                  <span className="h-px w-8 bg-[#e6c99b]/60" />
                  <span className="italic text-sm tracking-widest">
                    08.08.2026
                  </span>
                  <span className="h-px w-8 bg-[#e6c99b]/60" />
                </div>
              </div>

              {/* Bottom quote */}
              <div className="absolute bottom-6 inset-x-6 text-center text-[#f4ead8]/90">
                <p className="italic text-[13px] leading-relaxed">
                  «не существует чести или семи чудес в мире.
                  <br />
                  есть только одно — это любовь»
                </p>
              </div>
            </div>

            {/* Small blossom accent near photo */}
            <img
              src={blossom.url}
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute -top-10 -right-8 w-40 opacity-90 rotate-[25deg]"
            />
          </div>
        </div>

        {/* Bottom hairline */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[#5a6b4e]">
          <span className="h-px w-10 bg-[#b8956a]" />
          <span className="italic text-sm">навсегда вместе</span>
          <span className="h-px w-10 bg-[#b8956a]" />
        </div>
      </section>
    </main>
  );
}
