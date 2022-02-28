const DestTabs = () => {
	const handler = (e) => {
		console.log(e.target.getAttribute('data-index'));
	};
	return (
		<div className='grid__container'>
			<ul>
				{/*	<li data-index={index} onClick={handler}>
					<h2 style={{ color: 'white' }}>Dest tabs</h2>
				</li>
				 <li>
					<h2>Dest tabs</h2>
				</li> */}
			</ul>
		</div>
	);
};

export default DestTabs;
