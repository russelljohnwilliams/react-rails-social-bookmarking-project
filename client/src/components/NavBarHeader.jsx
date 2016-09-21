const React = require('react')
const {Link} =require('react-router')

const Home = () => (

  <div className="navbar">
  <Link className="title" to='/'>GALLERY </Link>
  <Link className="login" to='/home'>LOGIN </Link>
  <Link className="userspage" to='/users'>CONTRIBUTORS </Link>
  <Link className="userprofile" to='/userprofile'>USER</Link><br/>
  </div>

  )


module.exports = Home