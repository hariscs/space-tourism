import { useState } from 'react';
import styles from './DestTabs.module.css';

const TabsData = [
	{
		id: 'Tab 1',
		title: 'Tab 1',
		body: 'Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit.',
		img: 'img 1 here',
	},
	{
		id: 'Tab 2',
		title: 'Tab 2',
		body: 'Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit.',
		img: 'img 2 here',
	},
	{
		id: 'Tab 3',
		title: 'Tab 3',
		body: 'Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit.',
		img: 'img 3 here',
	},
];

const DestTabs = () => {
	const [activeTab, setActiveTab] = useState('Tab 1');
	const handleClick = (newActiveTab) => {
		setActiveTab(newActiveTab);
	};
	return (
		<main className={styles.tab}>
			<div className={styles.tab__btn}>
				{TabsData.map((data) => (
					<button
						key={data.id}
						onClick={() => handleClick(data.id)}
						className={data.id === activeTab ? styles.current : null}
					>
						{data.title}
					</button>
				))}
			</div>

			{TabsData.map(
				(data) =>
					data.id === activeTab && (
						<div key={data.id} className={styles.tab__flex}>
							<div className={styles.tab__img}>
								<img src={data.image} alt='img' />
							</div>
							<div className={styles.tab__info}>
								<h2>{data.name}</h2>
								<p>{data.body}</p>
							</div>
						</div>
					)
			)}
		</main>
	);
};

export default DestTabs;
