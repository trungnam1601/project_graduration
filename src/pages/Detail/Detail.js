import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import { Button } from '@mui/material';
import Youtube from 'react-youtube';

import publicService from '../../common/api/publicService';
import ModalBuyTicket from '../../common/components/ModalBuyTicket/ModalBuyTicket';

const cx = classNames.bind(styles);
function Detail() {
    const [item, setItem] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { id } = useParams();

    useEffect(() => {
        const getDetail = async () => {
            try {
                const response = await publicService.getDetail(id);
                setItem(response);
            } catch (error) {
                console.log(error.message);
            }
        };
        getDetail();
    }, [id]);

    const opts = {
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <>
            {item && (
                <div className={cx('wrapper')}>
                    <div
                        className={cx('banner')}
                        style={{
                            backgroundImage: `url(${item.bannerImageUrl})`,
                        }}
                    ></div>
                    <div className={cx('content')}>
                        <div className={cx('content-poster')}>
                            <div
                                className={cx('content-poster__img')}
                                style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                }}
                            ></div>
                        </div>
                        <div className={cx('content-infor')}>
                            <h1 className={cx('title')}>{item.filmName}</h1>
                            <div className={cx('genres')}>
                                {item.filmCategories &&
                                    item.filmCategories.slice(0, 5).map((genre, index) => (
                                        <span className={cx('genres__item')} key={index}>
                                            {genre.categoryName}
                                        </span>
                                    ))}
                            </div>
                            <p className={cx('overview')}>{item.description}</p>
                            <ul className={cx('infor')}>
                                <li>
                                    <span>Phân Loại: PHIM GIÀNH CHO LỨA TUỔI {item.ageAllowed} </span>
                                </li>

                                <li>
                                    <span>Đạo Diễn: {item.director} </span>
                                </li>
                                <li>
                                    <span>Diễn Viên: {item.actor} </span>
                                </li>
                                <li>
                                    <span>Ngày Khởi Chiếu: {item.startDate} </span>
                                </li>
                                <li>
                                    <span>Thời Lượng: {item.duration} phút</span>
                                </li>
                                <li>
                                    <span>Ngôn Ngữ: {item.language}</span>
                                </li>
                            </ul>
                            <Button onClick={handleOpen} className={cx('btn')}>
                                Mua Vé
                            </Button>
                            <ModalBuyTicket open={open} onClose={handleClose} title={item.filmName} id={id} />
                        </div>
                    </div>
                    <div className={cx('trailer')}>
                        <h2>Trailer</h2>

                        <div className={cx('video')}>
                            <Youtube videoId={item.trailerUrl} opts={opts} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Detail;
