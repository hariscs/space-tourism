import styles from './CrewSlider.module.css';
import { CrewButton, CrewImage, CrewInfo } from '../../components';
import data from '../../assets/data/data.json';
import { useState } from 'react';

const CrewSlider = () => {
	const { crew } = data;

	const [activeSlider, setActiveSlider] = useState('1');
	const handleClick = (newActiveSlider) => {
		setActiveSlider(newActiveSlider);
	};

	return (
		<div className={styles.slider}>
			<div className={styles.slider__img}>
				{crew.map(
					(data) =>
						data.id === activeSlider && (
							<CrewImage
								imgUrl={data.image}
								imgTitle={data.name}
								key={data.id}
							/>
						)
				)}
			</div>
			<div className={styles.slider__btn}>
				{crew.map((data) => (
					<CrewButton
						onClick={() => handleClick(data.id)}
						activeSlider={activeSlider}
						data={data}
						key={data.id}
					/>
				))}
			</div>
			<div className={styles.slider__info}>
				{crew.map(
					(data) =>
						data.id === activeSlider && (
							<CrewInfo data={data} id={data.id} key={data.id} />
						)
				)}
			</div>
		</div>
	);
};

export default CrewSlider;
