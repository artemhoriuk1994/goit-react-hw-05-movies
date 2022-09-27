import { poster } from "api/api";
import { BtnContainer, FlexContainer, FlexContent, GenresList, List, ListItem, MainContainer, NavItem, Poster, Text, Title } from './About.styled'
import PropTypes from 'prop-types'
import { Suspense } from "react";
import { useLocation } from "react-router-dom";


function About({ movies }) {
    const { title, release_date, overview, genres, vote_average, poster_path } = movies;
    const date = new Date(release_date);
    const location = useLocation();
    const backHref = location.state?.from ?? '/';

    return (
        <>
            {movies && (
                <MainContainer>
                    <Suspense fallback={<div>Loading ...</div>}>
                        <FlexContainer>
                            <Poster src={poster + poster_path} alt={title} />
                            <FlexContent>
                                <h2>{title}({date.getFullYear()})</h2>
                                <Text>User score: {vote_average.toFixed(1) * 10}%</Text>
                                <Title>Overview</Title>
                                <Text>{overview}</Text>
                                <GenresList>
                                    <Title>Genres:</Title>
                                    <List>
                                        {genres.map(({ name, id }) => (
                                            <ListItem key={id}>{name}</ListItem>
                                        ))}
                                    </List>
                                </GenresList>
                            </FlexContent>
                        </FlexContainer>
                    </Suspense >
                    <BtnContainer>
                        <ListItem><NavItem to={'cast'} state={{ from: backHref }}>Cast</NavItem></ListItem>
                        <ListItem> <NavItem to={'reviews'} staet={{ from: backHref }} >Reviews</NavItem></ListItem>
                    </BtnContainer>
                </MainContainer>
            )}
        </>
    )
}

export default About;

About.propTypes = {
    movies: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string.isRequired,
            overview: PropTypes.string,
            genres: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })),
            vote_average: PropTypes.number.isRequired,
            poster_path: PropTypes.string.isRequired
        })])
}