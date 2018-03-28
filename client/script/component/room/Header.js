import React from 'react';
import './Header.scss';
class Header extends React.Component {
  render() {
    return(
      <header className='channel-header'>
        <div className="channel-title-wrapper">
          <div className="channel-title">#vancouver</div>
          <div className="channel-info">
            <div className="channel-info-item">
              <i className="icon-star-o"></i>
            </div>
            <div className="channel-info-item">
              <i className="icon-user-o"></i> <span className="channel-user-count">13</span>
            </div>
            <div className="channel-info-item">
              Burgeoning Burnaby Bliss
            </div>
          </div>
        </div>

      </header>
    );
  }
}

export default Header;
