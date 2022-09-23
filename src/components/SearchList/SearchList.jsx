import { Link, useLocation } from "react-router-dom";
import { poster } from "api/api";
import { Poster, SearchItem } from "./SerachList.styled";
import PropTypes from 'prop-types';
import imageNotFound from '../Cast/images/No_image_available.svg';


export const SearchList = ({ movies, query }) => {
    const location = useLocation()
    const visibleFilms = movies.filter(movie => (
        movie.title.toLowerCase().includes(query.toLowerCase())
    ))
    return (
        <main>
            {visibleFilms.length > 0 && (
                <ul>
                    {movies.map(({ id, title, poster_path }) => (
                        <SearchItem key={id}>
                            <Poster src={poster_path !== null ? poster + poster_path : imageNotFound} alt={title} />
                            <Link to={`${id}`} state={{ from: location }}><p>{title}</p></Link>
                        </SearchItem>
                    ))}
                </ul>
            )}
        </main>
    )
}

SearchList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired
    })),
    query: PropTypes.string.isRequired
}