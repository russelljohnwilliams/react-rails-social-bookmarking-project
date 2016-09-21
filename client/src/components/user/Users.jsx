const React = require('react')
const Router = require('react-router')
const Image = require('../Image')
const NavBarHeader = require('../NavBarHeader')
const SelectBox = require('./SelectBox')
const {Link, browserHistory} = Router

const Users = React.createClass({

  getInitialState(){
    return {searchQuery: '', data:[], images: []}
  },

  componentDidMount(){
    const url = 'http://localhost:5000/all_users'
    const request = new XMLHttpRequest()
    request.open( "GET", url )

    request.onload = () => {
      if (request.status === 200){
        const data = JSON.parse(request.responseText)
        this.setState({data: data})
      }
    }
    request.send( null )
  },

  handleSubmit :function(e){
    const index = this.state.data.map(function (e) { return e.user_name; }).indexOf(e);
    this.setState({images: this.state.data[index].image})
  },

  render(){
    return(
      <div className="users">
      <nav>
      <NavBarHeader/>
      <SelectBox data={this.state.data} onSubmit={this.handleSubmit}/>
      </nav>
      <div className='images-container'>
      {
        this.state.images.map((image) => (
          <Image { ...image } key={image.id} />
          ))
      }
      </div>
      </div>
      )
  }

})

module.exports = Users