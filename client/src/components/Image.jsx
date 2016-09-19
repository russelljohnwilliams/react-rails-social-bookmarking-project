const React = require('react')



const Image = (props) => (
  <div className="image">
  <img src={props.image} className='image-image'/>
  <div className='image-details'>
  <h4 className='image-title'>title: {props.title}</h4>
  <h4 className='image-credit'>reference: {props.credit}</h4>
  <h4 className='posted-by'>posted by: {props.user_id}</h4>
  <p className='image-comment'>comment: {props.comment}</p>

  </div>
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