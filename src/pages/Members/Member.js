import React, { useState } from 'react';

//module
import classNames from 'classnames/bind';
import styles from './Member.module.scss';
//
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InforMembers from './components/InforMembers/InforMembers';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
//
const cx = classNames.bind(styles);
function Members() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={cx('wrapper')}>
            <Container maxWidth="xl">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                        <TabList
                            sx={{
                                '& .css-1aquho2-MuiTabs-indicator': {
                                    backgroundColor: '#ff0000',
                                },
                            }}
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                        >
                            <Tab className={cx('tab')} label="Thông Tin Tài Khoản " value="1" />
                            <Tab className={cx('tab')} label="Lịch Sử Giao Dịch" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel className={cx('tab-paine')} value="1">
                        <InforMembers />
                    </TabPanel>
                    <TabPanel className={cx('tab-paine')} value="2">
                        <TransactionHistory />
                    </TabPanel>
                </TabContext>
            </Container>
        </div>
    );
}

export default Members;
