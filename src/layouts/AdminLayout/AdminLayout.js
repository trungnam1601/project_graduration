import React from 'react';

//module
import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
//
import Sidebar from '../components/Sidebar/Sidebar';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';

const cx = classNames.bind(styles);
function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderAdmin />
            <Sidebar />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default AdminLayout;
