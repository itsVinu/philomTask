import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PictureInPictureIcon from '@material-ui/icons/PictureInPicture';
import './Header2.css';

export default function Header() {
  return (
    <div className="header__div">
        <div className="header__one">
            <MenuIcon className="icon"/>
            <PictureInPictureIcon className="icon menuicon" />
            <p className="header__title icon">Project name</p>
            <ArrowDropDownIcon className="icon drop" />
        </div>
        <div className="header__two">
            <NotificationsIcon className="icon" />
            <div id="pink" className="icon"></div>
            <p className="header__title icon">Admin Name</p>
            <ArrowDropDownIcon className="icon" />
        </div>
    </div>
  );
}