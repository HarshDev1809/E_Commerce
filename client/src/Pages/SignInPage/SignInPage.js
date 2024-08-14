import "./SignInPage.css";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function SignInPage() {
  const [emailId, setEmailId] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
  const [error, setError] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  const updateEmailId = (e) => {
    setEmailId(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const signIn = (e) =>{
    e.preventDefault();
    console.log("sign in")
    navigate("/")
  }

  return (
    <div className="h-100 w-100 sign-in-page">
      {showAlert && (
        <Collapse in={showAlert}>
          <Alert
            severity="error"
            onClose={() => {
              setShowAlert(false);
            }}
          >
            {error}
          </Alert>
        </Collapse>
      )}
      <div className="w-100 border nav-bar">
        <h1>Gehena</h1>
      </div>
      <div className="sign-in-panel d-flex justify-content-center align-items-center w-100">
        <form onSubmit={signIn} className="border d-flex justify-content-center flex-column align-items-center h-75 w-75">
          <div className="w-100 border">
            <h1>Welcome</h1>
          </div>
          <div className="w-100 border p-2">
            <label for="user-name"></label>
            <input
              type="text"
              name="user-name"
              id="username"
              placeholder="Username"
              value={userName}
              onChange={updateUserName}
              className="w-100 p-2"
              required
            />
          </div>
          <div className="w-100 border p-2">
            <label for="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
              className="w-100 p-2"
              required
            />
          </div>
          <div className="w-100">
            <span className="text-danger">{error}</span>
        </div>
          <div className="w-100 border p-2">
            <button type="submit" className="w-25">Sign In</button>
        </div>
        <div className="">
            {/* <span>Already have an account ?<Link to={"/signin"}> Click here</Link> to Sign in</span> */}
            <span>Don't have an account ? <a href="/signup">Click here</a> to Sign Up</span>
        </div>
        </form>
      </div>
      <footer className="w-100 bg-black text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default SignInPage;
