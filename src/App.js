import { Routes, Route } from 'react-router-dom';
import { Home, Destination, Crew, Technology } from './pages';
import { AnimatePresence } from 'framer-motion';

function App() {
	return (
		<AnimatePresence>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/destinations' element={<Destination />} />
				<Route path='/crew' element={<Crew />} />
				<Route path='/technology' element={<Technology />} />
			</Routes>
		</AnimatePresence>
	);
}

export default App;
