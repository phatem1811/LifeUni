import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./Card.module.scss";
import image from "../../assets/images/courseimage.png";
import { FaRegStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "../Arrow";

const Card = () => {
  const [items, setItems] = useState([
    {
      title: "Khóa học React Native TypeScript New 2024",
      author: "Vinh Phat",
      duration: "05:32",
      lessons: 5,
      price: "551,000 đ",
      originalPrice: "580,000 đ",
      students: 2,
    },
    {
      title: "Khóa học React Native TypeScript New 2024",
      author: "Vinh Phat",
      duration: "05:32",
      lessons: 5,
      price: "551,000 đ",
      originalPrice: "580,000 đ",
      students: 2,
    },
    {
      title: "Khóa học React Native TypeScript New 2024",
      author: "Vinh Phat",
      duration: "05:32",
      lessons: 5,
      price: "551,000 đ",
      originalPrice: "580,000 đ",
      students: 2,
    },
    {
      title: "Khóa học React Native TypeScript New 2024",
      author: "Vinh Phat",
      duration: "05:32",
      lessons: 5,
      price: "551,000 đ",
      originalPrice: "580,000 đ",
      students: 2,
    },
    {
      title: "Khóa học React Native TypeScript New 2024",
      author: "Vinh Phat",
      duration: "05:32",
      lessons: 5,
      price: "551,000 đ",
      originalPrice: "580,000 đ",
      students: 2,
    },
  ]);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: showPrevArrow ? <PrevArrow /> : null,
    nextArrow: showNextArrow ? <NextArrow /> : null,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (current) => {
      setShowPrevArrow(current > 0);
      setShowNextArrow(current < items.length - 4);
    },
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>Những khóa học nổi bật</p>
        </div>
        <div className={styles.right}>
          <p>Xem thêm </p>
          <MdOutlineKeyboardDoubleArrowRight className={styles.icon} />
        </div>
      </div>

      <div className={styles.container}>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div className={styles.item} key={index}>
              <img className={styles.img} src={image} alt={item.title} />
              <div className={styles.course}>
                <p className={styles.title}>{item.title}</p>
                <div className={styles.info}>
                  <p>By {item.author}</p>
                  {[...Array(5)].map((_, starIndex) => (
                    <FaRegStar key={starIndex} />
                  ))}
                  <p>
                    Thời gian {item.duration} - {item.lessons} Bài giảng
                  </p>
                </div>
                <div className={styles.footer}>
                  <div className={styles.cost}>
                    <span>{item.price}</span>
                    <span>{item.originalPrice}</span>
                  </div>
                  <p>{item.students} đã học</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Card;
