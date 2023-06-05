import React, { createContext, useState } from 'react';
import { ListSeat } from '../constants/ListSeat';

const SeatContext = createContext();

const SeatProvider = ({ children }) => {
    const [seats, setSeats] = useState(ListSeat);

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleSeatClick = (clickedSeat) => {
        if (!clickedSeat.daDat) {
            const updatedSeats = seats.map((seat) =>
                seat.maGhe === clickedSeat.maGhe ? { ...seat, dangChon: !seat.dangChon } : seat,
            );
            setSeats(updatedSeats);
            updateSelectedSeats(updatedSeats);
        }
    };

    const updateSelectedSeats = (updatedSeats) => {
        const selectedSeats = updatedSeats.filter((seat) => seat.dangChon);
        setSelectedSeats(selectedSeats);
        calculateTotalPrice(selectedSeats);
    };

    const calculateTotalPrice = (selectedSeats) => {
        const totalPrice = selectedSeats.reduce((total, seat) => total + seat.giaVe, 0);
        setTotalPrice(totalPrice);
    };

    // const handleBooking = () => {
    //     const bookedSeats = selectedSeats.map((seat) => ({ ...seat, daDat: true }));

    //     const updatedSeats = seats.map((seat) =>
    //         seat.isSelected ? { ...seat, isSelected: false, daDat: true } : seat,
    //     );

    //     setSeats(updatedSeats);
    //     setSelectedSeats([]);
    //     setTotalPrice(0);

    //     console.log(bookedSeats); // In ra danh sách ghế đã chọn
    // };

    return (
        <SeatContext.Provider value={{ seats, selectedSeats, totalPrice, handleSeatClick }}>
            {children}
        </SeatContext.Provider>
    );
};

export { SeatContext, SeatProvider };
