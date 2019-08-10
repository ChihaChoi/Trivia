import React, { Component } from "react";

class Logo extends Component {
  state = {};
  componentDidMount() {
    const logo = document.querySelectorAll("#logo path");
    for (let i = 0; i < logo.length; i++) {
      console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
      // logo[i].style.setProperty('stroke','red')
      logo[i].style.setProperty("stroke-dasharray", logo[i].getTotalLength());
      logo[i].style.setProperty("stroke-dashoffset", logo[i].getTotalLength());
      logo[i].style.setProperty(
        "animation",
        `line-anim 1s ${0.3 + 0.15 * i}s forwards`
      );
    }
  }
  render() {
    return (
      <div>
        <svg
          id="logo"
          width="560"
          height="110"
          viewBox="0 0 560 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M81.1875 73.5156C79.9219 84.3438 75.9141 92.7109 69.1641 98.6172C62.4609 104.477 53.5312 107.406 42.375 107.406C30.2812 107.406 20.5781 103.07 13.2656 94.3984C6 85.7266 2.36719 74.125 2.36719 59.5938V49.75C2.36719 40.2344 4.05469 31.8672 7.42969 24.6484C10.8516 17.4297 15.6797 11.8984 21.9141 8.05469C28.1484 4.16406 35.3672 2.21875 43.5703 2.21875C54.4453 2.21875 63.1641 5.26562 69.7266 11.3594C76.2891 17.4062 80.1094 25.7969 81.1875 36.5312H67.6172C66.4453 28.375 63.8906 22.4688 59.9531 18.8125C56.0625 15.1562 50.6016 13.3281 43.5703 13.3281C34.9453 13.3281 28.1719 16.5156 23.25 22.8906C18.375 29.2656 15.9375 38.3359 15.9375 50.1016V60.0156C15.9375 71.125 18.2578 79.9609 22.8984 86.5234C27.5391 93.0859 34.0312 96.3672 42.375 96.3672C49.875 96.3672 55.6172 94.6797 59.6016 91.3047C63.6328 87.8828 66.3047 81.9531 67.6172 73.5156H81.1875Z"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M178.359 106H164.789V58.6797H113.18V106H99.6797V3.625H113.18V47.6406H164.789V3.625H178.359V106Z"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M216.82 106H203.32V3.625H216.82V106Z"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M275.461 88.0703L304.711 3.625H319.477L281.508 106H269.555L231.656 3.625H246.352L275.461 88.0703Z"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M347.742 106H334.242V3.625H347.742V106Z"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M451.172 106H437.602V58.6797H385.992V106H372.492V3.625H385.992V47.6406H437.602V3.625H451.172V106Z"
            stroke="white"
            stroke-width="4"
          />
          <path
            d="M532.945 79.2812H490.055L480.422 106H466.5L505.594 3.625H517.406L556.57 106H542.719L532.945 79.2812ZM494.133 68.1719H528.938L511.5 20.2891L494.133 68.1719Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
      </div>
    );
  }
}

export default Logo;
