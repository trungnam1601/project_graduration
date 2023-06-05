import React, { useState, uef } from 'react';

//module
import classNames from 'classnames/bind';
import styles from './CardItem.module.scss';

//react icon
import { BsPlayFill } from 'react-icons/bs';
//
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { category } from '../../api/publicService';
import { useNavigate } from 'react-router-dom';
import ModalBuyTicket from '../ModalBuyTicket/ModalBuyTicket';
import { Modal, Fade, Box } from '@mui/material';
import Youtube from 'react-youtube';

const cx = classNames.bind(styles);
function CardItem({ title, img, id, rated, trailer }) {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    const handleShowModal = () => setShow(true);
    const handleCloseModal = () => setShow(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const link = '/' + category.movie + '/' + id;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '6px solid #000',
        boxShadow: 24,
    };

    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')} style={{ backgroundImage: `url(${img})` }}>
                    <Button onClick={handleShowModal} className={cx('btn')}>
                        <BsPlayFill />
                    </Button>
                </div>

                <span onClick={() => navigate(link)} className={cx('title')}>
                    {title}
                </span>
                <Button onClick={handleOpen} className={cx('btn_ticket')}>
                    Mua vé
                </Button>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={show}
                onClose={handleCloseModal}
                closeAfterTransition
            >
                <Fade in={show}>
                    <Box sx={style}>
                        <Youtube videoId={trailer} opts={opts} />
                    </Box>
                </Fade>
            </Modal>

            <ModalBuyTicket open={open} onClose={handleClose} title={title} id={id} />
        </>
    );
}

export default CardItem;
