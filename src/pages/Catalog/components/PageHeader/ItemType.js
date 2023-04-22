import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);
function ItemType({ title, link }) {
    return (
        <NavLink to={link} className={(nav) => cx('item', { active: nav.isActive })}>
            {title}
        </NavLink>
    );
}

export default ItemType;
