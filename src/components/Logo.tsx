interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" opacity="0.2" />
      <path
        d="M30 50 L45 35 L55 35 L70 50 L55 65 L45 65 Z"
        fill="url(#logoGradient)"
        stroke="url(#logoGradient)"
        strokeWidth="2"
      />
      <path
        d="M40 50 L50 40 L60 50 L50 60 Z"
        fill="white"
        opacity="0.9"
      />
      <circle cx="50" cy="50" r="8" fill="url(#logoGradient)" />
    </svg>
  )
}

