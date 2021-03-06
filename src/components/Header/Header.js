import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { images } from '../../constants';
import styles from './Header.module.css';

const Header = () => {
	const [click, setClick] = useState(true);
	const handleClick = () => setClick(!click);

	return (
		<header className={styles.header}>
			<div className={` ${styles.header__flex}`}>
				<div className={styles.logo}>
					<NavLink to='/'>
						<img src={images.logo} alt='logo' />
					</NavLink>
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
							<NavLink
								to='/'
								className={(navData) =>
									navData.isActive
										? `${styles.page__active} ${styles.list__link}`
										: `${styles.list__link}`
								}
							>
								<span>00</span>
								home
							</NavLink>
						</li>

						<li className={styles.list__item}>
							<NavLink
								to='/destinations'
								className={(navData) =>
									navData.isActive
										? `${styles.page__active} ${styles.list__link}`
										: `${styles.list__link}`
								}
							>
								<span>01</span>
								destinations
							</NavLink>
						</li>
						<li className={styles.list__item}>
							<NavLink
								to='/crew'
								className={(navData) =>
									navData.isActive
										? `${styles.page__active} ${styles.list__link}`
										: `${styles.list__link}`
								}
							>
								<span>02</span>
								crew
							</NavLink>
						</li>
						<li className={styles.list__item}>
							<NavLink
								to='/technology'
								className={(navData) =>
									navData.isActive
										? `${styles.page__active} ${styles.list__link}`
										: `${styles.list__link}`
								}
							>
								<span>03</span>
								technology
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className={styles.mobile__menuIcon}>
					<img
						src={click ? images.iconHam : images.iconClose}
						alt='menu'
						onClick={handleClick}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
