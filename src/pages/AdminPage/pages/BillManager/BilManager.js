import React, { useState, useEffect } from 'react';
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
import publicService, { movieCategory } from '../../../../common/api/publicService';
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

const cx = classNames.bind(styles);
function BillManager() {
    const [getMovies, setGetMovies] = useState([]);
    const [role, setRole] = useState('');
    const [getDataFillter, setGetDataFillter] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [dataFillter, setDataFillter] = useState({
        filmId: '',
        memberId: '',
    });

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
    //change options tag
    const handleChange = (event) => {
        setRole(event.target.value);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target; //destructuring
        // const name = e.target.name;
        // const value = e.target.value;
        setDataFillter({ ...dataFillter, [name]: value });
    };

    useEffect(() => {
        const handlefillterUser = async (role) => {
            const newData = {
                phone: null,
                roles: [role],
                username: null,
            };
            console.log(newData);
            if (role) {
                try {
                    const res = await adminService.fillterUser(newData, 0, 10);
                    console.log(res);
                    setDataUser(res.content);
                } catch (err) {
                    console.log('error', err);
                }
            }
        };
        handlefillterUser(role);
        handleGetMovies();
    }, [role]);

    const handleFillterBill = async () => {
        const newData = {
            filmId: dataFillter.filmId ? dataFillter.filmId : null,
            memberId: dataFillter ? dataFillter.memberId : null,
            orderDateFrom: null,
            orderDateTo: null,
            seatType: null,
        };

        if (dataFillter) {
            try {
                const res = await adminService.fillterBill(newData, 0, 10);
                console.log(res);
                setGetDataFillter(res.content);
            } catch (err) {
                console.log('error', err);
            }
        }
    };

    const handleGetMovies = async () => {
        try {
            const res = await publicService.getMoviesList(movieCategory.now_showing, 0, 100);
            setGetMovies(res.content);
        } catch (err) {
            console.log('err', err);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h2> Quản Lý Hóa Đơn</h2>

            <div className={cx('fillter')}>
                <FormControl sx={{ width: '260px' }}>
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
                <FormControl sx={{ width: '260px' }}>
                    <InputLabel id="demo-simple-select-label">Tài Khoản</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-multiple-name"
                        value={dataFillter.memberId}
                        onChange={handleInputChange}
                        label="Tài Khoản"
                        name={'memberId'}
                        MenuProps={MenuProps}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dataUser.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.username}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '260px' }}>
                    <InputLabel id="demo-simple-select-label">Phim đang chiếu</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-multiple-name"
                        value={dataFillter.filmId}
                        onChange={handleInputChange}
                        name={'filmId'}
                        label="Phim đang chiếu"
                        MenuProps={MenuProps}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {getMovies.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.filmName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <div className={cx('button')}>
                    {/* <Button variant="contained" className={cx('find', 'btn')}>
                        Tìm kiếm
                    </Button> */}
                    <Button
                        variant="contained"
                        className={cx('add', 'btn')}
                        style={{ marginLeft: 0 }}
                        onClick={() => handleFillterBill()}
                    >
                        Tìm Kiếm
                    </Button>
                </div>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Mã Hóa Đơn</th>
                        <th>Tên Phim</th>
                        <th>Ngày Lập</th>
                        <th>Tổng tiền</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {getDataFillter?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.schedule.film}</td>
                            <td>{JSON.stringify(item.orderDate).substr(1, 10)}</td>
                            <td>{item.totalPrice}đ</td>
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

export default BillManager;
