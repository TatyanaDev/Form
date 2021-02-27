import logo from '../../img/logo.png';
import styles from './header.module.scss';

const Header = props => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='logo' />
    </header>
  );
};

export default Header;
