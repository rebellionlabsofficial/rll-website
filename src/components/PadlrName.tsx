interface PadlrNameProps {
  className?: string;
  dotColor?: string;
}

export default function PadlrName({
  className = "",
  dotColor = "text-[#C8FF00]",
}: PadlrNameProps) {
  return (
    <span className={className}>
      PADLR<span className={dotColor}>.</span>
    </span>
  );
}
