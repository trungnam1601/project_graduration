import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
function ModalUpdateMovies({ open, onClose }) {
    // const [imageBanner, setImageBanner] = useState('');
    // const [imagePoster, setImagePoster] = useState('');

    const [dataMovies, setDataMovies] = useState({
        actor: '',
        ageAllowed: 0,
        description: '',
        duration: 0,
        endDate: '',
        filmName: '',
        language: '',
        startDate: '',
        trailerUrl: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target; //destructuring
        // const name = e.target.name;
        // const value = e.target.value;
        setDataMovies({ ...dataMovies, [name]: value });
    };

    const handleClose = () => {
        onClose();
    };
    return (
        <Dialog fullWidth maxWidth={'sm'} open={open} onClose={handleClose}>
            <DialogTitle sx={{ fontSize: 24 }}>Cập Nhật Phim</DialogTitle>
            <DialogContent>
                <TextField
                    name="actor"
                    value={dataMovies.actor}
                    margin="normal"
                    required
                    label={'Diễn viên'}
                    fullWidth
                    autoFocus
                    onChange={handleInputChange}
                />
                <TextField
                    margin="normal"
                    required
                    name="ageAllowed"
                    value={dataMovies.ageAllowed}
                    label={'Độ tuổi cho phép'}
                    fullWidth
                    autoFocus
                    onChange={handleInputChange}
                />
                <TextField
                    margin="normal"
                    required
                    label={'Banner'}
                    type="file"
                    fullWidth
                    autoFocus
                    // onChange={handleFileUploadBanner}
                />
                <TextField
                    margin="normal"
                    required
                    name="description"
                    value={dataMovies.description}
                    label={'Mô tả'}
                    autoFocus
                    fullWidth
                    onChange={handleInputChange}
                />
                <TextField
                    margin="normal"
                    name="director"
                    value={dataMovies.director}
                    required
                    label={'Đạo diễn'}
                    autoFocus
                    fullWidth
                    onChange={handleInputChange}
                />
                <TextField
                    name="duration"
                    value={dataMovies.duration}
                    margin="normal"
                    required
                    label={'Thời lượng'}
                    fullWidth
                    autoFocus
                    onChange={handleInputChange}
                />
                <TextField
                    margin="normal"
                    required
                    name="endDate"
                    value={dataMovies.endDate}
                    label={'Ngày Kết Thúc'}
                    fullWidth
                    autoFocus
                    onChange={handleInputChange}
                />
                <TextField
                    margin="normal"
                    required
                    name="filmName"
                    value={dataMovies.filmName}
                    label={'Tên phim'}
                    fullWidth
                    autoFocus
                    onChange={handleInputChange}
                />
                <TextField
                    margin="normal"
                    required
                    label={'Poster'}
                    type="file"
                    fullWidth
                    autoFocus
                    // onChange={handleFileUploadPoster}
                />

                <TextField
                    margin="normal"
                    required
                    name="language"
                    value={dataMovies.language}
                    label={'Ngôn ngữ'}
                    fullWidth
                    autoFocus
                    onChange={handleInputChange}
                />

                <TextField
                    margin="normal"
                    required
                    name="startDate"
                    value={dataMovies.startDate}
                    label={'Ngày khởi chiếu'}
                    fullWidth
                    autoFocus
                    onChange={handleInputChange}
                />

                <TextField
                    margin="normal"
                    required
                    name="trailerUrl"
                    value={dataMovies.trailerUrl}
                    label={'Trailer'}
                    fullWidth
                    autoFocus
                    onChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button sx={{ fontSize: 16 }} onClick={handleClose}>
                    Cancel
                </Button>
                <Button sx={{ fontSize: 16 }}>Cập Nhật</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalUpdateMovies;
