const React = require('react')
const LoginBox = require('./auth/LoginBox')
const {Link} =require('react-router')

const Home = () => (

  <div className="home">
    <h1 className="title">Bookmarker</h1>
    
   <LoginBox url="http://localhost:5000/" />

    <Link className="user-link" to='/'> User Page </Link>
   <h1>help</h1>
  </div>

)


module.exports = Home