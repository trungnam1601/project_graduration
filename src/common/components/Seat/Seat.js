import React from 'react';
import classNames from 'classnames/bind';
import styles from './Seat.module.scss';

const cx = classNames.bind(styles);

function Seat({ img, text, width, height }) {
    // const [isActive, setIsActive] = useState(false);
    // const handleActive = () => {
    //     setIsActive(true);
    // };
    return (
        <div
            className={cx('wrapper')}
            style={{ backgroundImage: `url(${img})`, width: width, height: height }}
            alt="seat"
        >
            {text}
        </div>
    );
}

export default Seat;
