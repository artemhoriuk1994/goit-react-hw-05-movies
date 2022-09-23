import { useState, useEffect, Suspense } from "react";
import { Outlet, useParams } from "react-router-dom"
import { fetchByID } from "api/api";
import About from '../components/About/About'

function MoviesDetails() {
    const [movies, setMovies] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetchByID(id).then(data => {
            setMovies(data)
        })
    }, [id]);
    return (
        <main>
            <About movies={movies} />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main >
    )
}

export default MoviesDetails;