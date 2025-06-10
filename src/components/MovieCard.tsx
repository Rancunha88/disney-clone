const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

function MovieCard({ movie }: { movie: any }) {
	return (
		<>
			<img
				className='  w-[160px] lg:w-[220px] rounded-lg 
                    hover:scale-105 transition-all duration-300 ease-in-out 
                    hover:border-[2px] border-gray-700
                    cursor-pointer'
				src={IMAGE_BASE_URL + movie.poster_path}
			/>
		</>
	);
}

export default MovieCard;
