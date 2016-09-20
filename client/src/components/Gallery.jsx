const React = require('react')
const Router = require('react-router')
const Image = require('./Image')
const {Link, browserHistory} = Router

const Gallery = React.createClass({

  getInitialState(){
    return {searchQuery: '', images: [], image: ''}
  },

  componentDidMount(){
    const url = 'http://localhost:5000/api/images'
    const request = new XMLHttpRequest()
    request.open( "GET", url )

    request.onload = () => {
      if (request.status === 200){
        const data = JSON.parse(request.responseText)
        const data2 = data.reverse()
        // console.log("gallery", data2)
        this.setState({images: data2})
        this.setState({image: this.state.images[4].image})
        console.log("yey", this.state.image)
      }
    }
    request.send( null )
  },

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  },

  render(){

    return(
      <div className="user">
      <nav>
      <Link className="title" to='/'>Bookmarker</Link><br/>
      <Link className="login" to='/home'>Login</Link><br/>
      <Link className="userpage" to='/users'>Users</Link><br/>

      <input className="search-box" type='text' placeholder='search...' value={this.state.searchQuery} onChange={this.doSearch} />
      </nav>

      <div className='images-container'>

      {
        this.state.images.filter((image) => `${image.title} ${image.description}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
        .map((image) => (

          <Image { ...image } key={image.id} />

          ))
      }

      </div>
      
      </div>
      )
  }

})
// <img src={this.state.images[0].image} key={this.state.images[0].image}/>

module.exports = Gallery