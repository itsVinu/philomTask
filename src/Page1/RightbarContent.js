import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import GavelIcon from '@material-ui/icons/Gavel';
import './RightbarContent.css';
import { Link } from 'react-router-dom'

export default function RightbarContent() {
  return (
    <div className="rightbarcontent">
        <div className='rightbarcontent__main'>
            <div>
                <h1>Dashboard Overview</h1>
                <h4>Date</h4>
            </div>
            <div className="rightbarcontent__right">
                <h4>This Year</h4>
                <ArrowDropDownIcon />
                <div className="container">
                    <h4 className="download">Download</h4>
                </div>
            </div>
        </div>
        
        <main>
            <div className="status">
                <h1><Link to='/taskname' className="projectstatus">Project Status</Link></h1>
                <h2>Start date</h2>
                <div className="status__circle">
                    <div className="box1">
                        <h1 className="bigcircle"/>
                        <div className="pending">
                            <p className="pendingdiv"/>
                            <p>Pending</p>
                            <p className="completeddiv"/>
                            <p>Completed</p>
                            <p className="ongoingdiv"/>
                            <p>Ongoing</p>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="box2__task">
                            <h3 className="createdTask">TOTAL TASK CREATED</h3>
                            <h3 className="boxwight">100</h3>
                        </div>
                        <div className="box2__btm">
                            <div className="box2__taskbtm">
                                <h3 className="createdTask">COMPLETED</h3>
                                <h3 className="boxlight">30</h3>
                            </div>
                            <div className="box2__taskbtm">
                                <h3 className="createdTask">ONGOING</h3>
                                <h3 className="boxmid">40</h3>
                            </div>
                            <div className="box2__taskbtm">
                                <h3 className="createdTask">PENDING</h3>
                                <h3 className="boxdark">30</h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>

        <main>
        <div class="cost">
            <h1 className="maincontainer">Project Cost</h1>
            <div class="container1">
                <div class="planned">
                    <h1 className="maincontainer">Planned Cost</h1>
                    <h2 className="maincontainer">20,00,000</h2>
                </div>
                <div class="actual">
                    <h1 className="maincontainer">Actual Cost</h1>
                    <h2 className="maincontainer dec">21,00,000</h2>
                    <div className="arrowdiv">
                        <ArrowDropUpIcon className="arrowup"/>
                        <h3 className="maincontainer dec">1,00,000</h3>
                    </div>
                </div>
            </div>
            <div class="table_cont">
                <table className="maincontainer">
                    <tr>
                        <td rowspan="2"><EmojiPeopleIcon className="peopleicon"/></td>
                        <td>Labour</td>
                    </tr>
                    <tr>
                        <td className="inc">+4.5% </td>
                    </tr>
                </table>
                <table cellspacing="10px">
                    <tr>
                        <td rowspan="2"><LocalShippingIcon className="peopleicon"/></td>
                        <td>Machine</td>
                    </tr>
                    <tr>
                        <td className="dec">-2.5% </td>
                    </tr>
                </table>
                <table cellspacing="10px">
                    <tr>
                        <td rowspan="2"><GavelIcon className="peopleicon"/></td>
                        <td>Material</td>
                    </tr>
                    <tr>
                        <td className="dec">-12.5% </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="issues">
            <h1 className="maincontainer">Project Issues</h1>
            <h2 className="maincontainer dec"><span className="notsign">!</span> 12 Pending Issues</h2>
            <ul className="maincontainer">
                <li className="maincontainer"><h4 className="maincontainer">Issue 1</h4><p>32 0000 111 222</p></li>
                <li className="maincontainer"><button className="maincontainer btn">Pending</button></li>
                <li className="maincontainer">25 March 2020</li>
            </ul>
            <ul className="maincontainer">
                <li className="maincontainer"><h4 className="maincontainer">Issue 3</h4><p>32 0000 111 222</p></li>
                <li className="maincontainer"><button className="maincontainer btn">Pending</button></li>
                <li className="maincontainer">25 March 2020</li>
            </ul>
            <ul className="maincontainer">
                <li className="maincontainer"><h4 className="maincontainer">Issue 2</h4><p>32 0000 111 222</p></li>
                <li className="maincontainer"><button className="maincontainer btn">Pending</button></li>
                <li className="maincontainer">25 March 2020</li>
            </ul>
            <h2 className="maincontainer inc">Tap to view more</h2>
        </div>
    </main>

    <main>
        <div className="media">
            <h1>Project Media</h1>
            <div className="mediafigure">
                <figure className="media__figure">
                    <img alt="nature" className="natureimage" src="https://images.unsplash.com/photo-1616080409883-a96ae084a7e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWwlMjBiZWF1dHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <figcaption >Source Name</figcaption>
                </figure>
                <figure className="media__figure">
                    <img alt="nature" className="natureimage" src="https://images.unsplash.com/photo-1616080409883-a96ae084a7e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWwlMjBiZWF1dHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <figcaption >Source Name</figcaption>
                </figure>
                <figure className="media__figure">
                    <img alt="nature" className="natureimage" src="https://images.unsplash.com/photo-1616080409883-a96ae084a7e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWwlMjBiZWF1dHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <figcaption >Source Name</figcaption>
                </figure>
                <figure className="media__figure">
                    <img alt="nature" className="natureimage" src="https://images.unsplash.com/photo-1616080409883-a96ae084a7e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWwlMjBiZWF1dHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                    <figcaption >Source Name</figcaption>
                </figure>
            </div>
        </div>
    </main>

    </div>
  );
}
