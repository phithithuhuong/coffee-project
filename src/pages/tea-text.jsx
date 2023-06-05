import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

 const TeaText = (props) => {
  return (
    <>
      <div className="containers">
        <div className="grid grid-flow-col bg-orange-50">
          <div className="sm:w-full sm:col-span-full">
            <img
              src="https://file.hstatic.net/1000075078/file/kombucha_a7266b95333644f09e4a2256a4705c37.png"
              alt="Text tea"
            />
          </div> 
          <div className="justify-left mx-20 my-20">
            <img
              className="sm:w-full"
              src="https://file.hstatic.net/1000075078/file/kombucha-headline_9ead87096eb0447b91fb87f696d8cb7f.png"
              alt="Text-tea"
            />
            <div classname=" sm:w-full">
              <p className="text-gray-600">
                Với nền trà không caffeine 100% hoa Hibiscus tự nhiên, kết hợp
                cùng trà lên men cao cấp Kombucha Detox và hương vị trái cây
                tươi mát, Hi-Tea Kombucha Detox là lựa chọn cho người trẻ hiện
                đại quan tâm sức khoẻ và yêu chiều bản thân. Đặc biệt, dòng sản
                phẩm chứa nhiều vitamin, chất chống oxy hóa, các loại axit hữu
                cơ và lợi khuẩn giúp thanh lọc cơ thể, hỗ trợ gọn dáng, sáng da
                hiệu quả.Chọn Hi-Tea Kombucha Detox là chọn "Say Hi" với một
                trải nghiệm detox thật dễ dàng và tiện lợi.
              </p>
            </div>
            <div className="w-full mt-10">
           <Link to="/list-category"> <Button className="w-full bg-red-900">Thử ngay</Button> </Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TeaText;