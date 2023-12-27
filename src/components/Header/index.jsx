import { Link } from 'react-router-dom';
import logo from 'img/logo.png';
import styles from './header.module.scss';

const Header = props => {
  return (
    <header className={styles.header}>
      <Link className={styles.focus} to='/'>
        <img src={logo} alt='logo' />
      </Link>
      {window.location.pathname === '/' ? (
        <Link to='/sign-up' className={styles.sign}>
          Signup
        </Link>
      ) : (
        <Link to='/' className={styles.sign}>
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
