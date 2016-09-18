const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory} = ReactRouter
const Home = require('./components/Home')
const User = require('./components/User')
const Image = require('./components/Image')
const Main = require('./components/Main')

const App = React.createClass({
  render(){
      return(
         <Router history={hashHistory}>
          <Route path='/' component={Main}>
            <IndexRoute component={User} />
            <Route path='/home' component={Home} />
          </Route>
         </Router>
        )
  }

})

// window.onload = function(){
//   ReactDOM.render(
//     <h1> hello</h1>,
//     document.getElementById('app')
//   );
// }


ReactDOM.render(<App />, document.getElementById('app'))



            // <Route path='/user' component={User} />
