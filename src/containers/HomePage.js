import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import Home from '../components/Home';
import Axios from "axios";

class HomePage extends Component {
  constructor(props) {
    super(props);
    // this.defaultRoomId = String(new Date() - new Date().setHours(0, 0, 0, 0));
    this.defaultRoomId = "9dd0ee98-d035-4e20-a95b-65c117b95a59";
    this.state = { roomId: this.defaultRoomId };
    this.handleChange = this.handleChange.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }
  componentDidMount() {
    window.addEventListener('message', this.handleMessage, false)
    // console.log(process.env.ROOM_ID)
    // // Axios.get('/api/rooms/roomid')
    // //   .then(res => {
    // //     console.log(res)
    // //     const rid = res.data.roomid;
    // //     this.setState({ roomId:rid });
    // //   })
  }
  handleMessage(e){
    if(e.data=="STARTCALL"){
      var el = document.getElementById('robotUserCallButton');
      el.click()
    }
    else if(e.data=="HIDEJOINBUTTON"){
      var el = document.getElementById('robotUserCallButton');
      el.attr("style","display:none")
    }
  }
  handleChange(e) {
    this.setState({ roomId: e.target.value });
  }
  render(){
    return (
      <Home
        defaultRoomId={this.defaultRoomId}
        roomId={this.state.roomId}
        handleChange={this.handleChange}
      />
    );
  }
}

HomePage.contextTypes = {
  router: PropTypes.object
};

export default HomePage;