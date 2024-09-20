import React from "react";
import styles from "./Suggest.module.scss";
import image from "../../assets/images/suggest.jpg";
const Suggest = () => {
  return (
    <div>
      <div className={styles.container}>
        <h2>Tại sao bạn nên học tại Life Uni?</h2>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <img src={image} alt="Xu hướng thị trường" />
            <h3>XU HƯỚNG THỊ TRƯỜNG & NGƯỜI TIÊU DÙNG NỬA CUỐI...</h3>
            <p>
              Xu hướng thị trường và tâm lý người tiêu dùng Việt Nam năm nay
              thay đổi như thế nào trong bối cảnh nền kinh tế vẫn đang đối mặt
              khó khăn và xu hướng cắt giảm chi tiêu toàn cầu? Những insights
              nào ảnh hưởng đến quyết định chi tiêu trong mùa lễ hội kéo dài
              liên tục từ tháng 10.2023 đến tháng 02.2024? Các thương hiệu cần
              ra quyết định cắt giảm ngân sách hay vẫn đầu tư vào các chiến dịch
              Marketing nhưng đảm bảo được các mục tiêu ngắn hạn và dài hạn?
            </p>
            <button className={styles.btn}>Khám phá</button>
          </div>
          <div className={styles.gridItem}>
            <img src={image} alt="Xu hướng thị trường" />
            <h3>XU HƯỚNG THỊ TRƯỜNG & NGƯỜI TIÊU DÙNG NỬA CUỐI...</h3>
            <p>
              Xu hướng thị trường và tâm lý người tiêu dùng Việt Nam năm nay
              thay đổi như thế nào trong bối cảnh nền kinh tế vẫn đang đối mặt
              khó khăn và xu hướng cắt giảm chi tiêu toàn cầu? Những insights
              nào ảnh hưởng đến quyết định chi tiêu trong mùa lễ hội kéo dài
              liên tục từ tháng 10.2023 đến tháng 02.2024? Các thương hiệu cần
              ra quyết định cắt giảm ngân sách hay vẫn đầu tư vào các chiến dịch
              Marketing nhưng đảm bảo được các mục tiêu ngắn hạn và dài hạn?
            </p>
            <button className={styles.btn}>Khám phá</button>
          </div>
          <div className={styles.gridItem}>
            <img src={image} alt="Xu hướng thị trường" />
            <h3>XU HƯỚNG THỊ TRƯỜNG & NGƯỜI TIÊU DÙNG NỬA CUỐI...</h3>
            <p>
              Xu hướng thị trường và tâm lý người tiêu dùng Việt Nam năm nay
              thay đổi như thế nào trong bối cảnh nền kinh tế vẫn đang đối mặt
              khó khăn và xu hướng cắt giảm chi tiêu toàn cầu?
            </p>
            <button className={styles.btn}>Khám phá</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggest;
