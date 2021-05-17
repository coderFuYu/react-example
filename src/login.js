import React, {PureComponent} from 'react';
import "./login.css"

class Login extends PureComponent {

  componentDidMount() {
    let localStorage = window.localStorage
    if (localStorage.islogin === '1') {
      this.props.history.replace("/home")
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
        <div className="login">
          <h2>欢迎来到XXX博客区</h2>
          <form className="form">
            <div className="formItem">
              <label htmlFor="username">用户名：</label>
              <input type="text" id="username" value={this.state.username} onChange={e => {
                this.setState({username: e.target.value})
              }}/>
            </div>
            <div className="formItem">
              <label htmlFor="password">密码：</label>
              <input type="password" id="password" value={this.state.password} onChange={e => {
                this.setState({password: e.target.value})
              }}/>
            </div>
            <div className="loginBtn" onClick={() => {
              this.handleLogin()
            }}>登录
            </div>
          </form>
        </div>
    );
  }

  handleLogin() {
    if (this.state.username && this.state.password) {
      this.props.history.replace("/home")
      window.localStorage.islogin='1'
      alert("欢迎！")
    } else {
      alert("请输入用户名和密码！")
    }
  }
}


export default Login;
