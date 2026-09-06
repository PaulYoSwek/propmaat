const PIN_RATIO = 55 / 92;

export function PropmaatPinImage({
  height,
  className = "",
}: {
  height: number;
  className?: string;
}) {
  return (
    <img
      src="/brand/pin.png"
      alt=""
      width={height * PIN_RATIO}
      height={height}
      className={`select-none ${className}`}
      draggable={false}
    />
  );
}
