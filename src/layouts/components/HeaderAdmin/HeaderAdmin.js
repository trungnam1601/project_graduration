import React, { Fragment } from 'react';

//mui
import { Toolbar, AppBar } from '@mui/material';

import NavbarItem from './components/NavbarItem/NavbarItem';
import { useNavigate } from 'react-router-dom';

import styles from './components/NavbarItem/NavbarItem.module.scss';
import classNames from 'classnames/bind';

const drawerWidth = 240;

const cx = classNames.bind(styles);

function HeaderAdmin() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };
    return (
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            <Toolbar>
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
