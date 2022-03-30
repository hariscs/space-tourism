import { Header, Title } from '../../components';
import { CrewSlider } from '../../container';
import styles from './Crew.module.css';

const Crew = () => {
	return (
		<section className={styles.crew}>
			<Header />
			<main className='container'>
				<Title number={'02'} title={'meet your crew'} />
				<CrewSlider />
			</main>
		</section>
	);
};

export default Crew;
