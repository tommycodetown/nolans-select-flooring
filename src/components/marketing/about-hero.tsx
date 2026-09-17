import Image from "next/image";

const proofPoints = [
  {
    label: "Est. 1989",
    text: "More than three decades in New York flooring",
  },
  {
    label: "Family run",
    text: "Led by John Nolan and his son Aidan",
  },
  {
    label: "Long standing crew",
    text: "Decades of practical flooring experience",
  },
] as const;

export function AboutHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      <div className="shell about-hero-inner">
        <div className="about-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="about-hero-title">{title}</h1>
          <p>{intro}</p>
        </div>

        <div className="about-hero-proof">
          {proofPoints.map((point) => (
            <div className="about-hero-proof-item" key={point.label}>
              <p className="about-hero-proof-label">{point.label}</p>
              <p className="about-hero-proof-text">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="about-hero-photo image-frame">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            quality={95}
            sizes="(max-width: 760px) 100vw, 38vw"
            className="about-hero-photo-image"
          />
        </div>
      </div>
    </section>
  );
}
