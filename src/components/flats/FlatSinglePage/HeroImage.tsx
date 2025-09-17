import Image from "next/image";

export default function HeroImage({ url }: { url: string }) {
  return (
    <div className="w-screen h-[50vh] sm:h-[75vh] lg:h-screen relative">
      <Image src={url} alt="Flat photo" fill style={{ objectFit: "cover" }} />
    </div>
  );
}
