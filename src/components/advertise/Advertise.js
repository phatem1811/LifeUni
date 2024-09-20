import React from "react";
import styles from "./Advertise.module.scss";
import play from "../../assets/images/play.svg";
import play2 from "../../assets/images/play2.svg";
import star from "../../assets/images/star.svg";

const Advertise = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.img} src={play} alt="" />
        <p>Học các kỹ năng có nhu cầu lớn với hơn 30 khóa học video</p>
      </div>
      <div className={styles.content}>
        <img className={styles.img} src={play2} alt="" />
        <p>Chọn khóa học do chuyên gia trong thế giới thực giảng dạy</p>
      </div>
      <div className={styles.content}>
        <img className={styles.img} src={star} alt="" />
        <p>
          Học theo tốc độ phù hợp với bạn với quyền truy cập suốt đời trên thiết
          bị di động và máy tính để bàn
        </p>
      </div>
    </div>
  );
};

export default Advertise;
