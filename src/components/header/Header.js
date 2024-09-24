import { Button } from "@mantine/core";
import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Trang chủ");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleFocus = () => {
    setIsSearchActive(true);
  };

  const handleBlur = () => {
    setIsSearchActive(false);
  };

  const menuItems = [
    { label: "Thể loại" },
    { label: "Chuyên gia" },
    { label: "Giới thiệu" },
  ];

  return (
    <div className={styles.header}>
      <div>
        <img src={logo} alt="" />
      </div>

      <div className={styles.menu}>
        <ul>
          {!isSearchActive &&
            menuItems.map((item) => (
              <li
                key={item.label}
                className={activeTab === item.label ? styles.active : ""}
                onClick={() => setActiveTab(item.label)}
              >
                {item.label}
              </li>
            ))}
        </ul>
      </div>

      <div className={styles.action}>
        <div className={styles.search}>
          <AiOutlineSearch className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Nhập tên khoá học"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className={styles.cart}>
          <FaCartShopping />
          <span className={styles.cartBadge}>0</span>
        </div>
        <Button className={`${styles.btn} ${styles["btn-student"]}`}>
          Đăng nhập
        </Button>
      </div>
    </div>
  );
};

export default Header;
