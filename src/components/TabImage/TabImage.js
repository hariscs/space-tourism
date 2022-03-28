import styles from './TabImage.module.css';

const TabImage = ({ url, title }) => {
	return <img className={styles.tab__img} src={url} alt={title} />;
};

export default TabImage;
