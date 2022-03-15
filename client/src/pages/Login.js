import React from "react";

function login() {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="card card-body">
                <h1 className="text-center mb-3">
                  <i className="fas fa-user-plus"></i> Login
                </h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>
                  <button type="submit" className="btn btn-success btn-block">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
