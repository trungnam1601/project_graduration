import React from 'react';
import Calendar from './components/Calendar/Calendar';
import ShowTimeMovie from './components/ShowTimeMovie/ShowTimeMovie';

import classNames from 'classnames/bind';
import styles from './ShowTimes.module.scss';
import { Grid } from '@mui/material';
const cx = classNames.bind(styles);
function ShowTimes() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('calendar')}>
                    <Calendar date={'22/4 - T7'} />
                    <Calendar date={'22/4 - T7'} />
                    <Calendar date={'22/4 - T7'} />
                    <Calendar date={'22/4 - T7'} />
                    <Calendar date={'22/4 - T7'} />
                    <Calendar date={'22/4 - T7'} />
                </div>
                <div className={cx('list')}>
                    <Grid container spacing={4}>
                        <Grid xs={12} sm={12} md={6}>
                            <ShowTimeMovie
                                title={'Phim Anh Em Super Mario'}
                                action={'Hoạt hình, Phiêu lưu'}
                                time={90}
                                category={'2D Phụ Đề'}
                            />
                        </Grid>
                        <Grid xs={6} sm={6} md={6}>
                            <ShowTimeMovie
                                title={'Phim Anh Em Super Mario'}
                                action={'Hoạt hình, Phiêu lưu'}
                                time={90}
                                category={'2D Phụ Đề'}
                            />
                        </Grid>
                        <Grid xs={6} sm={6} md={6}>
                            <ShowTimeMovie
                                title={'Phim Anh Em Super Mario'}
                                action={'Hoạt hình, Phiêu lưu'}
                                time={90}
                                category={'2D Phụ Đề'}
                            />
                        </Grid>
                        <Grid xs={6} sm={6} md={6}>
                            <ShowTimeMovie
                                title={'Phim Anh Em Super Mario'}
                                action={'Hoạt hình, Phiêu lưu'}
                                time={90}
                                category={'2D Phụ Đề'}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default ShowTimes;
