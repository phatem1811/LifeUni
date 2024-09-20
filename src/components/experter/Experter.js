import React from "react";
import styles from "./Experter.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "../Arrow";
import image from "../../assets/images/avatar.avif";
import Slider from "react-slick";
const Experter = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Sử dụng mũi tên trái tùy chỉnh
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className={styles.container}>
        <h2>Chuyên gia tiêu biểu</h2>
        <Slider {...settings}>
          <div className={styles.gridItem}>
            <img className={styles.img} src={image} alt="Xu hướng thị trường" />
            <h3>Chuyên gia</h3>
            <p>Nguyễn Văn Sơn</p>
            <p>Chuyên gia IT Frontend developer</p>
          </div>
          <div className={styles.gridItem}>
            <img src={image} alt="Xu hướng thị trường" />
            <h3>Chuyên gia</h3>
            <p>Nguyễn Văn Sơn</p>
            <p>Chuyên gia IT Frontend developer</p>
          </div>
          <div className={styles.gridItem}>
            <img src={image} alt="Xu hướng thị trường" />
            <h3>Chuyên gia</h3>
            <p>Nguyễn Văn Sơn</p>
            <p>Chuyên gia IT Frontend developer</p>
          </div>
          <div className={styles.gridItem}>
            <img src={image} alt="Xu hướng thị trường" />
            <h3>Chuyên gia</h3>
            <p>Nguyễn Văn Sơn</p>
            <p>Chuyên gia IT Frontend developer</p>
          </div>
          <div className={styles.gridItem}>
            <img src={image} alt="Xu hướng thị trường" />
            <h3>Chuyên gia</h3>
            <p>Nguyễn Văn Sơn</p>
            <p>Chuyên gia IT Frontend developer</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Experter;
