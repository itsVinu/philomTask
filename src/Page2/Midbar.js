import React from 'react';
import './Midbar.css';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SettingsSuggestIcon from '@material-ui/icons/Settings';
import DateRangeIcon from '@material-ui/icons/DateRange';

export default function Midbar() {
  return (
    <div className="midbar">
      <div className="midbar__main">
        <h1>Task Name</h1>
        <h3>Wednesday, 13 July 2019</h3>
        <div className="midbar__avatar">
          <Avatar alt="Vinay" src="data:image/jpeg;base64,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"/>
          <h2>Creater Name</h2>
        </div>
      </div>
      <div className="midbar__primary">

        <div className="task">
          <h1>Task Progress</h1>
          <div className="percent"><h1>75%</h1></div>
          <section className="clock">
            <AccessTimeIcon />
            <p>10 days left</p>
          </section>
        </div>

        <div className="midbar__divone">
          <AttachMoneyIcon className="midbar__icon1"/>
          <h1>10,918</h1>
          <h1 className="midbar__head">Cost till last updated date</h1>
          <div className="plancost">
            <h2>Planned Cost- 30,000</h2>
          </div>
        </div>
      </div>


      <div className="midbar__lastmain">
      <div className="midbar__last">
        
        <div className="workdone">
          <h1>Actual Work Done</h1>
          <div className="date">
            <h3>Select start date and end date</h3>
            <DateRangeIcon className="calendar"/>
          </div>
        </div>
      </div>

      <div className="insidework">
        <div className="midlast">
            <EmojiPeopleIcon className="midbar__icon2"/>
            <div className="details">
              <h1>Details</h1>
              <h2>Pla</h2>
              <h2>Act</h2>
            </div>
            <div className="lbr1">
              <h3>Labour 1</h3>
              <p>|</p>
              <p>|</p>
            </div>
            <div className="lbr1">
              <h3>Labour 1</h3>
              <p>|</p>
              <p>|</p>
            </div>
            <div className="lbr1">
              <h3>Labour 1</h3>
              <p>|</p>
              <p>|</p>
            </div>
          </div>
          <div className="midlast">
            <LocalShippingIcon className="midbar__icon2"/>
            <div className="details">
              <h1>Details</h1>
              <h2>Pla</h2>
              <h2>Act</h2>
            </div>
            <div className="lbr1">
              <h3>Labour 1</h3>
              <p>|</p>
              <p>|</p>
            </div>
            <div className="lbr1">
              <h3>Labour 1</h3>
              <p>|</p>
              <p>|</p>
            </div>
            <div className="lbr1">
              <h3>Labour 1</h3>
              <p>|</p>
              <p>|</p>
            </div>
          </div>
          <div className="midlast">
            <SettingsSuggestIcon className="midbar__icon2"/>
            <div className="details">
              <h1>Details</h1>
              <h2>Pla</h2>
              <h2>Act</h2>
            </div>
            <div className="lbr1">
              <h3>Labour 1</h3>
              <p>|</p>
              <p>|</p>
            </div>
            <div className="lbr1">
              <h3>Labour 1</h3>
              <p>|</p>
              <p>|</p>
            </div>
            <div className="lbr1">
              <h3>Labour 1</h3>
              <p>|</p>
              <p>|</p>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}
