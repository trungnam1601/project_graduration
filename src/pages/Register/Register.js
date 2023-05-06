import React from 'react';
import { Box, Button, Grid, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Input from './../../common/components/input/input';

function Register() {
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
                        <Input label={'Họ và Tên'} width={235} />
                        <Input label={'Số Điện Thoại'} width={235} ml={2} />
                        <Input label={'Tên Đăng Nhập'} width={235} />
                        <Input label={'Mật Khẩu'} type={'password'} width={235} ml={2} />
                        <Input label={'Xác Nhận Mật Khẩu'} width={235} type={'password'} />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="error"
                            sx={{ mt: 3, mb: 2, fontSize: 16, textTransform: 'capitalize', background: '#ff0000' }}
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
