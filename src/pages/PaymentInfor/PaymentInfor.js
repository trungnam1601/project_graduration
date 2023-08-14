import React, { useContext, useState, useEffect } from 'react';
import { SeatContext } from '../../context/SeatContext';

//module
import classNames from 'classnames/bind';
import styles from './PaymentInfor.module.scss';
//

import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Button } from '@mui/material';
import publicService from '../../common/api/publicService';

import { useParams, useNavigate } from 'react-router-dom';

//react- toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);
function PaymentInfor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { totalPrice, selectedSeats } = useContext(SeatContext);
    const [dataUser, setDataUser] = useState('');
    const [detailSchedule, setDetailSchedule] = useState('');

    useEffect(() => {
        const handleGetDetailSchedule = async () => {
            try {
                const res = await publicService.getDetailSchedule(id);
                console.log(res);
                setDetailSchedule(res);
            } catch (err) {
                console.log('error', err);
            }
        };
        handleGetInforUser();
        handleGetDetailSchedule();
    }, [id]);

    const handleGetInforUser = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const res = await publicService.getInforUser();
                setDataUser(res);
            } catch (err) {
                console.log('error', err);
            }
        }
    };

    const handleBookingTicket = async () => {
        const newData = {
            drinkIds: ['string'],
            price: totalPrice,
            scheduleId: id,
            seatCode: selectedSeats.map((seat) => seat.tenGhe).join(','),
            seatType: 'VIP',
        };
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
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8} lg={8} md={8}>
                    <div className={cx('infor')}>
                        <div className={cx('title')}>
                            <AccountCircleIcon className={cx('icon')} fontSize="large" />
                            Thông Tin Thanh Toán
                        </div>
                        <div className={cx('user')}>
                            <div>
                                <span>Tên Tài Khoản:</span>
                                <br />
                                <span className={cx('value')}>{dataUser.username}</span>
                            </div>

                            <div>
                                <span>Họ Tên:</span>
                                <br />
                                <span className={cx('value')}>{dataUser.fullName}</span>
                            </div>

                            <div>
                                <span>Số Điện Thoại:</span>
                                <br />
                                <span className={cx('value')}>{dataUser.phone}</span>
                            </div>
                        </div>
                        {/* <div className={cx('seat-choosed')}>
                            <div className={cx('seat-type')}>Ghế vip</div>
                            <div>1 x 50.000</div>
                            <div className={cx('price-seat')}>= 50.000 vnđ</div>
                        </div> */}

                        <div className={cx('price-payment')}>
                            <div>
                                Tổng tiền: <b> {totalPrice} VNĐ</b>
                            </div>
                            <div>
                                Số tiền được giảm: <b style={{ paddingLeft: 50 }}>0 VNĐ</b>
                            </div>
                            <div>
                                Tổng tiền cần thanh toán: <b>{totalPrice} VNĐ</b>
                            </div>
                        </div>

                        <div className={cx('note')}>
                            <div className={cx('note-text')}>
                                <div>Vui lòng kiểm tra thông tin đầy đủ trước khi qua bước tiếp theo.</div>
                                <div>*Vé mua rồi không hoàn trả lại dưới mọi hình thức.</div>
                            </div>
                            <div className={cx('count-down')}>
                                <span>Thời gian còn lại</span>
                                <div className={cx('time')}>9:00</div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} lg={4} md={4}>
                    {detailSchedule ? (
                        <div className={cx('movie-ticket')}>
                            <div className={cx('title-movie')}>
                                <div className={cx('poster')}>
                                    <img src={detailSchedule.filmDTO.imageUrl} alt="vebinh" />
                                </div>

                                <div className={cx('movie-name')}>
                                    <h3>{detailSchedule.film} </h3>
                                    <h4>2D Phụ Đề</h4>
                                </div>
                            </div>
                            <div className={cx('info-movie')}>
                                <ul>
                                    <li>
                                        <h3>Thể Loại</h3>
                                        <h3 style={{ marginRight: 16 }} className={cx('bold')}>
                                            {detailSchedule.filmDTO.filmCategories.map((item) =>
                                                item.length > 1 ? item.categoryName.join(',') : item.categoryName,
                                            )}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>Thời Lượng</h3>
                                        <h3 className={cx('bold', 'pl')}>{detailSchedule.filmDTO.duration} phút</h3>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('info-cinema')}>
                                <ul>
                                    <li>
                                        <h3>Ngày Chiếu</h3>
                                        <h3 style={{ marginRight: 80 }} className={cx('bold')}>
                                            {detailSchedule.startTime.slice(0, 10)}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>Giờ Chiếu</h3>
                                        <h3 style={{ marginRight: 130 }} className={cx('bold')}>
                                            {detailSchedule.startTime.slice(11, 16)}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>Phòng Chiếu</h3>
                                        <h3 style={{ marginRight: 91, marginLeft: 27 }} className={cx('bold')}>
                                            {detailSchedule.roomName}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>Ghế Ngồi</h3>
                                        <h3 style={{ marginRight: 130 }} className={cx('bold')}>
                                            {selectedSeats.map((seat) => seat.tenGhe).join(',')}
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                            <div className={cx('continue-btn')}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    className={cx('btn')}
                                    onClick={handleBookingTicket}
                                >
                                    Đặt vé
                                </Button>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

export default PaymentInfor;
