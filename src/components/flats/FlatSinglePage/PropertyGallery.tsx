import Gallery from "@/components/flats/FlatSinglePage/Gallery";

export default function PropertyGallery() {
  return (
    <div className="flex flex-col justify-center items-center w-screen mt-32">
      <p className="uppercase border-b-[#008EF4] border-b-2 font-bold text-4xl w-2/3 text-center mb-20">Gallery</p>
      <Gallery />
      <span className="border-b-[#008EF4] border-b-2 mt-20 mb-12 w-2/3"></span>
    </div>
  );
}
