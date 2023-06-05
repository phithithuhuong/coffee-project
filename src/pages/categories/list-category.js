import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DialogPaypal from "../paypal/dialogPaypal";
const products = [
  {
    id: 1,
    name: "Bánh Snack",
    href: "#",
    price: "$48",
    imageSrc:
      "https://minio.thecoffeehouse.com/image/admin/1677724490_banh.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Trà trái cây-Trà sữa",
    href: "#",
    price: "$35",
    imageSrc:
      "https://minio.thecoffeehouse.com/image/admin/1677724550_hi-tea.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Hi-Tea Healthy",
    href: "#",
    price: "$89",
    imageSrc:
      "https://minio.thecoffeehouse.com/image/admin/1677724564_tra-trai-cay.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Cà phê",
    href: "#",
    price: "$35",
    imageSrc:
      "https://minio.thecoffeehouse.com/image/admin/1677724557_thuc-uong-khac.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];
const data = [
  {
    label: "Bánh Snack",
    value: "Bánh Snack",
    imageSrc:
      "https://minio.thecoffeehouse.com/image/admin/1677724490_banh.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Trà trái cây-Trà sữa",
    value: "Trà trái cây-Trà sữa",
    imageSrc:
      "https://minio.thecoffeehouse.com/image/admin/1677724550_hi-tea.png",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Hi-Tea Healthy",
    value: "Hi-Tea Healthy",
    imageSrc:
      "https://minio.thecoffeehouse.com/image/admin/1677724557_thuc-uong-khac.png",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Cà phê",
    value: "Cà phê",
    imageSrc:
      "https://minio.thecoffeehouse.com/image/admin/1677724557_thuc-uong-khac.png",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are.`,
  },
];

export function ListCategory() {
  return (
    <>
      <div className=" grid justify-center">
        <h2 className="text-2xl grid justify-center">
          <b className="">
            <i className="fas fa-trophy text-orange-500"></i> Sản phẩm từ Nhà
            <span className="bg-gray-300 px-2 py-1 rounded-md ml-4">
              <i className="fas fa-search" />
            </span>
          </b>
        </h2>
      </div>
      <div className="bg-white my-10">
        <Tabs value="Cà phê" className="w-full">
          <TabsHeader
            className="bg-transparent"
            indicatorProps={{
              className: "bg-orange-500/10 shadow-none text-orang-500",
            }}
          >
            {data.map((label, value) => (
              <Tab key={label.value} value={label.value}>
                <a className="group">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden w-28 h-28 rounded-full bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={label.imageSrc}
                      alt="IMG LIST"
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700 grid justify-center">
                    {label.label}
                  </h3>
                </a>
                <div></div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="w-full my-20">
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value} className="flex">
                <Card className="mt-6 w-80 mx-5 my-5">
                  <CardHeader color="blue-gray" className="relative h-86">
                    <img
                      src="https://minio.thecoffeehouse.com/image/admin/1669736835_ca-phe-sua-da_400x400.png"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      Cà phê sữa đá
                    </Typography>
                    <Typography></Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <div className="flex">
                      <div>45.000đ</div>
                      <DialogPaypal />

                    </div>
                  </CardFooter>
                </Card>
                <Card className="mt-6 w-80 mx-5 my-5">
                  <CardHeader color="blue-gray" className="relative h-86">
                    <img
                      src="https://minio.thecoffeehouse.com/image/admin/1669736835_ca-phe-sua-da_400x400.png"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      Cà phê sữa đá
                    </Typography>
                    <Typography></Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <div className="flex">
                      <div>45.000đ</div>
                      <DialogPaypal />
                      {/* <i className="text-orange-700 text-3xl fa-sharp fa-solid fa-circle-plus ml-48"></i> */}
                    </div>
                  </CardFooter>
                </Card>
                <Card className="mt-6 w-80 mx-5 my-5">
                  <CardHeader color="blue-gray" className="relative h-86">
                    <img
                      src="https://minio.thecoffeehouse.com/image/admin/1669736835_ca-phe-sua-da_400x400.png"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      Cà phê sữa đá
                    </Typography>
                    <Typography></Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <div className="flex">
                      <div>45.000đ</div>
                      <DialogPaypal />
                      {/* <i className="text-orange-700 text-3xl fa-sharp fa-solid fa-circle-plus ml-48"></i> */}
                    </div>
                  </CardFooter>
                </Card>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
}
