// Write your code here
import './index.css'

const Login = props => {
  const {login} = props
  return (
    <button onClick={login} className="button" type="button">
      Login
    </button>
  )
}
// import Logout from '../Logout'

// class Login extends Component {
//   state = {current: false}

//   loginClicked = () => {
//     this.setState(prevState => ({current: !prevState.current}))
//   }

//   render() {
//     const {current} = this.state

//     return (
//       <div>
//         {current ? (
//           <button onClick={this.loginClicked} className="button" type="button">
//             Login
//           </button>
//         ) : null}
//       </div>
//     )
//   }
// }

export default Login
