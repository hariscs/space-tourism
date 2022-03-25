import { useState } from 'react';
import data from '../../assets/data/data.json';
import styles from './DestTabs.module.css';

const DestTabs = () => {
	const [activeTab, setActiveTab] = useState('1');
	const handleClick = (newActiveTab) => {
		setActiveTab(newActiveTab);
	};
	return (
		<main className={styles.tab}>
			<div className={styles.tab__img}>
				{data.destinations.map(
					(data) =>
						data.id === activeTab && <img src={data.image} alt={data.name} />
				)}
			</div>
			<div className={styles.tab__info}>
				<div className={styles.tab__infoBtns}>
					{data.destinations.map((data) => (
						<button
							key={data.id}
							onClick={() => handleClick(data.id)}
							className={data.id === activeTab ? styles.current : null}
						>
							{data.name}
						</button>
					))}
				</div>
				<div className={styles.tab__infoDetails}>
					{data.destinations.map(
						(data) =>
							data.id === activeTab && (
								<div className={styles.tab__info}>
									<div className={styles.tab__info}>
										<h2>{data.name}</h2>
										<p>{data.description}</p>
									</div>
								</div>
							)
					)}
				</div>
			</div>
		</main>
	);
};

export default DestTabs;
