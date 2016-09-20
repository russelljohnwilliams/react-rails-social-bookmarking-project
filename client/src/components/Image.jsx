const React = require('react')
const {Link} =require('react-router')


const Image = (props) => (
  <div className='image-details'>
  <img src={props.image} className='the-image'/>
  <br/>
  <p className='image-title'>{props.title}</p>
  <link className="image-link" href={props.credit}>link</link>
  
  <p className='image_comment'>comoment: {props.comment}</p>
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