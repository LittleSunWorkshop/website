type SunMarkProps = {
  className?: string;
};

export function SunMark({ className = "" }: SunMarkProps) {
  return (
    <span className={`sun-mark ${className}`.trim()} aria-hidden="true">
      <span />
    </span>
  );
}
