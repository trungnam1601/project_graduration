import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import NavbarItem from './components/NavbarItem/NavbarItem';
import { Button } from 'react-bootstrap';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import SubMenu from './components/SubMenu/SubMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import images from '../../../assets/images/images';

const cx = classNames.bind(styles);
function Header() {
    const [isActive, setIsActive] = useState(false);
    const isLoggedIn = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    const handleActiveMenu = (e) => {
        if (e.target.className === 'title') {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };
    const navigate = useNavigate();
    const headerRef = useRef(null);
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
                headerRef.current.style.backgroundColor = '#0f0f0f';
            } else {
                headerRef.current.style.backgroundColor = 'transparent';
            }
        };
        window.addEventListener('scroll', shrinkHeader);

        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    // const navigate = useNavigate();
    return (
        <header ref={headerRef} className={cx('wrapper', 'container-fluid')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </Link>
                <div className={cx('navbar')}>
                    {/* <NavbarItem link={config.routes.home} title="Trang Chủ" /> */}
                    <div>
                        <Tippy
                            // visible
                            interactive={true}
                            render={(attrs) => (
                                <div className={cx('menu-sub-wrapper')}>
                                    <div className={cx('menu-sub-list')} tabIndex="-1" {...attrs}>
                                        <SubMenu
                                            to={'/movies/playing'}
                                            title="Phim Đang Chiếu"
                                            onClick={handleActiveMenu}
                                        />
                                        <SubMenu
                                            to={'/movies/up-coming'}
                                            title="Phim Sắp Chiếu"
                                            onClick={handleActiveMenu}
                                        />
                                    </div>
                                </div>
                            )}
                        >
                            <div className={cx('movie', isActive ? 'active' : '')}>
                                Phim
                                <FontAwesomeIcon className={cx('icon-down')} icon={faChevronDown} />
                            </div>
                        </Tippy>
                    </div>
                    <NavbarItem link={'/lich-chieu'} title="Lịch Chiếu" onClick={handleActiveMenu} />
                    <NavbarItem link={'/ticket'} title="Giá Vé" onClick={handleActiveMenu} />
                    <NavbarItem link={'/thanh-vien'} title="Thành Viên" onClick={handleActiveMenu} />
                </div>
                {isLoggedIn ? (
                    <div className={cx('user_SignIn')}>
                        <span className={cx('user-infor-name')}>{username}</span>
                        <div className={cx('user-infor-img')}>
                            <img src={images.noImage} alt="NoImage" />
                            <Button onClick={handleLogout} variant="danger" className={cx('log-out')}>
                                Log Out
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className={cx('user_NoSignIn')}>
                        <Button variant="outline-danger" className={cx('signIn')} onClick={() => navigate('/login')}>
                            Đăng Nhập
                        </Button>
                        <Button variant="danger" className={cx('signUp')} onClick={() => navigate('/register')}>
                            Đăng Ký
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
