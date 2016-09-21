const React = require('react')
const {Link} =require('react-router')


const Image = React.createClass({


render: function(){
  const images = this.props.images.map(function(image){
    return(
      <div className="characterPic" >
      <img src = {image.image} className="the-image"/>
      <p className='image-title'>title ~ {image.title}</p>
      <p className='image_comment'>comments ~ {image.comment}</p>
      <a className="image-link" href={image.credit} >link</a>
      </div>
      )
  }.bind(this))
  return(<div>
   {images}
   </div>)
}

})








// const Image = (props) => (
//   <div className='image-details'>
//   <img src={props.image} className='the-image'/>
//   <p className='image-title'>title ~ {props.title}</p>
//   <p className='image_comment'>comments ~ {props.comment}</p>
//   <a className="image-link" href={props.credit} >link</a>
//   </div>
//   )


// const { string, number } = React.PropTypes

// Image.propTypes = { 
//   title: string.isRequired,
//   image: string.isRequired,
//   credit: string.isRequired,
//   comment: string.isRequired
// }

module.exports = Image