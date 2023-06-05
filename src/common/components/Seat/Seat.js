import React, { useContext } from 'react';
// import classNames from 'classnames/bind';
import './Seat.scss';
import { SeatContext } from '../../../context/SeatContext';

// const cx = classNames.bind(styles);

function Seat({ seat }) {
    const { handleSeatClick, selectedSeats } = useContext(SeatContext);
    const isSelected = selectedSeats.some((selectedSeat) => selectedSeat.maGhe === seat.maGhe);
    let classNormal = seat.loaiGhe === 'NORMAL' ? 'seat-normal' : '';
    let classSeatNormal = classNormal
        ? seat.daDat
            ? 'seat-normal booked'
            : isSelected
            ? 'seat-normal selected'
            : 'seat-normal'
        : '';

    let classSeatVip = seat.loaiGhe === 'VIP' ? 'seat-vip' : '';
    let classVip = classSeatVip ? (seat.daDat ? 'seat-vip booked' : isSelected ? 'selected-vip' : '') : '';
    let classSeatDouble = seat.loaiGhe === 'TWIN' ? 'seat-double' : '';
    let classDouble = classSeatDouble ? (seat.daDat ? 'seat-double booked' : isSelected ? 'selected-double' : '') : '';

    return (
        <>
            <div
                className={`btn-seat ${classSeatNormal}   ${classSeatVip}  ${classVip} ${classSeatDouble} ${classDouble} `}
                onClick={() => handleSeatClick(seat)}
            >
                {seat.tenGhe}
            </div>
        </>
    );
}

export default Seat;
