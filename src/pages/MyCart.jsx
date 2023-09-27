import React from "react";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";

const SHIPPING = 3000;

export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>🛫...Loading...🛬</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    hasProducts &&
    products.reduce(
      (prev, current) =>
        prev + parseInt(current.price) * parseInt(current.quantity),
      0
    );

  return (
    <section className="flex flex-col p-8">
      <p className="pb-4 text-2xl font-bold text-center border-b border-gray-300">
        장바구니
      </p>
      {!hasProducts && (
        <p>
          <span>텅</span> 장바구니에 상품이 없습니다.
        </p>
      )}
      {hasProducts && (
        <>
          <ul className="p-4 px-8 mb-8 border-b border-gray-300">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex items-center justify-between px-2 mb-8 md:px-8 lg:px-16">
            <PriceCard text="상품 금액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송비" price={SHIPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="주문 금액" price={totalPrice + SHIPPING} />
          </div>
          <Button text="구매하기" />
        </>
      )}
    </section>
  );
}
