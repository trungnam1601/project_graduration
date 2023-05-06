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
function UserManager() {
    return (
        <div className={cx('wrapper')}>
            <h2> Quản Người Dùng</h2>

            <div className={cx('fillter')}>
                <div className={cx('input')}>
                    <input placeholder="Tìm Kiếm Người Dùng" />
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
                        <th>Tên Tài Khoản</th>
                        <th>Họ Tên</th>
                        <th>Số Điện Thoại</th>
                        <th>Mật Khẩu</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nammt</td>
                        <td>Mạc Trung Nam</td>
                        <td>0982364355</td>
                        <td>123456</td>
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

export default UserManager;
