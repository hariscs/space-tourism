import styles from './Tab.module.css';

const Tab = ({ data }) => {
	return (
		<div className={styles.tab}>
			<h3 className={`uppercase ${styles.tab__title}`}>{data.name}</h3>
			<p className={styles.tab__subtitle}>{data.description}</p>
			<div className={styles.tab__data}>
				<div className={styles.tab__dataFlex}>
					<h4 className={`uppercase ${styles.tab__dataInfo}`}>avg. distance</h4>
					<span className={`uppercase ${styles.data}`}>{data.distance}</span>
				</div>
				<div className={styles.tab__dataFlex}>
					<h4 className={`uppercase ${styles.tab__dataInfo}`}>
						est. travel time
					</h4>
					<span className={`uppercase ${styles.data}`}>{data.travel}</span>
				</div>
			</div>
		</div>
	);
};

export default Tab;
