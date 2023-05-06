import React from 'react';

//module
import classNames from 'classnames/bind';
import styles from './BookingOnline.module.scss';
import images from './../../assets/images/images';
//mui

import Container from '@mui/material/Container';

import SeatRow from './components/SeatRow/SeatRow';
import Seat from '../../common/components/Seat/Seat';
import PaymentContent from '../../common/components/PaymentContent/PaymentContent';

const cx = classNames.bind(styles);

function BookingOnline() {
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
                    <div className={cx('room')}>
                        <SeatRow img={images.seatNormalEmpty} />
                        <SeatRow img={images.seatNormalEmpty} />
                        <SeatRow img={images.seatNormalEmpty} />
                        <SeatRow img={images.seatVipEmpty} />
                        <SeatRow img={images.seatVipEmpty} />
                        <SeatRow img={images.seatVipEmpty} />
                        <SeatRow img={images.seatVipEmpty} />
                        <SeatRow img={images.seatVipEmpty} />
                        <SeatRow img={images.seatVipEmpty} />
                        <div className={cx('room-row')}>
                            <Seat width={90} img={images.seatDoubleEmpty} text={'M8 - M7'} />
                            <Seat width={90} img={images.seatDoubleEmpty} text={'M8 - M7'} />
                            <Seat width={90} img={images.seatDoubleEmpty} text={'M8 - M7'} />
                        </div>
                    </div>
                </div>
                <PaymentContent />
            </Container>
        </div>
    );
}

export default BookingOnline;
