"use client";

import FlatCard from "./FlatCard";

interface FlatsListProps {
  data: any[];
}

const FlatsList = ({ data }: FlatsListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 my-16 w-[90vw] mx-auto">
      {data.map((item) => (
        <FlatCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FlatsList;
