//components
import Link from "next/link";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./Header.module.css";

const Header = (props) => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/products">API Store</Link>
      </div>
      <nav>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="/cart">
              <p className={styles.cart}>
                Cart <span className={styles.length}>{cart.length}</span>
              </p>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
