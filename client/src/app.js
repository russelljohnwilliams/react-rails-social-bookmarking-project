const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory} = ReactRouter
const Home = require('./components/Home')
const Gallery = require('./components/Gallery')
const User = require('./components/User')
const Image = require('./components/Image')
const Main = require('./components/Main')

const App = React.createClass({
  render(){
      return(
         <Router history={hashHistory}>
          <Route path='/' component={Main}>
            <IndexRoute component={Gallery} />
            <Route path='/home' component={Home} />
            <Route path='/users' component={User} />
          </Route>
         </Router>
        )
  }

})


ReactDOM.render(<App />, document.getElementById('app'))