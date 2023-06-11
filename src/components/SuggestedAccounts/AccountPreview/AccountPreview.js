import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img 
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/eab9c2dada08c99516817e62503b7b8d~c5_100x100.jpeg?x-expires=1686639600&amp;x-signature=6zRwV3ZcGM%2FP7%2Bf0xPutxKO6hjs%3D"

                    alt=''
                />
                <Button primary className={cx('follow-btn')}>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>vovankha</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Vo van kha</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;