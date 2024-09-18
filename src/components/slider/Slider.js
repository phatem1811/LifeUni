import { Button } from "@mantine/core";
import React from "react";
import styles from "./Slider.module.scss";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.content}>
        <ul>
          <li>Learn from expert with Life Unit</li>
          <li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ultricies lorem.
            </p>
          </li>
          <li>
            <Button className={styles.btn}>Học thử</Button>
          </li>
        </ul>
      </div>

      <div></div>
    </div>
  );
};

export default Slider;
