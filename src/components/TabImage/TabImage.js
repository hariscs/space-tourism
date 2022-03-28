import styles from './TabImage.module.css';

const TabImage = ({ url, title }) => {
	return <img src={url} alt={title} />;
};

export default TabImage;
