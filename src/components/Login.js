import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

 //   this.state = {
 //     submitted: false,
 //   };
  }
/*
  handleSubmit = () => {
    this.setState({ submitted: true });
  };
*/
  render() {
    return (
      <div className="card">
        <form className="">
          <div className="card-header">Вход в личный кабинет</div>
          <div className="mb-1 card-body">
          <label for="login" className="form-label">ФИО</label>
            <select className="form-select">
            <option selected>Выберите из списка</option>
              <option value="1">Шевченко Р.А</option>
              <option value="2">Кабан Р.А.</option>
              <option value="3">Белицкий М.Ю.</option>
            </select>
          </div>
          <div className="mb-1 card-body">
              <label for="inputPassword" className="form-label">Пароль</label>
              <input type="password" className="form-control" id="inputPassword"></input>
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