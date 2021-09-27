import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';
import './SidebarRow.css';

export default function SidebarRow() {
  return (
    <div className='sidebarrow'>
        <div className="sidebarrow__div">
            <p>TEAMS</p>
            <ArrowDropDownIcon />
        </div>
        
        <div className="sidebarrow__div">
           <div className="pink__div"></div> 
           <p>Project name team</p>
        </div>

        <div className="sidebarrow__div">
            <div className='pinkdiv'></div>
            <div className='pinkdiv'></div>
            <div className='pinkdiv'></div>
            <div className='pinkdiv'></div>
            <div className='pinkdiv'></div>
            <div className='pinkdiv'></div>
        </div>
        
        <div className="sidebarrow__div">
            <p className='additem'>+ ADD NEW ITEM</p>
        </div>
        
        <hr />
        
        <div className="sidebarrow__main divone">
            <AppsIcon className='sidebar__icon'/>
            <h3 className='sidebar__icon sidebar__title'>Dashboard</h3>
        </div>
        
        <div className="sidebarrow__main">
            <CheckCircleOutlineIcon className='icons__grey'/>
            <h3 className="sidebar__title">Task</h3>
        </div>
        
        <div className="sidebarrow__three sidebarrow__main">
            <TextsmsIcon className="icons__grey"/>
            <h3 className="sidebar__title">Issues & Expenses</h3>
            <p className="pink__three"> 3 </p>
        </div>
        <div className="sidebarrow__main">
            <NoteIcon className="icons__grey"/>
            <h3 className="sidebar__title">Upload Documents</h3>
        </div>
        <div className="sidebarrow__main">
            <SettingsIcon className="icons__grey"/>
            <h3 className="sidebar__title">Settings</h3>
        </div>

    </div>
  );
}
