const React = require('react')
const Router = require('react-router')
const Post = require('./Post')
const NavBarHeader = require('./NavBarHeader')
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
        this.setState({images: data2})
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
      <NavBarHeader />
      <input className="search-box" type='text' placeholder='search...' value={this.state.searchQuery} onChange={this.doSearch} />
      </nav>

      <div className='images-container'>

      
      <Post searchQuery={this.state.searchQuery} images={this.state.images} />
      
      </div>
      </div>
      )
  }

})
// <img src={this.state.images[0].image} key={this.state.images[0].image}/>

module.exports = Gallery