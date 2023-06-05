import { Carousel } from "@material-tailwind/react";
 
export default function Carousels() {
  return (
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
        src="https://file.hstatic.net/1000075078/file/banner_web_moi_-_desktop-4_2fc4c530b0544c739eb8b6693f4f78ff.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://file.hstatic.net/1000075078/file/banner_web_moi_-_desktop-2_5ac1ead0587b483bb6cb4a61e056eba0.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://file.hstatic.net/1000075078/file/web_desktop_6239afdcc8a3423c99a489210f67e44c.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}