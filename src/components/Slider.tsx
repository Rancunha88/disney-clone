import { useState, useEffect, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import GlobalAPI from '../Services/GlobalAPI';
const screenWidth = window.innerWidth;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

interface Movie {
	backdrop_path: string;
	title: string;
	overview: string;
	release_date: string;
}
function Slider() {
	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [imageHeight, setImageHeight] = useState<number>();
	const [imageWidth, setImageWidth] = useState<number>();
	const elementRef = useRef<HTMLDivElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		if (imageRef.current) {
			const img = imageRef.current;

			const handleImageLoad = () => {
				const height = img.getBoundingClientRect().height;
				const width = img.getBoundingClientRect().width;
				setImageHeight(Math.floor(height / 2));
				setImageWidth(Math.floor(width + 16));
			};
			handleImageLoad();
		}
	}, [movieList]);

	useEffect(() => {
		// Fetch trending videos
		const fetchTrendingVideos = async () => {
			try {
				getTrendingMovies();
			} catch (error) {
				console.error('Error fetching trending videos:', error);
			}
		};

		fetchTrendingVideos();
	}, []);

	const getTrendingMovies = () => {
		GlobalAPI.getTrendingVideos.then((response) => {
			setMovieList(response.data.results);
		});
	};

	// Scroll logic with dynamic image width
	const sliderRight = () => {
		if (elementRef.current && (imageWidth ? imageWidth : 0) > 0) {
			elementRef.current.scrollLeft += imageWidth ? imageWidth : 0;
		}
	};

	const sliderLeft = () => {
		if (elementRef.current && (imageWidth ? imageWidth : 0) < 0) {
			elementRef.current.scrollLeft -= imageWidth ? imageWidth : 0;
		}
	};

	console.log('Screen Width:', screenWidth);

	return (
		<div>
			<HiChevronLeft
				className={`text-white text-[30px] absolute left-5 hover:cursor-pointer hover:scale-[1.2] transition-all duration-300`}
				onClick={sliderLeft}
				style={{ marginTop: `${imageHeight}px` }}
			/>
			<HiChevronRight
				className={`text-white text-[30px] absolute right-5 hover:cursor-pointer hover:scale-[1.2] transition-all duration-300`}
				onClick={sliderRight}
				style={{ marginTop: `${imageHeight}px` }}
			/>
			<div
				ref={elementRef}
				className='flex overflow-x-auto w-full px-16 py-3 scrollbar-hide scroll-smooth'
			>
				{movieList.map((item, index) => {
					return (
						<img
							ref={imageRef}
							style={{ minWidth: `${screenWidth - 145}px` }}
							className=' h-[410px] object-cover object-top mr-5 
										rounded-lg hover:border-[1px] hover:border-gray-700 
										transition-all duration-300 ease-out'
							key={index}
							src={IMAGE_BASE_URL + item.backdrop_path}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Slider;
