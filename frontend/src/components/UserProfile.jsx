import { useEffect, useRef, useState } from 'react'

const menuItems = ['Twój profil', 'Wyloguj']

function UserProfile({ name }) {
  const letter = name?.trim()?.[0]?.toLocaleUpperCase('pl')
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return

    function closeOnOutsidePointer(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }

    function closeOnEscape(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsidePointer)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  if (!letter) {
    return (
      <button
        type="button"
        className="shrink-0 cursor-pointer border-0 bg-transparent px-0.5 py-1 text-lg text-[#2f6b00] hover:text-[#84cc00] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878a0] max-[720px]:ml-auto"
      >
        Zaloguj
      </button>
    )
  }

  return (
    <div ref={rootRef} className="relative shrink-0 max-[720px]:ml-auto">
      <button
        type="button"
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-0 bg-[#2f6b00] text-lg text-[#fff6d8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878a0]"
        aria-label={name.trim()}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        {letter}
      </button>
      {open && (
        <div
          role="menu"
          className="absolute top-full right-0 z-20 mt-2 min-w-40 rounded-lg bg-[#fff6d8] py-1"
        >
          {menuItems.map((label) => (
            <button
              key={label}
              type="button"
              role="menuitem"
              className="block w-full cursor-pointer border-0 bg-transparent px-4 py-2 text-left text-lg text-[#2f6b00] hover:text-[#84cc00] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878a0]"
              onClick={() => setOpen(false)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserProfile
