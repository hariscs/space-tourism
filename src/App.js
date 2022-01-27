import { Routes, Route } from 'react-router-dom';
import Destination from './pages/Destination';
import Home from './pages/Home';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/destinations' element={<Destination />} />
		</Routes>
	);
}

export default App;
