interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20"
        stroke="#22C55E"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
