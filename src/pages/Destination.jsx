import DestTabs from '../components/DestTabs';
import Header from '../components/Header';
import styles from './Destination.module.css';

const Destinations = () => {
	return (
		<div className={styles.dest}>
			<Header />
			<main className='container'>
				<h1 className='page__title'>
					<span>01</span>
					Pick your destination
				</h1>
				<DestTabs />
			</main>
		</div>
	);
};

export default Destinations;
