import { createFileRoute } from "@tanstack/react-router";
import photoBooth from "@/assets/photo-booth.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen w-full bg-white text-[#3a2e28] overflow-hidden relative">
      {/* Ambient background flourishes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 20%, #f6ebe0 0%, transparent 60%), radial-gradient(50% 45% at 85% 85%, #efe3d4 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
        style={{ background: "#e9d3c1" }}
      />

      <section className="relative mx-auto max-w-7xl px-6 md:px-12 py-14 md:py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
          {/* Left column — invitation text */}
          <div className="animate-fade-up order-2 md:order-1">
            <div className="flex items-center gap-4 mb-8">
              <span className="block h-px w-12 bg-[#b8846b] origin-left animate-shimmer-line" />
              <span className="font-sans uppercase tracking-[0.35em] text-xs text-[#b8846b]">
                Save the date
              </span>
            </div>

            <p className="font-serif italic text-lg md:text-xl text-[#8a6f60] mb-6">
              с любовью приглашаем вас на нашу свадьбу
            </p>

            <h1 className="font-serif leading-[0.95] tracking-tight text-[#2b211c]">
              <span className="block text-5xl md:text-7xl lg:text-8xl">Андрей</span>
              <span className="block font-serif italic text-3xl md:text-5xl text-[#b8846b] my-2 md:my-3">
                &amp;
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl">Елизавета</span>
            </h1>

            <div className="mt-10 flex items-center gap-6">
              <div className="text-center">
                <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#8a6f60] mb-1">
                  суббота
                </div>
                <div className="font-serif text-2xl md:text-3xl text-[#2b211c]">08 · 08 · 2026</div>
              </div>
              <span className="h-10 w-px bg-[#d8c3b1]" />
              <div>
                <div className="font-sans uppercase tracking-[0.3em] text-[10px] text-[#8a6f60] mb-1">
                  Санкт-Петербург
                </div>
                <div className="font-serif text-lg md:text-xl text-[#2b211c]">
                  Ресторан «Дача на заливе»
                </div>
                <div className="font-sans text-sm text-[#6b5a4f] mt-0.5">
                  Приморское шоссе, 448
                </div>
              </div>
            </div>

            <p className="mt-10 max-w-md font-serif italic text-base md:text-lg text-[#6b5a4f] leading-relaxed">
              Этот день станет особенным для нас, и мы будем счастливы разделить его
              с самыми близкими людьми — рядом с заливом, под шёпот сосен и свет
              летнего вечера.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#rsvp"
                className="inline-flex items-center justify-center rounded-full bg-[#2b211c] text-[#faf7f2] px-8 py-3 font-sans text-sm tracking-[0.2em] uppercase transition-all hover:bg-[#b8846b] hover:tracking-[0.28em]"
              >
                Подтвердить участие
              </a>
              <a
                href="#details"
                className="inline-flex items-center gap-2 font-serif italic text-[#8a6f60] hover:text-[#b8846b] transition-colors"
              >
                <span>программа дня</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Right column — photo booth image */}
          <div className="relative order-1 md:order-2 flex items-center justify-center">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(closest-side, #e9c9b3 0%, transparent 70%)",
              }}
            />

            {/* Decorative frame ring */}
            <div
              aria-hidden
              className="absolute w-[85%] aspect-square rounded-full border border-[#d8c3b1]/60"
            />
            <div
              aria-hidden
              className="absolute w-[70%] aspect-square rounded-full border border-[#d8c3b1]/40"
            />

            <div
              className="relative w-full max-w-md md:max-w-lg animate-float-slow"
              style={{ ["--r" as string]: "0deg" }}
            >
              <img
                src={photoBooth.url}
                alt="Андрей и Елизавета — фотобудка"
                className="w-full h-auto drop-shadow-[0_25px_45px_rgba(74,45,30,0.25)]"
              />
            </div>

          </div>
        </div>

        {/* Bottom hairline */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[#b8846b]">
          <span className="h-px w-10 bg-[#d8c3b1]" />
          <span className="font-serif italic text-sm">навсегда вместе</span>
          <span className="h-px w-10 bg-[#d8c3b1]" />
        </div>
      </section>
    </main>
  );
}
