import { Button, Typography, Container } from '@mui/material';

import Input from '../../../../common/components/input/input';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

function InforMembers() {
    const currencies = [
        {
            value: 'Giới Tính',
            label: 'Giới Tính',
        },
        {
            value: 'Nam',
            label: 'Nam',
        },
        {
            value: 'Nữ',
            label: 'Nữ',
        },
        {
            value: 'Khác',
            label: 'Khác',
        },
    ];
    return (
        <Container component="main" maxWidth="xl">
            <Typography component="h1" variant="h5" sx={{ fontSize: 20, color: '#000' }}>
                Thông Tin Tài Khoản
            </Typography>

            <Input label={'Họ và Tên'} width={500} />
            <Input label={'Số Điện Thoại'} width={500} ml={2} />
            <Input label={'Ngày Sinh'} type={'date'} width={500} />
            <TextField
                id="outlined-select-currency"
                select
                sx={{ width: 500, ml: 2, mt: 2 }}
                label="Giới Tính"
                defaultValue="Giới Tính"
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Input label={'Địa Chỉ'} fullWidth />

            <Button
                variant="contained"
                color="error"
                sx={{ mt: 2, background: '#ff0000', fontSize: 14, textTransform: 'capitalize' }}
            >
                Cập Nhật
            </Button>
        </Container>
    );
}

export default InforMembers;
