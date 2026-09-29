import styles from "../header/Header.module.css";

const Header = () => {
  return (
    <div>
      <p className={styles.heading}>Alok Gupta</p>
      <button className={styles.btn}>Main hu</button>
    </div>
  );
};

export default Header;
