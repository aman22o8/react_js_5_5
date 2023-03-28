// Write your code here
import {Component} from 'react'

import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedin: true}

  clicking = () => {
    this.setState(prevstate => ({isLoggedin: !prevstate.isLoggedin}))
  }

  render() {
    const {isLoggedin} = this.state
    return (
      <div className="bg_container">
        <div className="message_card">
          <Message isLoggedin={isLoggedin} />
          {isLoggedin ? (
            <Login login={this.clicking} />
          ) : (
            <Logout logout={this.clicking} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
