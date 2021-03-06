// import React, { Component } from 'react'
// import { Button, Form, Select, Message } from 'semantic-ui-react'
// import API from '../API'
// import './CreateAccountForm.css'



// class CreateAccountForm extends Component {
//     state = { 
//         first_name: null, 
//         last_name: null, 
//         email: null, 
//         account_type: null,
//         password: null, 
//         password_confirmation: null,
//         password_error: false, 
//         success: false, 
//         error: null
//      }

//      handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//      }

//      handleAccountTypeChange = (e, {value}) => {
//             this.setState({account_type: value})
//      }

//      handleSubmit = () => {
//         const { first_name, last_name, password, password_confirmation, email } = this.state
       
//         if (password === password_confirmation) {
//             this.setState({password_error: false})
            
//             if (this.state.account_type === "coach") {
//                 this.setState({password_error: false})
//                 API.createCoachAccount({
//                     coach: {
//                         first_name: first_name,
//                         last_name: last_name,
//                         password: password,
//                         email: email
//                     }
//                 }).then(this.setState({success: true}))
//                 .then(user => 
//                     setTimeout(() => {this.props.onSuccess(user)}, 2000)
//                 ).catch(errorPromise => errorPromise.then(error => this.setState({error: error.message})))

//             } else if (this.state.account_type === "athlete") {
//                 API.createAthleteAccount({
//                     athlete: {
//                         first_name: first_name,
//                         last_name: last_name,
//                         password: password,
//                         email: email
//                     }
//                 })
//                 .then(this.setState({success: true}))
//                 .then(user => 
//                     setTimeout(() => {this.props.onSuccess(user)}, 2000)
//                 ).catch(errorPromise => errorPromise.then(error => this.setState({error: error.message}))).then(this.setState({success: false}))
//             }

//         } else {
//             this.setState({password_error: true})
//         }
//     }

//     render() {
//         const options = [
//             { key: 'athlete', value: 'athlete', text: 'Athlete' },
//             { key: 'coach', value: 'coach', text: 'Coach' }
//           ]
//         const { first_name, last_name, password, password_confirmation, email, password_error } = this.state
//         return (
//             <Form onSubmit={this.handleSubmit} success>
//                 <h1>Create Account</h1>
//                 {this.state.error&& <h3 className='h3'>{this.state.error}</h3>}
//                 <Form.Field required >
//                     <label>First Name</label>
//                     <input placeholder="Bob" type = "text" name = "first_name" value = {first_name} onChange = {this.handleChange}></input>
//                 </Form.Field>
//                 <Form.Field required>
//                     <label>Last Name</label>
//                     <input placeholder="Bobson" type = "text" name = "last_name" value = {last_name} onChange = {this.handleChange}></input>
//                 </Form.Field>
//                 <Form.Field required>
//                     <label>Email</label>
//                     <input placeholder="bobbythebuilder@gmail.com" type = "text" name = "email" value = {email} onChange = {this.handleChange}></input>
//                 </Form.Field>
//                 <Form.Field required>
//                     {password_error? <h3 className="h3" >Passwords do not match!</h3> : undefined}
//                     <label>Password</label>
//                     <input type = "password" name = "password" value = {password} onChange = {this.handleChange}></input>
//                 </Form.Field>
//                 <Form.Field required>
//                     <label>Password Confirmation</label>
//                     <input type = "password" name = "password_confirmation" value = {password_confirmation} onChange = {this.handleChange}></input>
//                 </Form.Field >
//                 <Form.Field required>
//                     <label>Please choose an account type</label>
//                     <Select placeholder='Account Type' onChange = {this.handleAccountTypeChange} options={options} />
//                 </Form.Field>
//                 {this.state.success&&
//                     <Message
//                         success
//                         header='Account created'
//                         content="You're all signed up for WODSHARE"
//                     />
//                 }
//                     <Button type='submit'>Create Account</Button>
//             </Form>
//         );
//     }
// }

// export default CreateAccountForm;