const React = require('react')
const SignIn = require('./SignIn')
const SignUp = require('./SignUp')
const SignOut = require('./SignOut')


const LoginBox = React.createClass({

  getInitialState(){
    return {currentUser: null}
  },

  setUser(user){
    this.setState({ currentUser: user})
    console.log("currentUser", this.state.currentUser)
  },

  componentDidMount(){
    const request = new XMLHttpRequest()
    request.open("GET", this.props.url + "users.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 200) {
        const receivedUser = JSON.parse(request.responseText)
        this.setUser(receivedUser)

      }else if(request.status === 401){
        this.setState({currentUser: false})
      }
    }
    request.send(null)
  },

  render(){
    let mainDiv = <div className="login-box">
    <h4>PLEASE LOG IN</h4><h4>NOT JOINED YET? THEN SIGN UP NOW</h4><br/>
    <br/>

    <SignIn url={this.props.url + "users/sign_in.json"}
    onSignIn={this.setUser}/><br/>
    <SignUp url={this.props.url + "users.json"} onSignUp={this.setUser} /><br/>
    </div>
    if(this.state.currentUser){
      mainDiv = <div>

      <h4>WELCOME {this.state.currentUser.user_name.toUpperCase()}</h4>
      <SignOut url={this.props.url + "users/sign_out.json"}
      onSignOut={this.setUser}/>
      </div>
    }
    return(
      <div>
      {mainDiv}
      </div>
      )
  }

})


module.exports = LoginBox