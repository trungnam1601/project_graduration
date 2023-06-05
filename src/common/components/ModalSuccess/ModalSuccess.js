import React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function ModalSuccess({ text, open, onClose }) {
    const handleClose = () => {
        onClose();
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Box sx={style}>
                    <CheckCircleIcon
                        sx={{
                            width: '80px',
                            height: '80px',
                            fontSize: 30,
                            color: '#5abd0a',
                            textAlign: 'center',
                            ml: 15,
                        }}
                    />
                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2, color: '#000', fontSize: 30, textAlign: 'center' }}
                    >
                        {text}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalSuccess;
