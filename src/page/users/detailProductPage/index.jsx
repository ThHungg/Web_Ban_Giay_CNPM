import { memo } from "react";
import ncat1 from "../../../assets/users/img/newcategories/ncat1.jpg";
const DetailProduct = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-5 grid grid-cols-5">
        <div className="col-span-2">
          <img src={ncat1} alt="" className="h-[500px] w-[500px]" />
        </div>
        <div className="col-span-3">123</div>
      </div>
    </>
  );
};

export default memo(DetailProduct);
