import React from "react";
import ModalComponents from "./ModalComponents";

const Card = ({ news, index }) => {
  return (
    <div key={index} className="shadow-2xl p-4 rounded-lg bg-black">
      <img
        src={news.image.small}
        alt={news.title}
        className="rounded-lg w-full h-48 object-cover p-"
      />
      <div className="p-2">
        <span className="text-xs text-gray-400">{news.isoDate}</span>
        <h2 className="font-bold text-lg text-white mt-1">{news.title}</h2>
        <p className="text-sm text-white mt-2">{news.contentSnippet}</p>
        <div className="mt-4">
          <ModalComponents news={news} />
        </div>
      </div>
    </div>
  );
};

export default Card;
