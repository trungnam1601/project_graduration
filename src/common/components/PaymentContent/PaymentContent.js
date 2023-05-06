import React from 'react';

//module
import classNames from 'classnames/bind';
import styles from './PaymentContent.module.scss';
//
import DetailMovie from '../../../pages/BookingOnline/components/DetailMovie/DetailMovie';
import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';
import images from '../../../assets/images/images';

const cx = classNames.bind(styles);
function PaymentContent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('format-bg-top')} />
            <div className={cx('minicart-wrapper')}>
                <ul>
                    <li className={cx('item')}>
                        <DetailMovie
                            title={'Vệ Binh Dải Ngân Hà '}
                            img={images.vebinh}
                            ageAllowed={'C13'}
                            space={'2D'}
                        />
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
                                        <td>22:30, 04/05/2023</td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>Phòng chiếu</td>
                                        <td>cinema 2</td>
                                    </tr>

                                    <tr className={cx('book-seat')}>
                                        <td className={cx('label')}>Ghế</td>
                                        <td className={cx('data')}>A1</td>
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
                                        <td className={cx('label')}>Tiền vé</td>
                                        <td className={cx('price')}>0,00&nbsp; ₫</td>
                                    </tr>

                                    <tr>
                                        <td className={cx('label')}>Tổng Tiền</td>
                                        <td className={cx('price')}>0,00&nbsp; ₫</td>
                                    </tr>
                                </thead>
                            </Table>
                        </div>
                    </li>
                </ul>

                <Button className={cx('btn-next')}>Tiếp Tục</Button>
            </div>

            <div className={cx('format-bg-bottom')} />
        </div>
    );
}

export default PaymentContent;
