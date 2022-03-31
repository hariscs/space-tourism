import styles from './CrewButton.module.css';

const CrewButton = ({ data, onClick, activeSlider }) => {
	return (
		<button
			className={
				data.id === activeSlider
					? `uppercase ${styles.current} ${styles.btn}`
					: styles.btn
			}
			onClick={onClick}
		></button>
	);
};

export default CrewButton;
