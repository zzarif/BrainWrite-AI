import React, { useState } from "react";
import Select from 'react-select';
import { sectionList, tones } from "./consts/constants";
import { multiSelectStyles } from "./consts/custom_styles";
import "./styles/app.css";

function App() {
  const [companyName, setCompanyName] = useState("");
  const [selectedSections, setSelectedSections] = useState([]);
  const [selectedTone, setSelectedTone] = useState(tones[0]);

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div>
      <div className="header">
        <label className="text-label">BrainWrite.ai</label>
      </div>
      <div className="container">
        <div className="container-1">
          <div className="div-label-select">
            <label className="text-label-large">
              Generate Copy for Website
            </label>
          </div>
          {/* copy for */}
          <div className="div-label-select">
            <label className="text-label">Company/Product Name</label>
            <input
              className="input-box-small"
              placeholder="Ex: BrainWrite"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          {/* company name */}
          <div className="div-label-select">
            <label className="text-label">Sections</label>
            <Select
              name="Sections"
              placeholder="Ex. Heading"
              styles={multiSelectStyles}
              value={sectionList.filter((obj) =>
                selectedSections.includes(obj.label)
              )} // set selected values
              options={sectionList} // set list of the data
              onChange={(e) =>
                setSelectedSections(
                  Array.isArray(e) ? e.map((x) => x.label) : []
                )
              } // assign onChange function
              isMulti
              isClearable
            />
          </div>
          {/* copy type */}
          <div className="div-label-select">
            <label className="text-label">Short Description</label>

            <input
              className="input-box"
              placeholder="What your website is about. Use bullet points or short sentences."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/* description */}
          <div className="div-label-select">
            <label className="text-label">Tone</label>
            <select
              onChange={(e) => {
                setSelectedTone(e.target.value);
              }}
            >
              {tones && tones.map((item) => <option>{item}</option>)}
            </select>
          </div>
          {/* tone */}
          <button className="button-22" onClick={handleSubmit}>
            Write for me
          </button>
        </div>

        <div className="container-2">
          <div className="div-response">
            <b>Company Name: </b> {companyName}
          </div>
          <div className="div-response">
            <b>Sections:</b>{" "}
            {selectedSections && JSON.stringify(selectedSections, null, 2)}
          </div>
          <div className="div-response">
            <b>Tone: </b> {selectedTone}
          </div>
          <div className="div-response">
            <b>Description: </b> {message}
          </div>
          <div className="div-response">
            <b>OpenAI Response:</b> {response}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
