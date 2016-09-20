const React = require('react')
const {Link} =require('react-router')


const Image = (props) => (
  <div className='image-details'>
  <img src={props.image} className='the-image'/>
  
  <p className='image-title'>title ~ {props.title}</p>
  <p className='image_comment'>comments ~ {props.comment}</p>
  <p className="image-link" >link</p>
  </div>
  )


const { string, number } = React.PropTypes

Image.propTypes = { 
  title: string.isRequired,
  image: string.isRequired,
  credit: string.isRequired,
  comment: string.isRequired
}

module.exports = Image