import { Button, Carousel } from "@material-tailwind/react";
import React from "react";

export function View(props) {
  return (
    <>
      <div className="grid gap-2 grid-cols-3 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="my-20">
            <h1 className="text-3xl font-sans">
                The coffee garden tree
            </h1>
            <br/>
            <p>
            Nhà mới Quận 7 toạ lạc tại khu đô thị The Grand View, với những khu phố hiện đại, sầm uất và nhộn nhiệp.
            </p>
            <Button className="w-80 bg-red-900 my-10">Tìm hiểu thêm</Button>
        </div>
        <div className="col-span-2">
          <Carousel
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src="https://file.hstatic.net/1000075078/file/grandview3_badde8d8296d4474b7ecb2ae67fb2dd8_master.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://file.hstatic.net/1000075078/file/grandview4_a0b9416347f44d1b92910ce4725ac9d9_master.jpg"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://file.hstatic.net/1000075078/file/grandview1_281ebbd42e1e40368c783002bfda0054_master.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}
