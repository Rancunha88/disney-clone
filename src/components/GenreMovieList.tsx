import GenresList from '../Constant/GenresList';
import MovieList from './MovieList';

function GenreMovieList() {
  return (
    <div>
       {GenresList.map((item, index) => index < 4 &&(
        <div key={item.id} className="genre-movie-list">
          <div className='p-8 px-8 md:px-16'>
            <h2 className='text-[20px] text-white font-bold' >{item.name}</h2>
            <MovieList genreId={item.id} index_={index} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList