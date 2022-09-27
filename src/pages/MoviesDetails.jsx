import { useState, useEffect, Suspense } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom"
import { fetchByID } from "api/api";
import { ButtonLink } from '../components/About/About.styled'
import About from '../components/About/About';


function MoviesDetails() {
    const [movies, setMovies] = useState('');
    const { id } = useParams();
    const location = useLocation();
    const backHref = location.state?.from ?? '/';

    useEffect(() => {
        fetchByID(id).then(data => {
            setMovies(data)
        })
    }, [id]);
    return (
        <main>
            <ButtonLink to={backHref}>Go Back</ButtonLink>
            <About movies={movies} />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main >
    )
}

export default MoviesDetails;