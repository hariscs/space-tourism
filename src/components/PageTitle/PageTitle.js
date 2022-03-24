import styles from './PageTitle.module.css';

const PageTitle = ({ number, title }) => {
	return (
		<h2 className={styles.title}>
			<span>{number}</span>
			{title}
		</h2>
	);
};

export default PageTitle;
