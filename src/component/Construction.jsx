import React from "react";
import Card from "./Card";

function Construction() {
  return (
    <div className="p-4 bg-slate-100">
      <h3 className="text-[#007092] text-4xl font-medium text-center bg-[#00709236] p-2">
        All Popular Service Providers
      </h3>
      <div className="flex items-center justify-center p-5">
        <h2 className="w-2/3 text-2xl text-center border-b-2 border-black">
          Construction
        </h2>
      </div>
      <div className="flex   overflow-x-scroll gap-2 w-full  ">
        {[...Array(20)].map((_, index) => (
          <Card
            text="putatoe"
            source="https://placehold.co/100x100"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Construction;
