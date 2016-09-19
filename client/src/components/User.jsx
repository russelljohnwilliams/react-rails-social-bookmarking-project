
const React = require('react')
const Router = require('react-router')
const Image = require('./Image')
const {Link, browserHistory} = Router
 
const User = React.createClass({

  getInitialState(){
    return {searchQuery: '', images: []}
  },

  componentDidMount(){
    const url = 'http://localhost:5000/users/1'
    const request = new XMLHttpRequest()
    request.open( "GET", url )

    request.onload = () => {
      if (request.status === 200){
        const data = JSON.parse(request.responseText)
        const data2 = data.reverse()
        console.log("data:", data)
        this.setState({images: data2})
        }
      }
      request.send( null )
  },

  render(){

    return(
      <div className="user">
        <nav>
          <Link className="title" to='/'>Bookmarker</Link>
          <Link className="login" to='/home'>Login</Link>
          <Link className="userpage" to='/users'>User</Link>
          <input className="search-box" type='text' placeholder='search...' value={this.state.searchQuery} onChange={this.doSearch} />
        </nav>
        <div className='images-container'>
           
        </div>
      </div>
      )
  }

})


module.exports = User






// const React = require('react')

 
// const User = React.createClass({

//   getInitialState(){
//     return {currentUser: null}
//   },

//   setUser(user){
//     this.setState({ currentUser: user })
//   },

//   componentDidMount(){
//     const request = new XMLHttpRequest()
//     request.open("GET", "http://localhost:5000/users/sign_in")
//     request.setRequestHeader("Content-Type", "application/json")
//     request.withCredentials = true
//     request.onload = () => {
//       if(request.status === 200) {
//         const receivedUser = JSON.parse(request.responseText)
//         this.setUser(receivedUser)
//       }else if(request.status === 401){
//         this.setState({currentUser: false})
//       }
//     }
//     request.send(null)
//   },

//   render(){

//     let userDiv = <div className="user">
//        <h1>None yet ....</h1>
//     </div>

//     if(this.state.currentUser){
//       userDiv = <div className="user">
//           <h1>{this.state.currentUser.email}</h1>
//       </div>
//     } 
//     console.log(userDiv)
//     return(
//       <div>
//         {userDiv}
//       </div>
//     )
//   }

// })


// module.exports = User