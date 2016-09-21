const React = require('react')
const {Link} =require('react-router')


  const SmallImage = (props) => (
    <div className='image-details'>
    <img src={props.image} className='the-image'/>
    <p className='image-title'>title ~ {props.title}</p>
    <p className='image_comment'>comments ~ {props.comment}</p>
    <a className="image-link" href={props.credit} >link</a>
    </div>
    )


  const { string, number } = React.PropTypes

  Image.propTypes = { 
    title: string.isRequired,
    image: string.isRequired,
    credit: string.isRequired,
    comment: string.isRequired
  }


module.exports = SmallImage