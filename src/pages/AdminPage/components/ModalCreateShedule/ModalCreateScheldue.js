import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import publicService, { movieCategory } from './../../../../common/api/publicService';
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

function ModalCreateSchedule({ open, onClose, onCreateSchedule }) {
    const [getMovies, setGetMovies] = useState([]);
    const [getRoom, setGetRoom] = useState([]);
    const [dataSchedule, setDataSchedule] = useState({
        filmId: '',
        roomId: '',
        startTime: '',
    });
    const handleClose = () => {
        onClose();
    };

    useEffect(() => {
        handleGetMovies();
        handleGetRoom();
    }, []);

    const handleGetMovies = async () => {
        try {
            const res = await publicService.getMoviesList(movieCategory.now_showing, 0, 100);
            setGetMovies(res.content);
        } catch (err) {
            console.log('err', err);
        }
    };

    const handleGetRoom = async () => {
        try {
            const res = await adminService.getCinemaRoom(0, 10);
            setGetRoom(res.content);
        } catch (err) {
            console.log('err', err);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target; //destructuring
        // const name = e.target.name;
        // const value = e.target.value;
        setDataSchedule({ ...dataSchedule, [name]: value });
    };

    const handleCreateSchedule = (e) => {
        e.preventDefault();
        const newData = {
            ...dataSchedule,
        };

        onCreateSchedule(newData);
        setDataSchedule({
            filmId: '',
            roomId: '',
            startTime: '',
        });

        handleClose();
    };
    return (
        <Dialog fullWidth maxWidth={'sm'} open={open} onClose={handleClose}>
            <DialogTitle sx={{ fontSize: 24, textAlign: 'center' }}>Thêm Mới Lịch Chiếu Phim</DialogTitle>
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
                        {getRoom.map((item) => (
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
                <Button sx={{ fontSize: 16 }} onClick={handleClose}>
                    Cancel
                </Button>
                <Button sx={{ fontSize: 16 }} onClick={handleCreateSchedule}>
                    Thêm Mới
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalCreateSchedule;
