import React from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'antd';

import './SideBar.scss';
class SideBar extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }


  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return(
      <aside className="side-bar">
        <div className="user-box">
          <h1 className="team-name">Ratchet Cloud</h1>
          <span className="user-status online"></span><span className="team-user-name">Yi Zhou</span>
        </div>
        <div className="channel-lists">
          <h2 className="cat-title">Channels <span className="" onClick={this.showModal}>+ channel</span></h2>
          <ul>
            <li># Lobby</li>
            <li># ea-crm</li>
            <li># epic-vancouver</li>
            <li># frontend</li>
            <li># games</li>
          </ul>
        </div>
        <div className="direct-msgs">
          <h2 className="cat-title">Direct Messages</h2>
          <ul>
            {this.props.recentList.map((list,i) => {
              let url = `/messages/${list._id}`;
              return (
                <NavLink to={url} key={i}><span className="user-status online"></span>{list.username}</NavLink>
              )
            })}
            
            
          </ul>
        </div>
          <Modal title="Title"
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
          >
            <p>Please enter the channel name</p>
            <input type="text" className=""></input>
          </Modal>
      </aside>
    );
  }
}

export default SideBar;
