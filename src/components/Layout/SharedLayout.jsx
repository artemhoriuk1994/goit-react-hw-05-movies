import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Navigation, NavigationLink } from "./SharedLayout.styled";


export function SharedLayout() {
    return (
        <div>
            <Container>
                <Navigation>
                    <NavigationLink to="/" end>Home</NavigationLink>
                    <NavigationLink to='/movies'>Movies</NavigationLink>
                </Navigation>
            </Container >
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}