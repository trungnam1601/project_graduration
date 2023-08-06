import React, { useState, useEffect } from 'react';
//module
import classNames from 'classnames/bind';
import styles from './AdminPage.module.scss';
//
// import images from '../../assets/images/images';
import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import EditCalendarIcon from '@mui/icons-material/EditCalendar';

//modal

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//

import publicService, { movieCategory } from '../../common/api/publicService';
import ModalCreateMovies from './components/ModalCreateMovies/ModalCreateMovies';

import adminService from '../../common/api/adminService';
import Paging from '../../common/components/Pagination/pagination';
// import imageConfig from '../../common/api/imageConfig';
import { useNavigate } from 'react-router-dom';

//react- toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const cx = classNames.bind(styles);

function AdminPage() {
    const navigate = useNavigate();
    const [getMovies, setGetMovies] = useState([]);
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    const [reload, setReload] = useState(false);

    const [categoryMovies, setCategoryMovies] = useState([]);
    const [categoryId, setcategoryId] = useState([]);
    const theme = useTheme();
    // const [imageBanner, setImageBanner] = useState('');
    // const [imagePoster, setImagePoster] = useState('');
    // const [imageBannerDefault, setImageBannerDefault] = useState('');
    // const [imagePosterDefault, setImagePosterDefault] = useState('');

    //
    const [dataMovies, setDataMovies] = useState({
        id: '',
        actor: '',
        ageAllowed: 0,
        description: '',
        duration: 0,
        director: '',
        endDate: '',
        filmName: '',
        language: '',
        startDate: '',
        trailerUrl: '',
        imageUrl: '',
        bannerImageUrl: '',
    });

    //open modal
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseModal = () => {
        setShow(false);
    };
    //

    const handlePaging = (pageClicked) => {
        setPage(pageClicked - 1);
    };
    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if (token && role && role === 'ADMIN') {
            navigate('/admin');
        } else {
            toast.warning('Bạn không có quyền truy cập trang này');
            navigate('/');
        }
        const getMovies = async (page) => {
            try {
                const response = await publicService.getMoviesList(movieCategory.now_showing, page, 10);
                // console.log(response.content);
                setGetMovies(response.content);
                setTotalPage(response.totalPages);
            } catch (error) {
                console.log('error', error);
            }
        };
        getMovies(page);
        handleGetCategoryMovies();
    }, [page, reload, navigate]);

    //create movies
    const handleCreateMovies = async (newData) => {
        console.log(newData);
        try {
            const respone = await adminService.createMovies(newData);
            console.log(respone);
            toast.success('Thêm phim thành công');
            setReload(!reload);
        } catch (err) {
            console.log('error', err);
            toast.error('Có lỗi xảy ra!! Thử lại');
        }
    };

    // delete movies
    const handleDeleteMovies = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa phim này không?')) {
            try {
                const res = await adminService.deleteMovies(id);
                console.log(res);
                toast.success('Xóa phim thành công!');
                setReload(!reload);
            } catch (err) {
                console.log('error', err);
                toast.error('Có lỗi xảy ra!! Thử lại');
            }
        }
    };

    //update movies
    const handleOpenModal = (newData) => {
        const data = {
            id: newData.id,
            actor: newData.actor,
            ageAllowed: newData.ageAllowed,
            description: newData.description,
            duration: newData.duration,
            filmName: newData.filmName,
            language: newData.language,
            trailerUrl: newData.trailerUrl,
            director: newData.director,
            endDate: newData.endDate,
            startDate: newData.startDate,
            imageUrl: newData.imageUrl,
            bannerImageUrl: newData.bannerImageUrl,
        };
        setDataMovies(data);
        // setImageBannerDefault(newData.bannerImageUrl);
        // setImageBanner(newData.bannerImageUrl);
        // setImagePosterDefault(newData.imageUrl);
        // setImagePoster(newData.imageUrl);

        setShow(true);
    };

    const handleGetCategoryMovies = async () => {
        try {
            const res = await adminService.getMoviesCategory(0, 20);
            setCategoryMovies(res.content);
        } catch (err) {
            console.log('error', err);
        }
    };

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

    // file upload
    // const handleFileUploadBanner = async (e) => {
    //     const formData = new FormData();
    //     formData.append('file', e.target.files[0]);

    //     try {
    //         const res = await adminService.createImage(formData);
    //         console.log('succes');
    //         setImageBanner(imageConfig.Image(res.imageUrl));
    //         setImageBannerDefault(imageConfig.Image(res.imageUrl));
    //     } catch (error) {
    //         alert('error', error);
    //     }
    // };

    // const handleFileUploadPoster = async (e) => {
    //     const formData = new FormData();
    //     formData.append('file', e.target.files[0]);

    //     try {
    //         const res = await adminService.createImage(formData);
    //         console.log('succes');
    //         setImagePoster(imageConfig.Image(res.imageUrl));
    //         setImagePosterDefault(imageConfig.Image(res.imageUrl));
    //     } catch (error) {
    //         alert('error', error);
    //     }
    // };

    //handle input
    const handleInputChange = (e) => {
        const { name, value } = e.target; //destructuring
        // const name = e.target.name;
        // const value = e.target.value;
        setDataMovies({ ...dataMovies, [name]: value });
    };

    const handleUpdateMovies = async (e) => {
        e.preventDefault();
        const newData = {
            ...dataMovies,
            categories: categoryId,
            // bannerImageUrl: imageBanner,
            // imageUrl: imagePoster,
        };
        console.log(newData);
        try {
            const res = adminService.updateMovies(newData.id, newData);
            console.log(res);
            toast.success('Sửa thông tin phim thành công');
            // setImageBanner('');
            // setImagePoster('');
            setcategoryId([]);
            // setImageBannerDefault('');
            // setImagePosterDefault('');
            handleCloseModal();
            setReload(!reload);
        } catch (err) {
            console.log('error', err);
            toast.error('Có lỗi xảy ra!! Thử lại');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h2> Quản Lý Phim Đang Chiếu</h2>

            <div className={cx('fillter')}>
                {/* <div className={cx('input')}>
                    <input placeholder="Tìm Kiếm Phim" />
                </div> */}

                <div className={cx('button')}>
                    {/* <Button variant="contained" className={cx('find', 'btn')}>
                        Tìm kiếm
                    </Button> */}
                    <Button
                        variant="contained"
                        className={cx('add', 'btn')}
                        onClick={handleClickOpen}
                        style={{ marginLeft: 0 }}
                        // onClick={() => navigate('/admin/them-bai-viet')}
                    >
                        Thêm mới
                    </Button>
                </div>
            </div>

            <Table striped bordered hover condensed responsive>
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
                    {getMovies.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <img className={cx('poster')} src={item.imageUrl} alt="vebinh" />
                            </td>
                            <td>{item.filmName}</td>
                            <td>
                                <p className={cx('detail')}>{item.description}</p>
                            </td>
                            <td>
                                <div>
                                    <DeleteIcon
                                        onClick={() => handleDeleteMovies(item.id)}
                                        className={cx('icon')}
                                        fontSize="large"
                                        sx={{ color: ' #5abd0a' }}
                                    />
                                    <ModeEditIcon
                                        onClick={() => handleOpenModal(item)}
                                        className={cx('icon')}
                                        fontSize="large"
                                        sx={{ color: ' #ff0000' }}
                                    />
                                    {/* <EditCalendarIcon className={cx('icon')} fontSize="large" /> */}
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
            <Dialog fullWidth maxWidth={'sm'} open={show} onClose={handleCloseModal}>
                <DialogTitle sx={{ fontSize: 24, textAlign: 'center' }}>Sửa Thông Tin Phim</DialogTitle>
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

                    <TextField
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
                    />

                    <TextField
                        margin="normal"
                        required
                        label={'Banner'}
                        name="bannerImageUrl"
                        // type="file"
                        value={dataMovies.bannerImageUrl}
                        fullWidth
                        autoFocus
                        onChange={handleInputChange}
                    />

                    {/* <img style={{ width: '50%' }} src={imageBannerDefault} alt="banner" /> */}

                    <TextField
                        margin="normal"
                        required
                        label={'Poster'}
                        value={dataMovies.imageUrl}
                        name="imageUrl"
                        // type="file"
                        fullWidth
                        autoFocus
                        onChange={handleInputChange}
                    />
                    {/* <img style={{ width: '50%' }} src={imagePosterDefault} alt="poster" /> */}

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
                    <Button sx={{ fontSize: 16 }} onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button sx={{ fontSize: 16 }} onClick={handleUpdateMovies}>
                        Cập Nhật
                    </Button>
                </DialogActions>
            </Dialog>
            {/*  */}
            <ModalCreateMovies open={open} onClose={handleClose} onCreateMovie={handleCreateMovies} />
        </div>
    );
}

export default AdminPage;
