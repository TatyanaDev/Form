import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png';
import styles from './header.module.scss';

const Header = props => {
  return (
    <header className={styles.header}>
      <Link className={styles.focus} to='#'>
        <img src={logo} alt='logo' />
      </Link>
    </header>
  );
};

export default Header;
