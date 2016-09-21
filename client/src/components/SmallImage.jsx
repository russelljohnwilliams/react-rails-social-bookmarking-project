const React = require('react')
const {Link} =require('react-router')


const SmallImage = React.createClass({

componentDidMount(){
console.log("props", this.props)
},

render(){
  return(
  <div className='image-details'>
  <p>hi there<P>
  </div>
  )
}

// const { string, number } = React.PropTypes

// Image.propTypes = { 
//   // image: string.isRequired,
// }
})

module.exports = SmallImage