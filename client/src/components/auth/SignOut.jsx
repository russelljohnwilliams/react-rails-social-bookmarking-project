const React = require('react')

const SignOut = React.createClass({

  signOut(){
    const request = new XMLHttpRequest()
    request.open("DELETE", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      console.log("signed out", request.status)
      if(request.status === 204 ){
        this.props.onSignOut(null)
      }
    }
    request.send(null)
  },

  render(){
    return(
      <button onClick={this.signOut}>Sign Out</button>)
  }
})

module.exports = SignOut