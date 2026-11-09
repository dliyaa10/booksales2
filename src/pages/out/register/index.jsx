import { Link } from "react-router";
export default function Register() {
  return (
    <div
      className="modal modal-sheet position-static d-block p-4 py-md-5"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header d-flex justify-content-center p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Register</h1>
          </div>

          <div className="modal-body p-5 pt-0">
            <form>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="registerEmail"
                  placeholder="name@example.com"
                />
                <label htmlFor="registerEmail">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="registerPassword"
                  placeholder="Password"
                />
                <label htmlFor="registerPassword">Password</label>
              </div>

              <button
                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                type="submit"
              >
                Register
              </button>
            </form>
                        <p className="text-center mt-3">
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}