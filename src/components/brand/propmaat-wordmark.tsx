export function PropmaatWordmark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span className={`propmaat-wordmark ${className}`} aria-hidden>
      <img
        src="/brand/propmaat-lockup.png"
        alt=""
        className="propmaat-wordmark-lockup select-none"
        draggable={false}
      />
    </span>
  );
}
