import React from "react";

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li className="overflow-hidden transition-all rounded-lg shadow-md cursor-pointer hover:scale-105 bg-background">
      <img className="w-full" src={image} alt={title} />
      <div className="flex items-center justify-between px-2 mt-2 text-lg">
        <h3 className="truncate">{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className="px-2 mb-2 text-gray-600">{category}</p>
    </li>
  );
}
