import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'; // change path and add class active 
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);


function MenuItem({ title, to, icon, activeIcon }) {
    return (
        // convert active class into active-module module
        <NavLink className={(nav) => cx('menu-item', { active : nav.isActive })} to = {to} end>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
}

export default MenuItem;
