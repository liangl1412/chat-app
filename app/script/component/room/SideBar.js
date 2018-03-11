import React from 'react';
import { NavLink } from 'react-router-dom'
import './SideBar.scss';
class SideBar extends React.Component {
  render() {
    return(
      <aside className="side-bar">
        <div className="user-box">
          <h1 className="team-name">Ratchet Cloud</h1>
          <span className="user-status online"></span><span className="team-user-name">Yi Zhou</span>
        </div>
        <div className="channel-lists">
          <h2 className="cat-title">Channels</h2>
          <ul>
            <li># company_event</li>
            <li># ea-crm</li>
            <li># epic-vancouver</li>
            <li># frontend</li>
            <li># games</li>
          </ul>
        </div>
        <div className="direct-msgs">
          <h2 className="cat-title">Direct Messages</h2>
          <ul>
            <NavLink to="/messages/yizhou"><span className="user-status online"></span>Yi Zhou</NavLink>
            <NavLink to="/messages/claire"><span className="user-status offline"></span>Claire Lu</NavLink>
            <NavLink to="/messages/yizhou"><span className="user-status online"></span>Bo Peng</NavLink>
            <NavLink to="/messages/yizhou"><span className="user-status online"></span>Jasmine Lam</NavLink>
            <NavLink to="/messages/yizhou"><span className="user-status online"></span>Atiq R</NavLink>
          </ul>
        </div>
      </aside>
    );
  }
}

export default SideBar;
