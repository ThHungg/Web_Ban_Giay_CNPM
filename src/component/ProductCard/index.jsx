import { memo } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductsCard = ({ img, name, price, oldprice }) => {
  return (
    <>
      <div className="m-3 bg-white rounded-xl py-2 space-y-3">
        <div
          className="w-[290px] h-[257px] mx-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="flex flex-col items-center text-center">
          <ul className="flex gap-1 text-[29px]">
            <li className="hover:bg-red-100">
              <AiOutlineEye />
            </li>
            <li className="hover:bg-red-100">
              <AiOutlineShoppingCart />
            </li>
          </ul>
          <div className="">
            <Link to="" className="text-[23px]">
              {name}
            </Link>
            <div className="flex items-center gap-2">
              <h1 className="text-[19px]">{price}</h1>
              <h1 className="text-[16px] line-through opacity-50">
                {oldprice}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductsCard);
