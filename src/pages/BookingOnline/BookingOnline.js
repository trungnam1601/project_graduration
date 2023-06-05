import React, { useState, useEffect, useContext } from 'react';

//module
import classNames from 'classnames/bind';
import styles from './BookingOnline.module.scss';
import images from './../../assets/images/images';
//mui

import Container from '@mui/material/Container';
import PaymentContent from '../../common/components/PaymentContent/PaymentContent';

import Seat from '../../common/components/Seat/Seat';
import { useParams } from 'react-router-dom';
import publicService from '../../common/api/publicService';
import { SeatContext } from '../../context/SeatContext';

const cx = classNames.bind(styles);

function BookingOnline() {
    const { id } = useParams();
    const { seats } = useContext(SeatContext);

    const [detailSchedule, setDetailSchedule] = useState('');

    useEffect(() => {
        const handleGetDetailSchedule = async () => {
            try {
                const res = await publicService.getDetailSchedule(id);
                // console.log(res);
                setDetailSchedule(res);
            } catch (err) {
                console.log('error', err);
            }
        };
        handleGetDetailSchedule();
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <Container className={cx('inner')} maxWidth="md">
                <h2>Đặt Vé Online</h2>
                <div className={cx('note-seat-status')}>
                    <div className={cx('seat-status')}>
                        <img src={images.seatNormalEmpty} alt="trống" />
                        <span>Ghế trống</span>
                    </div>
                    <div className={cx('seat-status')}>
                        <img src={images.seatNormalSelected} alt="Đang chọn" />
                        <span>Ghế đang chọn</span>
                    </div>

                    <div className={cx('seat-status')}>
                        <img src={images.seatNormalSold} alt=" đã bán" />
                        <span>Ghế đã bán</span>
                    </div>

                    <div className={cx('seat-status')}>
                        <img src={images.seatNormalEmpty} alt="thường" />
                        <span>Ghế thường</span>
                    </div>
                    <div className={cx('seat-status')}>
                        <img src={images.seatVipEmpty} alt="vip" />
                        <span>Ghế Vip</span>
                    </div>
                    <div className={cx('seat-status')}>
                        <img src={images.seatDoubleEmpty} style={{ width: 90 }} alt="Đôi" />
                        <span>Ghế đôi</span>
                    </div>
                </div>
                <div className={cx('main-content')}>
                    <img src={images.screen} alt="screen" />
                    <div className={cx('list-seat')}>
                        {seats.map((seat) => (
                            <Seat key={seat.maGhe} seat={seat} />
                        ))}
                    </div>
                </div>
                {detailSchedule ? (
                    <PaymentContent
                        id={id}
                        filmName={detailSchedule.film}
                        poster={detailSchedule.filmDTO.imageUrl}
                        startTime={detailSchedule.startTime.slice(0, 10)}
                        ageAllowed={detailSchedule.filmDTO.ageAllowed}
                        date={detailSchedule.startTime.slice(11, 16)}
                        roomName={detailSchedule.roomName}
                    />
                ) : (
                    ''
                )}
            </Container>
        </div>
    );
}

export default BookingOnline;
