import React, { useState } from 'react';
import { Box, Button, Grid, Typography, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
// import Input from './../../common/components/input/input';
import { TextField } from '@mui/material';
import authService from '../../common/api/authService';

//react- toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const navigate = useNavigate();
    const [dataRegister, setDataRegister] = useState({
        fullName: '',
        phone: '',
        birthday: '',
        address: '',
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target; //destructuring
        // const name = e.target.name;
        // const value = e.target.value;
        setDataRegister({ ...dataRegister, [name]: value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const newData = {
            ...dataRegister,
        };
        try {
            const res = await authService.register(newData);
            console.log(res);
            toast.success('Đăng ký tài khoản thành công');
            navigate('/login');
        } catch (err) {
            console.log('error', err);
            toast.error('Có lỗi xảy ra!! Thử lại');
        }
    };

    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 20,
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        background: '#fff',
                    }}
                >
                    <Typography component="h1" variant="h5" sx={{ fontSize: 20, color: '#000' }}>
                        Đăng Ký Tài Khoản
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 2 }}>
                        <TextField
                            name="fullName"
                            value={dataRegister.fullName}
                            margin="normal"
                            required
                            label={'Họ và Tên'}
                            sx={{ width: 235 }}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            name="phone"
                            value={dataRegister.phone}
                            label={'Số Điện Thoại'}
                            sx={{ width: 235, ml: 2 }}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            name="birthday"
                            value={dataRegister.birthday}
                            label={'Ngày Sinh'}
                            sx={{ width: 235 }}
                            type={'date'}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="normal"
                            name="address"
                            value={dataRegister.address}
                            required
                            label={'Địa Chỉ'}
                            sx={{ width: 235, ml: 2 }}
                            onChange={handleInputChange}
                        />
                        <TextField
                            name="username"
                            value={dataRegister.username}
                            margin="normal"
                            required
                            label={'Tên Đăng Nhập'}
                            sx={{ width: 235 }}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            name="password"
                            value={dataRegister.password}
                            label={'Mật Khẩu'}
                            sx={{ width: 235, ml: 2 }}
                            type={'password'}
                            onChange={handleInputChange}
                        />

                        {/* 
                        <Input label={'Họ và Tên'} width={235} />
                        <Input label={'Số Điện Thoại'} width={235} ml={2} />
                        <Input label={'Ngày Sinh'} width={235} type={'date'} />
                        <Input label={'Địa Chỉ'} width={235} ml={2} />
                        <Input label={'Tên Đăng Nhập'} width={235} />
                        <Input label={'Mật Khẩu'} type={'password'} width={235} ml={2} /> */}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="error"
                            sx={{ mt: 3, mb: 2, fontSize: 16, textTransform: 'capitalize', background: '#ff0000' }}
                            onClick={handleRegister}
                        >
                            Đăng Ký
                        </Button>
                        <Grid container>
                            <Grid item sx={{ color: '#000' }}>
                                <Link to="/login">{'Bạn đã có tài khoản? Đăng nhập'}</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Register;
