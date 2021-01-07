import React, { useState } from "react";
import Select from "react-select";
var translationObj = [
  {
    value: "1",
    label: "Pig latin convertor"
  },
  {
    value: "2",
    label: "Yoda Speak Translator"
  },
  {
    value: "3",
    label: "Pirate speak Translator"
  },
  {
    value: "4",
    label: "Valley speak translator"
  },
  {
    value: "5",
    label: "Minion speak translator"
  },
  {
    value: "6",
    label: "Dothraki translator"
  },
  {
    value: "7",
    label: "Valyrian translator"
  },
  {
    value: "8",
    label: "Old English translator"
  },
  {
    value: "9",
    label: "Shakesspeare translator"
  },
  {
    value: "10",
    label: "Groot translator"
  },
  {
    value: "11",
    label: "Groot translator"
  },
  {
    value: "12",
    label: "Morse Code translator"
  },
  {
    value: "13",
    label: "Brooklyn translator"
  }
];

const Main = () => {
  const [selected, setSelected] = useState(translationObj[0]);

  const handleChange = (e) => {
    setSelected(e);
  };
  const translate = () => {
    switch (selected.value) {
      case "1":
        return console.log("Pig");
        break;
      case "2":
        console.log("yoda");
        break;

      case "3":
        console.log("Pirate");
        break;
      case "4":
        console.log("Valley");
        break;

      default:
        console.log("Default translation");
        break;
    }
  };
  return (
    <div>
      <h1>All in One Fun-Translator</h1>
      <small>
        *Uses API from{" "}
        <a href="https://funtranslations.com">funtranslations.com</a>*
      </small>

      <br />
      <Select
        placeholder="Select Translations"
        className="select-option"
        options={translationObj}
        value={translationObj.find((data) => data.value === selected)}
        onChange={handleChange}
      />

      <p>
        {selected.value}. {selected.label}
      </p>

      <div>
        <button className="btn" onClick={translate}>
          Translate
        </button>
        <div>
          <textarea></textarea>
        </div>
        <h3>Translation</h3>
        <div className="output"></div>;
      </div>
    </div>
  );
};

export default Main;
