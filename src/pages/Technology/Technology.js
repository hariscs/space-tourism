import { Header, Title } from '../../components';
import { TechSlider } from '../../container';
import styles from './Technology.module.css';

const Technology = () => {
	return (
		<section className={styles.tech}>
			<Header />
			<main className='container'>
				<Title number={'03'} title={'space launch 101'} />
			</main>
			<TechSlider />
		</section>
	);
};

export default Technology;
