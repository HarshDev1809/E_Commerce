import "./SignUpPage.css";
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

function SignUpPage() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailId, setEmailId] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [userName, setUserName] = useState();
  const [error, setError] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  const updateEmailId = (e) => {
    setEmailId(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  const updatePassword2 = (e) =>{
    setShowAlert(false);
    if(e.target.value !== password){
        setError("Password not matching !");
    }else{
        setError()
    }
    setPassword2(e.target.value)
  }

  const signUp = (e) =>{
    e.preventDefault();
    if(password !== password2){
        setShowAlert(true);
        setError("Password not Matching !");
        return
    }
    console.log({
        firstName,
        lastName,
        emailId,
        password,
        password2
    })
  }

  return (
    <div className="sign-up-page vh-100 vw-100">
        {showAlert && <Collapse in={showAlert} ><Alert severity="error" onClose={() => {setShowAlert(false)}}>{error}</Alert></Collapse>}
      <div className="w-100 border nav-bar">
        <h1>Gehena</h1>
      </div>
      <div className="sign-up-panel d-flex justify-content-center align-items-center w-100">
        <form className="border d-flex justify-content-center flex-column align-items-center h-75 w-75" onSubmit={signUp}>
          <div className="w-100 border">
            <h1>Welcome</h1>
          </div>
          <div className=" d-flex justify-content-between gap-1 w-100">
            <div className="w-50 border p-2">
              <label for="first-name"></label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeHolder={"First Name"}
                value={firstName}
                onChange={updateFirstName}
                className="w-100 p-2" required
              ></input>
            </div>
            <div className="w-50 border p-2">
              <label for="last-name" />
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder={"Last Name"}
                value={lastName}
                onChange={updateLastName}
                className="w-100 p-2"
                required
              />
            </div>
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
            <label for="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={emailId}
              onChange={updateEmailId}
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
        <div className="w-100 border p-2">
          <label for="confirmation-password"></label>
          <input
            type="password"
            name="confirmation-password"
            id="confirmation-password"
            placeholder="Re-Enter Password"
            value={password2}
            onChange={updatePassword2}
            className="w-100 p-2"
            required
          />
        </div>
        <div className="w-100">
            <span className="text-danger">{error}</span>
        </div>
        <div className="w-100 border p-2">
            <button type="submit" className="w-25">Sign Up</button>
        </div>
        <div className="">
            {/* <span>Already have an account ?<Link to={"/signin"}> Click here</Link> to Sign in</span> */}
            <span>Already have an account ? <a href="/signin">Click here</a> to Sign in</span>
        </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
