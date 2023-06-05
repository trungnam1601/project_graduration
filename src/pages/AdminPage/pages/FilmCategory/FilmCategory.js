import React, { useState, useEffect } from 'react';
//module
import classNames from 'classnames/bind';
import styles from '../../AdminPage.module.scss';
//

import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import adminService from '../../../../common/api/adminService';
import Paging from '../../../../common/components/Pagination/pagination';
import ModalCreateCategory from '../../components/ModalCreateCategory/ModalCreateCategory';
///modal
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const cx = classNames.bind(styles);
function FilmCategory() {
    const [categoryFilm, setCategoryFilm] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [reload, setReload] = useState(false);
    const [dataCategory, setDataCategory] = useState({ id: '', categoryName: '', description: '' });
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseModal = () => {
        setShow(false);
    };

    useEffect(() => {
        const getFilmCategory = async (page) => {
            try {
                const res = await adminService.getMoviesCategory(page, 10);
                setCategoryFilm(res.content);
                setTotalPage(res.totalPages);
            } catch (err) {
                console.log('error', err);
            }
        };
        getFilmCategory(page);
    }, [page, reload]);

    const handlePaging = (pageClicked) => {
        setPage(pageClicked - 1);
    };

    //create category
    const handleCreateCategory = async (newData) => {
        try {
            const res = await adminService.createMoviesCategory(newData);
            alert('thêm thể loại phim thành công');
            setReload(!reload);
        } catch (err) {
            console.log('error', err);
        }
    };

    // delete Category
    const handleDeleteCategory = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa thể loại phim này không?')) {
            try {
                const res = await adminService.deleteMoviesCategory(id);
                alert('Xóa thành công');
                setReload(!reload);
            } catch (err) {
                console.log('error', err);
            }
        }
    };

    // update category

    const handleShowModal = (dataTable) => {
        const data = {
            id: dataTable.id,
            categoryName: dataTable.categoryName,
            description: dataTable.description,
        };
        setDataCategory(data);
        setShow(true);
    };
    const handleUpdateCategory = async (e) => {
        e.preventDefault();
        const newData = {
            ...dataCategory,
        };

        try {
            const res = await adminService.updateCategory(newData.id, newData);
            alert('Sửa thể loại phim thành công');
            setDataCategory({
                categoryName: '',
                description: '',
            });
            handleCloseModal();
            setReload(!reload);
        } catch (err) {
            console.log('error', err);
        }
    };

    //handle input
    const handleInputChange = (e) => {
        const { name, value } = e.target; //destructuring
        // const name = e.target.name;
        // const value = e.target.value;
        setDataCategory({ ...dataCategory, [name]: value });
    };

    return (
        <div className={cx('wrapper')}>
            <h2> Quản Lý Thể Loại Phim</h2>

            <div className={cx('fillter')}>
                {/* <div className={cx('input')}>
                    <input placeholder="Tìm Kiếm Lịch Chiếu" />
                </div> */}

                <div className={cx('button')}>
                    {/* <Button variant="contained" className={cx('find', 'btn')}>
                        Tìm kiếm
                    </Button> */}
                    <Button
                        onClick={handleOpen}
                        variant="contained"
                        className={cx('add', 'btn')}
                        style={{ marginLeft: 0 }}
                    >
                        Thêm mới
                    </Button>
                </div>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Mã Thể Loại Phim</th>
                        <th>Tên Thể Loại</th>
                        <th>Mô tả</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryFilm.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.categoryName}</td>
                            <td>{item.description}</td>
                            <td>
                                <div>
                                    <DeleteIcon
                                        onClick={() => handleDeleteCategory(item.id)}
                                        className={cx('icon')}
                                        fontSize="large"
                                        sx={{ color: '#5abd0a' }}
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

            <ModalCreateCategory open={open} onClose={handleClose} onCreateCategory={handleCreateCategory} />

            {/* modal */}
            <Dialog fullWidth maxWidth={'sm'} open={show} onClose={handleCloseModal}>
                <DialogTitle sx={{ fontSize: 24, textAlign: 'center' }}>Cập Nhật Thể Loại Phim</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="normal"
                        required
                        name="categoryName"
                        value={dataCategory.categoryName}
                        label={'Tên thể loại phim'}
                        fullWidth
                        onChange={handleInputChange}
                    />

                    <TextField
                        margin="normal"
                        required
                        name="description"
                        value={dataCategory.description}
                        label={'Mô tả'}
                        fullWidth
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button sx={{ fontSize: 16 }} onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button sx={{ fontSize: 16 }} onClick={handleUpdateCategory}>
                        Cập Nhật
                    </Button>
                </DialogActions>
            </Dialog>
            {/* <ModalUpdateCategory open={show} onClose={handleCloseModal} fillData={fillData} /> */}
        </div>
    );
}

export default FilmCategory;
