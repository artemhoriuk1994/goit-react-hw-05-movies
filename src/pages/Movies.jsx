import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchBySearchMovies } from "api/api";
import { SearchList } from "components/SearchList/SearchList"
import SearchBar from "components/SearchBar/SearchBar";

function Movies() {
    const [movies, setMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') ?? '';

    const filterFilm = value => {
        setSearchParams(value !== '' ? { query: value } : {})
    }
    useEffect(() => {
        if (!query) {
            return
        }
        fetchBySearchMovies(query).then(data => {
            setMovie(data);
        });
    }, [query]);
    return (
        <main >
            <SearchBar filter={filterFilm} />
            <Suspense fallback={<div>Loading ...</div>}>
                <SearchList movies={movies} query={query} />
            </Suspense>
        </main>
    )
};

export default Movies