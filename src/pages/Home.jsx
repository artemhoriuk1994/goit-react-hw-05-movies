import { getTrendMoviese } from 'api/api';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { Suspense, useEffect, useState } from 'react';

function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getTrendMoviese().then(data => setMovies([...data]))
    }, []);

    return (
        <main>
            <h1>Tranding today</h1>
            <Suspense fallback={<div>Loading ...</div>}>
                <TrendingMovies tranding={movies} />
            </Suspense>
        </main>
    )
};

export default Home;