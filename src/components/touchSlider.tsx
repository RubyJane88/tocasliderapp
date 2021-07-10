import React, { useState, useRef } from "react";
import { Slide, SliderContainer, H2, H4, Btn } from "../styles/styles";

const TouchSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  let [currentTranslate, setCurrentTranslate] = useState(0);
  let [prevTranslate, setPrevTranslate] = useState(0);
  const [animationId, setAnimationId] = useState(0);
  let [currentIndex, setCurrentIndex] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);

  const [slides, setSlide] = useState<
    Array<{ name: string; price: string; picture: string }>
  >([
    {
      name: "Airpods",
      price: "$199",
      picture: "https://i.ibb.co/y08W0Jx/image1.png",
    },

    {
      name: "iPhone 12",
      price: "$799",
      picture: "https://i.ibb.co/NYdGg2q/image2.png",
    },
    {
      name: "iPad",
      price: "$599",
      picture: "https://i.ibb.co/Jd3t4hQ/image3.png",
    },
  ]);

  const mouseEnter = () => {
    sliderRef.current.style.backgroundColor = "pink";
  };

  const mouseLeave = () => {
    sliderRef.current.style.backgroundColor = "gray";
  };

  const touchStart = (index) => {
    return (event) => {
      setCurrentIndex(index);
      setStartPos(getPositionX(event));
      setIsDragging(true);

      setAnimationId(requestAnimationFrame(animation));
      setIsGrabbing(false);
    };
  };
  const touchEnd = () => {
    setIsDragging(false);
    cancelAnimationFrame(animationId);

    const movedBy = currentTranslate - prevTranslate;
    console.log(movedBy);
    if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

    setPositionByIndex();
    setIsGrabbing(true);
  };
  const touchMove = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      console.log(currentPosition);
      currentTranslate = prevTranslate + currentPosition - startPos;
    }
  };

  const getPositionX = (event) => {
    return event.type.includes("mouse")
      ? event.pageX
      : event.touches[0].clientX;
  };
  const animation = () => {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  };
  const setSliderPosition = () => {
    sliderRef.current.style.transform = `translate(${currentTranslate}px)`;
  };

  const setPositionByIndex = () => {
    currentTranslate = currentIndex * -window.innerWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
  };

  return (
    <SliderContainer ref={sliderRef}>
      {slides.map((item, index) => {
        return (
          <Slide
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onTouchStart={touchStart(index)}
            onTouchMove={touchMove}
            onTouchEnd={touchEnd}
            key={item.name}
          >
            <H2>{item.name}</H2>
            <H4>{item.price}</H4>
            <img
              src={item.picture}
              alt={"apple products"}
              style={{ maxWidth: "100%", maxHeight: "70%" }}
            />
            <Btn>Buy Now</Btn>
          </Slide>
        );
      })}
    </SliderContainer>
  );
};

export default TouchSlider;
