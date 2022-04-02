import styles from './TechInfo.module.css';

const TechInfo = ({ data }) => {
	return (
		<div className={styles.techInfo}>
			<h3 className={`uppercase ${styles.techInfo__upperTitle}`}>
				The terminolgy...
			</h3>
			<h2 className={`tech-crewTitle ${styles.techInfo__title}`}>
				{data.name}
			</h2>
			<p className={`subtitle ${styles.techInfo__title}`}>{data.description}</p>
		</div>
	);
};

export default TechInfo;
