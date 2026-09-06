import {
  PROPMAAT_PIN_COLOR,
  PROPMAAT_PIN_PATH,
  PROPMAAT_PIN_RATIO,
  PROPMAAT_PIN_VIEWBOX,
} from "./propmaat-official-pin";

export function PropmaatPinImage({
  height,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox={PROPMAAT_PIN_VIEWBOX}
      className={`propmaat-pin-image select-none ${className}`}
      style={
        height === undefined
          ? undefined
          : { width: height * PROPMAAT_PIN_RATIO, height }
      }
      preserveAspectRatio="xMidYMax meet"
    >
      <path fill={PROPMAAT_PIN_COLOR} fillRule="evenodd" d={PROPMAAT_PIN_PATH} />
    </svg>
  );
}
