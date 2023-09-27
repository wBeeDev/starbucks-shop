import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess("✅ 장바구니에 추가되었습니다.");
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      <section className="flex flex-col p-4 md:flex-row">
        <img className="w-1/3 px-4 basis-6/12" src={image} alt={title} />
        <div className="flex flex-col w-full p-4 basis-6/12">
          <h2 className="py-2 text-3xl font-bold">{title}</h2>
          <p className="py-2 text-2xl font-bold border-b border-gray-400">
            ₩{price}
          </p>
          <p className="py-4 text-lg">{description}</p>
          <div className="flex items-center">
            <label className="font-bold text-brand" htmlFor="select">
              옵션:
            </label>
            <select
              id="select"
              className="flex-1 p-2 m-4 border-2 border-dashed outline-none border-brand"
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
            {success && <p className="my-2">{success}</p>}
            <Button text="장바구니에 추가" onClick={handleClick} />
          </div>
        </div>
      </section>
    </>
  );
}
