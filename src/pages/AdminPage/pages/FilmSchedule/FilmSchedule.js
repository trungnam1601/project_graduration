import React from 'react';
//module
import classNames from 'classnames/bind';
import styles from '../../AdminPage.module.scss';
//

import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const cx = classNames.bind(styles);
function FilmSchedule() {
    return (
        <div className={cx('wrapper')}>
            <h2> Quản Lịch Chiếu</h2>

            <div className={cx('fillter')}>
                <div className={cx('input')}>
                    <input placeholder="Tìm Kiếm Lịch Chiếu" />
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
                        <th>Mã Lịch Chiếu</th>
                        <th>Tên Phim</th>
                        <th>Phòng Chiếu</th>
                        <th>Ngày Chiếu</th>
                        <th>Giờ Chiếu</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>LC01</td>
                        <td>Vệ Binh Dải Ngân Hà 3</td>
                        <td>P01</td>
                        <td>5/5/2023</td>
                        <td>11:50</td>
                        <td>
                            <div>
                                <DeleteIcon className={cx('icon')} fontSize="large" sx={{ color: ' #5abd0a' }} />
                                <ModeEditIcon className={cx('icon')} fontSize="large" sx={{ color: ' #ff0000' }} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default FilmSchedule;
