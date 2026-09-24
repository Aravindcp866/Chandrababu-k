import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  aspect?: string;
  className?: string;
  muted?: boolean;
};

export function Photo({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  aspect = "4 / 3",
  className = "",
  muted = true,
}: PhotoProps) {
  return (
    <div
      className={`photo-frame ${muted ? "photo-frame--muted" : ""} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain rounded-lg"
      />
    </div>
  );
}
