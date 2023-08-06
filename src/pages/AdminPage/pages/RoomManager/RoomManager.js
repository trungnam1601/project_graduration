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

//react- toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);
function RoomManager() {
    const [getRoom, setGetRoom] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    const [reload, setReload] = useState(false);

    const [dataInput, setDataInput] = useState('');

    useEffect(() => {
        const getCinemaRoom = async (page) => {
            try {
                const res = await adminService.getCinemaRoom(page, 10);
                setGetRoom(res.content);
                setTotalPage(res.totalPages);
                setReload(!reload);
            } catch (err) {
                console.log('error', err);
            }
        };
        getCinemaRoom(page);
    }, [page, reload]);

    //phân trang
    const handlePaging = (pageClicked) => {
        setPage(pageClicked - 1);
    };

    // tạo phòng chiếu
    const handleCreateCinemaRoom = async () => {
        const roomName = {
            roomName: dataInput,
        };
        // console.log(roomName);
        try {
            const res = await adminService.createCinemaRoom(roomName);
            console.log(res);
            toast.success('Thêm mới phòng chiếu thành công');
            setDataInput('');
            setReload(!reload);
        } catch (err) {
            console.log('error', err);
            toast.error('Có lỗi xảy ra!! Thử lại');
        }
    };

    //delete phòng chiếu
    const handleDeleteRoom = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa phòng chiếu này không?')) {
            try {
                const res = await adminService.deleteCinemaRoom(id);
                console.log(res);
                toast.success('Xóa phòng chiếu thành công');
                setDataInput('');
                setReload(!reload);
            } catch (err) {
                console.log('err', err);
                toast.error('Có lỗi xảy ra!! Thử lại');
            }
        }
    };

    //sửa tên phòng chiếu
    const getDataTable = (dataTable) => {
        setDataInput(dataTable.roomName);
    };

    const handleUpdateCinemaRoom = async (id) => {
        const dataUpdate = {
            roomName: dataInput,
        };
        try {
            const res = await adminService.updateCinemaRoom(id, dataUpdate);
            console.log(res);
            toast.success('Sửa thông tin phòng chiếu thành công');
            setDataInput('');
            setReload(!reload);
        } catch (err) {
            console.log('error', err);
            toast.error('Có lỗi xảy ra!! Thử lại');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h2> Quản Lý Phòng Chiếu</h2>

            <div className={cx('fillter')}>
                <div className={cx('input')}>
                    <input
                        value={dataInput}
                        onChange={(e) => setDataInput(e.target.value)}
                        placeholder="Thêm mới phòng chiếu"
                    />
                </div>

                <div className={cx('button')}>
                    <Button
                        variant="contained"
                        className={cx('add', 'btn')}
                        style={{ marginLeft: 0 }}
                        onClick={handleCreateCinemaRoom}
                        // onClick={() => navigate('/admin/them-bai-viet')}
                    >
                        Thêm mới
                    </Button>

                    {/* <Button variant="contained" className={cx('find', 'btn')}>
                        Update
                    </Button> */}
                </div>
            </div>

            <Table striped bordered hover condensed responsive>
                <thead>
                    <tr>
                        <th>Mã Phòng Chiếu</th>
                        <th>Tên Phòng Chiếu</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {getRoom.map((item) => (
                        <tr key={item.id} onClick={() => getDataTable(item)}>
                            <td>{item.id}</td>
                            <td>{item.roomName}</td>
                            <td>
                                <div>
                                    <DeleteIcon
                                        onClick={() => handleDeleteRoom(item.id)}
                                        className={cx('icon')}
                                        fontSize="large"
                                        sx={{ color: ' #5abd0a' }}
                                    />
                                    <ModeEditIcon
                                        onClick={() => handleUpdateCinemaRoom(item.id)}
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
        </div>
    );
}

export default RoomManager;
