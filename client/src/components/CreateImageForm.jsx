const React = require('react')
const LinkedStateMixin = require('react-addons-linked-state-mixin')

const CreateImageForm = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState(){
    return {title: '', image: '', credit: '', comment:''}
  },

  signUp(){
    const request = new XMLHttpRequest()
    request.open("POST", "http://localhost:5000/api/images")
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 201){
        const image = JSON.parse(request.responseText)
      }
    }
    const data = {
      title: this.state.title,
      image: this.state.image,
      credit: this.state.credit,
      comment: this.state.comment,
      user_id: this.props.data.id
    }
    request.send(JSON.stringify(data))
    console.log("data", data)

  },

  render(){
    return(
      <form className='signup-form'>
      <input type="text" valueLink={this.linkState('title')} placeholder="add title"/><br/>
      <input type="text" valueLink={this.linkState('image')} placeholder="image link"/> <br/>
      <input type="text" valueLink={this.linkState('credit')} placeholder="add reference"/><br/>
      <input type="text" valueLink={this.linkState('comment')} placeholder="add comment"/>  <br/>
      <button onClick={this.signUp}> Sign Up </button>
      </form>
      )
  }

})

module.exports = CreateImageForm
