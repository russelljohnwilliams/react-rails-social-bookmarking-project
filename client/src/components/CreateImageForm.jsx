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
      <input type="text" valueLink={this.linkState('title')} placeholder="add title"/>
      <input type="text" valueLink={this.linkState('image')} placeholder="image link"/> 
      <input type="text" valueLink={this.linkState('credit')} placeholder="add reference"/>
      <input type="text" valueLink={this.linkState('comment')} placeholder="add comment"/>  
      <button onClick={this.signUp}> Sign Up </button>
      </form>
      )
  }

})

module.exports = CreateImageForm


// // <input type="string" valueLink={this.linkState('user_name')} placeholder="User Name ..."/>

// // <input type="text" valueLink={this.linkState('about')} placeholder="About ..."/>






















// // const React = require('react')

// // var React = require('react')

// // var CreateImageForm = React.createClass({

  
// //   getInitialState: function(){
// //     return{title: '', credit: '', link: '', comment: '', user_id: ''}
// //   },

// //   handleTitleChange: function(e){
// //     this.setState({title: e.target.value})
// //   },

// //   handleCreditChange: function(e){
// //     this.setState({credit: e.target.value})
// //   },


// //   handleLinkChange: function(e){
// //     this.setState({link: e.target.value})
// //   },


// //   handleCommentChange: function(e){
// //     this.setState({comment: e.target.value})
// //   },

// //   setUserId: function(){
// //     console.log("id", this.props.user_id)
//     // this.setState({user_id: this.props.user_id})
//   // }


//   // handleSubmit: function(e){
//   //   e.preventDefault()
    
//     // signUp(){
//     //   const request = new XMLHttpRequest()
//     //   request.open("POST", this.props.url)
//     //   request.setRequestHeader("Content-Type", "application/json")
//     //   request.withCredentials = true
//     //   request.onload = () => {
//     //     if(request.status === 201){
//     //       const user = JSON.parse(request.responseText)
//     //       this.props.onSignUp(user)
//     //     }
//     //   }

//     // var author = this.state.author.trim()
//     // var text = this.state.text.trim()
//     // if( !text || !author ){
//     //   return;
//     // }
//     // this.props.handleCommentSubmit({author: author, text: text})
//     // this.setState({author:'', text:''})
//   // },




//   // render: function(){
//   //   return(
//   //     <form className='comment-form' onSubmit={this.signUp}>

//   //     <input type="text" placeholder='Give your image a title' 
//   //     value={this.state.title}
//   //     onChange={this.handleTitleChange}
//   //     />
      
//   //     <input type="text" placeholder='Credit the site you referenced,' 
//   //     value={this.state.credit}
//   //     onChange={this.handleCreditChange}
//   //     />

//   //     <input type="text" placeholder='Image link' 
//   //     value={this.state.link}
//   //     onChange={this.handleLinkChange}
//   //     />

//   //     <input type="text" placeholder="Add a comment..." 
//   //     value={this.state.comment}
//   //     onChange={this.handleCommentChange}
//   //     />
      
//   //     <input type="submit" value="Enter Comment" />
//   //     </form>

//   //     )
//   // }

// // })

// // module.exports = CreateImageForm

