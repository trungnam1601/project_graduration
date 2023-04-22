import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Slidebar from './components/Slidebar/Slidebar';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListItem from '../../common/components/ListItem/ListItem';
import { movieType } from '../../common/api/tmdbApi';

const cx = classNames.bind(styles);
function Home() {
    return (
        <>
            <Slidebar />
            <Container fluid>
                <div
                    className={cx('section', 'wrapper')}
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="100"
                >
                    <div className={cx('section__header', 'inner')}>
                        <h2>Phim Đang Chiếu</h2>
                        <Link to={'/movie'}>
                            <Button className={cx('btn')}>View more</Button>
                        </Link>
                    </div>
                    <ListItem type={movieType.popular} />
                </div>

                <div
                    className={cx('section', 'wrapper')}
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                >
                    <div className={cx('section__header', 'inner')}>
                        <h2>Phim Sắp Chiếu</h2>
                        <Link to={'/movie'}>
                            <Button className={cx('btn')}>View more</Button>
                        </Link>
                    </div>
                    <ListItem type={movieType.upcoming} />
                </div>
            </Container>
        </>
    );
}

export default Home;
