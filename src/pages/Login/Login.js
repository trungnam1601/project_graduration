import React from 'react';
import { Box, Button, Grid, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Input from '../../common/components/input/input';

function Login() {
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
                        <Input label={'Tên Đăng Nhập'} fullWidth={true} />
                        <Input label={'Mật Khẩu'} fullWidth={true} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="error"
                            sx={{ mt: 3, mb: 2, fontSize: 16, textTransform: 'capitalize', background: '#ff0000' }}
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
