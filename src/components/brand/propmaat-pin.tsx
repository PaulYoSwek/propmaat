export function PropmaatPin({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const height = Math.round(size * (28 / 20));
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 20 28"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 1.4C5.4 1.4 1.7 5 1.7 9.7c0 7.1 7.3 16.2 7.9 17a.55.55 0 0 0 .8 0c.6-.8 7.9-9.9 7.9-17 0-4.7-3.7-8.3-8.3-8.3Zm0 5.1a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6Z"
      />
    </svg>
  );
}
