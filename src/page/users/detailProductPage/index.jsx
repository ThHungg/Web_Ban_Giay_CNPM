import { memo } from "react";
import ncat1 from "../../../assets/users/img/newcategories/ncat1.jpg";
import ncat2 from "../../../assets/users/img/newcategories/ncat2.jpg";
import ncat2_1 from "../../../assets/users/img/newcategories/ncat2.jpg";
import ncat2_2 from "../../../assets/users/img/newcategories/ncat2.jpg";
import formatter from "../../../utils/formatter.jsx";
import Quantity from "../../../component/Quantity/index.jsx";
import shoesData from "../../../data.json";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  const product = shoesData.shoes.find((item) => item.id === Number(id));
  const imgs = [ncat2, ncat1, ncat2_2];
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-5 grid grid-cols-5">
        <div className="col-span-2 mx-auto">
          <img
            src={product.img}
            alt=""
            className="h-[380px] w-full object-contain"
          />
          <div className="flex justify-center gap-3 mt-2">
            {imgs.map((item, key) => (
              <img
                src={item}
                alt=""
                key={key}
                className="h-[80px] w-[80px] object-contain"
              />
            ))}
          </div>
        </div>
        <div className="col-span-3 ml-3">
          <h1 className="uppercase text-4xl font-bold">
            {product.name}
          </h1>
          <ul>
            <li className="text-xl">
              <b>Mã SP: </b> <span>{product.id}</span>
            </li>
          </ul>
          <div className="flex gap-5 items-center">
            <h1 className="text-red-500 font-bold text-2xl">
              {formatter(product.price)}
            </h1>
            <h1 className="text-gray-500 opacity-70 font-bold text-xl line-through">
              {formatter(product.oldprice)}
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
          <Quantity />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-5 text-center">
        <h1 className="text-3xl font-bold ">Mô tả sản phẩm</h1>
        <p>
          Giày Thể Thao Nike Air Force 1 Shadow White Metallic Silver
          CI0919-119 được hoàn thiện từ chất liệu da cao cấp. Đường khâu chắc
          chắn, chất liệu hoàn hảo đến thiết kế đế lót ly đều được chau chuốt tỉ
          mỉ. Dòng giày Nike Air Force 1 vốn là thiết kế cho mẫu giày bóng rổ
          nên sản phẩm này cũng được thừa hưởng đệm Nike Air, giúp nâng đỡ bàn
          chân, cho bạn cảm giác êm ái khi vận động. Form gihày đi lên chân vừa
          vặn, các đường chỉ khâu rất tinh tế và tỉ mỉ đến từng chi tiết. Màu
          sắc giày sáng, không quá cầu kỳ họa tiết, đơn giản nhưng dễ dàng mix
          match.  
        </p>
      </div>
    </>
  );
};

export default memo(DetailProduct);
