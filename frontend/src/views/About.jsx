function About() {
  return (
    <main className="flex-1 bg-[var(--page)] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-5xl rounded-3xl bg-[var(--banner)] px-5 py-10 text-[var(--ink)] shadow-[8px_8px_18px_rgba(0,0,0,0.3)] sm:px-8">
        <h1 className="text-2xl">Dzień w ruchu</h1>

        <section className="mt-8 flow-root">
          <img
            className="mb-6 aspect-[4/3] w-full rounded-2xl border-4 border-[var(--page)] shadow-[8px_8px_18px_rgba(0,0,0,0.3)] object-cover md:float-left md:mr-8 md:mb-4 md:w-[46%]"
            src="/daniel-gomez-uMVjnoEDGG0-unsplash.jpg"
            alt="Rower górski ustawiony na tle gór"
          />
          <h2 className="text-xl">Latem na rowerze</h2>
          <p className="mt-4 text-base leading-relaxed">
            Ronart jest polskim sklepem z artykułami rowerowymi i narciarskimi.
            Jesteśmy dla osób, które najchętniej spędzają wolny dzień w ruchu:
            na szosie, w lesie albo na śniegu.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Latem podstawą jest rower. Mamy maszyny na asfalt, na szuter i w
            góry, a obok nich rzeczy, bez których wyprawa szybko robi się
            męcząca. Kask, światło, sakwy, narzędzia i ubranie na pogodę, która
            zmienia się w połowie trasy.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Dobieramy sprzęt do tego, jak naprawdę jeździsz. Inny rower
            sprawdzi się w dojazdach, inny na całodniowej pętli, a jeszcze inny
            tam, gdzie jest więcej błota niż asfaltu. Przy każdym modelu
            piszemy wprost, do czego służy, i pomagamy ustalić rozmiar ramy,
            zanim trafi do zamówienia.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14 flow-root">
          <img
            className="mb-6 aspect-[4/3] w-full rounded-2xl border-4 border-[var(--page)] shadow-[8px_8px_18px_rgba(0,0,0,0.3)] object-cover md:float-right md:mb-4 md:ml-8 md:w-[46%]"
            src="/maarten-duineveld-pmfJcN7RGiw-unsplash.jpg"
            alt="Narciarz w niebieskiej kurtce na przygotowanym stoku"
          />
          <h2 className="text-xl">Zimą na śniegu</h2>
          <p className="mt-4 text-base leading-relaxed">
            Zimą ten sam dzień wygląda inaczej. Są narty, jest snowboard i jest
            odzież, która trzyma ciepło oraz zostawia swobodę ruchu. Sprzęt ma
            zostać z Tobą na wiele sezonów, nie na jeden wyjazd pod koniec
            ferii.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Przy nartach liczy się długość, taliowanie i to, czy stoisz na
            przygotowanej trasie, czy wolisz miękki śnieg obok niej. Przy
            snowboardzie ważne jest ustawienie wiązań i to, jak sztywna ma być
            deska. Da się o tym powiedzieć po ludzku, bez katalogowego żargonu.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Zależy nam na spokojnych zakupach. Przy produkcie widać cenę i
            konkretny opis. Gdy trzeba dobrać rozmiar buta, długość nart albo
            ocenić, czy model pasuje do Twojej trasy, możesz napisać.
            Odpowiadamy po ludzku.
          </p>
        </section>

        <hr className="m-0 mt-14 border-t border-[var(--page)]" />

        <section className="mt-14 flow-root">
          <img
            className="mb-6 aspect-[4/3] w-full rounded-2xl border-4 border-[var(--page)] shadow-[8px_8px_18px_rgba(0,0,0,0.3)] object-cover md:float-left md:mr-8 md:mb-4 md:w-[46%]"
            src="/nathanael-desmeules-gTrDi4DNMBI-unsplash.jpg"
            alt="Dwie deski snowboardowe wbite w śnieg na szczycie"
          />
          <h2 className="text-xl">Kim jesteśmy</h2>
          <p className="mt-4 text-base leading-relaxed">
            Ronart prowadzą Hania i Tomek Leszczyńscy. Sklep otworzyli w 2009
            roku w Żywcu, w kamienicy dwie przecznice od rynku. Wcześniej Hania
            wydawała narty w budce przy wyciągu, a Tomek prostował koła w
            warsztacie, do którego wchodziło się od podwórka. Ludzie i tak
            pytali ją o rowery, a jego o długość nart, więc pewnej jesieni
            zdjęli dwa szyldy i zawiesili jeden.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Nazwa została po rowerze, od którego wszystko się zaczęło. Tomek
            dostał go od wuja na osiemnaste urodziny: ciężki, zbyt duży, z
            wytartym napisem Ronart na dolnej rurze. Jeździł na nim do pracy,
            na zakupy i w Beskid, dopóki rama nie pękła na dziurze za Jeziorem
            Żywieckim. Szyld namalowali tym samym kolorem co ten napis.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Dziś jest nas czworo. Hania dobiera buty i narty, mierzy stopę dwa
            razy i nie udaje, że każdy model leży tak samo. Tomek składa
            rowery i potrafi pół godziny rozmawiać o tym, czy dana rama ma sens
            przy Twoim wzroście i o tym, jak lubisz wchodzić w zakręty. Ola
            pakuje zamówienia i odpisuje na listy, zwykle jeszcze tego samego
            dnia. Bartek zimą ostrzy krawędzie i smaruje ślizgi, latem zaplata
            koła. Nikt z nas nie ma osobnego biura. Biurko stoi w tym samym
            pomieszczeniu co stojak serwisowy, więc opis produktu powstaje
            obok sprzętu, a nie z katalogu producenta.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Zanim coś zostanie u nas na dłużej, ktoś z ekipy na tym jeździ.
            Nart nie wstawiamy do oferty po jednym zjeździe na twardym stoku.
            Roweru nie chwalimy, jeśli jedyne, co o nim wiemy, to zdjęcie z
            pudełka. Deska, na której Bartek spędził sezon w okolicach
            Korbielowa, zostaje. Kurtka, która przemaka przy pierwszym deszczu
            nad Sołą, wypada, choćby ładnie wyglądała na wieszaku.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Sklep jest mały i taki ma zostać. Na stanie nie trzymamy każdej
            długości i każdego koloru. Jak czegoś nie mamy, mówimy o tym
            wprost i potrafimy podpowiedzieć, czym to zastąpić, albo że lepiej
            w ogóle tego nie kupować. Wysyłamy w całą Polskę. Paczkę pakuje
            człowiek, który ten sprzęt widział. W kartonie znajdziesz to, co
            było w opisie, i kartkę, gdy przy danym modelu jest coś, o czym
            warto wiedzieć przed pierwszym wyjazdem.
          </p>
        </section>
        <img
          className="mt-10 aspect-[21/9] w-full rounded-2xl border-4 border-[var(--page)] shadow-[8px_8px_18px_rgba(0,0,0,0.3)] object-cover"
          src="/margaux-wolf-iFKwKQs3Gdw-unsplash.jpg"
          alt="Rower oparty o barierkę nad morzem"
        />
        <p className="mt-8 text-base leading-relaxed">
        Najchętniej widzimy się w Żywcu. Można przyjść z własnymi nartami do
        ostrzenia, z rowerem, który ściąga w lewo, albo po prostu przymierzyć
        but i wyjść bez zakupu. Zimą pachnie u nas smarem, latem oponą i kawą z
        ekspresu, który Tomek uparł się postawić przy ladzie. Jak nie możesz
        wpaść, napisz. Odezwie się ktoś, kto naprawdę tu pracuje.
        </p>
      </div>
    </main>
  )
}

export default About
