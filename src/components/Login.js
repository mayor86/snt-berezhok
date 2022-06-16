import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value 
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
      if(this.state.password === '123'){
        this.props.handleLogin();
    }
    return;
  };

  render() {
    return (
      <div className="card mb-5">
        <form onSubmit={this.handleSubmit} >
          <div className="card-header">Вход в личный кабинет</div>
          <div className="mb-1 card-body">
          <label for="login" className="form-label">ФИО</label>
            <select className="form-select" id="userName" name="username" onChange={this.handleChange}>
            <option selected>Выберите из списка</option>
              <option value="1">Шевченко Р.А</option>
              <option value="2">Кабан Р.А.</option>
              <option value="3">Белицкий М.Ю.</option>
            </select>
          </div>
          <div className="mb-1 card-body">
              <label for="inputPassword" className="form-label">Пароль</label>
              <input type="password" name="password" className="form-control" id="inputPassword" defaultValue={this.state.password} onChange={this.handleChange}></input>
          </div>
            <div className="mb-1 card-body">
              <button type="submit" className="btn btn-primary">Войти</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;