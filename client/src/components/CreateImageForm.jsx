const React = require('react')

var React = require('react')

var CreateImageForm = React.createClass({

  getInitialState: function(){
    return{title: '', credit: '', link: '', comment: '', user_id: ''}
  },

  handleTitleChange: function(e){
    this.setState({title: e.target.value})
  },

  handleCreditChange: function(e){
    this.setState({credit: e.target.value})
  },


  handleLinkChange: function(e){
    this.setState({link: e.target.value})
  },


  handleCommentChange: function(e){
    this.setState({comment: e.target.value})
  },

  setUserId: function(){
    console.log("id", this.props.user_id)
    // this.setState({user_id: this.props.user_id})
  }


  handleSubmit: function(e){
    e.preventDefault()
    
    signUp(){
      const request = new XMLHttpRequest()
      request.open("POST", this.props.url)
      request.setRequestHeader("Content-Type", "application/json")
      request.withCredentials = true
      request.onload = () => {
        if(request.status === 201){
          const user = JSON.parse(request.responseText)
          this.props.onSignUp(user)
        }
      }

    // var author = this.state.author.trim()
    // var text = this.state.text.trim()
    // if( !text || !author ){
    //   return;
    // }
    // this.props.handleCommentSubmit({author: author, text: text})
    // this.setState({author:'', text:''})
  },


  render: function(){
    return(
      <form className='comment-form' onSubmit={this.handleSubmit}>

      <input type="text" placeholder='Give your image a title' 
      value={this.state.title}
      onChange={this.handleTitleChange}
      />
      
      <input type="text" placeholder='Credit the site you referenced,' 
      value={this.state.credit}
      onChange={this.handleCreditChange}
      />

      <input type="text" placeholder='Image link' 
      value={this.state.link}
      onChange={this.handleLinkChange}
      />

      <input type="text" placeholder="Add a comment..." 
      value={this.state.comment}
      onChange={this.handleCommentChange}
      />
      
      <input type="submit" value="Enter Comment" />
      </form>

      )
  }

})


module.exports = CommentsForm


module.exports = CreateImageForm

