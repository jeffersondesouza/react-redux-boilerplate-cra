import React, { Component } from 'react';
// import { browserHistory } from 'react-router-dom';

export default class Login extends Component {

  constructor(props) {
    super(props);
    // this.state = { msg: this.props.location.query.msg };
  }

  componentDidMount() {
    console.log(this.props);

  }

  onSubmitLoginForm = (event) => {


    event.preventDefault();

    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({
        login: this.login.value,
        senha: this.password.value,

      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };

    fetch('http://localhost:8080/api/public/login', requestInfo)
      .then(response => {
        if (response.ok) {
          this.setState({ msg: '' })
          return response.text()
        } else {
          throw new Error('Nao foi possivel fazer o login');
        }
      })
      .then(token => {
        localStorage.setItem('auth-token', token);
        this.props.history.push('/timeline');

      })
      .catch(error => this.setState({ msg: error.message }));

  }

  render() {
    return (
      <div className="login-box">
        <h1 className="header-logo">Instalura</h1>
        {/* <span>{this.state.msg}</span> */}
        <form onSubmit={this.onSubmitLoginForm}>
          <input type="text" ref={input => this.login = input} />
          <input type="password" ref={input => this.password = input} />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}