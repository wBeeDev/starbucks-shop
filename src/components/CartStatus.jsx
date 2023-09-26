import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(["carts"], () => getCart(uid));
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-4xl" />
      {products && (
        <p className="absolute w-6 h-6 font-bold text-center text-white rounded-full bg-brand -top-1 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
