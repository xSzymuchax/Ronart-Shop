const links = ['Regulamin', 'Polityka prywatności', 'Reklamacje', 'Kontakt']

function Footer() {
  return (
    <footer className="bg-[var(--banner)] px-5 py-4">
      <nav
        aria-label="Stopka"
        className="flex flex-wrap justify-center gap-x-8 gap-y-2"
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
