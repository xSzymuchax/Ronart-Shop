import ArcTitle from '../components/ArcTitle.jsx'

function Terms() {
  return (
    <main className="flex-1 bg-[var(--page)] px-4 pt-20 pb-8 sm:px-6">
      <div className="relative mx-auto max-w-5xl rounded-3xl bg-[var(--banner)] px-5 py-10 text-[var(--ink)] shadow-[8px_8px_18px_rgba(0,0,0,0.3)] sm:px-8">
        <h1 className="absolute inset-x-0 bottom-full translate-y-[0.23em] text-center text-5xl font-bold">
          <ArcTitle>Regulamin</ArcTitle>
        </h1>

        <img className="mx-auto h-20 w-auto" src="/ronartlogo.png" alt="Ronart" />
        <p className="mt-8 text-base leading-relaxed">
          Regulamin sklepu internetowego Ronart. Obowiązuje od 22 listopada
          2026 roku i dotyczy zakupów składanych przez stronę sklepu.
        </p>

        <section className="mt-8">
          <h2 className="text-xl">Sprzedawca</h2>
          <p className="mt-4 text-base leading-relaxed">
            Sprzedawcą jest Ronart, sklep Hani i Tomka Leszczyńskich w Żywcu.
            Prowadzimy sprzedaż stacjonarną oraz wysyłkową na terenie Polski.
            W ofercie są rowery, narty, deski snowboardowe, odzież i wyposażenie
            do jazdy.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            W sprawach zamówienia prosimy pisać na{' '}
            <a
              className="underline hover:text-[var(--ink-bright)]"
              href="mailto:Ronart@shop.pl"
            >
              Ronart@shop.pl
            </a>{' '}
            albo dzwonić pod numer{' '}
            <a
              className="underline hover:text-[var(--ink-bright)]"
              href="tel:111222333"
            >
              111 222 333
            </a>
            . Odezwiemy się z Żywca.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14">
          <h2 className="text-xl">Ceny i zamówienie</h2>
          <p className="mt-4 text-base leading-relaxed">
            Cena przy produkcie jest ceną brutto w złotych. Do zamówienia
            doliczamy koszt dostawy i pokazujemy go, zanim Państwo potwierdzą
            zakup. Zamówienie staje się umową, gdy wyślemy potwierdzenie.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Jeśli wybranego rozmiaru albo długości nie mamy, nie udajemy, że
            jest. Napiszemy, co możemy zaproponować w zamian, albo zwrócimy
            wpłatę. Opis przy produkcie mówi, do czego sprzęt służy. Prosimy
            przeczytać go przed zakupem, zwłaszcza przy rozmiarze ramy, długości
            nart i ustawieniu wiązań.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14">
          <h2 className="text-xl">Płatność i dostawa</h2>
          <p className="mt-4 text-base leading-relaxed">
            Zamówienie wysyłamy po otrzymaniu płatności. Nie przechowujemy
            numeru karty. Paczkę nadajemy na adres podany w zamówieniu, na
            terenie Polski. Czas wysyłki podajemy w potwierdzeniu.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Odbiór w sklepie w Żywcu jest możliwy, gdy tak ustalimy. Prosimy
            wtedy o wiadomość, zanim sprzęt wyjedzie z magazynu. Paczkę pakuje
            osoba, która widziała ten egzemplarz.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14">
          <h2 className="text-xl">Odstąpienie od umowy</h2>
          <p className="mt-4 text-base leading-relaxed">
            Jeśli kupują Państwo jako konsument, można odstąpić od umowy w
            ciągu 14 dni bez podania przyczyny. Wystarczy wiadomość na adres
            sklepu. Towar prosimy odesłać nieużywany, w stanie, w którym da się
            go ponownie sprzedać. Koszt odesłania ponoszą Państwo, chyba że
            sprzęt był wadliwy.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Prawo odstąpienia nie obejmuje rzeczy przygotowanej wyraźnie na
            Państwa życzenie, na przykład nart dociętych na wymiar albo wiązań
            ustawionych pod konkretną osobę, jeżeli przed zakupem wyrazili
            Państwo na to zgodę. Pieniądze zwracamy w ciągu 14 dni od otrzymania
            oświadczenia, nie wcześniej niż po odebraniu towaru albo dowodu
            jego odesłania.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14">
          <h2 className="text-xl">Reklamacje</h2>
          <p className="mt-4 text-base leading-relaxed">
            Gdy sprzęt ma wadę, prosimy o wiadomość. Wystarczy numer zamówienia,
            krótki opis i zdjęcie, jeśli pomoże nam ocenić sprawę. Odpowiadamy
            w ciągu 14 dni. Towar można odesłać albo przywieźć do Żywca.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Przy uznanej reklamacji naprawiamy sprzęt, wymieniamy go albo
            zwracamy zapłatę, zależnie od tego, co w danej sytuacji jest
            uczciwe wobec Państwa i możliwe dla nas. Zużycie wynikające ze
            zwykłej jazdy nie jest wadą.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14">
          <h2 className="text-xl">Postanowienia końcowe</h2>
          <p className="mt-4 text-base leading-relaxed">
            Do zamówień stosujemy prawo polskie, w tym przepisy o prawach
            konsumenta. Do złożonego zamówienia stosuje się regulamin z dnia
            zakupu. Nowsza wersja nie zmienia umowy, która już powstała.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            W sprawach, których ten tekst nie rozstrzyga, prosimy napisać.
            Wolimy wyjaśnić rzecz wprost niż chować ją w drobnym druku.
          </p>
        </section>
      </div>
    </main>
  )
}

export default Terms
