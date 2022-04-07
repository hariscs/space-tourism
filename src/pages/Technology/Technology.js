import { Header, Title } from '../../components';
import { TechSlider } from '../../container';
import styles from './Technology.module.css';
import { motion } from 'framer-motion';

const Technology = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.tech}
		>
			<Header />
			<main className='container'>
				<Title number={'03'} title={'space launch 101'} />
			</main>
			<TechSlider />
		</motion.section>
	);
};

export default Technology;
