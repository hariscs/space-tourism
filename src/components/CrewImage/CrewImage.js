import styles from './CrewImage.module.css';

const CrewImage = ({ imgUrl, imgTitle }) => {
	return <img src={imgUrl} alt={imgTitle} />;
};

export default CrewImage;
