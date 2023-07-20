import { Link } from 'react-router-dom';
import styles from './header.module.scss';
export default function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.header__nav}>
        <Link to="/" className={styles.header__nav__link_main}>
          Orto
        </Link>
        <Link to="/cart" className={styles.header__nav__link}>
          Корзина
        </Link>
        <Link to="/signin" className={styles.header__nav__link}>
          Войти
        </Link>
      </nav>
    </div>
  );
}
