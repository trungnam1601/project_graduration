import PageHeader from './components/PageHeader/PageHeader';
import React from 'react';
import { useParams } from 'react-router-dom';

import MovieCatalog from './components/MovieCatalog/MovieCatalog';
import { movieCategory } from '../../common/api/publicService';
function Catalog() {
    const { type } = useParams();

    return (
        <>
            <PageHeader>{type === movieCategory.now_showing ? 'Phim Đang Chiếu' : 'Phim Sắp Chiếu'}</PageHeader>
            <div className="container-fluid">
                <div className="section ">
                    <MovieCatalog type={type} />
                </div>
            </div>
        </>
    );
}

export default Catalog;
