import styles from './header.module.css';
import { MenuList } from "./MenuList";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <h1 className={styles.logo}><span className={styles.underLogo}>_</span>100</h1>
        </Link>
        <MenuList />
      </header>
    </>
  );
}
