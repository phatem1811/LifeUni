import { Button } from "@mantine/core";
import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.jpeg";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Trang chủ");

  const menuItems = [
    { label: "Trang chủ" },
    { label: "Tin tức" },
    { label: "Khóa học của tôi" },
  ];

  return (
    <div className={styles.header}>
      <div>
        <img src={logo} alt="" />
      </div>

      <div className={styles.menu}>
        <ul>
          {menuItems.map((item) => (
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
        <FaCartShopping />
        <Button className={`${styles.btn} ${styles["btn-expert"]}`}>
          Expert Login
        </Button>
        <Button className={`${styles.btn} ${styles["btn-student"]}`}>
          Student Login
        </Button>
        <AiOutlineGlobal />
      </div>
    </div>
  );
};

export default Header;
