import Image from "next/image";
import GalleryArrow from "/public/assets/homepage/Arrow 2.png";
import GalleryImages from "./GalleryImages/GalleryImages";

const Gallery = () => {
  return (
    <div className="mt-48  flex-col justify-space-between relative h-full w-screen  overflow-hidden">
      <div className="flex -translate-x-44 sm:-translate-x-14 items-center">
        <Image
          src={GalleryArrow}
          alt="arrow"
          width={500}
          height={20}
        />
        <h1 className="font-jost text-2xl sm:text-4xl ms-2">Album</h1>
      </div>
      <GalleryImages />
    </div>
  );
};

export default Gallery;
