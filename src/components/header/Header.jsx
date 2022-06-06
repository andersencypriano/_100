import { MenuList } from "./MenuList";
import styles from './header.module.css';
export function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>_100</h1>
        <MenuList />
      </header>
    </>
  );
}
