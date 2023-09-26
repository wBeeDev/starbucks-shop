import React from "react";
import { addOrUpdateToCart, removeFromCart } from "../api/firebase";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });

  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li className="flex items-center justify-between my-2">
      <img className="w-24 rounded-lg md:w-48" src={image} alt={title} />
      <div className="flex justify-between flex-1 ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-brand">{option}</p>
          <p>₩{price}</p>
        </div>
      </div>
      <div className="flex items-center text-2xl">
        <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
        <span>{quantity}</span>
        <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
        <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
      </div>
    </li>
  );
}