import { memo } from "react";
import ncat1 from "../../../assets/users/img/newcategories/ncat1.jpg";
import ncat2 from "../../../assets/users/img/newcategories/ncat2.jpg";
import ncat2_1 from "../../../assets/users/img/newcategories/ncat2.jpg";
import ncat2_2 from "../../../assets/users/img/newcategories/ncat2.jpg";
import formatter from "../../../utils/formatter.jsx";
import Quantity from "../../../component/Quantity/index.jsx";

const DetailProduct = () => {
  const imgs = [ncat2, ncat1, ncat2_2];
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-5 grid grid-cols-5">
        <div className="col-span-2 mx-auto">
          <img
            src={ncat1}
            alt=""
            className="h-[500px] w-[500px] object-contain"
          />
          <div className="flex justify-center gap-3 mt-2">
            {imgs.map((item, key) => (
              <img
                src={item}
                alt=""
                key={key}
                className="h-[100px] w-[140px] object-contain"
              />
            ))}
          </div>
        </div>
        <div className="col-span-3 ml-3">
          <h1 className="uppercase text-4xl font-bold">
            AIR FORCE 1 SHADOW FULL WHITE
          </h1>
          <ul>
            <li className="text-xl">
              <b>Mã SP: </b> <span>SP001</span>
            </li>
          </ul>
          <div className="flex gap-5 items-center">
            <h1 className="text-red-500 font-bold text-2xl">
              {formatter(3200000)}
            </h1>
            <h1 className="text-gray-500 opacity-70 font-bold text-xl line-through">
              {formatter(3700000)}
            </h1>
          </div>
          <ul>
            <li className="text-xl">
              <b>Tình trạng: </b> <span>Còn hàng</span>
            </li>
            <li className="text-xl">
              <b>Size: </b>
            </li>
          </ul>
          <Quantity/>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-5 text-center">
          <h1 className="text-3xl font-bold ">Mô tả sản phẩm</h1>
          <p>Giày Thể Thao Nike Air Force 1 Shadow White Metallic Silver CI0919-119 được hoàn thiện từ chất liệu da cao cấp. Đường khâu chắc chắn, chất liệu hoàn hảo đến thiết kế đế lót ly đều được chau chuốt tỉ mỉ. Dòng giày Nike Air Force 1 vốn là thiết kế cho mẫu giày bóng rổ nên sản phẩm này cũng được thừa hưởng đệm Nike Air, giúp nâng đỡ bàn chân, cho bạn cảm giác êm ái khi vận động.

Form gihày đi lên chân vừa vặn, các đường chỉ khâu rất tinh tế và tỉ mỉ đến từng chi tiết. Màu sắc giày sáng, không quá cầu kỳ họa tiết, đơn giản nhưng dễ dàng mix match.
 </p>
        </div>
    </>
  );
};

export default memo(DetailProduct);
