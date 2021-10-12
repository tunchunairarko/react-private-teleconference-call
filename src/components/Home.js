import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="home">
        <div>
          <h1 itemProp="headline">HWU Telepresence Room</h1>
          <p>Your unique room ID (Just click join)</p>
          <input type="text" name="room" value={this.props.roomId} onChange={this.props.handleChange} pattern="^\w+$" maxLength="10" required autoFocus title="Room name should only contain letters or numbers." disabled/>

          {
            this.props.shallStartCall?(
              <center>
                <Link className="primary-button" id="robotUserCallButton" to={'/r/' + this.props.roomId}>Join</Link>
              </center>
            ):(
              <button className="primary-button" disabled>Connection off</button>
            )
          }

          {/* <Link className="primary-button" id="remoteUserCallButton" to={ '/r/' + this.props.roomId }>Join telepresently</Link> */}
          {this.props.rooms.length !== 0 && <div>Recently used rooms:</div>}
          {this.props.rooms.map(room => <Link key={room} className="recent-room" to={'/r/' + room}>{room}</Link>)}
        </div>
      </div>
    )
  }
}


Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  defaultRoomId: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
  shallStartCall: PropTypes.bool.isRequired,
  rooms: PropTypes.array.isRequired
};

const mapStateToProps = store => ({ rooms: store.rooms });

export default connect(mapStateToProps)(Home);