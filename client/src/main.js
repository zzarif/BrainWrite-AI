import React, { useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { multiSelectStyle } from "./consts/custom_styles";
import {
  loadWebsiteTypeList,
  loadSaaSCopyList,
  loadEcomCopyList,
  loadPortfolioCopyList,
} from "./apis/selectDataLoader";
import { fetchPromptResponse } from "./apis/fetchPromptResponse";
import "./styles/app.css";

function App() {
  const [companyName, setCompanyName] = useState(""); // Company Name
  const [companyDesc, setCompanyDesc] = useState(""); // Company Description
  const [selectedWebsiteType, setSelectedWebsiteType] = useState(""); // Selected Website Type
  const [selectedCopy, setSelectedCopy] = useState(""); // Selected Copy from Copy List

  const [response, setResponse] = useState(""); // OpenAI response

  const getResponse = async (e) => {
    e.preventDefault();
    await fetch("/api/prompt/saasHeroTitle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName: companyName,
        companyDesc: companyDesc,
        websiteType: selectedWebsiteType,
        copyType: selectedCopy,
      }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  const CopySelect = () => {
    // SAAS
    if (selectedWebsiteType === "SaaS") {
      return (
        <AsyncSelect
          placeholder="Select Copy Type"
          loadOptions={loadSaaSCopyList}
          onChange={(e) => setSelectedCopy(e.label)}
          styles={multiSelectStyle}
          defaultOptions
        />
      );
    }
    // E-COMMERCE
    else if (selectedWebsiteType === "E-commerce") {
      return (
        <AsyncSelect
          placeholder="Select Copy Type"
          loadOptions={loadEcomCopyList}
          onChange={(e) => setSelectedCopy(e.label)}
          styles={multiSelectStyle}
          defaultOptions
        />
      );
    }
    // PORTFOLIO
    else if (selectedWebsiteType === "Portfolio") {
      return (
        <AsyncSelect
          placeholder="Select Copy Type"
          loadOptions={loadPortfolioCopyList}
          onChange={(e) => setSelectedCopy(e.label)}
          styles={multiSelectStyle}
          defaultOptions
        />
      );
    }
    // if nothing selected
    else {
      return (
        <Select placeholder="Select Copy Type" styles={multiSelectStyle} />
      );
    }
  };

  return (
    <div>
      <div className="header">BrainWrite.ai</div>
      <div className="container">
        <div className="container-1">
          <div className="div-label-select">
            <label className="text-label-large">
              Generate Copy for your Website
            </label>
          </div>

          <div className="div-label-select">
            <label className="text-label">Company Name</label>
            <input
              className="input-box-small"
              placeholder="Ex: BrainWrite"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          {/* company name */}

          <div className="div-label-select">
            <label className="text-label">Short Description</label>

            <textarea
              className="input-box"
              placeholder="What your website is about. Use bullet points or short sentences."
              onChange={(e) => setCompanyDesc(e.target.value)}
            />
          </div>
          {/* company description */}

          <div className="div-label-select">
            <label className="text-label">Website Type</label>
            <AsyncSelect
              placeholder="Select Website Type"
              loadOptions={loadWebsiteTypeList}
              onChange={(e) => setSelectedWebsiteType(e.label)}
              styles={multiSelectStyle}
              defaultOptions
            />
          </div>
          {/* website type */}

          <div className="div-label-select">
            <label className="text-label">Select Copy</label>
            <CopySelect />
          </div>
          {/* copy type */}
          <button
            className="button-22" onClick={getResponse}>
            Generate
          </button>
        </div>

        <div className="container-2">
          <div className="div-response">
            <b>Company Name: </b> {companyName}
          </div>
          <div className="div-response">
            <b>Description: </b> {companyDesc}
          </div>
          <div className="div-response">
            <b>Website Type: </b> {selectedWebsiteType}
          </div>
          <div className="div-response">
            <b>Website Type: </b> {selectedCopy}
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
