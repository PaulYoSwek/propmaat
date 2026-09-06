export function PropmaatPin({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const height = Math.round(size * (78 / 55));
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 55 78"
      className={`text-accent ${className}`}
      aria-hidden
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M27.5 5.2c-11.4 0-20.4 9-20.4 20.8 0 16.8 17.8 40.6 19.3 42.5.4.5 1 .8 1.6.8.6 0 1.2-.3 1.6-.8 1.5-1.9 19.3-25.7 19.3-42.5 0-11.8-9-20.8-20.4-20.8ZM27.5 16.4a8.8 8.8 0 1 1 0 17.6 8.8 8.8 0 0 1 0-17.6Z"
      />
    </svg>
  );
}
