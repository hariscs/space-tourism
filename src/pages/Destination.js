import { Header } from '../components';
import styles from './Destination.module.css';
import { DestinationTabs } from '../container';

const Destinations = () => {
	return (
		<div className={styles.dest}>
			<Header />
			<main className='container'>
				<h1 className='page__title'>
					<span>01</span>
					Pick your destination
				</h1>
				<DestinationTabs />
			</main>
		</div>
	);
};

export default Destinations;
