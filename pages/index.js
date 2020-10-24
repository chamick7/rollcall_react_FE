import Head from "next/head";
import { useForm } from "react-hook-form";
import Link from "next/link";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons'

import styles from "../styles/Home.module.css";

export default function Home() {
  const { register, handleSubmit } = useForm();

  return (
    <div className={styles.body}>
      <form className={styles.login_form}>
        <span>
        <h1>Sign In</h1>
        <h2>For Start you rolls</h2>
        </span>
        <div className={styles.input_email}>
          <FontAwesomeIcon icon={faAt} /> 
          <input name="email" type="text" placeholder="Email" />
        </div>
        <div className={styles.input_password}>
          <FontAwesomeIcon icon={faKey} /> 
          <input name="password" type="password" placeholder="Password" />
        </div>
        <button type="submit" className={styles.submit}>
          Sign in
        </button>
        <Link href="/register">
          <a>
            Don't have an account?
          </a>
        </Link>
      </form>
      
    </div>
  );
}
