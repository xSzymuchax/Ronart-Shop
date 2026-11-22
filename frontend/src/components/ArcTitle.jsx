function ArcTitle({ children, className = '' }) {
  return (
    <span className={`relative inline-block leading-none ${className}`}>
      <svg
        className="pointer-events-none absolute top-0 left-0 h-[1.4em] w-full"
        viewBox="0 0 100 140"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 0 109.25 A 74 48.5 0 0 0 100 109.25"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {children}
    </span>
  )
}

export default ArcTitle
