import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavbarItem.module.scss';

const cx = classNames.bind(styles);

function NavbarItem({ link, title, onClick }) {
    return (
        <NavLink to={link} onClick={onClick} className={(nav) => cx('item', { active: nav.isActive })}>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default NavbarItem;
