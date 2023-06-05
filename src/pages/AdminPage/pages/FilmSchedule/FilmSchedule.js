import React, { useState, useEffect } from 'react';
//module
import classNames from 'classnames/bind';
import styles from '../../AdminPage.module.scss';
//

import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//

import adminService from '../../../../common/api/adminService';
import ModalCreateSchedule from '../../components/ModalCreateShedule/ModalCreateScheldue';
import Paging from '../../../../common/components/Pagination/pagination';
import publicService, { movieCategory } from '../../../../common/api/publicService';

//modal update
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
//
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
function FilmSchedule() {
    const [cinemaRoom, setCinemaRoom] = useState([]);
    const [renderCinemaRoom, setRenderCinemaRoom] = useState([]);
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    const [reload, setReload] = useState(false);

    const [getMovies, setGetMovies] = useState([]);

    const [dataSchedule, setDataSchedule] = useState({
        id: '',
        filmId: '',
        roomId: '',
        startTime: '',
    });

    const [roomId, setRoomId] = useState('');

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleCloseModalUpdate = () => {
        setShow(false);
    };

    //paging
    const handlePaging = (pageClicked) => {
        setPage(pageClicked - 1);
    };

    useEffect(() => {
        const handleGetScheldueByRoom = (page) => {
            if (roomId) {
                adminService
                    .getScheduleByRoom(roomId, page, 10)
                    .then((response) => {
                        console.log(response.content);
                        setRenderCinemaRoom(response.content);
                        setTotalPage(response.totalPages);
                    })
                    .catch((error) => {
                        console.log('error', error);
                    });
            }
        };
        getCinemaRoom();
        handleGetScheldueByRoom(page);
        handleGetMovies();
    }, [roomId, reload, page]);

    const getCinemaRoom = async () => {
        try {
            const res = await adminService.getCinemaRoom(0, 10);
            setCinemaRoom(res.content);
        } catch (err) {
            console.log('error', err);
        }
    };

    //get select
    const handleGetMovies = async () => {
        try {
            const res = await publicService.getMoviesList(movieCategory.now_showing, 0, 100);
            setGetMovies(res.content);
        } catch (err) {
            console.log('err', err);
        }
    };

    //
    //create Schedule
    const handleCreateSchedule = async (newData) => {
        console.log(newData);
        try {
            const res = await adminService.createSchedule(newData);
            alert('Thêm lịch chiếu thành công');
            setReload(!reload);
        } catch (err) {
            console.log('error', err);
        }
    };

    //delete Schedule

    const handleDeleteScheldue = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa lịch chiếu này không?')) {
            try {
                const res = await adminService.deleteSchedule(id);
                alert('Xoas lịch chiếu thành công');
                setReload(!reload);
            } catch (err) {
                console.log('error', err);
            }
        }
    };

    //change options tag
    const handleChange = (event) => {
        setRoomId(event.target.value);
    };

    //update schedule
    const handleShowModal = (newData) => {
        const data = {
            id: newData.id,
            roomId: newData.roomId,
            filmId: newData.filmId,
            startTime: newData.startTime,
        };
        setDataSchedule(data);
        setShow(true);
    };

    const handleUpdateSchedule = async (e) => {
        e.preventDefault();
        const newData = {
            ...dataSchedule,
        };
        console.log(newData);
        try {
            const res = await adminService.updateSchedule(newData.id, newData);
            alert('Sửa lịch chiếu thành công');
            setDataSchedule({
                id: '',
                filmId: '',
                roomId: '',
                startTime: '',
            });
            handleCloseModalUpdate();
            setReload(!reload);
        } catch (err) {
            console.log('error', err);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target; //destructuring
        // const name = e.target.name;
        // const value = e.target.value;
        setDataSchedule({ ...dataSchedule, [name]: value });
    };

    return (
        <div className={cx('wrapper')}>
            <h2> Quản Lý Lịch Chiếu</h2>

            <div className={cx('fillter')}>
                <FormControl sx={{ width: '650px' }}>
                    <InputLabel id="demo-simple-select-label">Phòng chiếu</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-multiple-name"
                        value={roomId}
                        onChange={handleChange}
                        label="Phòng chiếu"
                        // MenuProps={MenuProps}
                    >
                        {cinemaRoom.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.roomName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <div className={cx('button')}>
                    {/* <Button variant="contained" className={cx('find', 'btn')}>
                        Tìm kiếm
                    </Button> */}
                    <Button variant="contained" className={cx('add', 'btn')} onClick={handleOpenModal}>
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
                    {renderCinemaRoom.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.film}</td>
                            <td>{item.roomName}</td>
                            <td>{JSON.stringify(item.startTime).substr(1, 10)}</td>
                            <td>{JSON.stringify(item.startTime).substr(12, 5)}</td>
                            <td>
                                <div>
                                    <DeleteIcon
                                        onClick={() => handleDeleteScheldue(item.id)}
                                        className={cx('icon')}
                                        fontSize="large"
                                        sx={{ color: ' #5abd0a' }}
                                    />
                                    <ModeEditIcon
                                        onClick={() => handleShowModal(item)}
                                        className={cx('icon')}
                                        fontSize="large"
                                        sx={{ color: ' #ff0000' }}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className={cx('pagination')}>
                <Paging onPageClick={handlePaging} page={page + 1} totalPage={totalPage} />
            </div>

            {/* modal */}
            <Dialog fullWidth maxWidth={'sm'} open={show} onClose={handleCloseModalUpdate}>
                <DialogTitle sx={{ fontSize: 24, textAlign: 'center' }}>Sửa Thông Tin Lịch Chiếu </DialogTitle>
                <DialogContent>
                    <FormControl sx={{ width: '100%', mb: 2, mt: 2 }}>
                        <InputLabel id="demo-simple-select-label">Phòng chiếu</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-multiple-name"
                            name="roomId"
                            value={dataSchedule.roomId}
                            onChange={handleInputChange}
                            label="Phòng chiếu"
                            MenuProps={MenuProps}
                        >
                            {cinemaRoom.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.roomName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ width: '100%' }}>
                        <InputLabel id="demo-simple-select-label">Phim đang chiếu</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-multiple-name"
                            name="filmId"
                            value={dataSchedule.filmId}
                            onChange={handleInputChange}
                            label="Phim đang chiếu"
                            MenuProps={MenuProps}
                        >
                            {getMovies.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.filmName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        margin="normal"
                        required
                        name="startTime"
                        value={dataSchedule.startTime}
                        label={'Thời gian chiếu'}
                        autoFocus
                        fullWidth
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button sx={{ fontSize: 16 }} onClick={handleCloseModalUpdate}>
                        Cancel
                    </Button>
                    <Button sx={{ fontSize: 16 }} onClick={handleUpdateSchedule}>
                        Cập Nhật
                    </Button>
                </DialogActions>
            </Dialog>

            {/*  */}
            <ModalCreateSchedule open={open} onClose={handleCloseModal} onCreateSchedule={handleCreateSchedule} />
        </div>
    );
}

export default FilmSchedule;
