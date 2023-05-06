import React from 'react';

//mui
import { Typography, Container } from '@mui/material';
//
import { Table } from 'react-bootstrap';
import images from './../../../../assets/images/images';
function TransactionHistory() {
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
                    <tr>
                        <td>HD001</td>
                        <td>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ width: 100, height: 120, marginRight: 10 }}
                                    src={images.vebinh}
                                    alt="phim"
                                />
                                <p>Vệ Binh Dải Ngân Hà 3</p>
                            </div>
                        </td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                        <td>
                            <span>
                                2D VIP <br />
                                G3, G4 <br />
                                <b>Tổng Tiền</b>: 500.000 đ
                            </span>
                        </td>
                        <td></td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>HD001</td>
                        <td>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ width: 100, height: 120, marginRight: 10 }}
                                    src={images.vebinh}
                                    alt="phim"
                                />
                                <p>Vệ Binh Dải Ngân Hà 3</p>
                            </div>
                        </td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                        <td>
                            <span>
                                2D VIP <br />
                                G3, G4 <br />
                                <b>Tổng Tiền</b>: 500.000 đ
                            </span>
                        </td>
                        <td></td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>HD001</td>
                        <td>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ width: 100, height: 120, marginRight: 10 }}
                                    src={images.vebinh}
                                    alt="phim"
                                />
                                <p>Vệ Binh Dải Ngân Hà 3</p>
                            </div>
                        </td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                        <td>
                            <span>
                                2D VIP <br />
                                G3, G4 <br />
                                <b>Tổng Tiền</b>: 500.000 đ
                            </span>
                        </td>
                        <td></td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>HD001</td>
                        <td>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ width: 100, height: 120, marginRight: 10 }}
                                    src={images.vebinh}
                                    alt="phim"
                                />
                                <p>Vệ Binh Dải Ngân Hà 3</p>
                            </div>
                        </td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                        <td>
                            <span>
                                2D VIP <br />
                                G3, G4 <br />
                                <b>Tổng Tiền</b>: 500.000 đ
                            </span>
                        </td>
                        <td></td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>HD001</td>
                        <td>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ width: 100, height: 120, marginRight: 10 }}
                                    src={images.vebinh}
                                    alt="phim"
                                />
                                <p>Vệ Binh Dải Ngân Hà 3</p>
                            </div>
                        </td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                        <td>
                            <span>
                                2D VIP <br />
                                G3, G4 <br />
                                <b>Tổng Tiền</b>: 500.000 đ
                            </span>
                        </td>
                        <td></td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>HD001</td>
                        <td>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ width: 100, height: 120, marginRight: 10 }}
                                    src={images.vebinh}
                                    alt="phim"
                                />
                                <p>Vệ Binh Dải Ngân Hà 3</p>
                            </div>
                        </td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                        <td>
                            <span>
                                2D VIP <br />
                                G3, G4 <br />
                                <b>Tổng Tiền</b>: 500.000 đ
                            </span>
                        </td>
                        <td></td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>HD001</td>
                        <td>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ width: 100, height: 120, marginRight: 10 }}
                                    src={images.vebinh}
                                    alt="phim"
                                />
                                <p>Vệ Binh Dải Ngân Hà 3</p>
                            </div>
                        </td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                        <td>
                            <span>
                                2D VIP <br />
                                G3, G4 <br />
                                <b>Tổng Tiền</b>: 500.000 đ
                            </span>
                        </td>
                        <td></td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>HD001</td>
                        <td>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ width: 100, height: 120, marginRight: 10 }}
                                    src={images.vebinh}
                                    alt="phim"
                                />
                                <p>Vệ Binh Dải Ngân Hà 3</p>
                            </div>
                        </td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                        <td>
                            <span>
                                2D VIP <br />
                                G3, G4 <br />
                                <b>Tổng Tiền</b>: 500.000 đ
                            </span>
                        </td>
                        <td></td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>HD001</td>
                        <td>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ width: 100, height: 120, marginRight: 10 }}
                                    src={images.vebinh}
                                    alt="phim"
                                />
                                <p>Vệ Binh Dải Ngân Hà 3</p>
                            </div>
                        </td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                        <td>
                            <span>
                                2D VIP <br />
                                G3, G4 <br />
                                <b>Tổng Tiền</b>: 500.000 đ
                            </span>
                        </td>
                        <td></td>
                        <td>
                            <span>
                                06/05/2023 <br /> 23:50
                            </span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default TransactionHistory;
