import './App.css';
import React from 'react'
// import React, { Component } from 'react'
// import Name from './Name'
// import Address from './Address'
// import Phone from './Phone'
// import Submit from './Submit'
import BuggyCounter from './Component/BuggyCounter';
import ConditionalComponent from './Component/ConditionalComponent'
import ErrorBoundary from './Component/ErrorBoundary';


function App() {
  return (
    <div className="App">
      <p> This is text</p>

      <ErrorBoundary themeColor='red'>
        <BuggyCounter />
      </ErrorBoundary >

      <ErrorBoundary themeColor='blue'>
        <BuggyCounter />
      </ErrorBoundary >

      <ErrorBoundary themeColor='green'>
        <BuggyCounter />
      </ErrorBoundary >

      {/* <ConditionalComponent color="red" />
      <ConditionalComponent color="blue" />
      <ConditionalComponent /> */}

    </div>
  );
}

export default App;

// class App extends Component {
//   state = {
//     name: '',
//     address: '',
//     phone: '',
//   }

//   changeNameHandler = (event) => {
//     const alphabetValidation = /^[A-Za-z]+$/;
//     if (event.target.value.match(alphabetValidation)) {
//       this.setState({
//         name: event.target.value
//       })
//     }
//   }

//   changeAddressHandler = (event) => {
//     const alphabetValidation = /^[A-Za-z]+$/;
//     if (event.target.value.match(alphabetValidation)) {
//       this.setState({
//         address: event.target.value
//       })
//     }
//   }

//   changePhoneHandler = (event) => {
//     const numberValidation = /^[0-9]+$/;
//     if (event.target.value.match(numberValidation)) {
//       this.setState({
//         phone: event.target.value
//       })
//     }
//   }

  // checkSubmit = () => {
  //   const btn = document.getElementsByClassName('submit');
  //   const element = document.getElementsByTagName('input');

  //   if (element.type === 'text' && element.value === '') {
  //     btn.disabled = true;
  //     return false;
  //   } else {
  //     btn.disabled = false;
  //   }

  // }

  // checkSubmit = () => {
  //   const button = document.getElementsByClassName('button')
  //   if (this.state.name === '' || this.state.address === '' || this.state.phone === '') {
  //     button.disabled = true;
  //     return false;
  //   } else if (this.state.name.length < 5 || this.state.address.length < 5) {
  //     button.disabled = true;
  //   } else if (this.state.phone.length < 8 && this.state.phone.length > 12) {
  //     button.disabled = true;
  //   } else {
  //     button.disabled = false;
  //     alert('`Welcome ${this.state.name} ${this.state.address}`')
  //   }

  // }
//   render() {
//     const disabled = this.state.name.length < 5 || this.state.address.length < 5 || this.state.phone.length < 8 || this.state.phone.length > 12 ? true : false
//     return (
//       <div className='main'>
//         <h1>Hello Gaes...</h1> <hr />
//         <Name name={this.state.name} changeName={this.changeNameHandler} /> <br /><br />
//         <Address address={this.state.address} changeAddress={this.changeAddressHandler} /> <br /> <br />
//         <Phone phone={this.state.phone} changePhone={this.changePhoneHandler} /> <br /> <br />
//         {/* <Submit name={this.state.name.length} address={this.state.address.length} phone={this.state.phone.length} checkSubmit={this.checkSubmit} /> */}
//         <Submit disabled={disabled} />
//       </div>
//     );
//   }
// }

// export default App;
