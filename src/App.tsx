import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductionHouse from './components/ProductionHouse';
import GenreMovieList from './components/GenreMovieList';

function App() {
	return (
		<>
			<Header />
			<Slider />
			<ProductionHouse />
			<GenreMovieList />
		</>
	);
}

export default App;
