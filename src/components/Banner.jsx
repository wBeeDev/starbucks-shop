import React from "react";

export default function Banner() {
  return (
    <section className="relative bg-background h-96">
      <div className="w-full h-full bg-center bg-cover opacity-30 bg-banner" />
      <div className="absolute w-full text-center top-32 text-gray-50 drop-shadow-2xl">
        <h2 className="pb-4 text-6xl font-semibold text-black drop-shadow-2xl">
          Joyful Memories Together
        </h2>

        <p className="text-2xl font-semibold text-black drop-shadow-xl">
          <span className="mr-2 text-2xl font-black text-brand drop-shadow-xl">
            디즈니 콜라보레이션
          </span>
          상품을 소개합니다.
        </p>
      </div>
    </section>
  );
}
