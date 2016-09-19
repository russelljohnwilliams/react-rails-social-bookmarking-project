const React = require('react')
const Router = require('react-router')
const Image = require('./Image')
const {Link, browserHistory} = Router

const Users = React.createClass({

  getInitialState(){
    return {searchQuery: '', data:[], images: []}
  },

  componentDidMount(){
    const url = 'http://localhost:5000/users'
    const request = new XMLHttpRequest()
    request.open( "GET", url )

    request.onload = () => {
      if (request.status === 200){
        const data = JSON.parse(request.responseText)

        console.log("big data", data)
        this.setState({data: data})
      }
    }
    request.send( null )
  },
  doSearch(event){
    this.setState({searchQuery: event.target.value})
  },

  handleSubmit :function(e){
    console.log(this.state.data[0].user_name)
    // find location of selected user
    // set state with index number from users api array
  },


  render(){
    return(
      <div className="users">
      <nav>
      <Link className="title" to='/'>Bookmarker</Link>
      <Link className="login" to='/home'>Login</Link>
      <Link className="userpage" to='/users'>User</Link>

      <selectBox data={this.state.data} onSubmit={this.handleSubmit}/>
      
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