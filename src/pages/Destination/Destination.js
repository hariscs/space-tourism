import { Header, Title } from '../../components';
import styles from './Destination.module.css';
import { DestinationTabs } from '../../container';
import { motion } from 'framer-motion';

const Destinations = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className={styles.dest}
		>
			<Header />
			<main className='container'>
				<Title number={'01'} title={'Pick your destination'} />
				<DestinationTabs />
			</main>
		</motion.div>
	);
};

export default Destinations;
