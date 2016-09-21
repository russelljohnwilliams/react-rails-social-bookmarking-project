const React = require ('react')
const Image = require('./Image')
const SmallImage = require('./SmallImage')

const Post = React.createClass({



  render(){
   const images = this.props.images.filter((image) => `${image.title} ${image.comment} ${image.user.user_name}`.toUpperCase().indexOf(this.props.searchQuery.toUpperCase()) >= 0).map((image) => (<Image {...image} key={image.id} />))
    return(
      <div className="post-container">
          {images}

          <SmallImage images={images} />
      </div>
      )
  }
})

module.exports = Post





//   render(){
//     return(
//       <div className="post-container">
//           {
//             this.props.images.filter((image) => `${image.title} ${image.comment} ${image.user.user_name}`.toUpperCase().indexOf(this.props.searchQuery.toUpperCase()) >= 0)
//           .map((image) => (
//             <Image {...image} key={image.id} />,
//             ))
//         }

       
//       </div>
      
//       )
//   }
// })

// module.exports = Post