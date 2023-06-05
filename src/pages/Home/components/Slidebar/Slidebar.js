// swiper
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
// styles
import styles from './Slidebar.module.scss';
import classNames from 'classnames/bind';
//
// import SlidebarItem from '../SliderbarItem/SlidebarItem';
import { useEffect, useState } from 'react';

// import apiConfig from '../../../../common/api/apiConfig';
import { useNavigate } from 'react-router-dom';

//mui
import { Modal, Fade, Button, Box } from '@mui/material';
import Youtube from 'react-youtube';
import publicService, { movieCategory } from '../../../../common/api/publicService';

// import MovieTrailerModal from '../MovieTrailerModal/MovieTrailerModal';

const cx = classNames.bind(styles);
function Slidebar() {
    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const respone = await publicService.getMoviesList(movieCategory.upcoming, 0, 10);
                // console.log(respone.results);

                setMovieItems(respone.content.slice(5, 10));
            } catch (error) {
                console.log('error', error);
            }
        };
        getMovies();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                autoplay={{ delay: 8000, disableOnInteraction: true }}
            >
                {movieItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <SlidebarItem
                                title={item.filmName}
                                id={item.id}
                                overview={item.description}
                                className={`${isActive ? 'isActive' : ''}`}
                                poster_path={item.imageUrl}
                                background={item.bannerImageUrl}
                                trailer={item.trailerUrl}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

const SlidebarItem = ({ className, title, overview, poster_path, id, background, trailer }) => {
    const navigate = useNavigate();

    // const [trailer, setTrailer] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
        <div className={cx('item', `${className}`)} style={{ backgroundImage: `url(${background})` }}>
            <div className={cx('item-content')}>
                <div
                    className={cx('item-info')}
                    data-aos="zoom-out-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                >
                    <h2 className={cx('title')}>{title}</h2>
                    <div className={cx('overview')}>{overview}</div>
                    <div className={cx('btn')}>
                        <Button variant="danger" className={cx('watchnowbtn')} onClick={() => navigate('/movie/' + id)}>
                            Watch now
                        </Button>
                        <Button variant="danger" onClick={handleOpen} className={cx('trailerbtn')}>
                            Watch trailer
                        </Button>
                    </div>
                </div>
                <div
                    className={cx('item__content--poster')}
                    data-aos="zoom-out-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                >
                    <img src={poster_path} alt="poster" />
                </div>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {/* <iframe src={'https://youtu.be/yBAGclXF3Jk'} title="Offical Trailer"></iframe> */}
                        <Youtube videoId={trailer} opts={opts} />
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default Slidebar;
