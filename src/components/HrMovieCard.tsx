const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

function HrMovieCard({ movie }: { movie: any }) {
	return (
		<div
			className=' flex flex-col items-center cursor-pointer 
                  hover:scale-105 transition-all duration-300 ease-in-out'
		>
			<img
				className='  w-[160px] lg:w-[420px] rounded-lg  
                      hover:border-[2px] border-gray-700'
				src={IMAGE_BASE_URL + movie.backdrop_path}
			/>
			<h2 className='w-[160px] lg:w-[420px] rounded-lg text-white text-[18px] mt-4 pl-2.5'>{movie.title}</h2>
		</div>
	);
}

export default HrMovieCard;
