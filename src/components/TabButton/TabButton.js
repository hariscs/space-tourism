import styles from './TabButton.module.css';

const TabButton = ({ data, onClick, activeTab }) => {
	return (
		<button
			className={
				data.id === activeTab ? `${styles.current} ${styles.btn}` : styles.btn
			}
			onClick={onClick}
		>
			{data.name}
		</button>
	);
};

export default TabButton;
