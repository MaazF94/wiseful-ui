import "./Stepper.css";

function Stepper() {
  return (
    <div className="Steps">
      <div className="StepOneGroup">
        <div className="StepOne">1</div>
        <p className="StepOneLabel">Create account</p>
      </div>
      <div className="StepTwoGroup">
        <div className="StepTwo">2</div>
        <p className="StepTwoLabel">Questionnaire</p>
      </div>
      <div className="StepThreeGroup">
        <div className="StepThree">3</div>
        <p className="StepThreeLabel">Get matched</p>
      </div>
    </div>
  );
}

export default Stepper;
