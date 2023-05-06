import React from 'react';
import classNames from 'classnames/bind';
import styles from './../../../../common/components/Seat/Seat.module.scss';
import Seat from './../../../../common/components/Seat/Seat';
const cx = classNames.bind(styles);
function SeatRow({ img }) {
    return (
        <div className={cx('inner')}>
            <Seat img={img} text={'A1'} />
            <Seat img={img} />
            <Seat img={img} />
            <Seat img={img} />
            <Seat img={img} />
            <Seat img={img} />
            <Seat img={img} />
            <Seat img={img} />
            <Seat img={img} />
            <Seat img={img} />
        </div>
    );
}

export default SeatRow;
