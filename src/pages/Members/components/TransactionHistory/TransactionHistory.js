import React, { useState, useEffect } from 'react';

//mui
import { Typography, Container } from '@mui/material';
//
import { Table } from 'react-bootstrap';

import publicService from '../../../../common/api/publicService';
import Paging from '../../../../common/components/Pagination/pagination';

function TransactionHistory() {
    const [dataOrder, setDataOrder] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);

    const handlePaging = (pageClicked) => {
        setPage(pageClicked - 1);
    };

    useEffect(() => {
        const handleTransactionHistory = async (page) => {
            try {
                const res = await publicService.getHistoryTransaction(page, 10);
                console.log(res.content);
                setDataOrder(res.content);
                setTotalPage(res.totalPages);
            } catch (err) {
                console.log('error', err);
            }
        };
        handleTransactionHistory();
    }, [page]);
    return (
        <Container component="main" maxWidth="xl">
            <Typography component="h1" variant="h5" sx={{ fontSize: 30, color: '#000', mb: 3 }}>
                Lịch Sử Giao Dịch
            </Typography>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Mã Hóa Đơn</th>
                        <th>Phim</th>
                        <th>Suất Chiếu</th>
                        <th>Ghế Đã Đặt</th>
                        <th>Combo</th>
                        <th>Ngày Đặt</th>
                    </tr>
                </thead>
                <tbody>
                    {dataOrder.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <div style={{ display: 'flex' }}>
                                    <img
                                        style={{ width: 100, height: 120, marginRight: 10 }}
                                        src={item.schedule.filmDTO.imageUrl}
                                        alt="phim"
                                    />
                                    <p>{item.schedule.film}</p>
                                </div>
                            </td>
                            <td>
                                <span>
                                    {JSON.stringify(item.schedule.startTime).substr(1, 10)} <br />
                                    {JSON.stringify(item.schedule.startTime).substr(12, 5)}
                                </span>
                            </td>
                            <td>
                                <span>
                                    2D {item.seatType} <br />
                                    {item.seatCode} <br />
                                    <b>Tổng Tiền</b>: {item.totalPrice} đ
                                </span>
                            </td>
                            <td></td>
                            <td>
                                <span>
                                    {JSON.stringify(item.orderDate).substr(1, 10)} <br />
                                    {JSON.stringify(item.orderDate).substr(12, 5)}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>
                <Paging onPageClick={handlePaging} page={page + 1} totalPage={totalPage} />
            </div>
        </Container>
    );
}

export default TransactionHistory;
