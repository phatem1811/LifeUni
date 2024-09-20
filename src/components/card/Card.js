import { Grid } from "@mantine/core";
import React, { useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./Card.module.scss";
import image from "../../assets/images/courseimage.png";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

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
  ]);

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>Những kinh nghiệm mới nhất</p>
        </div>
        <div className={styles.right}>
          <p>Xem thêm </p>
          <MdOutlineKeyboardDoubleArrowRight className={styles.icon} />
        </div>
      </div>

      <div className={styles.container}>
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            <img className={styles.img} src={image} alt="" />
            <div className={styles.course}>
              <p>{item.title}</p>
              <div className={styles.info}>
                <p>By {item.author}</p>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
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
      </div>
    </div>
  );
};

export default Card;
