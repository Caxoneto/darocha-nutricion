export function SpainFlagIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`rounded-full overflow-hidden shadow-sm shrink-0 ${className}`}>
      <rect width="32" height="32" fill="#AA151B" />
      <rect y="8" width="32" height="16" fill="#F1BF00" />
    </svg>
  );
}

export function UKFlagIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`rounded-full overflow-hidden shadow-sm shrink-0 ${className}`}>
      <rect width="32" height="32" fill="#012169" />
      <path d="M0 0L32 32M32 0L0 32" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M0 0L32 32M32 0L0 32" stroke="#C8102E" strokeWidth="2" />
      <path d="M16 0V32M0 16H32" stroke="#FFFFFF" strokeWidth="8" />
      <path d="M16 0V32M0 16H32" stroke="#C8102E" strokeWidth="4.5" />
    </svg>
  );
}
