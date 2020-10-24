import Head from "next/head";
import { useForm } from "react-hook-form";
import Link from "next/link";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faKey,faUser } from '@fortawesome/free-solid-svg-icons'

import styles from "../styles/register.module.css";


export default function register() {
    return (
        <div className={styles.body} >
            <form className={styles.reg_form}>
        <span>
        <h1>Sign Up</h1>
        <h2>Create your rolls</h2>
        </span>
        <div className={styles.input_email}>
          <FontAwesomeIcon icon={faUser} /> 
          <input name="name" type="text" placeholder="Name" />
        </div>
        <div className={styles.input_email}>
          <FontAwesomeIcon icon={faAt} /> 
          <input name="email" type="text" placeholder="Email" />
        </div>
        <div className={styles.input_password}>
          <FontAwesomeIcon icon={faKey} /> 
          <input name="password" type="password" placeholder="Password" />
        </div>
        <div className={styles.input_password}>
          <FontAwesomeIcon icon={faKey} /> 
          <input name="cf_password" type="password" placeholder="Confirm Password" />
        </div>
        <button type="submit" className={styles.submit}>
          Sign up
        </button>
        <Link href="/">
          <a>
            Already have an account?
          </a>
        </Link>
      </form>
        </div>
    )
}
