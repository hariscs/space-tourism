import { Routes, Route } from 'react-router-dom';
import { Home, Destination } from './pages';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/destinations' element={<Destination />} />
		</Routes>
	);
}

export default App;
