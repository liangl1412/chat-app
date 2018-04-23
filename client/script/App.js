import '../style/app.scss';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RoomView from './view/RoomView';
import HomeView from './view/HomeView';
import LoginView from './view/LoginView';


class App extends React.Component {
  render() {
    return(
      <div className="room-view-container">
        <Switch>
            <Route path="/" exact component={RoomView} />
            <Route path="/messages/:id" component={RoomView} />
            
        </Switch>
      </div>
    );
  }
}

export default App;
