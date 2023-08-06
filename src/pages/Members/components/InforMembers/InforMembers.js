import React, { useState, useEffect } from 'react';

import { Button, Typography, Container } from '@mui/material';

import TextField from '@mui/material/TextField';
import publicService from '../../../../common/api/publicService';
import { Grid } from '@mui/material';

//react- toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InforMembers() {
    const [dataInfor, setDataInfor] = useState({ id: '', fullName: '', phone: '', address: '', birthday: '' });
    const [reload, setReload] = useState(false);

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
            console.log(res);
            toast.success('Cập nhật thông tin thành công');
            setReload(!reload);
        } catch (err) {
            console.log('Error', err);
            toast.error('Có lỗi xảy ra!! Thử lại');
        }
    };
    return (
        <Container component="main" maxWidth="xl">
            <Typography component="h1" variant="h5" sx={{ fontSize: 20, color: '#000' }}>
                Thông Tin Tài Khoản
            </Typography>
            <Grid container spacing={1}>
                <Grid lg={6} md={6} sm={6} xs={12} item sx={{ color: '#000' }}>
                    <TextField
                        margin="normal"
                        required
                        name="fullName"
                        value={dataInfor.fullName}
                        label={'Họ Và Tên'}
                        fullWidth
                        // sx={{ width: 500 }}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12} sx={{ color: '#000' }}>
                    <TextField
                        margin="normal"
                        required
                        name="phone"
                        value={dataInfor.phone}
                        label={'Số Điện Thoại'}
                        fullWidth
                        // sx={{ width: 500, ml: 2 }}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12} sx={{ color: '#000' }}>
                    <TextField
                        margin="normal"
                        required
                        name="birthday"
                        value={dataInfor.birthday}
                        label={'Ngày Sinh'}
                        type={'date'}
                        fullWidth
                        // sx={{ width: 500 }}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12} sx={{ color: '#000' }}>
                    <TextField
                        margin="normal"
                        required
                        name="address"
                        value={dataInfor.address}
                        label={'Địa chỉ'}
                        fullWidth
                        // sx={{ width: 500, ml: 2 }}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>

            <Button
                variant="contained"
                color="error"
                sx={{ mt: 2, background: '#ff0000', fontSize: 14, textTransform: 'capitalize' }}
                onClick={handleUpdateInforUser}
            >
                Cập Nhật
            </Button>
        </Container>
    );
}

export default InforMembers;
