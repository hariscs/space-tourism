import { useState } from 'react';
import data from '../../assets/data/data.json';
import { Tab, TabButton } from '../../components';
import styles from './DestTabs.module.css';

const DestTabs = () => {
	const [activeTab, setActiveTab] = useState('1');
	const handleClick = (newActiveTab) => {
		setActiveTab(newActiveTab);
	};
	return (
		<main className={styles.tab}>
			<div className={styles.tab__btn}>
				{data.destinations.map((data) => (
					<TabButton
						key={data.id}
						data={data}
						onClick={() => handleClick(data.id)}
						activeTab={activeTab}
					/>
				))}
			</div>
			<div className={styles.tab__info}>
				{data.destinations.map(
					(data) => data.id === activeTab && <Tab data={data} key={data.id} />
				)}
			</div>
		</main>
	);
};

export default DestTabs;
