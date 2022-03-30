import styles from './CrewInfo.module.css';

const CrewInfo = ({ role, name, bio }) => {
	return (
		<div className={styles.CrewInfo}>
			<h3 className={styles.CrewInfo__upperTitle}>commander</h3>
			<h2 className={styles.CrewInfo__title}>douglas hurley</h2>
			<p className={styles.CrewInfo__subtitle}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae numquam
				commodi facere quam unde, magnam cupiditate eum tempore tenetur
				doloremque aspernatur iure cum voluptate repellat perspiciatis molestias
				corrupti soluta quidem?
			</p>
		</div>
	);
};

export default CrewInfo;
