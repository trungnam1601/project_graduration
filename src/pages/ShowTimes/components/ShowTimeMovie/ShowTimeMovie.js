import React from 'react';
import ButtonTime from '../../../../common/components/ButtonTime/ButtonTime';

import classNames from 'classnames/bind';
import styles from './ShowTimeMovie.module.scss';
import images from '../../../../assets/images/images';

const cx = classNames.bind(styles);
function ShowTimeMovie({ title, poster, action, time, category }) {
    return (
        <div className={cx('wrapper')}>
            <img src={images.poster} alt="poster" />
            <div className={cx('infor')}>
                <h2 className={cx('title')}>{title}</h2>
                <span className={cx('action')}>{action}</span>
                <h4 className={cx('time')}>{time} phút</h4>
                <h3 className={cx('category')}>{category}</h3>
                <div className={cx('btn-time')}>
                    <ButtonTime time={'18:40'} number={144} />
                    <ButtonTime time={'18:40'} number={144} />
                    <ButtonTime time={'18:40'} number={144} />
                    <ButtonTime time={'18:40'} number={144} />
                    <ButtonTime time={'18:40'} number={144} />
                </div>
            </div>
        </div>
    );
}

export default ShowTimeMovie;
