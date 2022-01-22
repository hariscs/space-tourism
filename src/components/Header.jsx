import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<header className={styles.header}>
			<div className={` ${styles.header__flex}`}>
				<div className={styles.logo}>
					<Link to='/'>
						<img src='/assets/shared/logo.svg' alt='logo' />
					</Link>
				</div>
				<nav className={`${styles.nav}`}>
					<ul
						className={
							click
								? `${styles.nav__list}`
								: `${styles.nav__list} ${styles.active}`
						}
					>
						<li className={styles.list__item}>
							<Link
								to='/home'
								className={`${styles.page__active} ${styles.list__link}`}
							>
								<span>00</span>
								home
							</Link>
						</li>

						<li className={styles.list__item}>
							<Link to='/destinations' className={styles.list__link}>
								<span>01</span>
								destinations
							</Link>
						</li>
						<li className={styles.list__item}>
							<Link to='/about' className={styles.list__link}>
								<span>02</span>
								crew
							</Link>
						</li>
						<li className={styles.list__item}>
							<Link to='/technology' className={styles.list__link}>
								<span>03</span>
								technology
							</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.mobile__menuIcon}>
					<img
						src={
							click
								? '/assets/shared/icon-hamburger.svg'
								: '/assets/shared/icon-close.svg'
						}
						alt='menu'
						onClick={handleClick}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
