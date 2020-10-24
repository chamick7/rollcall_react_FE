import Link from "next/link";
import { useRecoilState } from "recoil";
import { accountAtom } from "../atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const [account, setAccount] = useRecoilState(accountAtom);
  account.name = "Sorrawat Tester";

  return (
    <div className={styles.nav}>
      <span className={styles.nav_left}>
        <Link href="/dashboard">
          <a>
            RollCa<span>ll</span>
          </a>
        </Link>
      </span>
      <span className={styles.nav_right}>
        {account.name ? (
          <>
            <span className={styles.profile_nav}>
              <FontAwesomeIcon icon={faUser} />
              {account.name}
            </span>
            <button>Logout</button>
          </>
        ) : (
          <></>
        )}
      </span>
    </div>
  );
}
