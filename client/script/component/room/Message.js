import React from 'react';
import './Message.scss';
import moment from 'moment';
import _ from 'underscore';

class Message extends React.Component {

  render() {
    let messages = _.groupBy(this.props.messages, function (obj) {
      return moment.unix(obj.ts).startOf('day').format("dddd, MMMM Do");
    });
    let sortMessages = _.map(messages, function(msgs, day){
      return {
          day: day,
          msgs: msgs
      }
    });

    return(
      <div className='msgs-wrapper'>
        <div className="msgs-scroll-div">
          <div className="msgs-div">
          {sortMessages.map((day,i) => {
            return (
              <div className="day-container" key={i}>
                <div className="day-divider">{day.day}</div>
                <div className="day_msgs">
                  {day.msgs.map((msg,i) => {
                    return (
                      <div className="msg-container" key={i}>
                        <div className="user-avatar">
                          <img src="https://ca.slack-edge.com/T024FUYB0-U02A6NQEX-OS2671788438-48" />
                        </div>
                        <div className="msg-content">
                          <div className="msg-content-header">
                            <span className="msg-author">{msg.user}</span>
                            <span className="msg-create-date">{moment.unix(msg.ts).format("hh:mm A")}</span>
                          </div>
                          <div className="msg-content-body">
                            {msg.text}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}

          </div>
        </div>
      </div>
    );
  }
}

export default Message;
