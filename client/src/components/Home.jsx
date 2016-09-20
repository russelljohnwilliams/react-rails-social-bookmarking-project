const React = require('react')
const LoginBox = require('./auth/LoginBox')
const {Link} =require('react-router')

const Home = () => (

  <div className="home">
  <nav>
  <Link className="title" to='/'>BOOKMARKER </Link>
  <Link className="login" to='/home'>LOGIN </Link>
  <Link className="userspage" to='/users'>CONTRIBUTORS </Link>
  <Link className="userprofile" to='/userprofile'>USER</Link><br/>
  </nav>

  
  <LoginBox url="http://localhost:5000/" />
  </div>

  )


module.exports = Home