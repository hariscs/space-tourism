import { Header, Title } from '../../components';
import { CrewSlider } from '../../container';
import styles from './Crew.module.css';
import { motion } from 'framer-motion';

const Crew = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.crew}
		>
			<Header />
			<main className='container'>
				<Title number={'02'} title={'meet your crew'} />
				<CrewSlider />
			</main>
		</motion.section>
	);
};

export default Crew;
