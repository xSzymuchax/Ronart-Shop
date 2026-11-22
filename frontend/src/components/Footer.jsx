const links = ['Regulamin', 'Polityka prywatności', 'Reklamacje', 'Kontakt']

function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6">
      <nav
        aria-label="Stopka"
        className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-2 rounded-3xl bg-[var(--banner)] px-5 py-4 shadow-[8px_8px_18px_rgba(0,0,0,0.3)]"
      >
        {links.map((label) => (
          <button
            key={label}
            type="button"
            className="cursor-pointer border-0 bg-transparent px-0.5 py-1 text-base text-[var(--ink)] hover:text-[var(--ink-bright)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
          >
            {label}
          </button>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
