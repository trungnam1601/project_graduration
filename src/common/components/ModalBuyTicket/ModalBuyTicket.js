import React, { useState } from 'react';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import styles from './ModalBuyTicket.module.scss';
import classNames from 'classnames/bind';
import ButtonTime from './../ButtonTime/ButtonTime';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import publicService from '../../api/publicService';
// import { DialogActions } from '@mui/material/DialogActions';

const cx = classNames.bind(styles);

function ModalBuyTicket({ open, onClose, title, id }) {
    const [value, setValue] = useState('2023-05-24');
    const [dataSchedule, seDataSchedule] = useState([]);
    // const [startTime, setStartTime] = useState('2023-05-19');

    const date = [
        {
            id: 0,
            date: '2023-05-24',
        },
        {
            id: 1,
            date: '2023-05-25',
        },
        {
            id: 2,
            date: '2023-05-26',
        },
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleGetSchedule = async () => {
        const data = {
            date: value,
            filmId: id,
        };
        if (value) {
            try {
                const res = await publicService.getSchedule(data);
                // console.log(res.content);
                seDataSchedule(res.content);
            } catch (err) {
                console.log('error', err);
            }
        }
    };

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
                        <h2>Lịch chiếu: {title}</h2>
                        <div className={cx('title')}>
                            <h3>{title}</h3>
                        </div>

                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                                <TabList
                                    sx={{
                                        fontSize: 30,
                                        textTransform: 'capitalize',
                                        '& .css-1aquho2-MuiTabs-indicator': {
                                            backgroundColor: '#000',
                                        },
                                        '& .MuiTab-root.Mui-selected': {
                                            color: '#000',
                                        },
                                    }}
                                    onChange={handleChange}
                                    onClick={handleGetSchedule}
                                    aria-label="lab API tabs example"
                                >
                                    {date.map((item) => (
                                        <Tab
                                            key={item.id}
                                            sx={{
                                                fontSize: 16,
                                                textTransform: 'capitalize',
                                            }}
                                            className={cx('tab')}
                                            label={item.date}
                                            value={item.date}
                                        />
                                    ))}
                                </TabList>
                            </Box>
                            {date.map((item) => (
                                <TabPanel key={item.id} className={cx('tab-paine')} value={item.date}>
                                    <div className={cx('category')}>
                                        <h3>2D Phụ Đề</h3>
                                        <div className={cx('btn')}>
                                            {dataSchedule.map((item) => (
                                                <ButtonTime
                                                    key={item.id}
                                                    id={item.id}
                                                    time={JSON.stringify(item.startTime).substr(12, 5)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </TabPanel>
                            ))}
                        </TabContext>
                        {/* <div className={cx('calendar')}>
                            <Calendar style={{ color: '#000' }} date={'4/5 - T5'} />
                        </div> */}
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default ModalBuyTicket;
