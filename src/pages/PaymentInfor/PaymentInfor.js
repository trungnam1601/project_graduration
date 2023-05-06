import React from 'react';

//module
import classNames from 'classnames/bind';
import styles from './PaymentInfor.module.scss';
//

import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import images from '../../assets/images/images';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);
function PaymentInfor() {
    return (
        <div className={cx('wrapper')}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div className={cx('infor')}>
                        <div className={cx('title')}>
                            <AccountCircleIcon className={cx('icon')} fontSize="large" />
                            Thông Tin Thanh Toán
                        </div>
                        <div className={cx('user')}>
                            <div>
                                <span>Tên Tài Khoản:</span>
                                <br />
                                <span className={cx('value')}>Mạc Trung Nam</span>
                            </div>

                            <div>
                                <span>Họ Tên:</span>
                                <br />
                                <span className={cx('value')}>Mạc Trung Nam</span>
                            </div>

                            <div>
                                <span>Số Điện Thoại:</span>
                                <br />
                                <span className={cx('value')}>0982364xxx</span>
                            </div>
                        </div>
                        <div className={cx('seat-choosed')}>
                            <div className={cx('seat-type')}>Ghế vip</div>
                            <div>1 x 50.000</div>
                            <div className={cx('price-seat')}>= 50.000 vnđ</div>
                        </div>

                        <div className={cx('price-payment')}>
                            <div>
                                Tổng tiền: <b>50.000 VNĐ</b>
                            </div>
                            <div>
                                Số tiền được giảm: <b style={{ paddingLeft: 94 }}>0 VNĐ</b>
                            </div>
                            <div>
                                Tổng tiền cần thanh toán: <b>50.000 VNĐ</b>
                            </div>
                        </div>
                        <div className={cx('payment-method')}>
                            <div className={cx('title')}>
                                <CreditCardIcon className={cx('icon')} fontSize="large" />
                                Phương Thức Thanh Toán
                            </div>
                            <h3>Chọn Thẻ Thanh Toán</h3>
                            <div className={cx('card')}>
                                <div className={cx('item')}>
                                    <input type="radio" id="card1" name="card1" value="nội địa" />
                                    <label for="card1">
                                        <img src={images.noidia} alt="nội địa" />
                                        <span>Thẻ nội địa</span>
                                    </label>
                                </div>

                                <div className={cx('item')}>
                                    <input type="radio" id="card1" name="card1" value="nội địa" />
                                    <label for="card1">
                                        <img src={images.quocte} alt="nội địa" />
                                        <span>Thẻ quốc tế</span>
                                    </label>
                                </div>
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
                <Grid item xs={4}>
                    <div className={cx('movie-ticket')}>
                        <div className={cx('title-movie')}>
                            <div className={cx('poster')}>
                                <img src={images.vebinh} alt="vebinh" />
                            </div>

                            <div className={cx('movie-name')}>
                                <h3>Vệ Binh Giải Ngân Hà 3 </h3>
                                <h4>2D Phụ Đề</h4>
                            </div>
                        </div>
                        <div className={cx('info-movie')}>
                            <ul>
                                <li>
                                    <h3>Thể Loại</h3>
                                    <h3 className={cx('bold')}>Hành Động, Phiêu Lưu</h3>
                                </li>
                                <li>
                                    <h3>Thời Lượng</h3>
                                    <h3 className={cx('bold', 'pl')}>150 phút</h3>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('info-cinema')}>
                            <ul>
                                <li>
                                    <h3>Ngày Chiếu</h3>
                                    <h3 style={{ marginRight: 80 }} className={cx('bold')}>
                                        08/05/2023
                                    </h3>
                                </li>
                                <li>
                                    <h3>Giờ Chiếu</h3>
                                    <h3 style={{ marginRight: 130 }} className={cx('bold')}>
                                        23:30
                                    </h3>
                                </li>
                                <li>
                                    <h3>Phòng Chiếu</h3>
                                    <h3 style={{ marginRight: 147 }} className={cx('bold')}>
                                        P01
                                    </h3>
                                </li>
                                <li>
                                    <h3>Ghế Ngồi</h3>
                                    <h3 style={{ marginRight: 152 }} className={cx('bold')}>
                                        G7
                                    </h3>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('continue-btn')}>
                            <Button variant="contained" color="error" className={cx('btn')}>
                                Tiếp Tục
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default PaymentInfor;
