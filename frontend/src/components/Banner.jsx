import UserProfile from './UserProfile.jsx'

const links = [
  { label: 'O nas', page: 'about' },
  { label: 'Oferta' },
  { label: 'Reklamacje' },
  { label: 'Współpraca', page: 'cooperation' },
]

function Banner({ dark, page, onNavigate, onToggleTheme, onToggleDark }) {
  return (
    <header className="sticky top-0 z-10 box-border flex w-full flex-wrap items-center gap-4 bg-[var(--banner)] px-5 py-2 shadow-[0_8px_18px_rgba(0,0,0,0.3)]">
      <button
        type="button"
        onClick={onToggleTheme}
        aria-label="Ronart"
        className="shrink-0 cursor-pointer border-0 bg-transparent p-0"
      >
        <img className="h-12 w-auto" src="/ronartlogo.png" alt="" />
      </button>
      <nav
        className="flex min-w-0 flex-1 flex-wrap justify-evenly max-[720px]:order-3 max-[720px]:w-full max-[720px]:shrink-0 max-[720px]:basis-full"
        aria-label="Nawigacja"
      >
        {links.map((link) => (
          <button
            key={link.label}
            type="button"
            aria-current={link.page && page === link.page ? 'page' : undefined}
            onClick={link.page ? () => onNavigate(link.page) : undefined}
            className={`cursor-pointer border-0 bg-transparent px-0.5 py-1 text-lg text-[var(--ink)] hover:text-[var(--ink-bright)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] ${page === link.page ? 'underline' : ''}`}
          >
            {link.label}
          </button>
        ))}
      </nav>
      <div className="flex shrink-0 items-center gap-4 max-[720px]:ml-auto">
        <button
          type="button"
          aria-label="Koszyk"
          className="h-12 w-12 shrink-0 cursor-pointer border-2 border-[var(--ink)] bg-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
        />
        <button
          type="button"
          aria-label="Tryb ciemny"
          aria-pressed={dark}
          onClick={onToggleDark}
          className={`h-12 w-12 shrink-0 cursor-pointer border-2 border-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] ${dark ? 'bg-[var(--ink)]' : 'bg-transparent'}`}
        />
        <UserProfile name="Sigma" />
      </div>
    </header>
  )
}

export default Banner
