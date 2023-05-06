import React, { useState } from 'react';

//module
import classNames from 'classnames/bind';
import styles from './CardItem.module.scss';

//react icon
import { BsPlayFill } from 'react-icons/bs';
//
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import apiConfig from '../../api/apiConfig';
import { category } from '../../api/tmdbApi';
import { useNavigate } from 'react-router-dom';
import ModalBuyTicket from '../ModalBuyTicket/ModalBuyTicket';

const cx = classNames.bind(styles);
function CardItem({ title, name, img, id, rated }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    // const background = 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg';
    const background = apiConfig.w500Image(img);
    const link = '/' + category.movie + '/' + id;

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')} style={{ backgroundImage: `url(${background})` }}>
                    {/* <span>
                        <img className={cx('icon-rated')} src={rated} alt="icon" />
                    </span> */}
                    <Link to={'/'}>
                        <Button className={cx('btn')}>
                            <BsPlayFill />
                        </Button>
                    </Link>
                </div>

                <span onClick={() => navigate(link)} className={cx('title')}>
                    {title || name}
                </span>
                <Button onClick={handleOpen} className={cx('btn_ticket')}>
                    Mua vé
                </Button>
            </div>
            <ModalBuyTicket
                open={open}
                onClose={handleClose}
                scheduleFilm={'Vệ Binh Dải Ngân Hà 3'}
                title={'Vệ Binh Giải Ngân Hà 3'}
            />
        </>
    );
}

export default CardItem;
