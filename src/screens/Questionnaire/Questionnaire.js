import "./Questionnaire.css";
import NavBar from "../../shared/navbar/NavBar";
import Stepper from "../../shared/stepper/Stepper";
import { useEffect, useState } from "react";
import Api from "../../api/Api";
import UriConstants from "../../api/UriConstants";
import HttpHeaders from "../../components/common/HttpHeaders";
import Select from "react-select";

const Questionnaire = () => {
  const [allOptions, setAllOptions] = useState([]);
  const [questionOneOptions, setQuestionOneOptions] = useState([]);
  const [questionTwoOptions, setQuestionTwoOptions] = useState([]);
  const [questionThreeOptions, setQuestionThreeOptions] = useState([]);
  const [questionFourOptions, setQuestionFourOptions] = useState([]);
  const [questionFiveOptions, setQuestionFiveOptions] = useState([]);
  const [questionSixOptions, setQuestionSixOptions] = useState([]);

  const [selectedOptionOne, setSelectedOptionOne] = useState(null);
  const [selectedOptionTwo, setSelectedOptionTwo] = useState(null);
  const [selectedOptionThree, setSelectedOptionThree] = useState(null);
  const [selectedOptionFour, setSelectedOptionFour] = useState(null);
  const [selectedOptionFive, setSelectedOptionFive] = useState(null);
  const [selectedOptionSix, setSelectedOptionSix] = useState(null);

  useEffect(() => {
    getQuestionnaireOptions();
    setQuestionOneOptions(() => {
      // filter through allOptions to find options for section 1
      const filterOne = allOptions.filter(function (subOptions) {
        return subOptions.sectionNumber === 1;
      });
      const optionsOne = [];
      // Populate the select options
      filterOne.forEach((option) => {
        optionsOne.push({
          label: option.value,
          value: option.value,
        });
      });
      return optionsOne;
    });
    setQuestionTwoOptions(() => {
      // filter through allOptions to find options for section 1
      const filterOne = allOptions.filter(function (subOptions) {
        return subOptions.sectionNumber === 2;
      });
      const optionsOne = [];
      // Populate the select options
      filterOne.forEach((option) => {
        optionsOne.push({
          label: option.value,
          value: option.value,
        });
      });
      return optionsOne;
    });
    setQuestionThreeOptions(() => {
      // filter through allOptions to find options for section 1
      const filterOne = allOptions.filter(function (subOptions) {
        return subOptions.sectionNumber === 3;
      });
      const optionsOne = [];
      // Populate the select options
      filterOne.forEach((option) => {
        optionsOne.push({
          label: option.value,
          value: option.value,
        });
      });
      return optionsOne;
    });
    setQuestionFourOptions(() => {
      // filter through allOptions to find options for section 1
      const filterOne = allOptions.filter(function (subOptions) {
        return subOptions.sectionNumber === 4;
      });
      const optionsOne = [];
      // Populate the select options
      filterOne.forEach((option) => {
        optionsOne.push({
          label: option.value,
          value: option.value,
        });
      });
      return optionsOne;
    });
    setQuestionFiveOptions(() => {
      // filter through allOptions to find options for section 1
      const filterOne = allOptions.filter(function (subOptions) {
        return subOptions.sectionNumber === 5;
      });
      const optionsOne = [];
      // Populate the select options
      filterOne.forEach((option) => {
        optionsOne.push({
          label: option.value,
          value: option.value,
        });
      });
      return optionsOne;
    });
    setQuestionSixOptions(() => {
      // filter through allOptions to find options for section 1
      const filterOne = allOptions.filter(function (subOptions) {
        return subOptions.sectionNumber === 6;
      });
      const optionsOne = [];
      // Populate the select options
      filterOne.forEach((option) => {
        optionsOne.push({
          label: option.value,
          value: option.value,
        });
      });
      return optionsOne;
    });
  }, [allOptions]);

  const getQuestionnaireOptions = async () => {
    await Api.get(UriConstants.getQuestionnaireOptions, {
      headers: HttpHeaders.headers,
    }).then((response) => {
      setAllOptions(response.data);
    });
  };

  return (
    <div className="Questionnaire">
      <NavBar />
      <div className="PageContainer">
        <div className="Form">
          <h1 className="FormTitle">Questionnaire</h1>
          <Stepper />
          <div className="InputContainer">
            <div className="FieldRow">
              <p className="Label">Where are you in your career?</p>
              <Select
                placeholder="Choose One"
                options={questionOneOptions}
                onChange={setSelectedOptionOne}
                value="Choose One"
              />
              {selectedOptionOne !== null && (
                <div className="SelectedOption">{selectedOptionOne.value}</div>
              )}
              <p className="Label">What job type are you looking for?</p>
              <Select
                placeholder="Choose all that apply"
                options={questionTwoOptions}
                onChange={setSelectedOptionTwo}
                value="Choose all that apply"
              />
              {selectedOptionTwo !== null && (
                <div className="SelectedOption">{selectedOptionTwo.value}</div>
              )}
              <p className="Label">How can we help you?</p>
              <Select
                placeholder="Choose up to 3"
                options={questionThreeOptions}
                onChange={setSelectedOptionThree}
                value="Choose up to 3"
              />
              {selectedOptionThree !== null && (
                <div className="SelectedOption">
                  {selectedOptionThree.value}
                </div>
              )}
              <p className="Label">What kind of roles are you looking for?</p>
              <p className="OptionalLabel">
                Add some roles you’re curious about if you aren’t sure of your
                path.
              </p>
              <Select
                placeholder="Search or add your own"
                options={questionFourOptions}
                onChange={setSelectedOptionFour}
                value="Search or add your own"
              />
              {selectedOptionFour !== null && (
                <div className="SelectedOption">{selectedOptionFour.value}</div>
              )}
              <p className="Label">
                What companies would you love to work for?
              </p>
              <p className="OptionalLabel">Optional - 3 or more is best!</p>
              <Select
                placeholder="Search or add your own"
                options={questionFiveOptions}
                onChange={setSelectedOptionFive}
                value="Search or add your own"
              />
              {selectedOptionFive !== null && (
                <div className="SelectedOption">{selectedOptionFive.value}</div>
              )}
              <p className="Label">Any industries you’re interested in?</p>
              <p className="OptionalLabel">Optional</p>
              <Select
                placeholder="Search or add your own"
                options={questionSixOptions}
                onChange={setSelectedOptionSix}
                value="Search or add your own"
              />
              {selectedOptionSix !== null && (
                <div className="SelectedOption">{selectedOptionSix.value}</div>
              )}
            </div>
          </div>
          <div className="FormEnd">
            <button className="FormSignUpBtn">GET MATCHED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
