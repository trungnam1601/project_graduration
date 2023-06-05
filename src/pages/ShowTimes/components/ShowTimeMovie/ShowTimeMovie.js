import React from 'react';
import ButtonTime from '../../../../common/components/ButtonTime/ButtonTime';

import classNames from 'classnames/bind';
import styles from './ShowTimeMovie.module.scss';

const cx = classNames.bind(styles);
function ShowTimeMovie({ title, poster, action, time, category, id, startTime }) {
    return (
        <div className={cx('wrapper')}>
            <img src={poster} alt="poster" />
            <div className={cx('infor')}>
                <h2 className={cx('title')}>{title}</h2>
                <span className={cx('action')}>{action}</span>
                <h4 className={cx('time')}>{time} phút</h4>
                <h3 className={cx('category')}>{category}</h3>
                <div className={cx('btn-time')}>
                    <ButtonTime id={id} time={startTime} />
                </div>
            </div>
        </div>
    );
}

export default ShowTimeMovie;
