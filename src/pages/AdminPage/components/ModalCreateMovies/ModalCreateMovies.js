import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//
import adminService from './../../../../common/api/adminService';
import imageConfig from '../../../../common/api/imageConfig';

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

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
}

function ModalCreateMovies({ open, onClose, onCreateMovie }) {
    const [imageBanner, setImageBanner] = useState('');
    const [imagePoster, setImagePoster] = useState('');
    const [startDate, setstartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [categoryMovies, setCategoryMovies] = useState([]);
    const [imageBannerDefault, setImageBannerDefault] = useState('');
    const [imagePosterDefault, setImagePosterDefault] = useState('');

    const theme = useTheme();
    const [categoryId, setcategoryId] = useState([]);

    useEffect(() => {
        const handleGetCategoryMovies = async () => {
            try {
                const res = await adminService.getMoviesCategory(0, 20);
                setCategoryMovies(res.content);
            } catch (err) {
                console.log('error', err);
            }
        };
        handleGetCategoryMovies();
    }, []);

    //change options tag
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setcategoryId(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [dataMovies, setDataMovies] = useState({
        actor: '',
        ageAllowed: 0,
        description: '',
        duration: 0,
        director: '',
        filmName: '',
        language: '',
        trailerUrl: '',
    });
    const handleClose = () => {
        onClose();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target; //destructuring
        // const name = e.target.name;
        // const value = e.target.value;
        setDataMovies({ ...dataMovies, [name]: value });
    };

    //file upload
    const handleFileUploadBanner = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        try {
            const res = await adminService.createImage(formData);

            setImageBanner(imageConfig.Image(res.imageUrl));
            setImageBannerDefault(imageConfig.Image(res.imageUrl));
        } catch (error) {
            alert('error', error);
        }
    };

    const handleFileUploadPoster = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        try {
            const res = await adminService.createImage(formData);

            setImagePoster(imageConfig.Image(res.imageUrl));
            setImagePosterDefault(imageConfig.Image(res.imageUrl));
        } catch (error) {
            alert('error', error);
        }
    };
    //

    const handleCreateMovies = (e) => {
        e.preventDefault();
        const newData = {
            ...dataMovies,
            categories: categoryId,
            bannerImageUrl: imageBanner,
            imageUrl: imagePoster,
            startDate: startDate,
            endDate: endDate,
        };
        console.log(newData);
        onCreateMovie(newData);
        setDataMovies({
            actor: '',
            ageAllowed: 0,
            description: '',
            duration: 0,
            filmName: '',
            language: '',
            director: '',
            trailerUrl: '',
        });
        setImageBanner('');
        setImagePoster('');
        setEndDate('');
        setstartDate('');
        setcategoryId([]);
        setImageBannerDefault('');
        setImagePosterDefault('');
        handleClose();
    };
    return (
        <Dialog fullWidth maxWidth={'sm'} open={open} onClose={handleClose}>
            <DialogTitle sx={{ fontSize: 24 }}>Thêm Mới Phim</DialogTitle>
            <DialogContent>
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
                    name="director"
                    value={dataMovies.director}
                    required
                    label={'Đạo diễn'}
                    autoFocus
                    fullWidth
                    onChange={handleInputChange}
                />
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
                    name="description"
                    value={dataMovies.description}
                    label={'Mô tả'}
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
                    name="language"
                    value={dataMovies.language}
                    label={'Ngôn ngữ'}
                    fullWidth
                    autoFocus
                    onChange={handleInputChange}
                />
                <FormControl sx={{ width: '100%', mt: 2, mb: 2 }}>
                    <InputLabel id="demo-multiple-name-label">Thể loại phim</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        multiple
                        value={categoryId}
                        onChange={handleChange}
                        input={<OutlinedInput label="Thể loại phim" />}
                        MenuProps={MenuProps}
                    >
                        {categoryMovies.map((item) => (
                            <MenuItem key={item.id} value={item.id} style={getStyles(item, categoryId, theme)}>
                                {item.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={startDate}
                        onChange={(newValue) => setstartDate(newValue.format('YYYY-MM-DD'))}
                        sx={{ width: '100%', mt: 2, mb: 2 }}
                        label="Ngày khởi chiếu"
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue.format('YYYY-MM-DD'))}
                        sx={{ width: '100%', mt: 2, mb: 2 }}
                        label="Ngày kết thúc "
                    />
                </LocalizationProvider>

                {/* <TextField
                    margin="normal"
                    required
                    name="startDate"
                    value={dataMovies.startDate}
                    label={'Ngày khởi chiếu'}
                    fullWidth
                    type="date"
                    autoFocus
                    onChange={handleInputChange}
                />
                <TextField
                    margin="normal"
                    required
                    name="endDate"
                    value={dataMovies.endDate}
                    label={'Ngày Kết Thúc'}
                    type="date"
                    fullWidth
                    autoFocus
                    onChange={handleInputChange}
                /> */}
                <TextField
                    margin="normal"
                    required
                    label={'Banner'}
                    type="file"
                    fullWidth
                    autoFocus
                    onChange={handleFileUploadBanner}
                />

                <img style={{ width: '50%' }} src={imageBannerDefault} alt="banner" />

                <TextField
                    margin="normal"
                    required
                    label={'Poster'}
                    type="file"
                    fullWidth
                    autoFocus
                    onChange={handleFileUploadPoster}
                />

                <img style={{ width: '50%', height: '50%' }} src={imagePosterDefault} alt="poster" />

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
                <Button sx={{ fontSize: 16 }} onClick={handleCreateMovies}>
                    Thêm Mới
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalCreateMovies;
