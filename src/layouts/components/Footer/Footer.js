import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import icon from '../../../assets/images/icon';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('about')}>
                    <h3>Trung Tâm Chiếu Phim Quốc Gia</h3>
                    <ul>
                        <li>
                            <Link>Giới Thiệu</Link>
                        </li>
                        <li>
                            <Link>Hướng Dẫn Đặt Vé</Link>
                        </li>
                        <li>
                            <Link>Thẻ Quà Tặng</Link>
                        </li>
                        <li>
                            <Link>Tuyển Dụng</Link>
                        </li>
                    </ul>
                </div>

                <div className={cx('about')}>
                    <h3>Điều Khoản Sử Dụng</h3>
                    <ul>
                        <li>
                            <Link>Điều Khoản Chung</Link>
                        </li>
                        <li>
                            <Link>Điều Khoản Giao Dịch</Link>
                        </li>
                        <li>
                            <Link>Chính Sách Thanh Toán</Link>
                        </li>
                        <li>
                            <Link>Chính Sách Bảo Mật</Link>
                        </li>
                    </ul>
                </div>

                <div className={cx('contact')}>
                    <h3>Kết Nối Với Chúng Tôi</h3>

                    <ul>
                        <li>
                            <Link className={cx('icon')} target="_blank">
                                <img src={icon.facebook} width={40} height={40} alt="facebook" />
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('icon')} target="_blank">
                                <img src={icon.youtube} width={40} height={40} alt="youtube" />
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('icon')} target="_blank">
                                <img src={icon.instagram} width={40} height={40} alt="instagram" />
                            </Link>
                        </li>
                        <li>
                            <Link className={cx('icon')} target="_blank">
                                <img src={icon.zalo} width={40} height={40} alt="zalo" />
                            </Link>
                        </li>
                    </ul>

                    <div>
                        <Link to="http://online.gov.vn/Home/WebDetails/4519" target="_blank">
                            <img alt="permission" src={icon.permission} />
                        </Link>
                    </div>
                </div>
                <div className={cx('customer')}>
                    <h3>Thông Tin Liên Hệ</h3>
                    <p>
                        BỘ VĂN HÓA, THỂ THAO VÀ DU LỊCH <br />
                        Giấy phép số: 224/GP- TTĐT ngày 31/8/2010
                        <br /> Địa chỉ: 87 Láng Hạ, Quận Ba Đình, Tp. Hà
                        <br /> Nội <br />
                        Hotline: 024.35141791
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
