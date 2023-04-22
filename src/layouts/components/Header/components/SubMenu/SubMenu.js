import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './SubMenu.module.scss';

const cx = classNames.bind(styles);

function SubMenu({ title, to, onClick }) {
    return (
        <NavLink className={(nav) => cx('item', { active: nav.isActive })} to={to} onClick={onClick}>
            <span>{title}</span>
        </NavLink>
    );
}

export default SubMenu;
