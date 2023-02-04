import React, { useState } from "react";
import "./styles/app.css";

const copyFors = [
  "Website",
  "Mobile Application",
  "Software",
  "Presentation",
  "Social Media Post",
];
const copyTypes = [
  "Heading",
  "Sub-heading",
  "Product Description",
  "Customer Review",
];
const tones = ["Formal", "Informative", "Persuasive"];

function App() {
  const [selectedCopyFor, setSelectedCopyFor] = useState(copyFors[0]);
  const [companyName, setCompanyName] = useState("");
  const [selectedCopyType, setSelectedCopyType] = useState(copyTypes[0]);
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
            <label className="text-label">Copy For</label>
            <select
              onChange={(e) => {
                setSelectedCopyFor(e.target.value);
              }}
            >
              {copyFors &&
                copyFors.map((item) => (
                  <option>{item}</option>
                ))}
            </select>
          </div>{/* copy for */}
          <div className="div-label-select">
            <label className="text-label">Company/Product Name</label>
            <input
              className="input-box-small"
              placeholder="Ex: BrainWrite"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>{/* company name */}
          <div className="div-label-select">
            <label className="text-label">Copy Type</label>
            <select
              onChange={(e) => {
                setSelectedCopyType(e.target.value);
              }}
            >
              {copyTypes && copyTypes.map((item) => <option>{item}</option>)}
            </select>
          </div>{/* copy type */}
          <div className="div-label-select">
            <label className="text-label">Short Description</label>

            <input
              className="input-box"
              placeholder="What your website is about. Use bullet points or short sentences."
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>{/* description */}
          <div className="div-label-select">
            <label className="text-label">Tone</label>
            <select
              onChange={(e) => {
                setSelectedTone(e.target.value);
              }}
            >
              {tones && tones.map((item) => <option>{item}</option>)}
            </select>
          </div>{/* tone */}
          <button className="button-22" onClick={handleSubmit}>
            Write for me
          </button>
        </div>

        <div className="container-2">
          <div className="div-response">
            <b>Copy For: </b> {selectedCopyFor}
          </div>
          <div className="div-response">
            <b>Company Name: </b> {companyName}
          </div>
          <div className="div-response">
            <b>Copy Type:</b> {selectedCopyType}
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
