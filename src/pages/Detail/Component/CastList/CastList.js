import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi, { category } from '../../../../common/api/tmdbApi';

function CastList({ title }) {
    const { id } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category.movie, id);
            // console.log(res.cast);
            setCasts(res.cast.slice(1, 6));
        };
        getCredits();
    }, [id]);

    return (
        <>
            <span>
                {title}: {casts.map((item) => item.name)}{' '}
            </span>
        </>
    );
}

export default CastList;
