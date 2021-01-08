import React, { useState, useEffect } from "react";
import Select from "react-select";

var translationObj = [
  {
    value: "1",
    label: "Pig latin Translation",
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
    conversion: "valspeak"
  },
  {
    value: "5",
    label: "Minion speak translator",
    conversion: "minion"
  },
  {
    value: "6",
    label: "Dothraki translator",
    conversion: "dothraki"
  },
  {
    value: "7",
    label: "Valyrian translator",
    conversion: "valyrian"
  },
  {
    value: "8",
    label: "Old English translator",
    conversion: "oldenglish"
  },
  {
    value: "9",
    label: "Shakesspeare translator",
    conversion: "shakespeare"
  },
  {
    value: "10",
    label: "Groot translator",
    conversion: "groot"
  },
  {
    value: "11",
    label: "Boston Translator",
    conversion: "boston"
  },
  {
    value: "12",
    label: "Morse Code translator",
    conversion: "morse"
  },
  {
    value: "13",
    label: "Brooklyn translator",
    conversion: "brooklyn"
  },
  {
    value: "14",
    label: "Emoji translator",
    conversion: "emoji"
  },
  {
    value: "15",
    label: "British Accent Translator",
    conversion: "british"
  },
  {
    value: "16",
    label: "Jive translator",
    conversion: "jive"
  },
  {
    value: "17",
    label: "Starwar Gungan Translator",
    conversion: "gungan"
  },
  {
    value: "18",
    label: "Chef translator",
    conversion: "chef"
  },
  {
    value: "19",
    label: "Vulcan Translation",
    conversion: "vulcan"
  },
  {
    value: "20",
    label: "Thuum translator",
    conversion: "thuum"
  }
];

const Main = () => {
  const [selected, setSelected] = useState(translationObj[0]); //fpr dropdown
  const [userInput, setUserInput] = useState(""); // for handling the input by user
  const [finalurl, setFinalUrl] = useState(""); // for url

  useEffect(() => {
    console.clear();
  }, []);
  const handleChange = (e) => {
    // see change dropdown
    setSelected(e);
  };
  const userInputHandler = (e) => {
    // see change input box
    setUserInput(e.target.value);
    // console.log(userInput);
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
        alert("Choose a transalation first");

        break;
    }

    fetch(finalurl)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.contents.translated);
        outputDiv.innerHTML = data.contents.translated;
      })
      .catch(errorHandle);
  };

  var outputDiv = document.querySelector(".output");
  var text_area = document.querySelector(".text-area");
  // var warning = document.querySelector(".warning");
  const clear = () => {
    outputDiv.innerHTML = "";
    text_area.value = " ";
  };
  return (
    <div className="">
      <h2>All in One Fun-Translator</h2>
      <small>
        *Uses API from{" "}
        <a href="https://funtranslations.com" className="link">
          funtranslations.com
        </a>
        *
      </small>
      <br />
      <small>
        <strong>!Note:</strong> 5 translations per hour only, otherwise use{" "}
        <strong>VPN</strong> after 5 try
      </small>

      <Select
        placeholder="Select Translations"
        className="select-option"
        options={translationObj}
        value={translationObj.find((data) => data.value === selected)}
        onChange={handleChange}
      />

      <p>
        <strong>Now Selected:</strong> {selected.label}
      </p>

      <div>
        <button className="btn" onClick={translate}>
          Translate
        </button>
        <button className="btn btn-clear" onClick={clear}>
          Clear
        </button>

        <div>
          <textarea
            placeholder="Enter text here"
            className="text-area"
            onChange={userInputHandler}
          ></textarea>
        </div>
        <p>
          Translation{" "}
          <span role="img" aria-labelledby="finger-down">
            👇
          </span>
        </p>
        <div className="output">
          <small>Output here</small>
        </div>
      </div>
    </div>
  );
};

export default Main;
