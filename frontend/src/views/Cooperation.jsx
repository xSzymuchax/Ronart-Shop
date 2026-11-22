import ArcTitle from '../components/ArcTitle.jsx'

function Cooperation() {
  return (
    <main className="flex-1 bg-[var(--page)] px-4 pt-20 pb-8 sm:px-6">
      <div className="relative mx-auto max-w-5xl rounded-3xl bg-[var(--banner)] px-5 py-10 text-[var(--ink)] shadow-[8px_8px_18px_rgba(0,0,0,0.3)] sm:px-8">
        <h1 className="absolute inset-x-0 bottom-full translate-y-[0.23em] text-center text-5xl font-bold">
          <ArcTitle>Współpraca</ArcTitle>
        </h1>

        <section className="flow-root">
          <img
            className="mb-6 aspect-[4/3] w-full rounded-2xl border-4 border-[var(--page)] shadow-[8px_8px_18px_rgba(0,0,0,0.3)] object-cover md:float-left md:mr-8 md:mb-4 md:w-[46%]"
            src="/mikkel-bech-yjAFnkLtKY0-unsplash.jpg"
            alt="Czarny rower szosowy na ciemnym tle"
          />
          <p className="text-base leading-relaxed">
            Jeśli chcą Państwo, aby Państwa artykuły znalazły się w sklepie
            Ronart, prosimy o kontakt. Zapraszamy producentów rowerów, nart,
            desek snowboardowych oraz wyposażenia, które dobrze służy przez
            wiele sezonów.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Prowadzimy niewielki sklep w Żywcu. Do oferty przyjmujemy sprzęt,
            który sami potrafimy polecić klientowi. Jeżeli Państwa artykuły do
            tego pasują, chętnie porozmawiamy o wspólnej obecności w sklepie.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14">
          <h2 className="text-xl">Dane kontaktowe</h2>
          <p className="mt-4 text-base leading-relaxed">
            Prosimy o krótką wiadomość: co Państwo produkują, dla kogo i gdzie
            można to zobaczyć. Odezwiemy się z Żywca.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            E-mail:{' '}
            <a
              className="underline hover:text-[var(--ink-bright)]"
              href="mailto:Ronart@shop.pl"
            >
              Ronart@shop.pl
            </a>
            <br />
            Telefon:{' '}
            <a
              className="underline hover:text-[var(--ink-bright)]"
              href="tel:111222333"
            >
              111 222 333
            </a>
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Gdy uznamy, że pasujemy do siebie, ustalimy wspólnie, jak artykuły
            mają wyglądać w sklepie: opis, zdjęcia i informacje, które klient
            powinien znać przed zakupem.
          </p>
        </section>
      </div>
    </main>
  )
}

export default Cooperation
