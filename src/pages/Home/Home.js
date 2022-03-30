import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';
import { Header } from '../../components';

const Home = () => {
	return (
		<div className={styles.home}>
			<Header />
			<main className={` grid__container ${styles.main} `}>
				<div className={styles.main__info}>
					<h1 className={styles.main__title}>
						so, you want to travel to
						<span> space</span>
					</h1>
					<p className={`subtitle ${styles.main__subtitle}`}>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<div className={styles.main__button}>
					<NavLink to='/' className={styles.btn}>
						explore
					</NavLink>
				</div>
			</main>
		</div>
	);
};

export default Home;
