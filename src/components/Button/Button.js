import styles from './Button.module.scss'

const Button = props => {
    return (
        <div className={styles.div}>
            <button className={styles.button}>{props.button}</button>
        </div>
    );
};

export default Button;