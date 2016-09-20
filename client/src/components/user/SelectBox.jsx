

var React = require('react')

var SelectBox = React.createClass({

  getInitialState: function(){
    return {users: null}
  },


  handleSelect: function(e){
    e.preventDefault()
    var attribute = e.target.value
    this.props.onSubmit(attribute)
  },


  render: function(){
    var users = this.props.data.map(function(user){
      return(
        <option value={user.user_name} key={user.email}>
        {user.user_name}
        </option>
        )
    }.bind(this))
    return(
      <select value={this.state.users} onChange={this.handleSelect}>
      {users}
      </select>
      )
  }
})

module.exports = SelectBox
