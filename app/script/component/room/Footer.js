import React from 'react';
import './Footer.scss';
import _ from 'underscore';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typingUser:[]
    }
    this._typing();
  }

  submitMsg(e) {
    let msg = e.target.value;
    this.props.socket.emit('typing',{user:this.props.user,typing:true});
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(()=>this.stopTyping(), 3000);


    if (e.key == 'Enter' && msg != '') {
      e.preventDefault();
      this.props.createMsg(msg);
      e.target.value = ''
      this.stopTyping();

    }

  }

  _typing() {
    this.props.socket.on('typing',(data) => {
      console.log(data);
      if(data.typing) {
        this.setState({
          typingUser:_.union(this.state.typingUser,[data.user])
        })
      }
      else {
        this.setState({
          typingUser:_.without(this.state.typingUser,data.user)
        })
      }
      console.log(this.state.typingUser);

    })
  }

  stopTyping() {
    this.props.socket.emit("typing", {user:this.props.user,typing:false});
  }

  render() {
    var typingMsg = '';
    if(this.state.typingUser.length == 1) {
      typingMsg = <div className="typing-wrapper"><strong> {this.state.typingUser[0]} </strong> is typing </div>
    }
    else if(this.state.typingUser.length > 1) {
      typingMsg = <div className="typing-wrapper"><strong> {this.state.typingUser.join(", ")} </strong> are typing </div>
    }
    return(
      <footer className='channel-footer'>
        <form className="msg-form">
          <div className="input-wrapper">
            <button className="file-btn primary-btn"><i className="icon-add"></i></button>
            <input type="text" className="msg-input" onKeyPress={(e) => this.submitMsg(e)}></input>
            <button className="metion-btn primary-btn"><i className="icon-at"></i></button>
            <button className="emo-btn primary-btn"><i className="icon-smile-o"></i></button>
          </div>
        </form>
        {typingMsg}
      </footer>
    );
  }
}

export default Footer;

