import React, { useState } from 'react';

//module
import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
//
import Sidebar from '../components/Sidebar/Sidebar';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';

const cx = classNames.bind(styles);
function AdminLayout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <div className={cx('wrapper')}>
            <HeaderAdmin onOpenDrawer={handleDrawerToggle} />
            <Sidebar onOpenDrawer={handleDrawerToggle} open={mobileOpen} />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default AdminLayout;
