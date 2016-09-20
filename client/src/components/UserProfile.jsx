const React = require('react')
const CreateImageForm = require('./CreateImageForm')
const Router = require('react-router')
const {Link, browserHistory} = Router

const UserProfile = React.createClass({

  getInitialState(){
    return {currentUser: null}
  },

  setUser(user){
    this.setState({ currentUser: user})
  },

  fetchUser: function(){
    console.log("fetching user...")
    const request = new XMLHttpRequest()
    request.open("GET", "http://localhost:5000/users")
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

  componentDidMount(){
    this.fetchUser()
  },

  render(){

    let mainDiv = <div>

    <h4>Please Sign In</h4>

    </div>
    if(this.state.currentUser){
      mainDiv = <div>
      <h4>Welcome {this.state.currentUser.user_name}</h4>

      <CreateImageForm data={this.state.currentUser}/>
      create an image link form here!!!

      </div>}

      return(

        <div>
        <nav>
        <Link className="title" to='/'>BOOKMARKER </Link>
              <Link className="login" to='/home'>LOGIN </Link>
              <Link className="userspage" to='/users'>CONTRIBUTORS </Link>
              <Link className="userprofile" to='/userprofile'>USER</Link><br/>

        </nav>
        {mainDiv}
        </div>
        )

    }

  })


module.exports = UserProfile