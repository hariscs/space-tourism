import { useState } from 'react';
import data from '../../assets/data/data.json';
import { TechInfo } from '../../components';
import styles from './TechSlider.module.css';

const TechSlider = () => {
	const { technology } = data;
	const [techSlider, setTechSlider] = useState('1');

	const clickHandler = (newSlide) => {
		setTechSlider(newSlide);
	};
	return (
		<div className={styles.techSlider}>
			<div className={styles.techSlider__btn}>
				{technology.map((data) => (
					<button
						key={data.id}
						className={styles.btn}
						onClick={() => clickHandler(data.id)}
					>
						{data.id}
					</button>
				))}
			</div>

			<div className={styles.techSlider__info}>
				{technology.map(
					(data) =>
						techSlider === data.id && <TechInfo data={data} key={data.id} />
				)}
			</div>

			<div className={styles.techSlider__img}>
				{technology.map(
					(data) =>
						techSlider === data.id && (
							<picture key={data.id}>
								<source media='(min-width:80em)' srcSet={data.imagePortrait} />
								<img src={data.imageLandscpae} alt={data.name} />
							</picture>
						)
				)}
			</div>
		</div>
	);
};

export default TechSlider;
