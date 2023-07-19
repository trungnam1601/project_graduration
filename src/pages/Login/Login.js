import React, { useState } from 'react';
import { Box, Button, Grid, Typography, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { TextField } from '@mui/material';
import authService from '../../common/api/authService';

//react- toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     const role = localStorage.getItem('role');
    //     console.log(role);

    //     if (role == 'ADMIN') {
    //         navigate('/admin');
    //     } else if (role == 'MEMBER') {
    //         navigate('/login');
    //     } else {
    //         navigate('/login');
    //     }
    // }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const respone = await authService.login(username, password);

            // console.log(respone);
            localStorage.setItem('token', respone.accessToken);
            localStorage.setItem('user', respone.username);
            localStorage.setItem('role', respone.roles);
            toast.success('Đăng nhập thành công');
            navigate('/');
        } catch (err) {
            console.log('error', err);
            setPassword('');
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
                        Đăng Nhập Tài Khoản
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 2 }}>
                        <TextField
                            value={username}
                            margin="normal"
                            required
                            label={'Tên Đăng Nhập'}
                            fullWidth
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            value={password}
                            label={'Mật Khẩu'}
                            fullWidth
                            type={'password'}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="error"
                            sx={{ mt: 3, mb: 2, fontSize: 16, textTransform: 'capitalize', background: '#ff0000' }}
                            onClick={handleLogin}
                        >
                            Đăng Nhập
                        </Button>
                        <Grid container>
                            <Grid item sx={{ color: '#000' }}>
                                <Link to="/register">{'Bạn chưa có tài khoản? Đăng ký'}</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Login;
