import Image from "next/image";

type PieceCardProps = {
  piece: {
    name: string;
    category: string;
    image: string;
    alt: string;
  };
  index: number;
};

export function PieceCard({ piece, index }: PieceCardProps) {
  return (
    <article className="piece-card">
      <div className="piece-image">
        <Image
          src={piece.image}
          alt={piece.alt}
          fill
          sizes="(max-width: 560px) 82vw, (max-width: 1100px) 50vw, 33vw"
        />
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="piece-meta">
        <div>
          <p>{piece.category}</p>
          <h3>{piece.name}</h3>
        </div>
        <p>One of one · Preview</p>
      </div>
    </article>
  );
}
