//components
import Link from "next/link";

//styles
import styles from "./Button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={styles.button}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={styles.button} onClick={props.clickHandler}>
      {props.children}
    </button>
  );
};

export default Button;
