import styles from './Tab.module.css';

const Tab = ({ data }) => {
	return (
		<div className={styles.tab}>
			<h3 className={styles.tab__title}>{data.name}</h3>
			<p className={styles.tab__subtitle}>{data.description}</p>
			<div className={styles.tab__data}>
				<h4 className={styles.tab__dataInfo}>
					AVG. DISTANCE
					<span>{data.distance}</span>
				</h4>
				<h4 className={styles.tab__dataInfo}>
					EST. TRAVEL TIME
					<span>{data.travel}</span>
				</h4>
			</div>
		</div>
	);
};

export default Tab;
