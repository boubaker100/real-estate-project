import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Photo from "/public/assets/adverts/flats/flat1.webp";

const TimelineData = [
  {
    title: "Stage One",
    description: "Description for stage one. Lorem ipsum dolor sit amet.",
  },
  {
    title: "Stage Two",
    description: "Description for stage two. Lorem ipsum dolor sit amet.",
  },
  {
    title: "Stage Three",
    description: "Description for stage three. Lorem ipsum dolor sit amet.",
  },
];

const Timeline = () => {
  return (
    <div className="mt-36 w-full px-4 sm:px-10 lg:px-20">
      <VerticalTimeline lineColor="#c5c5c5" animate={true}>
        {TimelineData.map((data, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#f9f9f9",
              color: "#333",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #f9f9f9",
            }}
            iconStyle={{
              background: index % 2 === 0 ? "#6fa8dc" : "#8fce00",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            <h3 className="font-bold text-lg mb-2">{data.title}</h3>
            <p className="text-gray-600 mb-4">{data.description}</p>
            <Image
              src={Photo}
              alt="timeline photo"
              className="rounded-lg w-full h-48 object-cover"
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
