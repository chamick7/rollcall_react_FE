import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import Navbar from "../components/Navbar";

import styles from "../styles/dashboard.module.css";

export default function dashboard() {
  function Roll(props) {
    return (
      <Link href="#">
        <a className={styles.roll}>
          <div className={styles.roll_header}>
            <span className={styles.roll_name}>{props.name}</span>
            <span className={styles.roll_creater}> {props.creater} </span>
          </div>
          <div className={styles.roll_info}>
            <span className={styles.roll_check}>
              <span className={styles.roll_user}>
                {" "}
                <FontAwesomeIcon icon={faUserCheck} />
                {props.user}
              </span>
              <span className={styles.roll_date}>{ props.date }</span>
            </span>
          </div>
        </a>
      </Link>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.body}>
        <h1 className={styles.header}>
          <FontAwesomeIcon icon={faScroll} />
          Your Rolls
        </h1>
        <div className={styles.roll_container}>
          <Roll name="Test Roll" creater="Mick" user="7" date="01/01/2020" />
        </div>
      </div>
    </>
  );
}
