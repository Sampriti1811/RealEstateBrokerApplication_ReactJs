import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 text-center"><h1>Login</h1></div>
      </div>

      <div className="row">
        <div className="col-md-6">Username:</div>
        <div className="col-md-6">
          <input type="username" name="username" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">Password:</div>
        <div className="col-md-6">
          <input type="password" name="password" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          <input type="submit" className="btn btn-success" value="Login" />
        </div>
      </div>
    </div>
  )
}

export default Login;