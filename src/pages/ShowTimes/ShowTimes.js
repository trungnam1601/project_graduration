import React, { useState } from 'react';
import ShowTimeMovie from './components/ShowTimeMovie/ShowTimeMovie';

import classNames from 'classnames/bind';
import styles from './ShowTimes.module.scss';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import images from '../../assets/images/images';
import ButtonTime from '../../common/components/ButtonTime/ButtonTime';
import publicService from '../../common/api/publicService';
const cx = classNames.bind(styles);
function ShowTimes() {
    const [value, setValue] = useState('2023-05-24');
    const [dataSchedule, seDataSchedule] = useState([]);

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

    const filter = dataSchedule.filter((item) => {
        return item.film === 'Black Adam';
    });
    console.log(filter);

    const handleGetSchedule = async () => {
        const data = {
            date: value,
            filmId: null,
        };
        if (value) {
            try {
                const res = await publicService.getSchedule(data);
                console.log(res.content);
                seDataSchedule(res.content);
            } catch (err) {
                console.log('error', err);
            }
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Container maxWidth="xl">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 2, borderColor: 'divider', marginLeft: 3 }}>
                            <TabList
                                sx={{
                                    '& .css-1aquho2-MuiTabs-indicator': {
                                        backgroundColor: '#ff0000',
                                    },
                                    '& .MuiTab-root.Mui-selected': {
                                        color: 'red',
                                    },
                                }}
                                onChange={handleChange}
                                onClick={handleGetSchedule}
                                aria-label="lab API tabs example"
                            >
                                {date.map((item) => (
                                    <Tab
                                        key={item.id}
                                        sx={{ fontSize: 16, textTransform: 'capitalize', color: '#fff' }}
                                        className={cx('tab')}
                                        label={item.date}
                                        value={item.date}
                                        textColor="error"
                                    />
                                ))}
                            </TabList>
                        </Box>
                        {date.map((item) => (
                            <TabPanel key={item.id} className={cx('tab-paine')} value={item.date}>
                                <div className={cx('list')}>
                                    <Grid container spacing={3}>
                                        {dataSchedule.map((item) => (
                                            <Grid key={item.id} xs={12} sm={12} md={6} item>
                                                <ShowTimeMovie
                                                    id={item.id}
                                                    title={item.film}
                                                    action={item.filmDTO.filmCategories.map((i) => i.categoryName)}
                                                    time={item.filmDTO.duration}
                                                    poster={item.filmDTO.imageUrl}
                                                    startTime={JSON.stringify(item.startTime).substr(12, 5)}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            </TabPanel>
                        ))}
                    </TabContext>
                </Container>
                {/* <div className={cx('calendar')}>
                    <Calendar date={'22/4 - T7'} />
                </div> */}
            </div>
        </div>
    );
}

export default ShowTimes;
