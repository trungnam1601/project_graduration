import React from 'react';

import classNames from 'classnames/bind';
import styles from './Calendar.module.scss';
import { Button } from 'react-bootstrap';

const cx = classNames.bind(styles);
function Calendar({ date, style }) {
    return (
        <Button style={style} className={cx('btn')}>
            {date}
        </Button>
    );
}

export default Calendar;
