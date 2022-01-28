import styles from './Timer.module.scss';

const Timer = ({ value }) => {
  const formatTime = (miliseconds) => {
    const getMiliseconds = `${miliseconds % 1000}`.padStart(3, '0');
    const seconds = `${Math.floor(miliseconds / 1000)}`;
    const getSeconds = `${seconds % 60}`.padStart(2, '0');
    const minutes = `${Math.floor(seconds / 60)}`;
    const getMinutes = `${minutes % 60}`.padStart(2, '0');
    const getHours = `${Math.floor(minutes / 60)}`.padStart(2, '0');

    const formattedValue = `${getHours} : ${getMinutes} : ${getSeconds} . ${getMiliseconds}`;

    return formattedValue;
  };
  return <div className={styles.time}>{formatTime(value)}</div>;
};

export default Timer;