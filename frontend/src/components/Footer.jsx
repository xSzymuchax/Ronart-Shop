const links = [
  { label: 'Regulamin', page: 'terms' },
  { label: 'Polityka prywatności' },
  { label: 'Reklamacje' },
  { label: 'Kontakt' },
]

function Footer({ page, onNavigate }) {
  return (
    <footer className="px-4 pb-8 sm:px-6">
      <nav
        aria-label="Stopka"
        className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-2 rounded-3xl bg-[var(--banner)] px-5 py-4 shadow-[8px_8px_18px_rgba(0,0,0,0.3)]"
      >
        {links.map((link) => (
          <button
            key={link.label}
            type="button"
            aria-current={link.page && page === link.page ? 'page' : undefined}
            onClick={link.page ? () => onNavigate(link.page) : undefined}
            className={`cursor-pointer border-0 bg-transparent px-0.5 py-1 text-base text-[var(--ink)] hover:text-[var(--ink-bright)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] ${page === link.page ? 'underline' : ''}`}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
