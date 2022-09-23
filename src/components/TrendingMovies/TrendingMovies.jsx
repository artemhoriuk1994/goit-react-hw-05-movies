import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

function TrendingMovies({ tranding }) {
    const location = useLocation();

    return (
        <ul>
            {tranding.map(({ id, title }) => (
                <Link to={`movies/${id}`} key={id} state={{ from: location }}><li>{title}</li></Link>
            ))}
        </ul>
    )
};

export default TrendingMovies;

TrendingMovies.propTypes = {
    tranding: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    }))
}