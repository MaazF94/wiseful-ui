import { useHistory } from "react-router";
import NavBar from "../../shared/navbar/NavBar";
import Stepper from "../../shared/stepper/Stepper";
import "./HomePage.css";

function HomePage() {
  const navigation = useHistory();

  function handleClick() {
    navigation.push("/questionnaire");
  }

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
              <input className="Input" />
              <p className="Label">Password (8 characters minimum)</p>
              <input type="password" className="Input" />
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
