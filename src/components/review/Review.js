import React, { useState } from "react";
import styles from "./Review.module.scss";
import image from "../../assets/images/avatar.avif";
import { NextArrow, PrevArrow } from "../Arrow";
import Slider from "react-slick";

const Review = () => {
  const [items, setItems] = useState([
    {
      content:
        "Trang web cung cấp thông tin đa dạng và chi tiết, giúp người dùng dễ dàng tìm kiếm và tiếp cận thông tin một cách ",
      author: "Lê Văn Tám",
      course: "Khóa học Next.js 14 & React",
      avatar: image,
    },
    {
      content:
        "Trang web cung cấp đa dạng sản phẩm và dịch vụ với thông tin chi tiết và hình ảnh sống động, giúp người dùng dễ dàng lựa chọn sản phẩm phù hợp. Tốc độ tải trang nhanh, giúp tiết kiệm thời gian cho người dùng và mang lại trải nghiệm mượt mà trên mọi thiết bị. Dịch vụ hỗ trợ khách hàng chuyên nghiệp và nhanh nhẹn, giải quyết mọi vấn đề của khách hàng một cách hiệu quả và thân thiện. Trang web có chính sách đảm bảo an toàn và bảo mật thông tin cá nhân của người dùng, tạo cảm giác yên tâm và tin tưởng khi mua sắm trực tuyến.Trang web cung cấp đa dạng sản phẩm và dịch vụ với thông tin chi tiết và hình ảnh sống động, giúp người dùng dễ dàng lựa chọn sản phẩm phù hợp. Tốc độ tải trang nhanh, giúp tiết kiệm thời gian cho người dùng và mang lại trải nghiệm mượt mà trên mọi thiết bị. Dịch vụ hỗ trợ khách hàng chuyên nghiệp và nhanh nhẹn, giải quyết mọi vấn đề của khách hàng một cách hiệu quả và thân thiện. Trang web có chính sách đảm bảo an toàn và bảo mật thông tin cá nhân của người dùng, tạo cảm giác yên tâm và tin tưởng khi mua sắm trực tuyến.",
      author: "Long Sỹ",
      course: "Khóa học SQL Bootcamp",
      avatar: image,
    },
    {
      content:
        "Giao diện trực quan và dễ sử dụng, giúp người dùng tương tác một cách tự nhiên và thoải mái trên trang web.Thời gian tải trang nhanh, tối ưu hóa trải nghiệm người dùng và giảm thiểu thời gian chờ đợi. Trang web cung cấp nhiều tính năng hữu ích như tìm kiếm, lọc dữ liệu, đánh giá sản phẩm, giúp người dùng tìm kiếm và lựa chọn sản phẩm một cách thuận tiện. Hỗ trợ khách hàng chuyên nghiệp và nhanh chóng, giải đáp mọi thắc mắc và cung cấp hỗ trợ kỹ thuật khi cần thiết.",
      author: "Đồng Nguyệt",
      course: "Khóa học The Python Programming",
      avatar: image,
    },
    {
      content:
        "Trang web cung cấp thông tin đa dạng và chi tiết, giúp người dùng dễ dàng tìm kiếm và tiếp cận thông tin một cách ",
      author: "Lê Văn Sơn",
      course: "Khóa học Next.js 14 & React",
      avatar: image,
    },
    {
      content:
        "Trang web cung cấp thông tin đa dạng và chi tiết, giúp người dùng dễ dàng tìm kiếm và tiếp cận thông tin một cách ",
      author: "Lê Văn Khoa",
      course: "Khóa học Next.js 14 & React",
      avatar: image,
    },
  ]);

  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: showPrevArrow ? <PrevArrow /> : null,
    nextArrow: showNextArrow ? <NextArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.5 ,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,

        },
      },
    ],
    afterChange: (current) => {
      setShowPrevArrow(current > 0);
      setShowNextArrow(current < items.length - 3);
    },
  };

  return (
    <div className={styles.reviewSection}>
      <h2>Học viên nói gì về chúng tôi ?</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className={styles.gridItem} key={index}>
            <p className={styles.reviewContent}>{item.content}</p>
            <div className={styles.reviewFooter}>
              <img
                className={styles.avatar}
                src={item.avatar}
                alt={item.author}
              />
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>{item.author}</p>
                <p className={styles.courseName}>{item.course}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
