import React from 'react';
import styles from './Ticket.module.scss';
import classNames from 'classnames/bind';
import images from './../../assets/images/images';

const cx = classNames.bind(styles);
function Ticket() {
    return (
        <div className={cx('wrapper')}>
            <h2>Giá Vé Xem Phim</h2>
            <div className={cx('inner')}>
                <div className={cx('table-price')}>
                    <h3>Giá vé 2D</h3>
                    <div className={cx('img')}>
                        <img src={images.giave2D} alt="2D" />
                    </div>
                </div>

                <div className={cx('table-price')}>
                    <h3>Giá vé 3D</h3>
                    <div className={cx('img')}>
                        <img src={images.giave3D} alt="3D" />
                    </div>
                </div>
            </div>
            <div className={cx('role')}>
                <p style={{ fontSize: 18, fontWeight: 600 }}>
                    * Giá vé đối với các đối tượng khán giả ưu tiên (khi trực tiếp sử dụng dịch vụ xem phim tại rạp
                    chiếu phim):
                </p>
                <div style={{ marginLeft: 20 }}>
                    <p className={cx('p-ticket')}>
                        - Giảm 20% giá vé theo qui định đối với: Trẻ em (người dưới 16 tuổi), người cao tuổi (công dân
                        Việt Nam từ đủ 60 tuổi trở lên), người có công với cách mạng, người có hoàn cảnh đặc biệt khó
                        khăn.
                    </p>
                    <p className={cx('p-ticket')}>- Giảm 50% giá vé theo qui định đối với: Người khuyết tật nặng.</p>
                    <p className={cx('p-ticket')}>
                        - Giảm giá vé 100% đối với: Người khuyết tật đặc biệt nặng, trẻ em dưới 0.7m đi kèm với người
                        lớn.
                    </p>
                </div>
                <br />
                <div style={{ marginLeft: 40 }}>
                    <p className={cx('p-ticket')}>
                        <i style={{ fontWeight: 600 }}>Điều kiện:</i>
                        <br />
                        - Chỉ áp dụng khi mua vé tại quầy (không áp dụng khi mua online).
                        <br />- Các đối tượng khán giả trên phải xuất trình giấy tờ chứng minh khi mua vé xem phim và
                        trước khi vào phòng chiếu. Cụ thể:
                    </p>
                    <div style={{ marginLeft: 40 }}>
                        <p className={cx('p-ticket')}>
                            + Trẻ em (trường hợp trẻ em từ 14-16 tuổi), người cao tuổi: xuất trình "Căn cước công dân".
                        </p>
                        <p className={cx('p-ticket')}>
                            + Người có công với cách mạng: xuất trình giấy xác nhận theo quy định.
                        </p>
                        <p className={cx('p-ticket')}>
                            + Người có hoàn cảnh đặc biệt khó khăn: xuất trình "Giấy chứng nhận hộ nghèo".
                        </p>
                        <p className={cx('p-ticket')}>+ Người khuyết tật: xuất trình "Giấy xác nhận khuyết tật".</p>
                    </div>
                </div>
                <div>
                    <p style={{ fontSize: 18, fontWeight: 600 }}>
                        * Ưu đãi cho học sinh, sinh viên từ
                        <b className={cx('color-red')}> 22 </b>
                        tuổi trở xuống: Đồng giá
                        <b className={cx('color-red')}> 50000đ</b>
                        <b>/vé </b>
                        2D cho tất cả các suất chiếu phim từ
                        <b className={cx('color-red')}> Thứ 2 đến Thứ 6 </b>
                        <i>
                            (chỉ áp dụng cho hình thức mua vé trực tiếp tại quầy, mỗi thẻ được mua 1 vé/ngày - vui lòng
                            xuất trình thẻ U22 và thẻ HSSV khi mua vé)
                        </i>
                        .
                    </p>
                </div>
                <div>
                    <p style={{ fontSize: 18, fontWeight: 600 }}>
                        * Khán giả nghiêm túc thực hiện xem phim đúng độ tuổi theo phân loại phim: P, C13, C16, C18.
                        (Trường hợp vi phạm sẽ xử phạt theo Quy định tại Nghị định 128/2022/NĐ-CP ngày 30/12/2022).
                    </p>
                </div>
                <div>
                    <p style={{ fontSize: 18, fontWeight: 600 }}>
                        * Không bán vé cho trẻ em dưới 13 tuổi đối với các suất chiếu phim kết thúc sau 22h00 và không
                        bán vé cho trẻ em dưới 16 tuổi đối với các suất chiếu phim kết thúc sau 23h00.
                    </p>
                </div>
                <div>
                    <p style={{ fontSize: 18, fontWeight: 600 }}>* Áp dụng giá vé ngày Lễ, Tết cho các ngày:</p>
                    <div style={{ marginLeft: 20 }}>
                        <p className={cx('p-ticket')}>
                            - Các ngày nghỉ Lễ, Tết theo quy định của nhà nước: Tết Nguyên Đán, Tết Dương Lịch, ngày Giỗ
                            Tổ Hùng Vương 10/3 AL, ngày 30/4, 1/5, 2/9.
                        </p>
                        <p className={cx('p-ticket')}>- Các ngày: 14/2, 8/3, 24/12.</p>
                        <p className={cx('p-ticket')}>- Các ngày: Nghỉ bù do nghỉ Lễ, Tết trùng vào thứ 7, Chủ Nhật.</p>
                    </div>
                </div>
                <div>
                    <p style={{ fontSize: 18, fontWeight: 600 }}>
                        * Không áp dụng các chế độ ưu đãi, các chương trình khuyến mại khác vào các ngày 20/10, 20/11,
                        Halloween 31/10, các ngày Lễ, Tết, suất chiếu sớm và suất chiếu đặc biệt.
                    </p>
                </div>
                <div>
                    <p style={{ fontSize: 18, fontWeight: 600 }}>
                        * Mua vé xem phim tập thẻ, hợp đồng khoán gọn: Phòng chiếu phim - (024) 35148647.
                    </p>
                </div>
                <div>
                    <p style={{ fontSize: 18, fontWeight: 600 }}>
                        * Thuê phòng tổ chức Hội nghị, làm văn phòng, quảng cáo và các dịch vụ khác: Phòng Dịch vụ -
                        (024) 35142856
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Ticket;
