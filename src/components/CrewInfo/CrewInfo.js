import styles from './CrewInfo.module.css';

const CrewInfo = ({ data }) => {
	return (
		<div className={styles.crewInfo}>
			<h3 className={`uppercase ${styles.crewInfo__upperTitle}`}>
				{data.role}
			</h3>
			<h2 className={`tech-crewTitle ${styles.crewInfo__title}`}>
				{data.name}
			</h2>
			<p className={`subtitle ${styles.crewInfo__subtitle}`}>{data.bio}</p>
		</div>
	);
};

export default CrewInfo;
