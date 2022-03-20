import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
function Signup() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <div className="spinner">
            <Spinner
              animation="border"
              variant="primary"
              className="TempSpinner"
            />
          </div>
        </>
      ) : (
        <>
          <div className="login">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-auto">
                  <div className="card card-body">
                    <h1 className="text-center mb-3">
                      <i className="fas fa-user-plus"></i> Signup
                    </h1>
                    <form>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Enter name"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                        <label htmlFor="password">Confirm Password</label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                        <label htmlFor="file">Profile Picture</label>
                        <input
                          type="file"
                          id="file"
                          className="form-control"
                          placeholder="Enter password"
                        />

                        <button
                          type="submit"
                          className="btn btn-success btn-block"
                        >
                          Signup
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Signup;
