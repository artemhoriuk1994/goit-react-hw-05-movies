import { fetchCredits, poster } from "api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Image, List, ListItem } from "./Cast.styled";
import imageNotFound from './images/No_image_available.svg'

function Cast() {
    const [casts, setCast] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetchCredits(id).then(data => {
            setCast(data)
        })
    }, [id, casts]);
    return (
        <Container>
            {casts.length < 0 ? (
                <div>No Cast</div>
            ) : (<List>
                {casts.map(({ name, cast_id, original_name, profile_path }) => (
                    <ListItem key={cast_id}><Image src={profile_path !== null ? poster + profile_path : imageNotFound} alt={name} /><p>{original_name}</p></ListItem>
                ))}
            </List>)
            }
        </Container >
    )
};

export default Cast;