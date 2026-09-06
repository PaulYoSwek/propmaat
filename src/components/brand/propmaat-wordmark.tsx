import { PropmaatPin } from "./propmaat-pin";

export function PropmaatWordmark({
  className = "",
}: {
  className?: string;
  forceVariant?: "complete" | "slot";
}) {
  return (
    <span
      className={`inline-flex items-end text-[22px] leading-none font-extrabold tracking-tight text-ink ${className}`}
      role="img"
      aria-label="Propmaat"
    >
      <span>Pr</span>
      <span className="mx-0.5 inline-flex h-[1em] w-[0.95em] items-end justify-center">
        <PropmaatPin size={20} />
      </span>
      <span>pmaat</span>
    </span>
  );
}
