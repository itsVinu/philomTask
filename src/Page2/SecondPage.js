import React from 'react';
import Endbar from './Endbar';
import Header2 from './Header2';
import Leftbar from './Leftbar';
import Midbar from './Midbar';
import './SecondPage.css';

export default function SecondPage() {
  return (
    <div>
        <Header2 />

        <div className="secondpage__div">
            <Leftbar />
            <Midbar />
            <Endbar />
        </div>        
    </div>
  );
}
