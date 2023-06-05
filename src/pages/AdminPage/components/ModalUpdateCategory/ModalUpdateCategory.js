import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

function ModalUpdateCategory({ open, onClose, onUpdateCategory, fillData }) {
    const [dataCategory, setDataCategory] = useState({ ...fillData });

    const handleClose = () => {
        onClose();
    };
    console.log(dataCategory);

    const handleInputChange = (e) => {
        const { name, value } = e.target; //destructuring
        // const name = e.target.name;
        // const value = e.target.value;
        setDataCategory({ ...dataCategory, [name]: value });
    };

    // const handleCreateCategory = (e) => {
    //     e.preventDefault();
    //     const newData = {
    //         ...dataCategory,
    //     };

    //     onUpdateCategory(newData);
    //     setDataCategory({
    //         categoryName: '',
    //         description: '',
    //     });

    //     handleClose();
    // };
    return (
        <Dialog fullWidth maxWidth={'sm'} open={open} onClose={handleClose}>
            <DialogTitle sx={{ fontSize: 24, textAlign: 'center' }}>Cập Nhật Thể Loại Phim</DialogTitle>
            <DialogContent>
                <TextField
                    margin="normal"
                    required
                    name="categoryName"
                    value={dataCategory.categoryName}
                    label={'Tên thể loại phim'}
                    fullWidth
                    onChange={handleInputChange}
                />

                <TextField
                    margin="normal"
                    required
                    name="description"
                    value={dataCategory.description}
                    label={'Mô tả'}
                    fullWidth
                    onChange={handleInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button sx={{ fontSize: 16 }} onClick={handleClose}>
                    Cancel
                </Button>
                <Button sx={{ fontSize: 16 }}>Cập Nhật</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalUpdateCategory;
