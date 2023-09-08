import { useEffect, useState } from "react";
import image1 from "../assets/landing1.svg";
import image2 from "../assets/loan2.png";
import image3 from "../assets/loan6.png";
import image4 from "../assets/finance.svg";
import image5 from "../assets/loan7.svg";

const Slider = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const next = (currentIndex + 1) % images.length;
    const id = setTimeout(() => setCurrentIndex(next), 4000);
    return () => clearTimeout(id);
  }, [currentIndex, images.length]);
  return (
    <div className="carousel">
      {images.map((img, index) => (
        <img
          key={index}
          loading="lazy"
          src={img}
          className={`carousel__image ${
            index === currentIndex ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default Slider;
