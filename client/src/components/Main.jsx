const React = require('react')


const Main = (props) => (

  <div className='container'>
  {props.children}
  </div>

  )

const {element} = React.PropTypes

Main.propTypes = {

  children: element.isRequired

}

module.exports = Main