const React = require('react')


const UserProfile = React.createClass({


  getInitialState(){
    return {currentUser: null}
  },

  setUser(user){
    this.setState({ currentUser: user})
    console.log(this.state.currentUser)
  },


  componentDidMount(){
    const request = new XMLHttpRequest()
    request.open("GET", "http://localhost:5000/users.json")
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
    let mainDiv = <div>
    <h4>Please Sign In/Up</h4>

    </div>

    if(this.state.currentUser){
      mainDiv = <div>
      <h4>Welcome {this.state.currentUser.user_name}</h4>
      </div>
    }

    return(
      <div>
      {mainDiv}
      </div>
      )

  }


})


module.exports = UserProfile