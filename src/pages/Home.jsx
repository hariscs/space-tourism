import styles from './Home.module.css';

import Header from '../components/Header';

const Home = () => {
	return (
		<div className={styles.home}>
			<Header />
		</div>
	);
};

export default Home;
