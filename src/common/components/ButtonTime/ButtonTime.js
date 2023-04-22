import React from 'react';

import classNames from 'classnames/bind';
import styles from './ButtonTime.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ButtonTime({ time, number }) {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('btn')}>{time}</Link>
            <div className={cx('emty-seat')}>{number} ghế trống</div>
        </div>
    );
}

export default ButtonTime;
