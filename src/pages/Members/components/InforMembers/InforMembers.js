import React, { useState, useEffect } from 'react';

import { Button, Typography, Container } from '@mui/material';

import TextField from '@mui/material/TextField';
import publicService from '../../../../common/api/publicService';
import ModalSuccess from '../../../../common/components/ModalSuccess/ModalSuccess';

function InforMembers() {
    const [dataInfor, setDataInfor] = useState({ id: '', fullName: '', phone: '', address: '', birthday: '' });
    const [reload, setReload] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    useEffect(() => {
        const handleGetInforUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const res = await publicService.getInforUser();
                    // console.log(res);

                    setDataInfor(res);
                } catch (err) {
                    console.log('error', err);
                }
            }
        };
        handleGetInforUser();
    }, [reload]);

    //handle input
    const handleInputChange = (e) => {
        const { name, value } = e.target; //destructuring
        // const name = e.target.name;
        // const value = e.target.value;
        setDataInfor({ ...dataInfor, [name]: value });
    };

    //update information
    const handleUpdateInforUser = async () => {
        const newData = {
            id: dataInfor.id,
            fullName: dataInfor.fullName,
            phone: dataInfor.phone,
            address: dataInfor.address,
            birthday: dataInfor.birthday,
        };
        // console.log(newData, dataInfor.id);
        try {
            const res = await publicService.updateInforUser(newData.id, newData);
            handleOpen();
            setReload(!reload);
        } catch (err) {
            console.log('Error', err);
        }
    };
    return (
        <Container component="main" maxWidth="xl">
            <Typography component="h1" variant="h5" sx={{ fontSize: 20, color: '#000' }}>
                Thông Tin Tài Khoản
            </Typography>

            <TextField
                margin="normal"
                required
                name="fullName"
                value={dataInfor.fullName}
                label={'Họ Và Tên'}
                fullWidth
                sx={{ width: 500 }}
                onChange={handleInputChange}
            />
            <TextField
                margin="normal"
                required
                name="phone"
                value={dataInfor.phone}
                label={'Số Điện Thoại'}
                fullWidth
                sx={{ width: 500, ml: 2 }}
                onChange={handleInputChange}
            />
            <TextField
                margin="normal"
                required
                name="birthday"
                value={dataInfor.birthday}
                label={'Ngày Sinh'}
                type={'date'}
                fullWidth
                sx={{ width: 500 }}
                onChange={handleInputChange}
            />
            <TextField
                margin="normal"
                required
                name="address"
                value={dataInfor.address}
                label={'Địa chỉ'}
                fullWidth
                sx={{ width: 500, ml: 2 }}
                onChange={handleInputChange}
            />

            <Button
                variant="contained"
                color="error"
                sx={{ mt: 2, background: '#ff0000', fontSize: 14, textTransform: 'capitalize' }}
                onClick={handleUpdateInforUser}
            >
                Cập Nhật
            </Button>
            <ModalSuccess open={open} onClose={handleClose} text={'Cập nhật thông tin thành công'} />
        </Container>
    );
}

export default InforMembers;
