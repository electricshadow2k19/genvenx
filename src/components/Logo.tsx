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
      <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" opacity="0.15" />
      <circle cx="50" cy="50" r="38" fill="url(#logoGradient)" />
      <text
        x="50"
        y="68"
        fontSize="48"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
        fontFamily="'Inter', 'Arial', sans-serif"
        letterSpacing="-1"
      >
        G
      </text>
    </svg>
  )
}

