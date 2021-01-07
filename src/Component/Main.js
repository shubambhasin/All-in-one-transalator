import React, { useState } from "react";
import Select from "react-select";

var translationObj = [
  {
    value: "1",
    label: "Pig latin convertor",
    conversion: "pig-latin"
  },
  {
    value: "2",
    label: "Yoda Speak Translator",
    conversion: "yoda"
  },
  {
    value: "3",
    label: "Pirate speak Translator",
    conversion: "pirate"
  },
  {
    value: "4",
    label: "Valley speak translator",
    conversion: "yoda"
  },
  {
    value: "5",
    label: "Minion speak translator",
    conversion: "yoda"
  },
  {
    value: "6",
    label: "Dothraki translator",
    conversion: "yoda"
  },
  {
    value: "7",
    label: "Valyrian translator",
    conversion: "yoda"
  },
  {
    value: "8",
    label: "Old English translator",
    conversion: "yoda"
  },
  {
    value: "9",
    label: "Shakesspeare translator",
    conversion: "yoda"
  },
  {
    value: "10",
    label: "Groot translator",
    conversion: "yoda"
  },
  {
    value: "11",
    label: "Groot translator",
    conversion: "yoda"
  },
  {
    value: "12",
    label: "Morse Code translator",
    conversion: "yoda"
  },
  {
    value: "13",
    label: "Brooklyn translator",
    conversion: "yoda"
  }
];

const Main = () => {
  const [selected, setSelected] = useState(translationObj[0]); //fpr dropdown
  const [userInput, setUserInput] = useState(""); // for handling the input by user
  const [finalurl, setFinalUrl] = useState(""); // for url

  const handleChange = (e) => {
    // see change dropdown
    setSelected(e);
  };
  const userInputHandler = (e) => {
    // see change input box
    setUserInput(e.target.value);
    console.log(userInput);
  };

  const errorHandle = (err) => {
    // error handle during translations
    console.log(err);
  };
  const translate = () => {
    // for creating url for translations
    const createUrl = () => {
      return `https://api.funtranslations.com/translate/${selected.conversion}.json?text=${userInput}`;
    };
    switch (selected.value) {
      case "1":
        setFinalUrl(createUrl());
        break;
      case "2":
        setFinalUrl(createUrl());
        break;
      case "3":
        setFinalUrl(createUrl());
        break;
      case "4":
        setFinalUrl(createUrl());
        break;
      case "5":
        setFinalUrl(createUrl());
        break;
      case "6":
        setFinalUrl(createUrl());
        break;
      case "7":
        setFinalUrl(createUrl());
        break;
      case "8":
        setFinalUrl(createUrl());
        break;
      case "9":
        setFinalUrl(createUrl());
        break;
      case "10":
        setFinalUrl(createUrl());
        break;
      case "11":
        setFinalUrl(createUrl());
        break;
      case "12":
        setFinalUrl(createUrl());
        break;
      case "13":
        setFinalUrl(createUrl());
        break;

      default:
        console.log("Default translation");
        break;
    }

    fetch(finalurl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.contents.translated);
        outputDiv.innerHTML = data.contents.translated;
      })
      .catch(errorHandle);
  };

  var outputDiv = document.querySelector(".output");

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
          <textarea
            className="text-area"
            onChange={userInputHandler}
          ></textarea>
        </div>
        <h3>Translation</h3>
        <div className="output"></div>;
      </div>
    </div>
  );
};

export default Main;
