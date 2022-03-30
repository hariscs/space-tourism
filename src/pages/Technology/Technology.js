import { Header, Title } from '../../components';
import styles from './Technology.module.css';

const Technology = () => {
	return (
		<section className={styles.tech}>
			<Header />
			<main className='container'>
				<Title number={'03'} title={'space launch 101'} />
			</main>
		</section>
	);
};

export default Technology;
