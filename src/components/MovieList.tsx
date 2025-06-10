import { useState, useEffect, useRef } from 'react';
import React from 'react';
import GlobalAPI from '../Services/GlobalAPI';
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import HrMovieCard from './HrMovieCard';

function MovieList({ genreId, index_ }: { genreId: number; index_: number }) {
	const [movieList, setMovieList] = useState<any[]>([]);

	useEffect(() => {
		getMovieByGenreId();
	}, [genreId]);

	const elementRef = useRef<HTMLDivElement | null>(null);

	const getMovieByGenreId = () => {
		if (genreId) {
			GlobalAPI.getMovieByGenre(genreId)
				.then((response) => {
					setMovieList(response.data.results);
				})
				.catch((error) => {
					console.error('Error fetching movies by genre ID:', error);
				});
		}
	};

	const sliderRight = (element: HTMLElement | null) => {
		if (element) {
			element.scrollLeft += 600;
		}
	};

	const sliderLeft = (element: HTMLElement | null) => {
		if (element) {
			element.scrollLeft -= 600;
		}
	};

	return (
		<div>
			<HiChevronLeft
				className={`text-white text-[30px] 
							absolute left-5 
							hover:cursor-pointer hover:scale-[1.2] 
							transition-all duration-300
							hidden lg:block ${index_ % 3 == 0 ? 'mt-[120px]' : 'mt-[165px]'}`}
				onClick={() => sliderLeft(elementRef.current)}
			/>
			<HiChevronRight
				className={`text-white text-[30px] 
							absolute right-5 
							hover:cursor-pointer hover:scale-[1.2] 
							transition-all duration-300 
							hidden lg:block ${index_ % 3 == 0 ? 'mt-[120px]' : 'mt-[165px]'}`}
				onClick={() => sliderRight(elementRef.current)}
			/>
			<div
				ref={elementRef}
				className='flex overflow-x-hidden gap-8 scrollbar-hide pb-4 pt-4 scroll-smooth'
			>
				{movieList.map((item, index) => (
					<React.Fragment key={index}>
						{index_ % 3 == 0 ? (
							<HrMovieCard
								key={index}
								movie={item}
							/>
						) : (
							<MovieCard
								key={index}
								movie={item}
							/>
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default MovieList;
