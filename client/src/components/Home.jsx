const React = require('react')
const LoginBox = require('./auth/LoginBox')
const NavBarHeader = require('./NavBarHeader')
const {Link} =require('react-router')

const Home = () => (

  <div className="home">
  <NavBarHeader/>

  
  <LoginBox url="http://localhost:5000/" />
  </div>

  )


module.exports = Home