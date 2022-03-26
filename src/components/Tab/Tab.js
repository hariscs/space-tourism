import TabButton from '../TabButton/TabButton';
import styles from './Tab.module.css';

const Tab = ({ data }) => {
	return (
		<div className={styles.tab}>
			<img src={data.image} alt={data.name} className={styles.tab__img} />
			<div className={styles.tab__info}>
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
		</div>
	);
};

export default Tab;
