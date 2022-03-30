import { useState } from 'react';
import data from '../../assets/data/data.json';
import { Tab, TabButton, TabImage } from '../../components';
import styles from './DestTabs.module.css';

const DestTabs = () => {
	const [activeTab, setActiveTab] = useState('1');
	const handleClick = (newActiveTab) => {
		setActiveTab(newActiveTab);
	};
	const { destinations } = data;

	return (
		<main className={styles.tab}>
			<div className={styles.tab__img}>
				{destinations.map(
					(data) =>
						data.id === activeTab && (
							<TabImage url={data.image} title={data.title} key={data.id} />
						)
				)}
			</div>
			<div className={styles.tab__btn}>
				{destinations.map((data) => (
					<TabButton
						key={data.id}
						data={data}
						onClick={() => handleClick(data.id)}
						activeTab={activeTab}
					/>
				))}
			</div>
			<div className={styles.tab__info}>
				{destinations.map(
					(data) => data.id === activeTab && <Tab data={data} key={data.id} />
				)}
			</div>
		</main>
	);
};

export default DestTabs;
