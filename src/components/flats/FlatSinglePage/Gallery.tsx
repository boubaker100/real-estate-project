import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import Image1 from "/public/assets/adverts/flats/photos/foto1.jpg";
import Image2 from "/public/assets/adverts/flats/photos/foto2.jpg";
import Image3 from "/public/assets/adverts/flats/photos/foto3.jpg";
import Image4 from "/public/assets/adverts/flats/photos/foto4.jpg";
import Image5 from "/public/assets/adverts/flats/photos/foto5.jpg";
import Image6 from "/public/assets/adverts/flats/photos/foto6.jpg";
import Image7 from "/public/assets/adverts/flats/photos/foto7.jpg";
import Image8 from "/public/assets/adverts/flats/photos/foto8.jpg";
import Image9 from "/public/assets/adverts/flats/photos/foto9.jpg";
import Image10 from "/public/assets/adverts/flats/photos/foto10.jpg";
import Image11 from "/public/assets/adverts/flats/photos/foto11.jpg";

const itemData = [
  {
    img: Image1,
    title: "RoomImage",
  },
  {
    img: Image2,
    title: "RoomImage",
  },
  {
    img: Image3,
    title: "RoomImage",
  },
  {
    img: Image4,
    title: "RoomImage",
  },
  {
    img: Image5,
    title: "RoomImage",
  },
  {
    img: Image6,
    title: "RoomImage",
  },
  {
    img: Image7,
    title: "RoomImage",
  },
  {
    img: Image8,
    title: "RoomImage",
  },
  {
    img: Image9,
    title: "RoomImage",
  },
  {
    img: Image10,
    title: "RoomImage",
  },
  {
    img: Image11,
    title: "RoomImage",
  },
];

import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

export default function Gallery() {
  const [screenSize, setScreenSize] = useState(0);

  const updateScreenSize = () => {
    if (window.innerWidth < 576) {
      setScreenSize(2);
    } else if (window.innerWidth < 768) {
      setScreenSize(1);
    } else {
      setScreenSize(0);
    }
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <Box>
      <Masonry
        columns={screenSize === 1 ? 2 : screenSize === 2 ? 1 : 3}
        spacing={2}
      >
        {itemData.map((item, index) => (
          <div key={index}>
            <Image
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
