var React = require('react')

var SelectBox = React.createClass({

  getInitialState: function(){
    return {data: null}
  },

  handleChange: function(e){
    var name = e.target.value
    this.setState({user: user_name})
    this.props.onSubmit(user_name)
  },

  handleSelect: function(e){
    e.preventDefault()
    var attribute = e.target.value
    this.props.onSubmit(attribute)
  },

  render: function(){
    var users = this.props.data.map(function(user){
      return(
        <option value={user.user_name} key={user.user_name}>
        {user.user_name}
        </option>
        )
    }.bind(this))
    return(
      <select value={this.state.character} onChange={this.handleSelect}>
      {user.user_name}
      </select>
      )
  }
})

module.exports = SelectBox
