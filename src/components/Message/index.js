// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedin} = props
  const message = isLoggedin ? 'Please Login' : 'Welcome User'
  return <h1 className="description">{message}</h1>
}

export default Message
