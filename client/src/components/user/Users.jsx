const React = require('react')
const Router = require('react-router')
const Image = require('../Image')
const SelectBox = require('./SelectBox')
const {Link, browserHistory} = Router

const Users = React.createClass({

  getInitialState(){
    return {searchQuery: '', index: '', data:[], images: []}
  },

  componentDidMount(){
    const url = 'http://localhost:5000/all_users'
    const request = new XMLHttpRequest()
    request.open( "GET", url )

    request.onload = () => {
      if (request.status === 200){
        const data = JSON.parse(request.responseText)
        console.log("DATA", data)
        this.setState({data: data})
      }
    }
    request.send( null )
  },

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  },

  handleSubmit :function(e){
    console.log("e:", e.user_name)
   const index = this.state.data.map(function (e) { return e.user_name; }).indexOf(e);
   this.setState({images: this.state.data[index].image})
 },


 render(){
  return(
    <div className="users">
    <nav>
    <Link className="title" to='/'>Bookmarker</Link>
    <Link className="login" to='/home'>Login</Link>
    <Link className="userpage" to='/users'>User</Link>
    <SelectBox data={this.state.data} onSubmit={this.handleSubmit}/>
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

module.exports = Users