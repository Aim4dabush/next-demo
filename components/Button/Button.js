//components
import Link from "next/link";

//styles
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <Link href={props.link}>
      <a className={styles.button}>{props.children}</a>
    </Link>
  );
};

export default Button;
