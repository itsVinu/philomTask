import React from 'react';
import Header from './Header';
import Rightbar from './Rightbar';
import Sidebar from './Sidebar';


export default function FirstPage() {
  return (
    <div>
        <Header />
        <div className="app__div">
            <Sidebar />
            <Rightbar />
        </div>     
    </div>
  );
}
