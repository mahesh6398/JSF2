import React, { Component } from 'react'
import './Style.css'
import ReactDOM from 'react-dom/client'
import Submit from './Submit';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            usn:"",
            email:"",
            fee:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOnChangeName = (event) => {
        this.setState(() => ({
            name: event.target.value
        }))
    }
    handleOnChangeUSN = (event) => {
        this.setState(() => ({
            usn: event.target.value
        }))
    }
    handleOnChangeEmail = (event) => {
        this.setState(() => ({
            email: event.target.value
        }))
    }
    handleOnChangeFee = (event) => {
        this.setState(() => ({
            fee: event.target.value
        }))
    }
    handleSubmit = (e) => {
        var usn_test = new RegExp("[0-9]{1}RV[0-9]{2}[A-Z]{2}[0-9]{3}")
        var name_test = new RegExp("[a-z]{3,}")
        var email_test = new RegExp("[a-z]{3,}[0-9]*[@][a-z]+[.][a-z]{3}")
        var fee_test = new RegExp("[0-9]{4,}")
        if(this.state.name===""){
            alert("Required name")
        }
        else if(name_test.test(this.state.name)===false){
            alert("enter valid name")
        }
        else if(this.state.usn===""){
            alert("Required usn")
        }
        else if(usn_test.test(this.state.usn)===false){
            alert("enter valid usn")
        }
        else if(this.state.email===""){
            alert("Required email")
        }
        else if(email_test.test(this.state.email)===false){
            alert("enter valid email")
        }
        else if(this.state.fee===""){
            alert("Required fee")
        }
        else if(fee_test.test(this.state.fee)===false){
            alert("enter valid fee")
        }
        else{
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                <React.StrictMode>
                    <Submit usn={this.state.usn} name={this.state.name} email={this.state.email} fee={this.state.fee} />
                </React.StrictMode>
            );
        }
    }
  render() {
    return (
        <>
        <div className='div'>
        <form className='form'>
            <h1>Student Registration Form</h1>
            <label>NAME
            <input type='text' label="Name" onChange={this.handleOnChangeName}  />
            </label>
            <label> USN
            <input type='text' label="USN" onChange={this.handleOnChangeUSN}  />
            </label>
            <label>EMAIL
            <input type='text' label="Email" onChange={this.handleOnChangeEmail}/>
            </label>
            <label>FEE
            <input type="number" id="standard-basic" label="Fee Paid" onChange={this.handleOnChangeFee} />
            </label>
            <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
        </>
      
    )
  }
}