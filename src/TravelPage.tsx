import React, { useRef } from "react";
import { Slide, SliderContainer, H2, H4, Btn } from "./styles/styles";

const TravelPage = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const mouseEnter = () => {
    sliderRef.current.style.backgroundColor = "pink";
  };

  const mouseLeave = () => {
    sliderRef.current.style.backgroundColor = "gray";
  };

  return (
    <>
      <SliderContainer
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        ref={sliderRef}
      >
        <Slide>
          <H2>Travel Packages</H2>
          <H4>$199</H4>
          <img
            src={"assets/image1.jpg"}
            alt={"baggage"}
            style={{ maxWidth: "100%", maxHeight: "70%" }}
          />
          <Btn> Learn More </Btn>
        </Slide>
        <Slide>
          <H2>Mountain Hiking</H2>
          <H4>$199</H4>
          <img
            src={"assets/image2.jpg"}
            alt={"mountain"}
            style={{ maxWidth: "100%", maxHeight: "70%" }}
          />
          <Btn> Learn More </Btn>
        </Slide>

        <Slide>
          <H2>Canoe Life</H2>
          <H4>$199</H4>
          <img
            src={"assets/canoeing.jpg"}
            alt={"Canoe"}
            style={{ maxWidth: "100%", maxHeight: "70%" }}
          />
          <Btn> Learn More </Btn>
        </Slide>

        <Slide>
          <H2>Road Trip</H2>
          <H4>$1000</H4>
          <img
            src={"assets/road.jpg"}
            alt={"road"}
            style={{ maxWidth: "100%", maxHeight: "70%" }}
          />
          <Btn> Learn More </Btn>
        </Slide>
      </SliderContainer>
    </>
  );
};

export default TravelPage;
