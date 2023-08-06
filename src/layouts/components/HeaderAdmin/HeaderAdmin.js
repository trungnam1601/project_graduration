import React, { Fragment } from 'react';

//mui
import { Toolbar, AppBar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import NavbarItem from './components/NavbarItem/NavbarItem';
import { useNavigate } from 'react-router-dom';

import styles from './components/NavbarItem/NavbarItem.module.scss';
import classNames from 'classnames/bind';

const drawerWidth = 240;

const cx = classNames.bind(styles);

function HeaderAdmin({ onOpenDrawer }) {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };
    const handleDrawerToggle = () => {
        onOpenDrawer();
    };
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon fontSize="large" />
                </IconButton>
                <Fragment>
                    <NavbarItem link={'/admin'} title="Admin" />
                    <NavbarItem link={'/'} title="Trang Chủ" />
                </Fragment>
                <div className={cx('item')} style={{ cursor: 'pointer' }} onClick={handleLogout}>
                    Đăng Xuất
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default HeaderAdmin;
