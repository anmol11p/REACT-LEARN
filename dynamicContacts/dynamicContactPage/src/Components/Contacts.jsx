import React from "react";
import styles from "../App.module.css"; // Assuming you have a CSS module
import { IoLocationOutline, IoMailOutline, IoCall } from "react-icons/io5"; // Import icons
import Details from "../json/details.json"; // Assuming details.json is correct

const Contacts = () => {
  // Create a mapping between icon names and actual icons
  const iconMap = {
    IoLocationOutline: <IoLocationOutline />,
    IoMailOutline: <IoMailOutline />,
    IoCall: <IoCall />,
  };

  return (
    <section className={styles.contactSection}>
      <ul className={styles.contactList}>
        {Details.map((currelem, index) => {
          return (
            <li key={index} className={styles.contactItem}>
              <span className={styles.icon}>{iconMap[currelem.icon]}</span>
              <span className={styles.title}>{currelem.title}</span>
              <span className={styles.details}>{currelem.details}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Contacts;
