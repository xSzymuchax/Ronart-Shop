import ArcTitle from '../components/ArcTitle.jsx'

function Privacy() {
  return (
    <main className="flex-1 bg-[var(--page)] px-4 pt-20 pb-8 sm:px-6">
      <div className="relative mx-auto max-w-5xl rounded-3xl bg-[var(--banner)] px-5 py-10 text-[var(--ink)] shadow-[8px_8px_18px_rgba(0,0,0,0.3)] sm:px-8">
        <h1 className="absolute inset-x-0 bottom-full translate-y-[0.23em] text-center text-[clamp(1.75rem,8.5vw,3rem)] font-bold">
          <ArcTitle>Polityka prywatności</ArcTitle>
        </h1>

        <img className="mx-auto h-20 w-auto" src="/ronartlogo.png" alt="Ronart" />
        <p className="mt-8 text-base leading-relaxed">
          Polityka prywatności sklepu Ronart. Obowiązuje od 22 listopada 2026
          roku i opisuje, co robimy z danymi, które Państwo nam przekazują.
        </p>

        <section className="mt-8">
          <h2 className="text-xl">Kto odpowiada za dane</h2>
          <p className="mt-4 text-base leading-relaxed">
            Za dane odpowiada Ronart, sklep Hani i Tomka Leszczyńskich w
            Żywcu. Nie sprzedajemy ich i nie oddajemy ich w cudze kampanie.
            Pytania o dane prosimy kierować na{' '}
            <a
              className="underline hover:text-[var(--ink-bright)]"
              href="mailto:Ronart@shop.pl"
            >
              Ronart@shop.pl
            </a>{' '}
            albo pod numer{' '}
            <a
              className="underline hover:text-[var(--ink-bright)]"
              href="tel:111222333"
            >
              111 222 333
            </a>
            .
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14">
          <h2 className="text-xl">Jakie dane dostajemy</h2>
          <p className="mt-4 text-base leading-relaxed">
            Przy zamówieniu prosimy o imię, nazwisko, adres dostawy, adres
            e-mail i numer telefonu. Zapisujemy też treść zamówienia: co
            zostało kupione, w jakiej cenie i jak ma dotrzeć. Gdy piszą
            Państwo w sprawie sprzętu, reklamacji albo współpracy, zostaje u
            nas ta wiadomość i nasza odpowiedź.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Konto w sklepie, jeśli zostanie założone, trzyma te same dane
            kontaktowe oraz informację, czy służy do zakupów, czy do obsługi
            sklepu. Hasła nie przechowujemy w postaci, w której da się je
            odczytać.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14">
          <h2 className="text-xl">Po co ich używamy</h2>
          <p className="mt-4 text-base leading-relaxed">
            Dane z zamówienia służą do jego realizacji: pakowania, wysyłki,
            płatności i kontaktu, gdy rozmiar albo długość wymagają
            doprecyzowania. Dane z reklamacji służą do jej rozpatrzenia. Dane
            z wiadomości o współpracy służą tylko do tej rozmowy.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Nie używamy tych danych do reklam obcych firm i nie składamy z
            nich profilu zakupowego na sprzedaż. Wiadomość o zamówieniu
            wysyłamy na podany adres, bo bez niej nie da się domknąć zakupu.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14">
          <h2 className="text-xl">Komu je przekazujemy</h2>
          <p className="mt-4 text-base leading-relaxed">
            Adres i telefon otrzymuje przewoźnik, któremu oddajemy paczkę.
            Dane płatności otrzymuje operator, przez którego płacą Państwo.
            Dostają tylko tyle, ile potrzeba do doręczenia albo rozliczenia.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Poza tym dane zostają w Żywcu, u osób, które prowadzą sklep.
            Urzędowi przekazujemy je tylko wtedy, gdy przepis tego wymaga.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14">
          <h2 className="text-xl">Jak długo je trzymamy</h2>
          <p className="mt-4 text-base leading-relaxed">
            Zamówienie trzymamy przez czas potrzebny do wysyłki, reklamacji i
            rozliczenia, a potem tak długo, jak wymagają tego przepisy o
            rachunkowości. Wiadomość, która nie skończyła się zakupem,
            usuwamy, gdy sprawa jest zamknięta i nie musimy już do niej
            wracać.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Konto usuwamy na prośbę, jeśli nie zostało na nim otwarte
            zamówienie albo reklamacja. Samo zamknięcie przeglądarki niczego
            u nas nie kasuje.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14">
          <h2 className="text-xl">Prawa osób, których dane dotyczą</h2>
          <p className="mt-4 text-base leading-relaxed">
            Można poprosić o wgląd do swoich danych, o ich poprawienie albo o
            usunięcie, gdy nie mamy już podstawy, żeby je trzymać. Można też
            ograniczyć przetwarzanie albo wnieść sprzeciw. Prośbę prosimy
            wysłać na adres sklepu. Odpowiadamy w ciągu miesiąca.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Skargę można złożyć do Prezesa Urzędu Ochrony Danych Osobowych.
            Wolimy jednak najpierw dostać wiadomość od Państwa i sprawę
            wyjaśnić.
          </p>
        </section>
      </div>
    </main>
  )
}

export default Privacy
