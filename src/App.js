import { Routes, Route } from 'react-router-dom';
import { Home, Destination, Crew, Technology } from './pages';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/destinations' element={<Destination />} />
			<Route path='/crew' element={<Crew />} />
			<Route path='/technology' element={<Technology />} />
		</Routes>
	);
}

export default App;
