import React, { useState, useEffect } from 'react';
import styles from './MovieCatalog.module.scss';
import classNames from 'classnames/bind';
import { Grid } from '@mui/material';
// import { useParams } from 'react-router-dom';
import CardItem from '../../../../common/components/CardItem/CardItem';

// import { useNavigate } from 'react-router-dom';
//paging
import Paging from '../../../../common/components/Pagination/pagination';
import publicService, { movieCategory } from '../../../../common/api/publicService';

const cx = classNames.bind(styles);
function MovieCatalog({ type, cate }) {
    // const { keyword } = useParams();
    const [movieItems, setMovieItems] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);

    const handlePaging = (pageClicked) => {
        setPage(pageClicked - 1);
    };

    useEffect(() => {
        const getList = async (page) => {
            let response = null;

            if (type === movieCategory.now_showing) {
                response = await publicService.getMoviesList(type, page, 12);
            } else if (type === movieCategory.upcoming) {
                response = await publicService.getMoviesList(type, page, 12);
            }

            console.log(response);
            setTotalPage(response.totalPages);
            setMovieItems(response.content);
        };
        getList(page);
    }, [type, page]);
    return (
        <>
            <div className={cx('grid-item')}>
                <Grid container rowSpacing={10} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                    {movieItems.map((item, index) => (
                        <Grid lg={2} md={3} xs={6} sm={4} item key={item.id}>
                            <CardItem
                                title={item.filmName}
                                img={item.imageUrl}
                                id={item.id}
                                trailer={item.trailerUrl}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>

            <div className={cx('pagination')}>
                <Paging onPageClick={handlePaging} page={page + 1} totalPage={totalPage} />
            </div>
        </>
    );
}

export default MovieCatalog;
