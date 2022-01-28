import styles from './Button.module.scss';

const Button = (props) => (
  <button
    className={styles.button}
    onClick={props.onClick}
    disabled={props.isInactive}
  >
    {props.children}
  </button>
);

export default Button;