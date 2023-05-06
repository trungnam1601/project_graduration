import React from 'react';
//module
import classNames from 'classnames/bind';
import styles from './AdminPage.module.scss';
//
import images from '../../assets/images/images';
import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

const cx = classNames.bind(styles);

function AdminPage() {
    return (
        <div className={cx('wrapper')}>
            <h2> Quản Lý Phim</h2>

            <div className={cx('fillter')}>
                <div className={cx('input')}>
                    <input placeholder="Tìm Kiếm Phim" />
                </div>

                <div className={cx('button')}>
                    <Button variant="contained" className={cx('find', 'btn')}>
                        Tìm kiếm
                    </Button>
                    <Button
                        variant="contained"
                        className={cx('add', 'btn')}
                        // onClick={() => navigate('/admin/them-bai-viet')}
                    >
                        Thêm mới
                    </Button>
                </div>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Mã Phim</th>
                        <th>Hình Ảnh</th>
                        <th>Tên Phim</th>
                        <th>Mô tả</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <img className={cx('poster')} src={images.vebinh} alt="vebinh" />
                        </td>
                        <td>Vệ Binh Dải Ngân Hà 3</td>
                        <td>
                            <p className={cx('detail')}>
                                Vệ Binh Dải Ngân Hà 3 Vệ Binh Dải Ngân Hà 3 Vệ Binh Dải Ngân Hà 3 Vệ Binh Dải Ngân Hà 3
                            </p>
                        </td>
                        <td>
                            <div>
                                <DeleteIcon className={cx('icon')} fontSize="large" sx={{ color: ' #5abd0a' }} />
                                <ModeEditIcon className={cx('icon')} fontSize="large" sx={{ color: ' #ff0000' }} />
                                <EditCalendarIcon className={cx('icon')} fontSize="large" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default AdminPage;
