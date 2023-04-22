import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '../../common/api/apiConfig';
import tmdbApi, { category } from '../../common/api/tmdbApi';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import { Button } from '@mui/material';
import CastList from './Component/CastList/CastList';

const cx = classNames.bind(styles);
function Detail() {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getDetail = async () => {
            try {
                const response = await tmdbApi.detail(category.movie, id);
                // console.log(response);
                setItem(response);
            } catch (error) {
                console.log(error.message);
            }
        };
        getDetail();
    }, [id]);

    const bg = apiConfig.originalImage(item.backdrop_path);
    const poster = apiConfig.w500Image(item.poster_path);
    return (
        <>
            {item && (
                <div className={cx('wrapper')}>
                    <div
                        className={cx('banner')}
                        style={{
                            backgroundImage: `url(${bg})`,
                        }}
                    ></div>
                    <div className={cx('content')}>
                        <div className={cx('content-poster')}>
                            <div
                                className={cx('content-poster__img')}
                                style={{
                                    backgroundImage: `url(${poster})`,
                                }}
                            ></div>
                        </div>
                        <div className={cx('content-infor')}>
                            <h1 className={cx('title')}>{item.title || item.original_name}</h1>
                            <div className={cx('genres')}>
                                {item.genres &&
                                    item.genres.slice(0, 5).map((genre, index) => (
                                        <span className={cx('genres__item')} key={index}>
                                            {genre.name}
                                        </span>
                                    ))}
                            </div>
                            <p className={cx('overview')}>{item.overview}</p>
                            <ul className={cx('infor')}>
                                <li>
                                    <span>Phân Loại: P - PHIM PHỔ BIẾN CHO MỌI LỨA TUỔI </span>
                                </li>

                                <li>
                                    {/* <span>Đạo Diễn: </span> */}
                                    <CastList title={'Đạo Diễn'} />
                                </li>
                                <li>
                                    <CastList title={'Diễn Viên'} />
                                </li>
                                <li>
                                    <span>Ngày Khởi Chiếu: {item.release_date} </span>
                                </li>
                                <li>
                                    <span>Thời Lượng: {item.runtime} phút</span>
                                </li>
                                <li>
                                    <span>Ngôn Ngữ: {item.original_language}</span>
                                </li>
                            </ul>
                            <Button className={cx('btn')}>Mua Vé</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Detail;
