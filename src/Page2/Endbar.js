import React from 'react';
import './Endbar.css';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function Endbar() {
  return (
    <div className="endbar">
      <div className='endbar__button'>Edit Task</div>

      <div className="endbar__divone">
        <ArrowUpwardIcon className="endbar__icon1"/>
        <h1>Man</h1>
        <h1 className="endbar__head">+ 15%</h1>
      </div>
      <div className="endbar__divone">
        <ArrowUpwardIcon className="endbar__icon2"/>
        <h1>Machine</h1>
        <h1 className="endbar__head">+ 23%</h1>
      </div>
      <div className="endbar__divone">
        <ArrowDownwardIcon className="endbar__icon3"/>
        <h1>Material</h1>
        <h1 className="endbar__head">- 12%</h1>
      </div>
    </div>
  );
}
