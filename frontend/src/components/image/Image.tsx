import "./image.css";

export function Image({
  className,
  src,
  alt,
}: {
  className: string;
  src: string;
  alt: string;
}) {
  return className === "banner" ? (
    <div className="banner-container">
      <img className="banner-image" src={src} alt={alt} loading="lazy" />
    </div>
  ) : (
    <img className={className} src={src} alt={alt} loading="lazy" />
  );
}
