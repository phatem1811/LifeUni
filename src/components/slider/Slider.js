import { Button } from "@mantine/core";
import React from "react";
import styles from "./Slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderr from "react-slick";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    arrows: false,
    fade: false,
  };
  return (
    <div className={styles.slider}>
      <Sliderr {...settings}>
        <div className={styles.content}>
          <ul>
            <li>Learn from expert with Life Unit</li>
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac ultricies lorem.
              </p>
            </li>
            <li>
              <Button className={styles.btn}>Học thử</Button>
            </li>
          </ul>
        </div>

        <div className={styles.content}>
          <ul>
            <li>Learn from expert with Life Unit</li>
            <li>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac ultricies lorem.
              </p>
            </li>
            <li>
              <Button className={styles.btn}>Học thử</Button>
            </li>
          </ul>
        </div>
      </Sliderr>
    </div>
  );
};

export default Slider;
