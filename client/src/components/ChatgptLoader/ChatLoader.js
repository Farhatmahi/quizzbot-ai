"use client";
import React from "react";
import styles from "./ChatLoader.module.css";

const ChatLoader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      {/* <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} /> */}
    </div>
  );
};

export default ChatLoader;
