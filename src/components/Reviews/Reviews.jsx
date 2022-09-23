import { fetchReviews } from 'api/api';
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Text, Author } from './Revies.styled'

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetchReviews(id).then(data => {
            setReviews(data);
        })
    }, [id])

    return (
        <div>
            {reviews.length === 0 ? (<div><p>No reviews</p></div>) : (
                <ul>
                    {reviews.map(({ id, author, content }) => (
                        <li key={id}><Author>{author}</Author>
                            <Text>{content}</Text></li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Reviews;