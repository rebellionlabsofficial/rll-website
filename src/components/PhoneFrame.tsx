import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

// A lightweight iPhone bezel. Screenshots already include the status bar and
// Dynamic Island, so the frame only supplies the hardware edge.
export default function PhoneFrame({
  src,
  alt,
  width = 720,
  height = 1565,
  sizes = "(min-width: 1024px) 300px, 60vw",
  priority = false,
  className = "",
}: PhoneFrameProps) {
  return (
    <div
      className={`relative rounded-[2.6rem] bg-[#1b1b1e] p-[9px] shadow-phone ring-1 ring-white/10 ${className}`}
    >
      <div className="overflow-clip rounded-[2.15rem] bg-padlr-ink">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
