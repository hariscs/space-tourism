import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={` ${styles.header__flex}`}>
				<div className={styles.logo}>
					<Link to='/'>
						<img src='/assets/shared/logo.svg' alt='logo' />
					</Link>
				</div>
				<nav className={styles.nav}>
					<ul className={styles.nav__list}>
						<li className={styles.list__item}>
							<Link
								to='/home'
								className={`${styles.active} ${styles.list__link}`}
							>
								<span>00</span>
								home
							</Link>
						</li>

						<li>
							<Link to='/destinations' className={styles.list__link}>
								<span>01</span>
								destinations
							</Link>
						</li>
						<li>
							<Link to='/about' className={styles.list__link}>
								<span>02</span>
								crew
							</Link>
						</li>
						<li>
							<Link to='/technology' className={styles.list__link}>
								<span>03</span>
								technology
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
