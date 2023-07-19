import React, { useState } from 'react';
//module
import classNames from 'classnames/bind';
import styles from '../../AdminPage.module.scss';
//

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TextField from '@mui/material/TextField';
import adminService from '../../../../common/api/adminService';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const roleData = [
    {
        id: 1,
        value: 'MEMBER',
    },
    {
        id: 2,
        value: 'ADMIN',
    },
];

const cx = classNames.bind(styles);
function UserManager() {
    const [role, setRole] = useState('');
    const [dataUser, setDataUser] = useState([]);
    const [fillterUser, setFillterUser] = useState({
        phone: '',
        username: '',
    });

    //change options tag
    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target; //destructuring
        // const name = e.target.name;
        // const value = e.target.value;
        setFillterUser({ ...fillterUser, [name]: value });
    };

    const handlefillterUser = async () => {
        const newData = {
            phone: fillterUser.phone ? fillterUser.phone : null,
            roles: [role],
            username: fillterUser.username ? fillterUser.username : null,
        };
        if (fillterUser) {
            try {
                const res = await adminService.fillterUser(newData, 0, 10);
                console.log(res);
                setDataUser(res.content);
            } catch (err) {
                console.log('error', err);
            }
        }
        console.log(newData);
    };
    return (
        <div className={cx('wrapper')}>
            <h2> Quản Lý Người Dùng</h2>

            <div className={cx('fillter')}>
                {/* <div className={cx('input')}>
                    <input placeholder="Tìm Kiếm Người Dùng" />
                </div> */}
                <FormControl sx={{ width: '300px' }}>
                    <InputLabel id="demo-simple-select-label">Quyền hạn</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-multiple-name"
                        value={role}
                        onChange={handleChange}
                        label="Quyền hạn"
                        MenuProps={MenuProps}
                    >
                        {roleData.map((item) => (
                            <MenuItem key={item.id} value={item.value}>
                                {item.value}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    margin="normal"
                    required
                    name="username"
                    value={fillterUser.username}
                    label={'username'}
                    sx={{ width: '300px', mt: -0.1 }}
                    onChange={handleInputChange}
                />

                <div className={cx('button')}>
                    <Button variant="contained" className={cx('add', 'btn')} onClick={handlefillterUser}>
                        Tìm kiếm
                    </Button>
                </div>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Tên Tài Khoản</th>
                        <th>Họ Tên</th>
                        <th>Số Điện Thoại</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {dataUser.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.fullName}</td>
                            <td>{item.phone}</td>
                            <td>{item.roles[0].role}</td>

                            <td>
                                <div>
                                    <DeleteIcon className={cx('icon')} fontSize="large" sx={{ color: ' #5abd0a' }} />
                                    <ModeEditIcon className={cx('icon')} fontSize="large" sx={{ color: ' #ff0000' }} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default UserManager;
