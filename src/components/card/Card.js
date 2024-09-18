import { Grid } from "@mantine/core";
import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./Card.module.scss";
import image from "../../assets/images/courseimage.png";
import { FaRegStar } from "react-icons/fa";

const Card = () => {
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

      <div class={styles.container}>
        <div class={styles.item}>
          <div>
            <img className={styles.img} src={image} alt="" />
            <div className="course">
              <p>Khóa học React Native TypeScript New 2024 </p>
              <div>
                <p>By Vinh Phat</p>
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <p>Thời gian 05:32 - 5 Bài giảng</p>
              </div>
            </div>
          </div>
        </div>
        <div class={styles.item}>
          <div>
            <img className={styles.img} src={image} alt="" />
          </div>
        </div>
        <div class={styles.item}>
          <div>
            <img className={styles.img} src={image} alt="" />
          </div>
        </div>
        <div class={styles.item}>
          <div>
            <img className={styles.img} src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
