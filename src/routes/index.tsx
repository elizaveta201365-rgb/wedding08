import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
const palette = { url: "/images/palette.jpg" };
const corgi = { url: "/images/corgi-final.png" };
const cat = { url: "/images/cat.png" };
const photoBooth = { url: "/images/photo-booth.png" };
const eucalyptus = { url: "/images/eucalyptus.png" };
const venue1 = { url: "/images/venue-1.jpg" };
const venue2 = { url: "/images/venue-2.jpg" };
const venue3 = { url: "/images/venue-3.png" };
const venue4 = { url: "/images/venue-4.png" };
const venue5 = { url: "/images/venue-5.jpg" };

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [name, setName] = useState("");
  const [drinks, setDrinks] = useState<string[]>([]);
  const [song, setSong] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const drinkOptions = [
    "Шампанское",
    "Вино белое",
    "Вино красное",
    "Ром",
    "Виски",
    "Медовуха",
    "Без алкоголя",
  ];

  const toggleDrink = (d: string) => {
    setDrinks((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (drinks.length === 0) {
      setError("Пожалуйста, выберите хотя бы один напиток.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("drink", drinks.join(", "));
      formData.append("song", song);
      await fetch(
        "https://script.google.com/macros/s/AKfycbxy-LzbOD1_IAq1o-kRfV5UvEbXOPeBDUslc_7Iylb1R8JL32By93YpxoAVkFrAOEym/exec",
        { method: "POST", body: formData, mode: "no-cors" },
      );
      setSubmitted(true);
    } catch {
      setError("Не удалось отправить. Попробуйте ещё раз.");
    } finally {
      setSending(false);
    }
  };


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
        className="pointer-events-none select-none absolute top-[280px] sm:top-[340px] md:top-[400px] -right-16 sm:-right-20 md:-right-24 w-[200px] sm:w-[260px] md:w-[320px] opacity-95 rotate-[25deg] -scale-x-100"
      />
      <img
        src={eucalyptus.url}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute top-1/3 -left-40 w-[260px] opacity-50 rotate-[110deg] hidden lg:block"
      />


      <section className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-10 py-14 sm:py-16 md:py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-5 sm:gap-6 md:gap-14 items-center w-full">
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
            <h1 className="font-serif italic uppercase text-4xl sm:text-5xl md:text-6xl text-[#2d3d2a] text-center leading-tight mt-20 sm:mt-24 md:mt-28 mb-3 sm:mb-4 animate-fade-up">
              ПРИГЛАШАЕМ<br />НА СВАДЬБУ
            </h1>
            <div
              className="text-center text-[#2d3d2a] leading-none animate-fade-up mb-6 sm:mb-8"
              style={{ fontFamily: "'MonteCarlo', cursive", fontSize: "clamp(2.8rem, 11.2vw, 5.25rem)" }}
            >
              An &amp; Li
            </div>


            <img
              src={photoBooth.url}
              alt="Андрей и Елизавета"
              className="relative block w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto h-auto animate-fade-up"
            />



          </div>

        </div>

        {/* Bottom hairline */}
      </section>

      {/* Место проведения */}
      <section className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-10 pt-2 sm:pt-2.5 md:pt-3 pb-8 sm:pb-10 md:pb-12">
        <div className="text-center mb-10 sm:mb-14 animate-fade-up">
          <div className="flex items-center justify-center gap-3 mb-5 text-[#6b7f5c]">
            <span className="block h-px w-10 sm:w-14 bg-[#8ba173]" />
            <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#2d3d2a] leading-tight">
              Где встречаемся
            </span>
            <span className="block h-px w-10 sm:w-14 bg-[#8ba173]" />
          </div>
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

        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-lg md:max-w-3xl h-[420px] sm:h-[520px] md:h-[600px] animate-fade-up">
          {[
            { src: venue1.url, cls: "top-0 left-0 w-[62%] sm:w-[55%] md:w-[48%] h-[52%] rotate-[-4deg] z-10" },
            { src: venue2.url, cls: "top-[6%] right-0 w-[48%] sm:w-[42%] md:w-[38%] h-[46%] rotate-[5deg] z-20" },
            { src: venue4.url, cls: "top-[38%] left-[10%] sm:left-[14%] w-[52%] sm:w-[46%] md:w-[42%] h-[46%] rotate-[3deg] z-30" },
            { src: venue3.url, cls: "bottom-0 right-[4%] w-[54%] sm:w-[48%] md:w-[44%] h-[48%] rotate-[-6deg] z-20" },
            { src: venue5.url, cls: "bottom-[8%] left-0 w-[40%] sm:w-[36%] md:w-[32%] h-[38%] rotate-[7deg] z-40" },
          ].map((p, i) => (
            <div
              key={i}
              className={`absolute overflow-hidden rounded-sm border border-[#c8d3b7] bg-white p-1.5 shadow-lg ${p.cls}`}
            >
              <img
                src={p.src}
                alt="Ресторан «Дача на заливе»"
                loading="lazy"
                className="block w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Карта */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-10 pb-6 sm:pb-10 md:pb-12">
        <div className="text-center mb-6 sm:mb-10 animate-fade-up">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5 text-[#6b7f5c]">
            <span className="block h-px w-6 sm:w-14 bg-[#8ba173]" />
            <span className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#2d3d2a] leading-tight">
              Как добраться
            </span>
            <span className="block h-px w-6 sm:w-14 bg-[#8ba173]" />
          </div>
          <p className="font-sans text-[12px] sm:text-sm text-[#6b7f5c] mt-2 sm:mt-3 px-2 leading-relaxed">
            Приморское шоссе, 448 — ресторан «Дача на заливе»
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-sm border border-[#c8d3b7] bg-white p-1 sm:p-1.5 shadow-lg animate-fade-up">
          <iframe
            title="Карта — Дача на заливе, Приморское шоссе, 448"
            src="https://yandex.ru/map-widget/v1/?ll=29.823600%2C60.163100&mode=search&sctx=ZAAAAAgBEAAaKAoSCTMHOx0hzD1AEcdlmXPCbT5AEhIJ4XoUrkfoxT8Rw%2FUoXI%2FbtT8iBQABAgQFKAAwATgAQKACSAFqAnJ1cAB1zczMPZ0BzcxMPqABAKgBALwBAJIB&text=%D0%94%D0%B0%D1%87%D0%B0%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BB%D0%B8%D0%B2%D0%B5%20%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%20448&z=15"
            className="block w-full h-[280px] sm:h-[440px] md:h-[520px]"
            loading="lazy"
            allowFullScreen
          />
          {/* Перекрытие встроенной кнопки виджета «Открыть в Яндекс.Картах» */}
          <div
            aria-hidden
            className="pointer-events-auto absolute top-1 sm:top-1.5 left-1 sm:left-1.5 h-9 sm:h-10 w-[230px] sm:w-[260px] bg-white"
          />
        </div>

        <div className="text-center mt-5 sm:mt-6 animate-fade-up px-4">
          <a
            href="https://yandex.ru/maps/org/dacha_na_zalive/1317172019/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs text-[#6b7f5c] border-b border-[#8ba173] pb-1 hover:text-[#2d3d2a] transition-colors"
          >
            открыть в яндекс.картах
          </a>
        </div>
      </section>

      {/* Расписание */}
      <section className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-10 pb-8 sm:pb-10 md:pb-12">
        <div className="text-center mb-10 sm:mb-14 animate-fade-up">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5 text-[#6b7f5c]">
            <span className="block h-px w-6 sm:w-14 bg-[#8ba173]" />
            <span className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#2d3d2a] leading-tight">
              Программа дня
            </span>
            <span className="block h-px w-6 sm:w-14 bg-[#8ba173]" />
          </div>
        </div>

        <div className="relative mx-auto max-w-2xl">
          {/* Vertical timeline line */}
          <span
            aria-hidden
            className="absolute left-[26px] sm:left-8 top-4 bottom-4 w-px bg-[#c8d3b7]"
          />

          <ol className="space-y-6 sm:space-y-8">
            {[
              { time: "15:30", icon: "🥂", title: "Сбор гостей", text: "Фуршет, первые встречи и хорошее настроение." },
              { time: "16:00", icon: "💍", title: "Начало праздника", text: "Начинается история нашего дня." },
              { time: "Далее", icon: "💫", title: "Веселье и сюрпризы", text: "Вас ждут искренние эмоции, улыбки, сюрпризы и много весёлых моментов." },
              { time: "Вечер", icon: "🎂", title: "Свадебный торт", text: "Самое время попробовать свадебный торт." },
              { time: "До самого конца", icon: "🌙", title: "Тёплый вечер вместе", text: "Наслаждаемся вечером и компанией друг друга." },
            ].map((item, i) => (
              <li
                key={i}
                className="relative grid grid-cols-[52px_minmax(0,1fr)] sm:grid-cols-[64px_minmax(0,1fr)] gap-4 sm:gap-6 items-start animate-fade-up"
              >
                {/* Icon marker */}
                <span
                  className="relative z-10 flex items-center justify-center w-[52px] h-[52px] sm:w-16 sm:h-16 rounded-full bg-[#f7f6f1] border border-[#c8d3b7] shadow-sm text-2xl sm:text-3xl shrink-0"
                  aria-hidden
                >
                  {item.icon}
                </span>

                {/* Content */}
                <div className="min-w-0 pt-1 sm:pt-2">
                  <p className="font-serif italic text-base sm:text-lg text-[#6b7f5c] mb-1">
                    {item.time}
                  </p>
                  <h3 className="font-serif italic text-lg sm:text-2xl md:text-3xl text-[#2d3d2a] mb-1.5 sm:mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[13px] sm:text-sm leading-[1.7] sm:leading-[1.8] text-[#3d4a37]">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Дресс-код */}
      <section className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-10 pb-8 sm:pb-10 md:pb-12">
        <div className="text-center mb-10 sm:mb-14 animate-fade-up">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5 text-[#6b7f5c]">
            <span className="block h-px w-6 sm:w-14 bg-[#8ba173]" />
            <span className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#2d3d2a] leading-tight">
              В каком стиле встречаемся
            </span>
            <span className="block h-px w-6 sm:w-14 bg-[#8ba173]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center max-w-4xl mx-auto">
          <div className="animate-fade-up order-1">
            <p className="font-sans text-[14px] sm:text-[15px] leading-[1.8] sm:leading-[1.9] text-[#3d4a37] mb-5">
              Наша свадьба будет лёгкой, летней и уютной — с природой, водой и
              атмосферой загородного вечера. Будем рады видеть вас в комфортных
              нарядах природных оттенков.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] leading-[1.8] sm:leading-[1.9] text-[#3d4a37]">
              Формат — скорее расслабленный и элегантный, чем строгий: мужчинам
              не обязательно надевать костюмы и галстуки, а девушкам можно
              выбрать лёгкие платья и летние образы.
            </p>
          </div>
          <div className="relative order-2 animate-fade-up flex justify-center">
            <div className="overflow-hidden rounded-sm border border-[#c8d3b7] bg-white p-1.5 shadow-lg w-1/2">
              <img
                src={palette.url}
                alt="Природная палитра — оттенки нашей свадьбы"
                loading="lazy"
                width={1024}
                height={1024}
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Анкета гостя */}
      <section className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-10 pb-8 sm:pb-10 md:pb-12">
        <div className="text-center mb-10 sm:mb-14 animate-fade-up">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5 text-[#6b7f5c]">
            <span className="block h-px w-6 sm:w-14 bg-[#8ba173]" />
            <span className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#2d3d2a] leading-tight">
              Анкета гостя
            </span>
            <span className="block h-px w-6 sm:w-14 bg-[#8ba173]" />
          </div>
          <p className="font-sans text-[12px] sm:text-sm text-[#6b7f5c] mt-2 sm:mt-3 px-2 leading-relaxed">
            Расскажите немного о своих предпочтениях — подберём атмосферу, в которой каждому будет приятно и весело.
          </p>
        </div>

        <div className="mx-auto w-full max-w-xl bg-white/60 backdrop-blur-sm border border-[#c8d3b7] rounded-sm shadow-lg p-6 sm:p-10 animate-fade-up">
          {submitted ? (
            <div className="text-center py-6">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#2d3d2a] mb-3">
                Спасибо, {name || "друг"}!
              </p>
              <p className="font-sans text-sm text-[#3d4a37] leading-[1.8]">
                Мы получили ваш ответ и с нетерпением ждём встречи.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              <div>
                <label className="block font-sans uppercase tracking-[0.2em] text-[11px] sm:text-xs text-[#6b7f5c] mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                  placeholder="Ваше имя"
                  className="w-full bg-transparent border-b border-[#c8d3b7] focus:border-[#6b7f5c] outline-none py-2 font-serif italic text-lg text-[#2d3d2a] placeholder:text-[#a8b39a] transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans uppercase tracking-[0.2em] text-[11px] sm:text-xs text-[#6b7f5c] mb-3">
                  Какой напиток вы предпочитаете?
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {drinkOptions.map((d) => {
                    const selected = drinks.includes(d);
                    return (
                      <label
                        key={d}
                        className={`cursor-pointer flex items-center gap-2 border rounded-sm px-3 py-2.5 font-sans text-[13px] sm:text-sm transition-colors ${
                          selected
                            ? "border-[#6b7f5c] bg-[#e5ead8] text-[#2d3d2a]"
                            : "border-[#c8d3b7] text-[#3d4a37] hover:border-[#8ba173]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="drink"
                          value={d}
                          checked={selected}
                          onChange={() => toggleDrink(d)}
                          className="sr-only"
                        />
                        <span
                          aria-hidden
                          className={`inline-flex items-center justify-center w-4 h-4 rounded-sm border shrink-0 ${
                            selected ? "bg-[#6b7f5c] border-[#6b7f5c] text-white" : "border-[#8ba173]"
                          }`}
                        >
                          {selected && (
                            <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        {d}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block font-sans uppercase tracking-[0.2em] text-[11px] sm:text-xs text-[#6b7f5c] mb-2">
                  Какую песню вы хотите услышать?
                </label>
                <textarea
                  value={song}
                  onChange={(e) => setSong(e.target.value)}
                  maxLength={500}
                  rows={3}
                  placeholder="Название и исполнитель"
                  className="w-full bg-transparent border border-[#c8d3b7] focus:border-[#6b7f5c] outline-none rounded-sm p-3 font-sans text-sm text-[#2d3d2a] placeholder:text-[#a8b39a] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 text-center">
                {error && (
                  <p className="font-sans text-sm text-red-600 mb-3">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-block font-sans uppercase tracking-[0.25em] text-xs sm:text-sm text-[#f7f6f1] bg-[#6b7f5c] hover:bg-[#2d3d2a] transition-colors px-8 sm:px-10 py-3 sm:py-3.5 rounded-sm shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Отправка…" : "Отправить"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* До встречи */}
      <section className="relative mx-auto max-w-6xl px-5 sm:px-6 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-5 md:pb-6">
        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          <img
            src={corgi.url}
            alt="Корги"
            loading="lazy"
            className="absolute left-0 -translate-x-3 sm:translate-x-6 md:translate-x-8 block w-full max-w-[104px] sm:max-w-[128px] md:max-w-[152px] h-auto animate-fade-up"
          />
          <img
            src={cat.url}
            alt="Кот"
            loading="lazy"
            className="absolute right-0 translate-x-3 sm:-translate-x-6 md:-translate-x-8 block w-full max-w-[104px] sm:max-w-[128px] md:max-w-[152px] h-auto animate-fade-up"
          />
          <div className="animate-fade-up text-center">
            <span className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#2d3d2a] leading-tight">
              До встречи
            </span>
          </div>
        </div>
        <div className="relative mt-5 sm:mt-7 md:mt-8 flex justify-center animate-fade-up">
          <img
            src={eucalyptus.url}
            alt=""
            aria-hidden
            className="pointer-events-none select-none w-[280px] sm:w-[380px] md:w-[480px] h-auto rotate-[40deg] opacity-90"
          />
        </div>
      </section>
    </main>
  );
}

