import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function DialogPaypal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <i
        onClick={handleOpen}
        className="text-orange-700 text-4xl fa-sharp fa-solid fa-circle-plus ml-48"
      ></i>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Thêm món mới</DialogHeader>
        <DialogBody divider>
          {/* <div>
            <img src="https://minio.thecoffeehouse.com/image/admin/1669736835_ca-phe-sua-da_400x400.png" alt="Img"/>
          </div> */}
          <div class="grid grid-cols-3 gap-4">
            <div className="">
              <img
                src="https://minio.thecoffeehouse.com/image/admin/1669736835_ca-phe-sua-da_400x400.png"
                alt="Img"
              />
            </div>
            <div className="col-span-2">
              <h1>Cà phê sữa đá</h1>
              <p>
                Cà phê Đắk Lắk nguyên chất được pha phin truyền thống kết hợp
                với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu
                lưỡi và vị đắng thanh thoát nơi hậu vị
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div >
               nbj
              </div>
              <div className="col-span-2">
              45.000đ
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
