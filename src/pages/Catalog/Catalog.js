import PageHeader from './components/PageHeader/PageHeader';
import React from 'react';
import { useParams } from 'react-router-dom';
import { movieType } from '../../common/api/tmdbApi';
import MovieCatalog from './components/MovieCatalog/MovieCatalog';
function Catalog() {
    const { type } = useParams();
    return (
        <>
            <PageHeader>{type === movieType.popular ? 'Phim Đang Chiếu' : 'Phim Sắp Chiếu'}</PageHeader>
            <div className="container-fluid">
                <div className="section ">
                    <MovieCatalog type={type} />
                </div>
            </div>
        </>
    );
}

export default Catalog;
