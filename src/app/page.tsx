import Image from "next/image";
import home_photo from "/public/assets/homepage/home_photo.webp";
import HomeText from "@/components/homepage/HomeText";
import FirstSection from "@/components/homepage/FirstSection/FirstSection";
import Gallery from "@/components/homepage/Gallery/Gallery";
import ContactSection from "@/components/homepage/Contact/Contact";
import Images from "@/components/homepage/SecondSection/Images/Images";
import CardSection from "@/components/Cards/Cards";

export default function Home() {
  return (
    <>
      
      <Image
        src={home_photo}
        alt="photo"
        width={1920}
        height={1080}
        className="w-screen h-screen object-cover z-40 relative shadow-2xl"
      />
      <div className=" flex flex-col items-center justify-center">
       <HomeText />
       <CardSection />
      <FirstSection /> 
      <Images />
      <Gallery />
      <ContactSection />
      </div>
    </>
  );
}
