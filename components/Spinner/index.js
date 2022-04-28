import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.skchase}>
        <div className={styles.skchasedot}></div>
        <div className={styles.skchasedot}></div>
        <div className={styles.skchasedot}></div>
        <div className={styles.skchasedot}></div>
        <div className={styles.skchasedot}></div>
        <div className={styles.skchasedot}></div>
      </div>
    </div>
  );
};
export default Spinner;