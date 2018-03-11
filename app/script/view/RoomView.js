import React from 'react';
import Header from '../component/room/Header';
import Footer from '../component/room/Footer';
import Message from '../component/room/Message';
import SideBar from '../component/room/SideBar';
import './RoomView.scss';
import { connect } from "react-redux"
import socketIOClient from 'socket.io-client'
import { fetchMsg, createMsg } from "../actions/message"
const socket = socketIOClient('http://localhost:3000');
// this.props.socket.emit('chat',{text:msg});
//       this.props.dispatch(addMsg(msg))

@connect((store) => {
  return {
    messages: store.messages.messages,
    users:store.users
  };
})

class RoomView extends React.Component {

  constructor(props) {
    super(props);
    this._createMsg();
    //this.fetchMsg();

  }

  _createMsg() {
    socket.on('chat',(newMsg) => {
      this.props.dispatch(createMsg(newMsg))
    })
  }
  createMsg(data) {
    socket.emit('chat', {
      text:data,
      user:this.props.users.currentUser,
      ts:Math.floor(Date.now() / 1000)
    })
  }

  fetchMsg() {
    this.props.dispatch(fetchMsg())
  }

  // getUser() {
  //   socket.on('connect',() => {
  //     this.setState({
  //       user:socket.id
  //     })
  //   })
  // }

  render() {
    return(
      <div className="room-view">
        <SideBar />
        <div className="channel-wrapper">
          <Header />
          <Message messages={this.props.messages}/>
          <Footer createMsg={this.createMsg.bind(this)} socket={socket} user={this.props.users.currentUser}/>
        </div>
      </div>
    );
  }
}

export default RoomView;
