import Image from "next/image";
import Link from "next/link";
type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
  learnMoreUrl: string;
};
export default function Card({
  imageUrl,
  title,
  description,
  learnMoreUrl,
}: CardProps) {
  return (
    <>
      <div className="flex-col relative ">
        <div className="border-2 border-gray-300 h-75 w-lg overflow-hidden relative mb-8">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain object-cover p-1"
          ></Image>
        </div>
        <div className="p-4 border-2 border-gray-300 relative max-w-lg mb-8 text-center text-xl font-light">
          <p>{title}</p>
        </div>
        <div className="p-4 border-2 border-gray-300 relative max-w-lg mb-8 text-center text-sm text-gray-600">
          <p>{description}</p>
        </div>
        <div className="text-center text-sm text-orange-600 underline">
          <Link href={learnMoreUrl}>Learn More</Link>
        </div>
      </div>
    </>
  );
}
