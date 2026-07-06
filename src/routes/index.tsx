import { createFileRoute } from "@tanstack/react-router";
import photoBooth from "@/assets/photo-booth.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen w-full bg-[#eceae5] text-[#2a2620] overflow-hidden relative font-serif">
      {/* Soft ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 20% 15%, #f4f1ea 0%, transparent 70%), radial-gradient(60% 55% at 85% 90%, #e4dfd4 0%, transparent 70%)",
        }}
      />

      <section className="relative mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center w-full">
          {/* Left column — invitation text on cream */}
          <div className="animate-fade-up order-2 md:order-1 relative">
            <div className="flex items-center gap-3 mb-6 text-[#8a7a63]">
              <span className="block h-px w-10 bg-[#b8a37f]" />
              <span className="font-sans uppercase tracking-[0.4em] text-[10px]">
                save the date · 2026
              </span>
              <span className="block h-px w-10 bg-[#b8a37f]" />
            </div>

            <p className="italic text-lg md:text-xl text-[#8a7a63] mb-4 tracking-wide">
              дорогие
            </p>
            <h2 className="font-serif italic text-3xl md:text-4xl text-[#2a2620] mb-8 leading-tight">
              родные и близкие!
            </h2>

            <p className="font-sans text-[15px] leading-[1.9] text-[#4a4238] max-w-md mb-6">
              С трепетом и радостью в сердце мы приглашаем вас разделить с нами
              один из самых важных дней нашей жизни — день, когда мы навсегда
              соединим наши судьбы.
            </p>
            <p className="font-sans text-[15px] leading-[1.9] text-[#4a4238] max-w-md mb-10">
              Будем счастливы видеть вас рядом — под шёпот сосен и мягкий свет
              летнего вечера на берегу залива.
            </p>

            {/* Details */}
            <div className="flex items-stretch gap-6 mb-10">
              <div>
                <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#8a7a63] mb-1">
                  когда
                </div>
                <div className="italic text-2xl md:text-[26px] text-[#2a2620]">
                  08 · 08 · 2026
                </div>
                <div className="font-sans text-xs text-[#8a7a63] mt-1 tracking-widest uppercase">
                  суббота
                </div>
              </div>
              <span className="w-px bg-[#c9bba3]" />
              <div>
                <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#8a7a63] mb-1">
                  где
                </div>
                <div className="italic text-xl md:text-[22px] text-[#2a2620] leading-tight">
                  Дача на заливе
                </div>
                <div className="font-sans text-xs text-[#8a7a63] mt-1">
                  Санкт-Петербург, Приморское ш., 448
                </div>
              </div>
            </div>

            <a
              href="#rsvp"
              className="group inline-flex items-center justify-center gap-3 border border-[#b8a37f] px-10 py-4 font-sans text-[11px] tracking-[0.35em] uppercase text-[#8a6f4a] hover:bg-[#b8a37f] hover:text-[#faf7f0] transition-all duration-500"
            >
              <span>стать свидетелем чуда</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Right column — photo card with overlay */}
          <div className="relative order-1 md:order-2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(50,35,20,0.35)] animate-fade-up">
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
                    "linear-gradient(180deg, rgba(30,24,18,0.55) 0%, rgba(30,24,18,0.15) 40%, rgba(30,24,18,0.15) 70%, rgba(30,24,18,0.75) 100%)",
                }}
              />

              {/* Top corner label */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[#f4ead8]">
                <span className="font-sans uppercase tracking-[0.35em] text-[9px] opacity-80">
                  свадьба
                </span>
                <span className="font-sans uppercase tracking-[0.35em] text-[9px] opacity-80">
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
          </div>
        </div>

        {/* Bottom hairline */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[#8a7a63]">
          <span className="h-px w-10 bg-[#c9bba3]" />
          <span className="italic text-sm">навсегда вместе</span>
          <span className="h-px w-10 bg-[#c9bba3]" />
        </div>
      </section>
    </main>
  );
}
