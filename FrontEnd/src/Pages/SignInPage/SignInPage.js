import "./SignInPage.css";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";

function SignInPage() {
  const [emailId, setEmailId] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
  const [error, setError] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  const updateEmailId = (e) => {
    setEmailId(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

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
      <div className="sign-in-panel">
        <form>
          <div className="">
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
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
