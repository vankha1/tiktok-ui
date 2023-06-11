import classNames from "classnames/bind";
import styles from "./SideBar.module.scss"
import config from "~/config";
import {HomeIcon, LiveIcon, UserGroupIcon, HomeActiveIcon, LiveActiveIcon, UserGroupActiveIcon} from '~/components/Icons'
import Menu from "./Menu";
import {MenuItem} from "./Menu";


const cx = classNames.bind(styles)

function SideBar(){
    return (
        <aside className={cx('wrapper')}> 
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />}/>
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />}/>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />}/>
            </Menu>
        </aside>
    )
}

export default SideBar;