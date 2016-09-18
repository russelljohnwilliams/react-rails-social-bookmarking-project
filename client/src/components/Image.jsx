const React = require('react')



const Image = (props) => (
  <div className="image">
  <img src={props.image} className='image-image'/>
  <div className='image-details'>
  <h4 className='image-title'>{props.title}</h4>
  <h4 className='image-credit'>{props.credit}</h4>
  <p className='image-description'>{props.description}</p>
  </div>
  </div>
  )


const { string, number } = React.PropTypes

Image.propTypes = { 
  title: string.isRequired,
  image: string.isRequired,
  credit: string.isRequired,
  description: string.isRequired
}

module.exports = Image