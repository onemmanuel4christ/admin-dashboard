import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" className="link">
                <span className="logo">Admin</span>
            </Link>
        </div>
        <hr  />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" className="link">
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                </Link>
                <p className="title">LIST</p>
                <Link to="/users" className="link">
                    <li>
                        <PeopleOutlinedIcon className="icon" />
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" className="link">
                    <li>
                        <AddBusinessOutlinedIcon className="icon" />
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <BookmarkBorderOutlinedIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li> 
                    <LocalShippingOutlinedIcon className="icon" />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>

                <li>
                    <BarChartIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className="icon" />
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>

                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>

                <li>
                    <AccountCircleOutlinedIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className="icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() =>dispatch({type: "LIGHT"})}></div>
            <div className="colorOption" onClick={() =>dispatch({type: "DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar