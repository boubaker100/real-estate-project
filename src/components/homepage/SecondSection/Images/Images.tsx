import { Icons } from "@/data";
import Image from "next/image";

const Images = () => {
  return (
    <div className="z-10  w-screen xl:mt-32">
      <ul className="md:mt-68 flex items-center justify-center gap-[40px] sm:gap-[60px] xl:gap-[120px] flex-wrap">
        {Icons.map((item) => (
          <li key={item.id} className="text-center">
            <Image
              src={item.icon_url}
              width={100}
              height={100}
              alt={"icon"}
              className="w-[120px] h-[100px] sm:[w-100px] sm:h-[120px] md:[w-140px] md:h-[130px] xl:w-[200px] xl:h-[160px]"
            />
            <hr className="border-b-1 my-6" />
            <p className="mt-2 text-lg sm:text-xl">{item.icon_description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Images;
