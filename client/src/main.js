import React, { useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import ClipLoader from "react-spinners/ClipLoader";
import { multiSelectStyle } from "./consts/custom_styles";
import {
  loadWebsiteTypeList,
  loadSaaSCopyList,
  loadEcomCopyList,
  loadPortfolioCopyList,
} from "./apis/selectDataLoader";
import resolveAPI from "./consts/api_endpoints";
import "./styles/app.css";

function App() {
  const [companyName, setCompanyName] = useState(""); // Company Name
  const [companyDesc, setCompanyDesc] = useState(""); // Company Description
  const [websiteType, setWebsiteType] = useState(-1); // Selected Website Type
  const [copy, setCopy] = useState(-1); // Selected Copy from Copy List
  
  const [loading, setLoading] = useState(false); // Spinner

  const [response, setResponse] = useState(""); // OpenAI response

  const getOpenAIResponse = () => {

    setLoading(true);

    console.log(`{${companyName}, ${companyDesc}, ${websiteType}, ${copy}}`);

    setTimeout(async () => {
      await fetch(resolveAPI(websiteType, copy), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: companyName,
          companyDesc: companyDesc,
          websiteType: websiteType,
          copy: copy,
        }),
      })
        .then((res) => res.json())
        .then((data) => setResponse(data.message));

      setLoading(false);
      
    }, 3000);
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

          {/* company name */}
          <div className="div-label-select">
            <label className="text-label">Company Name</label>
            <input
              className="input-box-small"
              placeholder="Ex: BrainWrite"
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          {/* company description */}
          <div className="div-label-select">
            <label className="text-label">Short Description</label>

            <textarea
              className="input-box"
              placeholder="What your website is about. Use bullet points or short sentences."
              onChange={(e) => setCompanyDesc(e.target.value)}
            />
          </div>

          {/* website type */}
          <div className="div-label-select">
            <label className="text-label">Website Type</label>
            <AsyncSelect
              placeholder="Select Website Type"
              loadOptions={loadWebsiteTypeList}
              onChange={(e) => {
                setWebsiteType(e.value);
                setCopy(-1);
              }}
              styles={multiSelectStyle}
              defaultOptions
            />
          </div>

          {/* copy type */}
          <div className="div-label-select">
            <label className="text-label">Select Copy</label>
            {websiteType === 0 && (
              <AsyncSelect
                placeholder="Select Copy Type"
                loadOptions={loadSaaSCopyList}
                onChange={(e) => setCopy(e.value)}
                styles={multiSelectStyle}
                defaultOptions
              />
            )}
            {websiteType === 1 && (
              <AsyncSelect
                placeholder="Select Copy Type"
                loadOptions={loadEcomCopyList}
                onChange={(e) => setCopy(e.value)}
                styles={multiSelectStyle}
                defaultOptions
              />
            )}
            {websiteType === 2 && (
              <AsyncSelect
                placeholder="Select Copy Type"
                loadOptions={loadPortfolioCopyList}
                onChange={(e) => setCopy(e.value)}
                styles={multiSelectStyle}
                defaultOptions
              />
            )}
            {websiteType === -1 && (
              <Select
                placeholder="Select Copy Type"
                styles={multiSelectStyle}
              />
            )}
          </div>

          {/* Generate button */}
          <button className="button-22" onClick={getOpenAIResponse}>
            Generate
          </button>
        </div>

        <div className="container-2">
          <div className="div-response">
            {loading ? (
              <ClipLoader 
              color={"maroon"} 
              loading={loading} 
              size={150}
              />
            ) : (
              response
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
