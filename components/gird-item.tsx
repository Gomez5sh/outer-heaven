"use client";
import Image from "next/image";
import NextLink from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  title: string;
  thumbnail: string;
}

interface WorkProps {
  children: React.ReactNode | string;
  category?: string;
  id: string;
  title: string;
  thumbnail: string;
}

export const GridItem = ({ children, href, title, thumbnail }: Props) => (
  <div className="w-full text-center">
    <div className="cursor-pointer">
      <NextLink href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail rounded-lg shadow-lg border-20 dark:border-zinc-100 border-zinc-600"
          loading="lazy"
          width={400}
          height={400}
        />
        <div className="mt-2 text-lg font-semibold hover:underline">
          {title}
        </div>
      </NextLink>
      <p className="text-sm mt-2">{children}</p>
    </div>
  </div>
);

export const WorkGridItem = ({
  children,
  category = "works",
  id,
  title,
  thumbnail,
}: WorkProps) => (
  <div className="w-full text-center">
    <div className="cursor-pointer">
      <NextLink href={`/${category}/${id}`} scroll={false}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail rounded-lg shadow-lg border-20 dark:border-zinc-100 border-zinc-600"
          loading="lazy"
          width={400}
          height={400}
        />
        <div className="mt-2 text-xl font-bold hover:underline">{title}</div>
      </NextLink>
      <p className="text-sm mt-2">{children}</p>
    </div>
  </div>
);

// Estilo global para las miniaturas
export const GridItemStyle = () => (
  <style jsx global>{`
    .grid-item-thumbnail {
      border-radius: 12px;
    }
  `}</style>
);
