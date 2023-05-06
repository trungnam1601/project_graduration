import React from 'react';

//module
import classNames from 'classnames/bind';
import styles from './DetailMovie.module.scss';
import { Table } from 'react-bootstrap';
const cx = classNames.bind(styles);
function DetailMovie({ img, title, space, ageAllowed }) {
    return (
        <div className={cx('product-detail')}>
            {/* <div className={cx('infor')}>
                <span className={cx('title')}>{title}</span>
                <h3>{space}</h3>
                <h3 className={cx('age-allowed')}>{ageAllowed}</h3>
            </div> */}
            <Table className={cx('infor')}>
                <tbody>
                    <tr>
                        <td>
                            <img src={img} alt={title} />
                        </td>
                        <td>
                            <Table className={cx('infor')}>
                                <tbody>
                                    <tr>
                                        <td className={cx('label')}>{title}</td>
                                    </tr>

                                    <tr>
                                        <td className={cx('label')}>{space}</td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>{ageAllowed}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default DetailMovie;
