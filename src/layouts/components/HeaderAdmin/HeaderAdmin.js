import React, { Fragment } from 'react';

//mui
import { Toolbar, AppBar } from '@mui/material';

import NavbarItem from './components/NavbarItem/NavbarItem';

const drawerWidth = 240;

function HeaderAdmin() {
    return (
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            <Toolbar>
                <Fragment>
                    <NavbarItem link={'/admin'} title="Admin" />
                    <NavbarItem link={'/'} title="Trang Chủ" />
                </Fragment>
                <NavbarItem link={'/'} title="Đăng Xuất" />
            </Toolbar>
        </AppBar>
    );
}

export default HeaderAdmin;
