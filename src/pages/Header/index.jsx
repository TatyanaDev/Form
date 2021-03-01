import logo from '../../img/logo.png';
import styles from './header.module.scss';

const Header = props => {
  return (
    <header className={styles.header}>
      <a href="#"> <img src={logo} alt='logo' /></a>
    </header >
  );
};

export default Header;
