import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <div className="font-bold text-xl inline-flex items-center h-[30px] line-clamp-1 p-2 group">
        <Image
          src="/bakalogo.svg"
          alt="Emmanuel Gomez Logo"
          width={30}
          height={30}
          className="rounded-full transition-transform duration-200 group-hover:rotate-[20deg] w-[30px] h-[30px]"
        />
        <div className="text-lg font-semibold dark:text-white text-gray-700 ml-3">
          Emmanuel Gomez
        </div>
      </div>
    </Link>
  );
}
