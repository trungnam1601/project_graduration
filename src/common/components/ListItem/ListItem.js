import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';
import { useState, useEffect } from 'react';

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
//
import CardItem from '../CardItem/CardItem';
import publicService from '../../api/publicService';

const cx = classNames.bind(styles);

function ListItem({ type }) {
    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getListItem = async () => {
            let response = await publicService.getMoviesList(type, 0, 20);
            // console.log(response.content);
            setMovieItems(response.content);
        };
        getListItem();
    }, [type]);
    return (
        <div className={cx('wrapper')}>
            <Swiper
                modules={[Navigation, Keyboard, Mousewheel, Scrollbar, A11y]}
                navigation={true}
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                // scrollbar={true}
                // spaceBetween={50}
                // slidesPerView={'auto'}
                slidesPerGroupAuto={true}
                speed={1500}
                className={cx('movie-swiper')}
            >
                {movieItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardItem title={item.filmName} img={item.imageUrl} id={item.id} trailer={item.trailerUrl} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ListItem;
