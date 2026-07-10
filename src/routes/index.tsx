import { createFileRoute } from "@tanstack/react-router";
import photoBooth from "@/assets/photo-booth.png.asset.json";
import eucalyptus from "@/assets/eucalyptus.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen w-full bg-[#f7f6f1] text-[#3d4a37] overflow-hidden relative font-serif">
      {/* Soft ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 20% 15%, #ffffff 0%, transparent 65%), radial-gradient(60% 55% at 85% 90%, #e5ead8 0%, transparent 70%)",
        }}
      />

      {/* Decorative eucalyptus — corners */}
      <img
        src={eucalyptus.url}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -top-24 -left-24 w-[280px] sm:w-[380px] md:w-[460px] opacity-95 rotate-[-25deg]"
      />
      <img
        src={eucalyptus.url}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-28 -right-24 w-[300px] sm:w-[400px] md:w-[500px] opacity-90 rotate-[155deg]"
      />
      <img
        src={eucalyptus.url}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute top-1/2 -right-48 w-[320px] opacity-60 rotate-[65deg] hidden lg:block"
      />
      <img
        src={eucalyptus.url}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute top-1/3 -left-40 w-[260px] opacity-50 rotate-[110deg] hidden lg:block"
      />

      <section className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-10 py-14 sm:py-16 md:py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-10 sm:gap-12 md:gap-14 items-center w-full">
          {/* Left column — invitation text */}
          <div className="animate-fade-up order-2 md:order-1 relative text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-7 md:mb-8 text-[#6b7f5c]">
              <span className="block h-px w-8 sm:w-10 bg-[#8ba173]" />
              <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#2d3d2a]">
                08.08.2026
              </span>
              <span className="block h-px w-8 sm:w-10 bg-[#8ba173]" />
            </div>




            <p className="font-sans text-[14px] sm:text-[15px] leading-[1.8] sm:leading-[1.9] text-[#3d4a37] max-w-md mx-auto md:mx-0 mb-5">
              С трепетом и радостью в сердце мы приглашаем вас разделить с нами
              один из самых важных дней нашей жизни — день, когда мы навсегда
              соединим наши судьбы.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] leading-[1.8] sm:leading-[1.9] text-[#3d4a37] max-w-md mx-auto md:mx-0 mb-8 md:mb-10">
              Будем счастливы видеть вас рядом — под шёпот сосен и мягкий свет
              летнего вечера на берегу залива.
            </p>

          </div>

          {/* Right column — photo on the main background */}
          <div className="relative order-1 md:order-2">
            <h1 className="font-serif italic uppercase text-4xl sm:text-5xl md:text-6xl text-[#2d3d2a] text-center leading-tight mt-20 sm:mt-24 md:mt-28 mb-6 sm:mb-8 animate-fade-up">
              ПРИГЛАШЕНИЕ<br />НА СВАДЬБУ
            </h1>
            <img
              src={photoBooth.url}
              alt="Андрей и Елизавета"
              className="relative block w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto h-auto animate-fade-up"
            />

            {/* Small eucalyptus accent near photo */}
            <img
              src={eucalyptus.url}
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute -top-8 -right-4 sm:-top-10 sm:-right-8 w-28 sm:w-36 md:w-44 opacity-90 rotate-[25deg]"
            />
            <img
              src={eucalyptus.url}
              alt=""
              aria-hidden
              className="pointer-events-none select-none absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-24 sm:w-32 md:w-40 opacity-80 rotate-[200deg]"
            />
          </div>

        </div>

        {/* Bottom hairline */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[#6b7f5c] whitespace-nowrap">
          <span className="h-px w-8 sm:w-10 bg-[#8ba173]" />
          <span className="italic text-xs sm:text-sm">навсегда вместе</span>
          <span className="h-px w-8 sm:w-10 bg-[#8ba173]" />
        </div>
      </section>

      {/* Место проведения */}
      <section className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-10 sm:mb-14 animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-5 text-[#6b7f5c]">
            <span className="block h-px w-10 sm:w-14 bg-[#8ba173]" />
            <span className="font-sans uppercase tracking-[0.3em] text-[11px] sm:text-xs">
              место проведения
            </span>
            <span className="block h-px w-10 sm:w-14 bg-[#8ba173]" />
          </div>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#2d3d2a] leading-tight">
            Где встречаемся
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14 animate-fade-up">
          <p className="font-sans text-[14px] sm:text-[15px] leading-[1.9] text-[#3d4a37] mb-5">
            Мы искали уникальное место для нашего праздника и нашли уютный
            ресторан на берегу Финского залива.
          </p>
          <p className="font-serif italic text-lg sm:text-xl text-[#2d3d2a]">
            Ресторан «Дача на заливе»
          </p>
          <p className="font-sans text-[13px] sm:text-sm text-[#6b7f5c] mt-1">
            Приморское шоссе, 448
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {[
            "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80",
          ].map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-sm border border-[#c8d3b7] bg-white p-2 shadow-sm animate-fade-up"
            >
              <img
                src={src}
                alt="Ресторан «Дача на заливе»"
                loading="lazy"
                className="block w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
