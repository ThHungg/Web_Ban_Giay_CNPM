import { memo } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductsCard = ({ img, name, price, oldprice }) => {
  return (
    <div className="m-3 bg-white rounded-xl py-2 space-y-3 shadow-lg">
      <div className="w-[300px] h-[280px] m-2 overflow-hidden rounded-xl">
        <img src={img} alt={name} className="w-full h-full object-scale-down" />
      </div>

      <div className="flex flex-col items-center text-center space-y-2">
        <ul className="flex gap-3 text-[29px]">
          <li className="hover:bg-red-100 p-2 rounded-lg cursor-pointer">
            <AiOutlineEye />
          </li>
          <li className="hover:bg-red-100 p-2 rounded-lg cursor-pointer">
            <AiOutlineShoppingCart />
          </li>
        </ul>

        <div className="space-y-1">
          <Link to="" className="text-[23px] font-bold hover:text-red-500 transition duration-300">
            {name}
          </Link>
          <div className="flex items-center gap-2">
            <h1 className="text-[19px] text-red-500 font-semibold">{price}</h1>
            <h1 className="text-[16px] line-through opacity-50">{oldprice}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductsCard);
