const React = require('react')
const LinkedStateMixin = require('react-addons-linked-state-mixin')

const SignIn = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState(){
    return {email: '', password: ''}
  },

  signIn(){
    const request = new XMLHttpRequest()
    request.open("POST", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    
    request.onload = () => {
      if(request.status === 201){
        const user = JSON.parse(request.responseText)
        this.props.onSignIn(user)
      }
    }

    const data = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    }

    request.send(JSON.stringify(data))
  },

  render(){
    return(
      <form className='login-form'>
      <input type="text" valueLink={this.linkState('email')} placeholder="Email ..."/>
      <input type="password" valueLink={this.linkState('password')} placeholder="password..."/>
      <button onClick={this.signIn}> Sign In </button>
      </form>


      )
  }

})

module.exports = SignIn