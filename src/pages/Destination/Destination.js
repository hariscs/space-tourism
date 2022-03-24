import { Header, Title } from '../../components';
import styles from './Destination.module.css';
import { DestinationTabs } from '../../container';

const Destinations = () => {
	return (
		<div className={styles.dest}>
			<Header />
			<main className='container'>
				<Title number={'01'} title={'Pick your destination'} />
				<DestinationTabs />
			</main>
		</div>
	);
};

export default Destinations;
