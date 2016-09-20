const React = require('react')
const LinkedStateMixin = require('react-addons-linked-state-mixin')

const SignUp = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState(){
    return {email: '', password: '', passwordConfirmation: ''}
  },

  signUp(){
    const request = new XMLHttpRequest()
    request.open("POST", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 201){
        const user = JSON.parse(request.responseText)
        this.props.onSignUp(user)
      }
    }
    const data = {
      user: {
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
      }
    }
    request.send(JSON.stringify(data))
  },

  render(){
    return(
      <form className='signup-form'>
      <input type="text" valueLink={this.linkState('email')} placeholder="Email ..."/>
      <input type="password" valueLink={this.linkState('password')} placeholder="password..."/>
      <input type="password" valueLink={this.linkState('passwordConfirmation')} placeholder=" confirm password..."/>  
      <button onClick={this.signUp}> Sign Up </button>
      </form>
      )
  }

})

module.exports = SignUp
