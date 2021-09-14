import { useHistory } from "react-router";
import NavBar from "../../shared/navbar/NavBar";
import Stepper from "../../shared/stepper/Stepper";
import "./HomePage.css";
import { Auth } from "aws-amplify";
import { useState } from "react";

function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useHistory();

  function handleClick() {
    signUp();
  }

  const signUp = async () => {
    await Auth.signUp({
      username: email,
      password,
    }).then(() => {
      navigation.push("/questionnaire");
    });
  };

  return (
    <div className="HomePage">
      <NavBar />
      <div className="PageContainer">
        <div className="Form">
          <h1 className="FormTitle">Member Signup</h1>
          <Stepper />
          <div className="InputContainer">
            <div className="FieldRow">
              <p className="Label">First Name</p>
              <input className="Input" />
              <p className="Label">Last Name</p>
              <input className="Input" />
              <p className="Label">Email</p>
              <input onChange={(event) => setEmail(event.target.value)} className="Input" />
              <p className="Label">Password (8 characters minimum)</p>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                className="Input"
              />
            </div>
          </div>
          <div className="FormEnd">
            <button onClick={handleClick} className="FormSignUpBtn">
              SIGN UP
            </button>
          </div>
          <p className="ExistingAccount">Already have an account?</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
