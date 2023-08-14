import React, { useContext } from 'react';

//module
import classNames from 'classnames/bind';
import styles from './PaymentContent.module.scss';
//
import DetailMovie from '../../../pages/BookingOnline/components/DetailMovie/DetailMovie';
import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';
import { SeatContext } from '../../../context/SeatContext';
import publicService from '../../api/publicService';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

//react- toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);
function PaymentContent({ poster, filmName, ageAllowed, startTime, roomName, date, id }) {
    const { totalPrice, selectedSeats } = useContext(SeatContext);
    const navigate = useNavigate();
    // const link = '/thong-tin-thanh-toan/' + id;
    const handleBookingTicket = async () => {
        const newData = {
            drinkIds: ['string'],
            price: totalPrice,
            scheduleId: id,
            seatCode: selectedSeats.map((seat) => seat.tenGhe).join(','),
            seatType: 'VIP',
        };
        console.log(newData);
        try {
            const res = await publicService.createOrderSeat(newData);
            console.log(res);
            toast.success('Đặt vé thành công');
            navigate('/');
        } catch (error) {
            console.log('error', error);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('format-bg-top')} />
            <div className={cx('minicart-wrapper')}>
                <ul>
                    <li className={cx('item')}>
                        <DetailMovie title={filmName} img={poster} ageAllowed={ageAllowed} space={'2D'} />
                    </li>
                    <li className={cx('item')}>
                        <div className={cx('product-detail')}>
                            <Table className={cx('infor')}>
                                <tbody>
                                    <tr>
                                        <td className={cx('label')}>Rạp</td>
                                        <td>Trung tâm chiếu phim quốc gia</td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>Suất chiếu</td>
                                        <td>
                                            {startTime}, {date}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>Phòng chiếu</td>
                                        <td>{roomName}</td>
                                    </tr>

                                    <tr className={cx('book-seat')}>
                                        <td className={cx('label')}>Ghế</td>
                                        <td className={cx('data')}>
                                            {selectedSeats.map((seat) => seat.tenGhe).join(',')}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </li>
                    <li className={cx('item')}>
                        <div className={cx('product-detail')}>
                            <Table className={cx('infor')}>
                                <thead>
                                    <tr>
                                        <td className={cx('label')}>Tiền vé:</td>
                                        <td className={cx('price')}>{totalPrice}đ</td>
                                    </tr>

                                    <tr>
                                        <td className={cx('label')}>Tổng Tiền:</td>
                                        <td className={cx('price')}>{totalPrice}đ</td>
                                    </tr>
                                </thead>
                            </Table>
                        </div>
                    </li>
                </ul>

                {/* <Button className={cx('btn-next')}>
                    <Link className={cx('link-next')} to={link}>
                        Tiếp Tục
                    </Link>
                </Button>  */}

                <Button className={cx('btn-next')} onClick={handleBookingTicket}>
                    Đặt vé
                </Button>
            </div>

            <div className={cx('format-bg-bottom')} />
        </div>
    );
}

export default PaymentContent;
