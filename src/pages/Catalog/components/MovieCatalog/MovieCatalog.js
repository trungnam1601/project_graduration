import React, { useState, useEffect, useCallback } from 'react';
import styles from './MovieCatalog.module.scss';
import classNames from 'classnames/bind';
import { Button, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import CardItem from '../../../../common/components/CardItem/CardItem';
import tmdbApi, { category, movieType } from '../../../../common/api/tmdbApi';

import { useNavigate } from 'react-router-dom';
//paging
import Paging from '../../../../common/components/Pagination/pagination';

const cx = classNames.bind(styles);
function MovieCatalog({ type, cate }) {
    const { keyword } = useParams();
    const [movieItems, setMovieItems] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(1);

    const handlePaging = (pageClicked) => {
        setPage(pageClicked);
    };

    useEffect(() => {
        const getList = async (page) => {
            let response = null;

            if (keyword === undefined) {
                if (type === movieType.popular) {
                    response = await tmdbApi.getMoviesList(type, page);
                } else if (type === movieType.upcoming) {
                    response = await tmdbApi.getMoviesList(type, page);
                }
            } else {
                response = await tmdbApi.search(category.movie, keyword);
            }
            setTotalPage(response.total_pages);
            setMovieItems(response.results);
        };
        getList(page);
    }, [type, keyword, page]);
    return (
        <>
            <MovieSearch keyword={keyword} />
            {movieItems.length === 0 ? (
                <span className={cx('movie-not_found')}>{`Not found "${keyword}" movie!`}</span>
            ) : (
                <div className={cx('grid-item')}>
                    <Grid container spacing={3}>
                        {movieItems.map((item, index) => (
                            <Grid xs={2} sm={4} md={2} item key={index}>
                                <CardItem title={item.title} name={item.name} img={item.poster_path} id={item.id} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
            {/* <div className={cx('grid-item')}>
                <Grid container spacing={3}>
                    {movieItems.map((item, index) => (
                        <Grid xs={2} sm={4} md={2} item key={index}>
                            <CardItem
                                cate={cate}
                                title={item.title}
                                name={item.name}
                                img={item.poster_path}
                                id={item.id}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div> */}

            <div className={cx('pagination')}>
                <Paging onPageClick={handlePaging} page={page} totalPage={totalPage} />
            </div>
        </>
    );
}

const MovieSearch = (props) => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    // const onClickButtonSearch = () => {
    //     if (keyword.trim().length > 0) {
    //         navigate(`/${category[props.category]}/search/${keyword}`);
    //       // const debouncedValue = useDebounce(keyword, 500); }
    // };
    const onClickButtonSearch = useCallback(() => {
        if (keyword.trim().length > 0) {
            navigate(`/movie/search/${keyword}`);
        }
    }, [keyword, navigate]);
    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                onClickButtonSearch();
            }
        };
        document.addEventListener('keyup', enterEvent);

        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, onClickButtonSearch]);

    return (
        <div className={cx('wrapper')}>
            <input
                className={cx('input-search')}
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <Button size="small" className={cx('btn')} onClick={onClickButtonSearch}>
                Search
            </Button>
        </div>
    );
};

export default MovieCatalog;
