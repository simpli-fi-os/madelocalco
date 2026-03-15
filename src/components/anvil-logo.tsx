export function AnvilLogo({
  className = "h-5 w-5",
  separatorColor = "#111111",
}: {
  className?: string;
  separatorColor?: string;
}) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <g fill="currentColor">
        <path d="M100 210 C80 210 55 220 45 240 C38 255 50 268 70 268 L170 268 L170 210 Z" />
        <rect x="170" y="185" width="8" height="83" />
        <rect x="178" y="195" width="50" height="73" />
        <rect x="178" y="195" width="220" height="40" />
        <rect x="236" y="195" width="162" height="73" />
        <path d="M140 276 C110 276 75 310 80 340 C85 365 115 380 155 385 L195 388 C200 388 200 395 195 395 L170 398 C160 400 158 410 165 414 L200 414 L312 414 L347 414 C354 414 352 400 342 398 L317 395 C312 395 312 388 317 388 L357 385 C397 380 427 365 432 340 C437 310 402 276 372 276 Z" />
        <rect x="185" y="414" width="52" height="22" rx="3" />
        <rect x="275" y="414" width="52" height="22" rx="3" />
      </g>
      <g fill={separatorColor}>
        <rect x="170" y="268" width="228" height="8" />
        <rect x="228" y="195" width="8" height="73" />
      </g>
    </svg>
  );
}
