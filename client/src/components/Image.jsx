const React = require('react')



const Image = (props) => (
  <div className='image-details'>
  <img src={props.image} className='the-image'/>
  <h3 className='image-title'>{props.title}</h3>
  <h4 className='image-user'>posted by: {props.user.user_name}</h4>
  <h4 className='image-credit'>linked from: {props.credit}</h4>
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