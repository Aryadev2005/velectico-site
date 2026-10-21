export function LogoMark({ light = true }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 120 100" aria-hidden="true">
      <defs>
        <linearGradient id={light ? "vg-l" : "vg-d"} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={light ? "#4FA8FF" : "#1A8CFF"} />
          <stop offset="1" stopColor={light ? "#1F55E0" : "#0A2FC9"} />
        </linearGradient>
      </defs>
      <rect x="9" y="9" width="40" height="40" rx="5" transform="rotate(45 29 29)" fill={`url(#${light ? "vg-l" : "vg-d"})`} />
      <rect x="71" y="9" width="40" height="40" rx="5" transform="rotate(45 91 29)" fill={`url(#${light ? "vg-l" : "vg-d"})`} />
      <rect x="40" y="40" width="40" height="40" rx="5" transform="rotate(45 60 60)" fill="#12B5F2" />
      <rect x="50" y="50" width="20" height="20" rx="2" transform="rotate(45 60 60)" fill="#fff" />
    </svg>
  );
}
