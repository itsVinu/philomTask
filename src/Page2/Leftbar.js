import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';
import './Leftbar.css';

export default function Leftbar() {
  return (
    <div className='leftbar'>
        <div className="leftbar__div">
            <p>TEAMS</p>
            <ArrowDropDownIcon />
        </div>
        
        <div className="leftbar__div">
           <div className="pink__div"></div> 
           <p>Project name team</p>
        </div>

        <div className="leftbar__div">
            <div className='pinkdiv'></div>
            <div className='pinkdiv'></div>
            <div className='pinkdiv'></div>
            <div className='pinkdiv'></div>
            <div className='pinkdiv'></div>
            <div className='pinkdiv'></div>
        </div>
        
        <div className="leftbar__div">
            <p className='additem'>+ ADD NEW ITEM</p>
        </div>
        
        <hr />
        
        <div className="leftbar__main divone">
            <AppsIcon className='icons__grey'/>
            <h3 className='leftbar__title'>Dashboard</h3>
        </div>
        
        <div className="leftbar__main">
            <CheckCircleOutlineIcon className='leftbar__icon'/>
            <h3 className="leftbar__title leftbar__icon">Task</h3>
        </div>
        
        <div className="leftbar__three leftbar__main">
            <TextsmsIcon className="icons__grey"/>
            <h3 className="leftbar__title">Issues & Expenses</h3>
            <p className="pink__three"> 3 </p>
        </div>
        <div className="leftbar__main">
            <NoteIcon className="icons__grey"/>
            <h3 className="leftbar__title">Upload Documents</h3>
        </div>
        <div className="leftbar__main">
            <SettingsIcon className="icons__grey"/>
            <h3 className="leftbar__title">Settings</h3>
        </div>

    </div>
  );
}
