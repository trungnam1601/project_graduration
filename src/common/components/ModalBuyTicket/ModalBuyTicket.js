import React from 'react';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import styles from './ModalBuyTicket.module.scss';
import classNames from 'classnames/bind';
import ButtonTime from './../ButtonTime/ButtonTime';
import Calendar from '../Calendar/Calendar';

const cx = classNames.bind(styles);

function ModalBuyTicket({ open, onClose, title, scheduleFilm }) {
    const handleClose = () => {
        onClose();
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        height: 500,
        color: '#000',
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
        overflow: 'scroll',
    };
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <h2>Lịch chiếu: {scheduleFilm}</h2>
                        <div className={cx('title')}>
                            <h3>{title}</h3>
                        </div>
                        <div className={cx('calendar')}>
                            <Calendar style={{ color: '#000' }} date={'4/5 - T5'} />
                        </div>
                        <div className={cx('category')}>
                            <h3>2D Phụ Đề</h3>
                            <div className={cx('btn')}>
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                            </div>
                        </div>

                        <div className={cx('category')}>
                            <h3>3D Phụ Đề</h3>
                            <div className={cx('btn')}>
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                                <ButtonTime time={'8:50'} number={30} />
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default ModalBuyTicket;
