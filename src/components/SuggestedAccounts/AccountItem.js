import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    }

    return (
        <Tippy
            interactive
            delay={[800, 0]}
            offset={[-20, 0]}
            placement='bottom'
            render={renderPreview}
        >
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/eab9c2dada08c99516817e62503b7b8d~c5_100x100.jpeg?x-expires=1686639600&amp;x-signature=6zRwV3ZcGM%2FP7%2Bf0xPutxKO6hjs%3D"
                    alt=""
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>vovankha</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Vo van kha</p>
                </div>
            </div>
        </Tippy>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
