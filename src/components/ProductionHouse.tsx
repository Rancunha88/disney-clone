import disney from '../assets/disney.png';
import marvel from '../assets/marvel.png';
import pixar from '../assets/pixar.png';
import starwars from '../assets/starwar.png';
import national from '../assets/nationalG.png';
import disneyVideo from '../assets/videos/disney.mp4';
import marvelVideo from '../assets/videos/marvel.mp4';
import pixarVideo from '../assets/videos/pixar.mp4';
import starwarsVideo from '../assets/videos/star-wars.mp4';
import nationalVideo from '../assets/videos/national-geographic.mp4';

function ProductionHouse() {
	// List of production houses with their images and videos
	const productionHouseList = [
		{
			name: 'Disney',
			image: disney,
			video: disneyVideo,
		},
		{
			name: 'Marvel',
			image: marvel,
			video: marvelVideo,
		},
		{
			name: 'Pixar',
			image: pixar,
			video: pixarVideo,
		},
		{
			name: 'Star Wars',
			image: starwars,
			video: starwarsVideo,
		},
		{
			name: 'National Geographic',
			image: national,
			video: nationalVideo,
		},
	];

	return (
		<div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
			{productionHouseList.map((item) => (
				<div
					key={item.name}
					className='
                    border-[2px] border-gray-700 rounded-lg 
                    hover:scale-105 transition-all duration-300 ease-in-out 
                    cursor-pointer 
                    relative 
                    shadow-lg shadow-gray-700'
				>
					<img
						key={item.name}
						src={item.image}
						className='w-full z-[1]'
					/>
					<video
						key={item.name + 'video'}
						src={item.video}
						className=' w-full absolute top-0 
                                                    rounded-lg 
                                                    opacity-0 hover:opacity-50'
						autoPlay
						loop
						muted
						z-0='true'
					/>
				</div>
			))}
		</div>
	);
}

export default ProductionHouse;
